/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('dotenv').config();
require('@nomiclabs/hardhat-waffle');
require("hardhat-deploy");

module.exports = {
 defaultNetwork: "hardhat",
 solidity: {
   compilers: [
     {
       version: "0.8.17",
       settings: {
         optimizer: {
           enabled: true,
           runs: 200
         }
       }
     },
    
   ],
 },
 networks: {
   hardhat: {
     forking: {
       url: process.env.RPC_NODE_URL,
       blockNumber: 16015939,
     }
   },
   mainnet: {
     accounts: [`0x${process.env.MAINNET_PRIVATE_KEY}`],
     url: process.env.RPC_NODE_URL,
     chainId: 1,
     timeout: 2000000
   }
 },
 namedAccounts: {
   deployer: 0,
 },
 mocha: {
   timeout: 2000000
 }

};
