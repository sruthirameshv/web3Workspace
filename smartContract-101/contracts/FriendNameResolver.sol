// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract FriendNameResolver {
    uint internal listOfRecords = 0;

    struct Person {
        string friendName;
        address payable walletAddress;
    }
    mapping(string => Person) public Person_by_SenderName;

    // function function-name(parameter-list) scope returns()
    function addNameForWallet(string memory _friendlyname) public {
        Person_by_SenderName [_friendlyname] = Person( _friendlyname, payable(msg.sender));
    }

    function showNameForWallet(string memory _friendlyname) public view returns (address payable) {
        return Person_by_SenderName[_friendlyname].walletAddress;
    }
    
    function showName() public pure returns(uint) {
        return 11992;
    }
}