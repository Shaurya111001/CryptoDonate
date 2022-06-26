import json
from flask import Flask, request, jsonify
import sqlite3 as sql
from datetime import datetime, timedelta, timezone

class Database:
    def __init__(self):
        try:
            self.conn = sql.connect('database.db')
            self.cur = self.conn.cursor()
            self.cur.execute(
                "CREATE TABLE IF NOT EXISTS DETAILS (EMAIL VARCHAR PRIMARY KEY,NAME VARCHAR,PASSWORD VARCHAR)"
            )
            self.conn.commit()
        except:
            print("Error connecting database")
    
    def create_user(self,register_data):
        data1 = register_data['Name']
        data2 = register_data['Email']
        data3 = register_data['Pass']
        self.cur.execute('INSERT OR IGNORE INTO DETAILS (EMAIL,NAME,PASSWORD) VALUES (?,?,?)',(data2,data1,data3))
        self.conn.commit()


    def check_user(self,login_data):
        self.cur.execute('SELECT EMAIL,PASSWORD FROM DETAILS')
        data  = self.cur.fetchall()
        l = []
        for i in range(len(data)):
            l.append(data[i][0])
            l.append(i)
        if login_data[0] in l:
            ind = l.index(login_data[0])
            if login_data[1] == data[(ind+1)//2][1]:
                return "true"
            else:
                return "false"
        else:
            return "false"

    def add_or_modifyCompanies(self, user, form_data):
        self.cur.execute('SELECT COMPANIES FROM DETAILS WHERE EMAIL=?',[user])
        data  = self.cur.fetchall()
        form_data = data[0][0] + form_data
        self.cur.execute('UPDATE DETAILS SET COMPANIES = "{}" WHERE EMAIL=?'.format(form_data),[user])
        self.conn.commit()
        return True

    def viewCompanies(self, user):
        self.cur.execute('SELECT COMPANIES FROM DETAILS WHERE EMAIL=?',[user])
        data = self.cur.fetchall()
        print("hell")
        return data

    def modifyCompanies(self, user,form_data,id):
        self.cur.execute('SELECT COMPANIES FROM DETAILS WHERE EMAIL=?',[user])
        data = self.cur.fetchall()
        l = data[0][0].split(';')
        if id < len(l):
            new_str = ""
            l.pop(id)
            l.insert(id,form_data)
            for i in l:
                new_str = new_str + i
            self.cur.execute('UPDATE DETAILS SET COMPANIES = "{}" WHERE EMAIL=?'.format(new_str),[user])
            self.conn.commit()
            return True
        else:
            return False 

    def deleteCompanies(self, user,id):
        self.cur.execute('SELECT COMPANIES FROM DETAILS WHERE EMAIL=?',[user])
        data = self.cur.fetchall()
        l = data[0][0].split(';')
        if id < len(l):
            new_str = ""
            l.pop(id)
            for i in l:
                new_str = new_str + i
            self.cur.execute('UPDATE DETAILS SET COMPANIES = "{}" WHERE EMAIL=?'.format(new_str),[user])
            self.conn.commit()
            return True
        else:
            return False 


    def close(self):
        self.conn.close()


api = Flask(__name__)

# api.config["JWT_SECRET_KEY"] = "please-remember-to-change-me"
# api.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)
# jwt = JWTManager(api)

# @api.after_request
# def refresh_expiring_jwts(response):
#     try:
#         exp_timestamp = get_jwt()["exp"]
#         now = datetime.now(timezone.utc)
#         target_timestamp = datetime.timestamp(now + timedelta(minutes=30))
#         if target_timestamp > exp_timestamp:
#             access_token = create_access_token(identity=get_jwt_identity())
#             data = response.get_json()
#             if type(data) is dict:
#                 data["access_token"] = access_token 
#                 response.data = json.dumps(data)
#         return response
#     except (RuntimeError, KeyError):
#         # Case where there is not a valid JWT. Just return the original respone
#         return response

# @api.route('/token', methods=["POST"])
# def create_token():
#     email = request.json.get("email", None)
#     password = request.json.get("password", None)
#     if email != "test" or password != "test":
#         return {"msg": "Wrong email or password"}, 401

#     access_token = create_access_token(identity=email)
#     response = {"access_token":access_token}
#     return response

# @api.route("/logout", methods=["POST"])
# def logout():
#     response = jsonify({"msg": "logout successful"})
#     unset_jwt_cookies(response)
#     return response

# @api.route('/profile')
# @jwt_required()
# def my_profile():
#     response_body = {
#         "name": "Nagato",
#         "about" :"Hello! I'm a full stack developer that loves python and javascript"
#     }

#     return response_body


@api.route('/register', methods=['POST'])
def Register():
    Name = request.json['Name']
    Email = request.json['Email']
    Pass = request.json['Pass']
    response = {"Name":Name, "Email":Email, "Pass":Pass}
    obj = Database()
    obj.create_user(response)
    return jsonify(response),200
    # return response?


@api.route('/login', methods=['POST'])
def Login():
    Email = request.json['Email']
    Pass = request.json['Pass']
    response = [Email,Pass]
    obj = Database()
    a = obj.check_user(response)
    return a
    # return response?

