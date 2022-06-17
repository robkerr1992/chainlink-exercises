const hre = require('hardhat');
require('dotenv').config();

const ABI = require('../artifacts/contracts/PriceConsumerV3.sol/PriceConsumerV3.json');
const provider = new hre.ethers.providers.JsonRpcProvider(process.env.RINKEBY_URL);

const addr = "0x21Daf5E58082A5e0DBc7D02F9a342202318497Ba"
const priceFeed = new hre.ethers.Contract(addr, ABI.abi, provider);

async function main() {
    console.log('here');
    console.log((await priceFeed.hasPriceIncreased()));
}

main()  
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});