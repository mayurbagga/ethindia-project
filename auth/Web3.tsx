import '@rainbow-me/rainbowkit/styles.css'
import merge from 'lodash.merge';
import {

  RainbowKitProvider,
  darkTheme,
  Theme,
  getDefaultWallets,
  lightTheme
} from '@rainbow-me/rainbowkit';
// import { getDefaultWallets, RainbowKitProvider, Theme } from '@rainbow-me/rainbowkit'
import { baseGoerli, lineaTestnet, scrollTestnet, arbitrumGoerli, celoAlfajores } from '@wagmi/chains'

import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { ReactNode } from 'react'
import { infuraProvider } from 'wagmi/providers/infura'
import React from 'react'
import { Chain } from '@rainbow-me/rainbowkit';


const myTheme = merge(lightTheme(), {
  colors: {
    accentColor: '#0E7D02',

  },

} as Theme);

interface Props {
  children: ReactNode
}
const mydefichain_testnet: Chain = {
  id: 1131,
  name: 'MyDefiChain Testnet',
  network: 'MyDefiChain Testnet',
  iconUrl: 'https://rpc.mydefichain.com/img/logo_mydefichain.jpg',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'MyDefiChain',
    symbol: 'DFI',
  },
  rpcUrls: {
    public: { http: ['https://dmc.mydefichain.com/testnet'] },
    default: { http: ['https://dmc.mydefichain.com/testnet'] },
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'https://testnet3-dmc.mydefichain.com:8445/' },

  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 50890,
    },
  },
  testnet: true,
};
const mydefichain_mainnet: Chain = {
  id: 1130,
  name: 'MyDefiChain Mainnet',
  network: 'MyDefiChain Mainnet',
  iconUrl: 'https://rpc.mydefichain.com/img/logo_mydefichain.jpg',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'MyDefiChain',
    symbol: 'DFI',
  },
  rpcUrls: {
    public: { http: ['https://dmc.mydefichain.com/mainnet'] },
    default: { http: ['https://dmc.mydefichain.com/mainnet'] },
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'https://mainnet-dmc.mydefichain.com:8441/' },

  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 50890,
    },
  },
  testnet: false,
};
const zeta_testnet: Chain = {
  id: 7001,
  name: 'ZetaChain Athens 3 Testnet',
  network: 'ZetaChain Athens 3 Testnet',
  iconUrl: 'https://www.zetachain.com/docs/img/favicon/favicon.png/?v=2',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'zetachain',
    symbol: 'ZETA',
  },
  rpcUrls: {
    public: { http: ['https://zetachain-athens-evm.blockpi.network/v1/rpc/public'] },
    default: { http: ['https://zetachain-athens-evm.blockpi.network/v1/rpc/public'] },
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'https://zetachain-athens-evm.blockpi.network/v1/rpc/public' },

  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 50890,
    },
  },
  testnet: false,
};
const baobab: Chain = {
  id: 1001,
  name: 'Klaytn Testnet Baobab',
  network: 'Testnet',
  iconUrl: 'https://icons.llamao.fi/icons/chains/rsz_klaytn.jpg',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'Baobab',
    symbol: 'KLAY',
  },
  rpcUrls: {
    public: { http: ['https://klaytn.api.onfinality.io/public'] },
    default: { http: ['https://klaytn.api.onfinality.io/public'] },
  },
  blockExplorers: {
    default: { name: 'Explorer', url: ' https://baobab.scope.klaytn.com' },

  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 11_907_934,
    },
  },
  testnet: false,
};
const okxchain_testint: Chain = {
  id: 65,
  name: 'OKExChain Testnet',
  network: 'OKExChain',
  iconUrl: 'https://cdn.bitkeep.vip/u_b_1697a330-c21d-11ed-bb06-6b42bb500220.png',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'OKExChain',
    symbol: 'OKT',
  },
  rpcUrls: {
    public: { http: ['https://exchaintestrpc.okex.org'] },
    default: { http: ['https://exchaintestrpc.okex.org'] },
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'https://www.oklink.com/okexchain-test' },

  },
  
  testnet: true,
};

const NETWORKS = [baseGoerli,zeta_testnet, okxchain_testint,baseGoerli, lineaTestnet, scrollTestnet, arbitrumGoerli, celoAlfajores]
const { chains, provider } = configureChains(NETWORKS, [infuraProvider({ apiKey: "" }), publicProvider()])

const { connectors } = getDefaultWallets({
  appName: "Auto Defi",
  chains,
})

const client = createClient({
  autoConnect: true,
  connectors,
  provider,
})

export function Web3Provider(props: Props) {
  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider modalSize="compact" theme={lightTheme({

        borderRadius: 'medium',
        accentColor: '#000',
        fontStack: 'rounded',


      })} coolMode chains={chains}>
        {props.children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
