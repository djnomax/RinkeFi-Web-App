// https://eth-rinkeby.alchemyapi.io/v2/QfysnuOrerR7CuaaFt3YFlYFJV3FfRwm

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/QfysnuOrerR7CuaaFt3YFlYFJV3FfRwm',
      accounts: process.env.ACCOUNT
    }
  }
}