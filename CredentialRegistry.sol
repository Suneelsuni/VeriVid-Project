// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CredentialRegistry {
    struct Creator {
        string name;
        string credentials;
        bool exists;
    }

    mapping(address => Creator) private creators;

    event CreatorAdded(address indexed creatorAddress, string name, string credentials);

    // Function to add creator's credentials
    function addCreator(string memory _name, string memory _credentials) public {
        require(!creators[msg.sender].exists, "Creator already exists.");
        creators[msg.sender] = Creator(_name, _credentials, true);
        emit CreatorAdded(msg.sender, _name, _credentials);
    }

    // Function to retrieve creator's credentials
    function getCreator(address _creatorAddress) public view returns (string memory, string memory) {
        require(creators[_creatorAddress].exists, "Creator does not exist.");
        return (creators[_creatorAddress].name, creators[_creatorAddress].credentials);
    }
}
