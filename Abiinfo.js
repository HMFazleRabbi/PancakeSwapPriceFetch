const erc20ABI=[
    'function decimals() public view returns (uint8)' //https://ethereum.org/en/developers/docs/standards/tokens/erc-20/
]

//It will provide the contact address of liquidity provider contract
// 0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16
const factoryABI=[
    'function getPair(address tokenA, address tokenB) external view returns (address pair)' //https://bscscan.com/address/0xca143ce32fe78f1f7019d7d551a6402fc5350c73#code
]


// https://bscscan.com/address/0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16#code
const pairABI=[
    'function token0() external view returns (address)',
    'function token1() external view returns (address)',
    'function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)'
]

const routerABI=[
    'function getAmountsOut(uint amountIn, address[] calldata path) external view returns (uint[] memory amounts)'
]

module.exports={
    erc20ABI,
    factoryABI,
    pairABI,
    routerABI
};