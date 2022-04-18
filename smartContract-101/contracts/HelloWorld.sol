// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract HelloWorld {
  string name = 'CeloBlockChain';

  // function function-name(parameter-list) scope returns()
  function getName() public view returns (string memory)
  {
    return name;
  }

  function setName(string calldata newName) external {
    name = newName;
  }

}
