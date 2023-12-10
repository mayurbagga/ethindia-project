import { getChainData, payloadId } from '@/app/api-helpers/chain';
import axios from 'axios';
import { convertHexToString, convertStringToNumber } from '../formatters';

export const rpcGetGasFee = async (chainId: number) => {
    const rpcUrl = getChainData(chainId).rpc_url;

    if (!rpcUrl && typeof rpcUrl !== "string") {
        throw new Error("Invalid or missing rpc url");
    }
console.error("RPC URL IS========>>>>",rpcUrl)
    const response = await axios.post(rpcUrl, {
        jsonrpc: "2.0",
        id: payloadId(),
        method: "eth_gasPrice",
        params: [],
    });
    return response;

};

export const rpcGetGasFeeV2 = async (rpcUrl: string, method: string = 'eth_gasPrice') => {
    if (!rpcUrl && typeof rpcUrl !== "string") {
        throw new Error("Invalid or missing rpc url");
    }

    try {
        // const response = await axios.post(rpcUrl, {
        //     jsonrpc: "2.0",
        //     id: payloadId(),
        //     method,
        //     params: [],
        // });
        // return response;
const chainId = 1; // Ethereum Mainnet

        const Auth = Buffer.from(
  process.env.NEXT_PUBLIC_INFURA_API_KEY + ":" + process.env.INFURA_API_KEY_SECRET,
        ).toString( "base64" );
        
        
        const { data } = await axios.get(
      `https://gas.api.infura.io/networks/${chainId}/suggestedGasFees`,
      {
        headers: { Authorization: `Basic ${Auth}` },
      },
        );
        console.log("Suggested gas fees:", data);
        return data;
    } catch (error) {
        return error;
    }
};

export default { rpcGetGasFee, rpcGetGasFeeV2 }