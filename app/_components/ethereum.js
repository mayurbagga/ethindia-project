import Web3 from 'web3';


const getWeb3 = () => {
  const provider = new Web3.providers.HttpProvider(`https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_API_KEY}`);
  return new Web3(provider);
};

const getTokenContract = (web3, tokenAddress, abi) => {
  return new web3.eth.Contract(abi, tokenAddress);
};

const getTokenBalance = async (contract, accountAddress) => {
  try {
    const balance = await contract.methods.balanceOf(accountAddress).call();
    return balance;
  } catch (error) {
    console.error('Error getting token balance:', error);
    throw error;
  }
};

export { getWeb3, getTokenContract, getTokenBalance };
