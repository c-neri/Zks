import { deployments, ethers } from "hardhat"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import genProof from "../utils/genProof";
import { Verify,Verifier } from "../typechain-types";
import { assert, expect } from "chai";

describe("VERIFY ZK", function () {
  let deployer: SignerWithAddress
  let contract: Verifier
  const input = {"in":"0"}
  let proof = {
    "scheme": "g16",
    "curve": "bn128",
    "proof": {
      "a": [
        "0x2d76f63a6b6a6de856ab69c689509ee8ba26899022bbfac343f781bb9b33305d",
        "0x24781a1ce31aabd7d99319712558f4276fb70c5b9ee665b21a01d2a9def6baed"
      ],
      "b": [
        [
          "0x2d4bfe67bf2d4c8c4697a1696436c53f7032e6a0c3225759e180575693d92f9c",
          "0x2946befde6f8e308bb6642ab663a0a55437f0f1017d1a9c79a53de30ca94809e"
        ],
        [
          "0x1357351b6ea5e9f19aab8cbf1b663b09556f7a16c23d7633fb3cd1ab700c745d",
          "0x01afce8a35298cbc0be2fbf28a0cd5e327202b9c27bc0b4e77ff8ddb72947384"
        ]
      ],
      "c": [
        "0x03c56018663804e927e901e6fa157deee44b001c4345ad54f9b4d5ce2c1bd2b2",
        "0x239456405d6a3c980e267213e1b83d43498daf0c31afd2f2886aa4ffe7c751dc"
      ]
    },
    "inputs": [
      "0x0000000000000000000000000000000000000000000000000000000000000006"
    ]
  } as any
  const invalidProof = {
    "scheme": "g16",
    "curve": "bn128",
    "proof": {
      "a": [
        "0x2d76f63a6b6a6de856ab69c689509ee8ba26899022bbfac343f781bb9b33305d",
        "0x24781a1ce31aabd7d99319712558f4276fb70c5b9ee665b21a01d2a9def6baed"
      ],
      "b": [
        [
          "0x2d4bfe67bf2d4c8c4697a1696436c53f7032e6a0c3225759e180575693d92f9c",
          "0x2946befde6f8e308bb6642ab663a0a55437f0f1017d1a9c79a53de30ca94809e"
        ],
        [
          "0x1357351b6ea5e9f19aab8cbf1b663b09556f7a16c23d7633fb3cd1ab700c745d",
          "0x01afce8a35298cbc0be2fbf28a0cd5e327202b9c27bc0b4e77ff8ddb72947384"
        ]
      ],
      "c": [
        "0x03c56018663804e927e901e6fa157deee44b001c4345ad54f9b4d5ce2c1bd2b2",
        "0x239456405d6a3c980e267213e1b83d43498daf0c31afd2f2886aa4ffe7c751dc"
      ]
    },
    "inputs": [
      "0x0000000000000000000000000000000000000000000000000000000000000003"
    ]
  } as any
  beforeEach(async () => {
    await deployments.fixture(["all"])
    const accounts = await ethers.getSigners()
    deployer =  accounts[0]
    contract = await ethers.getContract('Verifier',deployer.address)
  })

  it('Should return true if ZK PROOF is valid', async () => {
    // const { a, b, c, PubSignals, proof } = await genProof(input) as any
    // const result = await contract.verifyTx(a, b, c, PubSignals)
    // const check = await snarkjs.groth16.verify(vkey, PubSignals, proof);
    // assert.equal(result,true)
    const result = await contract.verifyTx(proof.proof, proof.inputs)
    assert.equal(result,true)

  })
  
  it('Should return false if ZK PROOF is invalid', async () => {
    // const input = {"in":"1"}
    let test = await genProof(
      input
    );
    console.log(test)
    // const test= await genProof(input) as any
    // // console.log(a,b,c,PubSignals)
    const result = await contract.verifyTx(invalidProof.proof, invalidProof.inputs)
    // // const check = await snarkjs.groth16.verify(vkey, PubSignals, proof);
    assert.equal(result,false)
  })
});
