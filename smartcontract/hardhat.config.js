//https://eth-ropsten.alchemyapi.io/v2/5awlhZNKv7E7JFTnxDKUYXwLgcoHlw29
require('@nomiclabs/hardhat-waffle');

require('dotenv').config();

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: '0.8.0',
  networks: {
    MATIC_MUMBAI: {
      url: 'API_URL',
      accounts: ['PRIVATE_KEY'],
    },
  },
}; 