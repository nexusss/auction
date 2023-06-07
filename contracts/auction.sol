// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;


contract Auction {

    address owner;
    uint256 counter;

    constructor(){
        owner=msg.sender;
    }

    modifier isOwner(){
        require(owner==msg.sender);
        _;
    }

    function getOwner() public view returns(address){
        return owner;
    }

    function addCounter() public isOwner{
        counter++;
    }

    function getCounter() public view returns(uint256){
        return counter;
    }
}
