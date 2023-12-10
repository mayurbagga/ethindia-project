
import {  tBNB, CLO, ETH, MATIC, POA, RSK, xDAI, opBNB, zeta } from "@/constants/assets";

const SUPPORTED_CHAINS = [
  {
    name: 'Ethereum Mainnet',
    short_name: 'eth',
    chain: 'ETH',
    network: 'mainnet',
    chain_id: 1,
    network_id: 1,
    // rpc_url: "https://api.mycryptoapi.com/eth",
    rpc_url: 'https://mainnet.infura.io/v3/INFURA_API_KEY',
    native_currency: ETH
  },
  {
    name: 'Ethereum Ropsten',
    short_name: 'rop',
    chain: 'ETH',
    network: 'ropsten',
    chain_id: 3,
    network_id: 3,
    rpc_url: 'https://ropsten.infura.io/v3/INFURA_API_KEY',
    native_currency: ETH
  },
  {
    name: 'Ethereum Rinkeby',
    short_name: 'rin',
    chain: 'ETH',
    network: 'rinkeby',
    chain_id: 4,
    network_id: 4,
    rpc_url: 'https://rinkeby.infura.io/v3/INFURA_API_KEY',
    native_currency: ETH
  },
  {
    name: 'Ethereum Görli',
    short_name: 'gor',
    chain: 'ETH',
    network: 'goerli',
    chain_id: 5,
    network_id: 5,
    rpc_url: 'https://goerli.infura.io/v3/INFURA_API_KEY',
    native_currency: ETH
  },
  {
    name: 'RSK Mainnet',
    short_name: 'rsk',
    chain: 'RSK',
    network: 'mainnet',
    chain_id: 30,
    network_id: 30,
    rpc_url: 'https://public-node.rsk.co',
    native_currency: RSK
  },
  {
    name: 'Ethereum Kovan',
    short_name: 'kov',
    chain: 'ETH',
    network: 'kovan',
    chain_id: 42,
    network_id: 42,
    rpc_url: 'https://kovan.infura.io/v3/INFURA_API_KEY',
    native_currency: ETH
  },
  {
    name: 'Ethereum Classic Mainnet',
    short_name: 'etc',
    chain: 'ETC',
    network: 'mainnet',
    chain_id: 61,
    network_id: 1,
    rpc_url: 'https://ethereumclassic.network',
    native_currency: ETH
  },
  {
    name: 'POA Network Sokol',
    short_name: 'poa',
    chain: 'POA',
    network: 'sokol',
    chain_id: 77,
    network_id: 77,
    rpc_url: 'https://sokol.poa.network',
    native_currency: POA
  },
  {
    name: 'POA Network Core',
    short_name: 'skl',
    chain: 'POA',
    network: 'core',
    chain_id: 99,
    network_id: 99,
    rpc_url: 'https://core.poa.network',
    native_currency: POA
  },
  {
    name: 'xDAI Chain',
    short_name: 'xdai',
    chain: 'POA',
    network: 'dai',
    chain_id: 100,
    network_id: 100,
    rpc_url: 'https://dai.poa.network',
    native_currency: xDAI
  },
  {
    name: 'Callisto Mainnet',
    short_name: 'clo',
    chain: 'callisto',
    network: 'mainnet',
    chain_id: 820,
    network_id: 1,
    rpc_url: 'https://clo-geth.0xinfra.com/',
    native_currency: CLO
  },
  {
    name: 'Matic Mainnet',
    short_name: 'matic',
    chain: 'Matic',
    network: 'mainnet',
    chain_id: 137,
    network_id: 137,
    rpc_url: 'https://rpc-mainnet.matic.network',
    native_currency: MATIC
  },
  {
    name: 'Matic Mumbai',
    short_name: 'maticmumbai',
    chain: 'Matic',
    network: 'mumbai',
    chain_id: 80001,
    network_id: 80001,
    rpc_url: 'https://rpc-mumbai.matic.today',
    native_currency: MATIC
  },
  {
    name: 'Arbitrum Kovan',
    short_name: 'arbitrumkovan',
    chain: 'Arbitrum',
    network: 'kovan',
    chain_id: 79377087078960,
    network_id: 79377087078960,
    rpc_url: 'https://kovan3.arbitrum.io/rpc',
    native_currency: ETH
  },
  {
    name: 'Optimism Kovan',
    short_name: 'optimismkovan',
    chain: 'Optimism',
    network: 'kovan',
    chain_id: 69,
    network_id: 69,
    rpc_url: 'https://kovan.optimism.io/',
    native_currency: ETH
  },
  {
    name: 'Optimism Goerli',
    short_name: 'optimismgoerli',
    chain: 'Optimism',
    network: 'goerli',
    chain_id: 420,
    network_id: 420,
    rpc_url: 'https://goerli.optimism.io/',
    native_currency: ETH
  },
  {
    name: 'Optimism Mainnet',
    short_name: 'optimism',
    chain: 'Optimism',
    network: 'mainnet',
    chain_id: 10,
    network_id: 10,
    rpc_url: 'https://mainnet.optimism.io/',
    native_currency: ETH
  },
  {
    name: 'BNB Smart Chain Testnet',
    short_name: 'BNBtestnet',
    chain: 'BNBSmartChainTestnet',
    network: 'testnet',
    chain_id: 97,
    network_id: 97,
    rpc_url: 'https://data-seed-prebsc-1-s3.binance.org:8545/',
    native_currency: tBNB
  },
  {
    name: 'opBNB Testnet',
    short_name: 'opBNBTestnet',
    chain: 'opbnb',
    network: 'opBNB',
    chain_id: 5611,
    network_id: 5611,
    rpc_url: 'https://opbnb-testnet-rpc.bnbchain.org',
    native_currency: tBNB
  }
  ,
  {
    name: 'ZetaChain Athens 3 Testnet',
    short_name: 'zetachain-testnet',
    chain: 'opbnb',
    network: 'opBNB',
    chain_id: 7001,
    network_id: 5611,
    rpc_url: 'https://zetachain-athens-evm.blockpi.network/v1/rpc/public',
    native_currency: zeta
  },
  {
    name: 'Linea Testnet',
    short_name: 'linea-testnet',
    chain: 'linea-testnet',
    network: 'linea-testnet',
    chain_id: 59140,
    network_id: 59140,
    rpc_url: 'https://zetachain-athens-evm.blockpi.network/v1/rpc/public',
    native_currency: ETH
  },
   {
    name: 'Base Goerli Testnet',
    short_name: 'base-goerli',
    chain: 'ETH',
    network: 'base-goerli',
    chain_id: 84531,
    network_id: 84531,
    rpc_url: 'https://goerli.base.org',
    native_currency: ETH
  },
]

export default SUPPORTED_CHAINS;
