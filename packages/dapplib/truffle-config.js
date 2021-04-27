require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install logic bottom trophy name rifle spike essay imitate prize flip spray'; 
let testAccounts = [
"0xc2b9cef35bb7827afc70e44b33afccb8310dc7a419950c29934ed55100fb40a5",
"0x834bc351d57a2f67beac91c7ab65cedd14e8a6ee6c97ebbee53dfb980d10928e",
"0x905ef03a2676ab9b436c7760cf4fff887660fac5d71372764b1bdc16f4eb5c29",
"0x5a9d692e64b0ef6873be9ba2473b6d97b74ad86d728f2d4af79349326773ffbd",
"0x08d8bdf7e390d72c7a73aed36aa736c536b997a1abc9a53575e26093a172abde",
"0x68ba4a57c280619c233b493cde77ba89baf2ec959036f080b5ba2d212f652f07",
"0x40565a2c1641b505b0a9ee458b31983b408497006f73644477f27427fa0a4dc2",
"0x08ae0ae50b602d7bbaca87ba9f22ade9dabd0e3fa0aa47a090898817ae1a9779",
"0xb861a255990a37bad30d09155280df9494671d9c86cccc4e653a156d272eb52c",
"0xf0d7d335a3f7abaee0a91053800f96295eaeabcee9f116a55f56deae282ddea8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
