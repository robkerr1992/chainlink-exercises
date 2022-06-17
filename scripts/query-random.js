const hre = require('hardhat');
require('dotenv').config();

const ABI = require('../artifacts/contracts/RandomNumbers.sol/RandomNumbers.json');
const provider = new hre.ethers.Wallet(process.env.PRIVATE_KEY, new hre.ethers.providers.JsonRpcProvider(process.env.RINKEBY_URL));

const addr = "0x3eFC0789ba30B2553353ef7Bdf8F39698d3d8D61"
const randomHouse = new hre.ethers.Contract(addr, ABI.abi, provider);

async function main() {
    console.log('here');
    // const tx = await randomHouse.rollDice('0x79aeB896e85aAFA52c3358F6A97D86e7900B699a');
    // await tx.wait();
    console.log(await randomHouse.house('0x79aeB896e85aAFA52c3358F6A97D86e7900B699a'));
}

main()  
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});