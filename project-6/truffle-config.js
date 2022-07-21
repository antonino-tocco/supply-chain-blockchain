require("dotenv").config();

const HDWalletProvider = require("@truffle/hdwallet-provider");
const {MNEMONIC, INFURA_API_KEY} = process.env;

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*" // Match any network id
        },
        ropsten: {
            provider: function() {
                return new HDWalletProvider(MNEMONIC, `wss://ropsten.infura.io/ws/v3/${INFURA_API_KEY}`);
            },
            network_id: "*"
        },
        rinkeby: {
            provider: function() {
                return new HDWalletProvider(MNEMONIC, `wss://rinkeby.infura.io/ws/v3/${INFURA_API_KEY}`);
            },
            network_id: "*"
        }
    }
};