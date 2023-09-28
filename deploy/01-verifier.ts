import { network } from "hardhat";
import { DeployFunction } from "hardhat-deploy/dist/types";
import { devChains } from "../helper-hardhat-config";

const deploy: DeployFunction = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  // const isDev = devChains.includes(network.name)

  let waitConfirmations = 1;

  const verifier = await deploy("Verifier", {
    from: deployer,
    args: [],
    waitConfirmations,
    log: true,
  });
  verifier.address;
  console.log(verifier.address, "verifier address");
};

deploy.tags = ["all"];
export default deploy;
