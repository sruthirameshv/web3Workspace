var FriendNameResolver = artifacts.require("FriendNameResolver");

module.exports = function (deployer) {
  deployer.deploy(FriendNameResolver);
};
