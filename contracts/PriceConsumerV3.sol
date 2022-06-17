// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract PriceConsumerV3 {

    AggregatorV3Interface internal priceFeed;
    int256 public ethPrice;

    /**
     * Network: Rinkeby
     * Aggregator: ETH/USD
     * Address: 0xECe365B379E1dD183B20fc5f022230C044d51404
     */
    constructor() {
        priceFeed = AggregatorV3Interface(0xECe365B379E1dD183B20fc5f022230C044d51404);
        ethPrice = getLatestPrice();
    }

    /**
     * Returns the latest price
     */
    function getLatestPrice() public view returns (int256) {
        (
            /*uint80 roundID*/,
            int256 price,
            /*uint startedAt*/,
            /*uint timeStamp*/,
            /*uint80 answeredInRound*/
        ) = priceFeed.latestRoundData();
        return price;
    }

    function hasPriceIncreased() external view returns(bool) {
        return ethPrice != getLatestPrice();
    }
}