import React, { useEffect, useMemo, useState } from 'react';
import Web3 from 'web3';
import { fromWei } from 'web3-utils';
import Image from 'next/image';

interface TokenData {
  symbol: string;
  name: string;
  image: string;
  address: string;
  abi: any[];
}


const ERC20_ABI = [
  {
    constant: true,
    inputs: [{ name: '_owner', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', type: 'uint256' }],
    type: 'function',
  },
  {
    constant: true,
    name: 'totalSupply',
    outputs: [{ name: '', type: 'uint256' }],
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_to', type: 'address' },
      { name: '_value', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', type: 'bool' }],
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_spender', type: 'address' },
      { name: '_value', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', type: 'bool' }],
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      { name: '_owner', type: 'address' },
      { name: '_spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: 'remaining', type: 'uint256' }],
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: '_from', type: 'address' },
      { indexed: true, name: '_to', type: 'address' },
      { indexed: false, name: '_value', type: 'uint256' },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: '_owner', type: 'address' },
      { indexed: true, name: '_spender', type: 'address' },
      { indexed: false, name: '_value', type: 'uint256' },
    ],
    name: 'Approval',
    type: 'event',
  },
];

const getWeb3 = () => {
  
  const infuraApiUrl = `https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_API_KEY}`;
  const provider = new Web3.providers.HttpProvider(infuraApiUrl);
  return new Web3(provider);
};

const getTokenContract = (web3: Web3, tokenAddress: string, abi: any[]) => {
  return new web3.eth.Contract(abi, tokenAddress);
};

const getTokenBalance = async (contract: any, accountAddress: string) => {
  try {
    const balance = await contract.methods.balanceOf(accountAddress).call();
    return balance;
  } catch (error) {
    console.error('Error getting token balance:', error);
    throw error;
  }
};

const TokenBalancesComponent: React.FC = () =>
{
  
  const [account, setAccount] = useState<string | null>(null);

  useEffect(() => {
    const getAccount = async () => {
      try {
        // Check if Web3 is available
        if (window.ethereum) {
          // Use MetaMask provider
          const web3 = new Web3(window.ethereum);
          
          // Request account access if needed
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          
          // Get the connected accounts
          const accounts = await web3.eth.getAccounts();
          
          // Set the first account as the current account
          setAccount(accounts[0]);
        } else {
          console.error('Please install MetaMask to use this application.');
        }
      } catch (error) {
        console.error('Error getting connected account:', error);
      }
    };

    getAccount();
  }, [] );
  
   const [tokenBalances, setTokenBalances] = useState<{ [symbol: string]: string }>({});
  const accountAddress = '0x7bfee91193d9df2ac0bfe90191d40f23c773c060'; // Replace with the actual Ethereum address
    // const accountAddress = account

 const tokenData: TokenData[] = useMemo(
    () => [
      { symbol: 'ETH', name: 'Ethereum', image: 'ETH_IMAGE_URL', address: '', abi: [] },
      { symbol: 'WETH', name: 'Wrapped Ethereum', image: 'https://static.debank.com/image/arb_token/logo_url/0x82af49447d8a07e3bd95bd0d56f35241523fbab1/61844453e63cf81301f845d7864236f6.png', address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', abi: ERC20_ABI },
      { symbol: 'WBTC', name: 'Wrapped Bitcoin', image: 'https://static.debank.com/image/eth_token/logo_url/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599/d3c52e7c7449afa8bd4fad1c93f50d93.png', address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', abi: ERC20_ABI },
      { symbol: 'USDT', name: 'Tether', image: 'https://static.debank.com/image/coin/logo_url/usdt/23af7472292cb41dc39b3f1146ead0fe.png', address: '0xdAC17F958D2ee523a2206206994597C13D831ec7', abi: ERC20_ABI },
      { symbol: 'USDC', name: 'USD Coin', image: '	https://static.debank.com/image/coin/logo_url/usdc/e87790bfe0b3f2ea855dc29069b38818.png', address: '0xA0b86991c6218b36c1d19D4a2e9eb0cE3606eB48', abi: ERC20_ABI },
      { symbol: 'LINK', name: 'Chainlink', image: 'https://static.debank.com/image/eth_token/logo_url/0x514910771af9ca656af840dff83e8264ecf986ca/69425617db0ef93a7c21c4f9b81c7ca5.png', address: '0x514910771AF9Ca656af840dff83E8264EcF986CA', abi: ERC20_ABI },
    ],
    []
  );

  useEffect(() => {
    const web3 = getWeb3();

    const fetchTokenBalances = async () => {
      const balances: { [symbol: string]: string } = {};

      for (const token of tokenData) {
        if (token.address) {
          const contract = getTokenContract(web3, token.address, token.abi);
          const balance = await getTokenBalance(contract, accountAddress);
          balances[token.symbol] = balance;
        }
      }

      setTokenBalances(balances);
    };

    fetchTokenBalances();
  }, [accountAddress, tokenData]);



  return (
    <div>
     
          <ul>
              <li className={"flex  rounded-md p-2 cursor-pointer hover:bg-gray-300 active:bg-gray-200 !text-gray-700  text-sm font-semibold items-center gap-x-4 mt-20"}
              > <h2>Balances</h2></li>
              {Object.entries(tokenBalances).map(([symbol, balance]) => {
          const tokenInfo = tokenData.find((t) => t.symbol === symbol);
          if (!tokenInfo) return null;

          const formattedBalance = parseFloat(Web3.utils.fromWei(balance, 'ether')).toFixed(2);

          return (
            <li className={"flex  rounded-md p-2 cursor-pointer hover:bg-gray-300 active:bg-gray-200 !text-gray-700  text-sm font-semibold items-center gap-x-4 mt-2"}
                  key={ symbol }>
                  {/* {tokenInfo.name} */}
            <img height={"30px"} width={"30px"} src={tokenInfo.image} alt={symbol}/>

                  { symbol }: { formattedBalance } 
                  
              {/* <img src={tokenInfo.image} alt={symbol} style={{ width: '20px', height: '20px', marginLeft: '5px' }} /> */}
            </li>
          );
        })}
        
     
            
      </ul>
    </div>
  );
};

export default TokenBalancesComponent;
