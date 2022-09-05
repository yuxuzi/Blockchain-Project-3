var HDWalletProvider = require("truffle-hdwallet-provider");

// Be sure to match this mnemonic with that in Ganache!
var mnemonic = "stumble member embark seven glue shove hammer pelican gossip program gentle image";

module.exports = {
  compilers: {
    solc: {
      version: "^0.4.24"//^ represents the version above 0.5.16, the ^ here cannot be removed, and the specified version will still report an error! ! ! In Gitter, I saw that someone solved the problem of the specified version. I talked a little bit. I didn’t look at it carefully. Generally, just use ^
     }
  },



  networks: {
    development: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "http://127.0.0.1:8545/", 0, 10);
      },
      network_id: '*',
 
    }
  }


};