require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remember honey hope knee olympic gentle'; 
let testAccounts = [
"0xd077655866b9f813720be487df51b11eaa64e9a90eb9fde2f2bb505ae37f031f",
"0x32748f9362fc82bc6f24cd025c14cbb4a6530904e233105f3d4c226b39761815",
"0xe2f713a3c1e759f78d232f8a15fa193408f482278aba56dd2a2a8916327e1c2a",
"0xad2a4583b550587c4fe2d1d01d50addcf0f604f7aa9d7006a64e8badc61dd8bd",
"0x5ee0c9417523042c8ac16dd651c978e0e3147caf258e9829cb3d97d11adbec90",
"0xc6577a43ee07e143a82f16190097e50c856fe4775228fad87677ef9b0f668fbd",
"0xf9af5b65682e2c385340adfe075b37fee72ed1dc6b7b767794fa16f2b37b9a8f",
"0x9127218786c8b74035cf2c17a95a7db10c71adfa89d0eaef3210f1425a49247c",
"0x1edff65a85a1d21fa7f6979ec56c810fc81a1458e534d35d3b1a83adadd0c192",
"0xbb58557603c7554a8d981a31c4ecc3da5541265600353784f6e59caaa5421a76"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
