// Utils massively borrowed from https://github.com/vplasencia/zkSudoku/blob/5cec0250a23778c873012db06dfa360fef3045d1/contracts/test/utils/utils.js#L3

// const snarkjs = require('snarkjs')
import fs from 'fs'
import { initialize } from 'zokrates-js'
// import abi from '../circuit/abi.json'

// console.log(new Uint8Array(out))
// console.log(abi)
// const wc = require('../circuits/build/multiplier_js/witness_calculator')
// const wasmPath = 'circuits/build/multiplier_js/multiplier.wasm'
// const witnessPath = 'circuits/build/multiplier_js/witness2.wtns'
// const zkeyPath = 'circuits/keys/multiplier_0001.key'

// const generateWitness = async (inputs:any) => {
//   const buffer = fs.readFileSync(wasmPath);
//   const witnessCalculator = await wc(buffer)
//   const buff = await witnessCalculator.calculateWTNSBin(inputs, 0);
//   fs.writeFileSync(witnessPath, buff)
// }

const genProof = async (input:any) => {
  const zokratesJs = await import('zokrates-js');
  // const { initialize, metadata } = zokratesJs.default;
  console.log(zokratesJs)
  // await generateWitness(input)
  // const { proof, publicSignals } = await snarkjs.groth16.prove(zkeyPath, witnessPath);
  // const solidityCallData = await snarkjs.groth16.exportSolidityCallData(proof, publicSignals);
  // const argv = solidityCallData
  //   .replace(/["[\]\s]/g, "")
  //   .split(",")

  // const a = [argv[0], argv[1]];
  // const b = [
  //   [argv[2], argv[3]],
  //   [argv[4], argv[5]],
  // ];
  // const c = [argv[6], argv[7]];
  // const Input = [];

  // for (let i = 8; i < argv.length; i++) {
  //   Input.push(argv[i]);
  // }

  // return { a, b, c, Input,proof };
}

export default genProof