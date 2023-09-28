/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Verifier, VerifierInterface } from "../Verifier";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "uint256",
                name: "X",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "Y",
                type: "uint256",
              },
            ],
            internalType: "struct Pairing.G1Point",
            name: "a",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256[2]",
                name: "X",
                type: "uint256[2]",
              },
              {
                internalType: "uint256[2]",
                name: "Y",
                type: "uint256[2]",
              },
            ],
            internalType: "struct Pairing.G2Point",
            name: "b",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "X",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "Y",
                type: "uint256",
              },
            ],
            internalType: "struct Pairing.G1Point",
            name: "c",
            type: "tuple",
          },
        ],
        internalType: "struct Verifier.Proof",
        name: "proof",
        type: "tuple",
      },
      {
        internalType: "uint256[1]",
        name: "input",
        type: "uint256[1]",
      },
    ],
    name: "verifyTx",
    outputs: [
      {
        internalType: "bool",
        name: "r",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506114ae806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063f48d772914610030575b600080fd5b61004a60048036038101906100459190611250565b610060565b60405161005791906112ad565b60405180910390f35b600080600167ffffffffffffffff81111561007e5761007d610f2e565b5b6040519080825280602002602001820160405280156100ac5781602001602082028036833780820191505090505b50905060005b6001811015610105578381600181106100ce576100cd6112c8565b5b60200201518282815181106100e6576100e56112c8565b5b60200260200101818152505080806100fd90611326565b9150506100b2565b506000610112828661012d565b03610121576001915050610127565b60009150505b92915050565b6000807f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000019050600061015d6102c4565b905080608001515160018651610173919061136e565b1461017d57600080fd5b60006040518060400160405280600081526020016000815250905060005b865181101561023657838782815181106101b8576101b76112c8565b5b6020026020010151106101ca57600080fd5b6102218261021c85608001516001856101e3919061136e565b815181106101f4576101f36112c8565b5b60200260200101518a858151811061020f5761020e6112c8565b5b60200260200101516106c8565b61076a565b9150808061022e90611326565b91505061019b565b50610260818360800151600081518110610253576102526112c8565b5b602002602001015161076a565b90506102a68560000151866020015161027884610832565b856040015161028a8a60400151610832565b876060015161029c8960000151610832565b89602001516108d7565b6102b657600193505050506102be565b600093505050505b92915050565b6102cc610dfa565b60405180604001604052807f25cfa911adb9f7ab0f2d9196d29ed2b9925081f9a5e50dd4328b3bc981c9fe4181526020017f2661f50e83f2241f954930a7f5f3affbd4a047d94d38049c16c2dcc4e1b21c788152508160000181905250604051806040016040528060405180604001604052807f2a307f6d534e8347ff6b1543ec5645edab93a0bc84a88f88a0cfc7de2eb517b581526020017f2f3b92359569f6ba33f44cb31806c99afadb00312ebd16cc6027365a8bd30c29815250815260200160405180604001604052807f030dc44e0d38c8be6e816acbd14e187ce09486f6f734119eafeb07c76e324eb281526020017f074af23ef43773e733194de849dec62c49a6de50ed0a9e22bf21e6a68cec94098152508152508160200181905250604051806040016040528060405180604001604052807f02ac423c86b477faf34b76eca1e63fdc9a3663bcc83636dbaa9ed9d14440def381526020017f05a96e561c5d16facacf7e82ede03a6b312589aa8557519f12da6540c34957cb815250815260200160405180604001604052807f14b03258a610c7f2a8758bde1ac379c88b762c0d31bf168fac5a86004c1196f081526020017f0a16a9f162a84ecc6d857c4a68e27ce52bbd5b89060663bfbd913ca3ad8cd0a68152508152508160400181905250604051806040016040528060405180604001604052807f2f841158b8e293aa1b5c02fe6a68d022edb8b9c5a75ad35ff074cbb426412f3781526020017f2b79a831013905a1b9b513d842265600bf5eb3d6f5d54a869c8f01ba6df46a64815250815260200160405180604001604052807f1888d843b4c02146626ae444b15a91d42d53e5c98b2d9a2b65c686578306776f81526020017f170ca211acbb368f2146e5f3a86816a7c89e10095377a7510372128c2970a9268152508152508160600181905250600267ffffffffffffffff81111561059357610592610f2e565b5b6040519080825280602002602001820160405280156105cc57816020015b6105b9610e41565b8152602001906001900390816105b15790505b50816080018190525060405180604001604052807f07b9f1d569dabac1565c54f3d25fe63bfb0ed9f3e0c0b1a2ccdfdd0e01b252b881526020017f071c350bd664ac1eb0ca74d46029f229e4c80177f1d6135de1636baff0656c0b8152508160800151600081518110610642576106416112c8565b5b602002602001018190525060405180604001604052807f125a3eaa918b497cb76ba6ea5009c5cd71c077b6eb38893e2d3525604e3cf9a481526020017f19948ee768d5906b5459e3c10fcd7cd3e98e4e2f3c22cff0516288924aea5b0281525081608001516001815181106106ba576106b96112c8565b5b602002602001018190525090565b6106d0610e41565b6106d8610e5b565b8360000151816000600381106106f1576106f06112c8565b5b602002018181525050836020015181600160038110610713576107126112c8565b5b6020020181815250508281600260038110610731576107306112c8565b5b602002018181525050600060608360808460076107d05a03fa9050806000810361075757fe5b508061076257600080fd5b505092915050565b610772610e41565b61077a610e7d565b836000015181600060048110610793576107926112c8565b5b6020020181815250508360200151816001600481106107b5576107b46112c8565b5b6020020181815250508260000151816002600481106107d7576107d66112c8565b5b6020020181815250508260200151816003600481106107f9576107f86112c8565b5b602002018181525050600060608360c08460066107d05a03fa9050806000810361081f57fe5b508061082a57600080fd5b505092915050565b61083a610e41565b60007f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47905060008360000151148015610877575060008360200151145b1561089b5760405180604001604052806000815260200160008152509150506108d2565b6040518060400160405280846000015181526020018285602001516108c091906113d1565b836108cb9190611402565b8152509150505b919050565b600080600467ffffffffffffffff8111156108f5576108f4610f2e565b5b60405190808252806020026020018201604052801561092e57816020015b61091b610e41565b8152602001906001900390816109135790505b5090506000600467ffffffffffffffff81111561094e5761094d610f2e565b5b60405190808252806020026020018201604052801561098757816020015b610974610e9f565b81526020019060019003908161096c5790505b5090508a8260008151811061099f5761099e6112c8565b5b602002602001018190525088826001815181106109bf576109be6112c8565b5b602002602001018190525086826002815181106109df576109de6112c8565b5b602002602001018190525084826003815181106109ff576109fe6112c8565b5b60200260200101819052508981600081518110610a1f57610a1e6112c8565b5b60200260200101819052508781600181518110610a3f57610a3e6112c8565b5b60200260200101819052508581600281518110610a5f57610a5e6112c8565b5b60200260200101819052508381600381518110610a7f57610a7e6112c8565b5b6020026020010181905250610a948282610aa4565b9250505098975050505050505050565b60008151835114610ab457600080fd5b6000835190506000600682610ac99190611436565b905060008167ffffffffffffffff811115610ae757610ae6610f2e565b5b604051908082528060200260200182016040528015610b155781602001602082028036833780820191505090505b50905060005b83811015610d9a57868181518110610b3657610b356112c8565b5b602002602001015160000151826000600684610b529190611436565b610b5c919061136e565b81518110610b6d57610b6c6112c8565b5b602002602001018181525050868181518110610b8c57610b8b6112c8565b5b602002602001015160200151826001600684610ba89190611436565b610bb2919061136e565b81518110610bc357610bc26112c8565b5b602002602001018181525050858181518110610be257610be16112c8565b5b602002602001015160000151600160028110610c0157610c006112c8565b5b6020020151826002600684610c169190611436565b610c20919061136e565b81518110610c3157610c306112c8565b5b602002602001018181525050858181518110610c5057610c4f6112c8565b5b602002602001015160000151600060028110610c6f57610c6e6112c8565b5b6020020151826003600684610c849190611436565b610c8e919061136e565b81518110610c9f57610c9e6112c8565b5b602002602001018181525050858181518110610cbe57610cbd6112c8565b5b602002602001015160200151600160028110610cdd57610cdc6112c8565b5b6020020151826004600684610cf29190611436565b610cfc919061136e565b81518110610d0d57610d0c6112c8565b5b602002602001018181525050858181518110610d2c57610d2b6112c8565b5b602002602001015160200151600060028110610d4b57610d4a6112c8565b5b6020020151826005600684610d609190611436565b610d6a919061136e565b81518110610d7b57610d7a6112c8565b5b6020026020010181815250508080610d9290611326565b915050610b1b565b50610da3610ec5565b6000602082602086026020860160086107d05a03fa90508060008103610dc557fe5b5080610dd057600080fd5b600082600060018110610de657610de56112c8565b5b602002015114159550505050505092915050565b6040518060a00160405280610e0d610e41565b8152602001610e1a610e9f565b8152602001610e27610e9f565b8152602001610e34610e9f565b8152602001606081525090565b604051806040016040528060008152602001600081525090565b6040518060600160405280600390602082028036833780820191505090505090565b6040518060800160405280600490602082028036833780820191505090505090565b6040518060400160405280610eb2610ee7565b8152602001610ebf610ee7565b81525090565b6040518060200160405280600190602082028036833780820191505090505090565b6040518060400160405280600290602082028036833780820191505090505090565b6000604051905090565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610f6682610f1d565b810181811067ffffffffffffffff82111715610f8557610f84610f2e565b5b80604052505050565b6000610f98610f09565b9050610fa48282610f5d565b919050565b6000819050919050565b610fbc81610fa9565b8114610fc757600080fd5b50565b600081359050610fd981610fb3565b92915050565b600060408284031215610ff557610ff4610f18565b5b610fff6040610f8e565b9050600061100f84828501610fca565b600083015250602061102384828501610fca565b60208301525092915050565b600080fd5b600067ffffffffffffffff82111561104f5761104e610f2e565b5b602082029050919050565b600080fd5b600061107261106d84611034565b610f8e565b9050806020840283018581111561108c5761108b61105a565b5b835b818110156110b557806110a18882610fca565b84526020840193505060208101905061108e565b5050509392505050565b600082601f8301126110d4576110d361102f565b5b60026110e184828561105f565b91505092915050565b600060808284031215611100576110ff610f18565b5b61110a6040610f8e565b9050600061111a848285016110bf565b600083015250604061112e848285016110bf565b60208301525092915050565b6000610100828403121561115157611150610f18565b5b61115b6060610f8e565b9050600061116b84828501610fdf565b600083015250604061117f848285016110ea565b60208301525060c061119384828501610fdf565b60408301525092915050565b600067ffffffffffffffff8211156111ba576111b9610f2e565b5b602082029050919050565b60006111d86111d38461119f565b610f8e565b905080602084028301858111156111f2576111f161105a565b5b835b8181101561121b57806112078882610fca565b8452602084019350506020810190506111f4565b5050509392505050565b600082601f83011261123a5761123961102f565b5b60016112478482856111c5565b91505092915050565b600080610120838503121561126857611267610f13565b5b60006112768582860161113a565b92505061010061128885828601611225565b9150509250929050565b60008115159050919050565b6112a781611292565b82525050565b60006020820190506112c2600083018461129e565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061133182610fa9565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611363576113626112f7565b5b600182019050919050565b600061137982610fa9565b915061138483610fa9565b925082820190508082111561139c5761139b6112f7565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006113dc82610fa9565b91506113e783610fa9565b9250826113f7576113f66113a2565b5b828206905092915050565b600061140d82610fa9565b915061141883610fa9565b92508282039050818111156114305761142f6112f7565b5b92915050565b600061144182610fa9565b915061144c83610fa9565b925082820261145a81610fa9565b91508282048414831517611471576114706112f7565b5b509291505056fea26469706673582212200f4d6d90040689e5113ebbb78943c76a979a5e59a1c5b4cfc24886e2d04d828164736f6c63430008110033";

type VerifierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VerifierConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Verifier__factory extends ContractFactory {
  constructor(...args: VerifierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Verifier> {
    return super.deploy(overrides || {}) as Promise<Verifier>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Verifier {
    return super.attach(address) as Verifier;
  }
  override connect(signer: Signer): Verifier__factory {
    return super.connect(signer) as Verifier__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VerifierInterface {
    return new utils.Interface(_abi) as VerifierInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Verifier {
    return new Contract(address, _abi, signerOrProvider) as Verifier;
  }
}
