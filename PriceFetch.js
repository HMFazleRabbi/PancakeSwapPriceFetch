const ethers = require('ethers')
const {
    factoryAddress,
routerAddress,
fromAddress,
toAddress
} = require('./AddressList');
const {    
    erc20ABI,
    factoryABI,
    pairABI,
    routerABI
} = require('./Abiinfo')

const provider = new ethers.providers.JsonRpcProvider(
    "https://bsc-dataseed1.binance.org/"
)

const factoryInstance = new ethers.Contract(
    factoryAddress, factoryABI, provider
)

console.log(factoryInstance)