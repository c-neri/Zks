import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy"
import "@nomiclabs/hardhat-ethers";

const config: HardhatUserConfig = {
  solidity: {
    compilers:[{
      version:"0.8.17",
    },
    {
      version:"0.6.11",
    }
  ]
  },
  namedAccounts: {
    deployer: {
        default: 0,
    },
    foreign: {
        default: 1,
    },
    foreign2: {
        default: 2,
    },
},
};

export default config;
