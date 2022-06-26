// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Mycontract {
    uint public numfunders;
    mapping(uint=>address) private funders;
    function transfer() external payable{
        funders[numfunders]=msg.sender;
    }
    receive() external payable{}
    function withdraw(uint withdrawAmount) external{
        require(withdrawAmount <= 2000000000000000000,"Canot withdraw more than 2 ether");
        payable(msg.sender).transfer(withdrawAmount);
    }
}