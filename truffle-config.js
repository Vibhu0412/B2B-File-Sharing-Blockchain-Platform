require('babel-register');
require('babel-polyfill');
MNENOMIC = "broken scrub outside palace page document saddle parrot lonely icon close glance"
const address = '0xF86933a8CDbEFb3e3298928cE92E5CA42cab822E';
const privateKey = '5211bcbd48b32392848da650d41765f372682f715360566ea816efa6f962caf6';

const HDWalletProvider = require('@truffle/hdwallet-provider');
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: () => new HDWalletProvider(privateKey,
        "https://ropsten.infura.io/v3/4d96bbec49de452a8962728d2ea31aff"),
      host: "127.0.0.1",
      network_id: 3,
      gas: 4612388,
      gasPrice: 10000000000
    }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
