import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useWeb3Modal, useDisconnect,useWeb3ModalAccount, useWeb3ModalProvider, useWeb3ModalState } from '@web3modal/ethers/react'
import { BrowserProvider, JsonRpcSigner } from 'ethers'
import { ethers } from 'ethers'
import { RiSendPlane2Fill } from "react-icons/ri";
import { Input } from "@/components/ui/input"
import { IoLogOut } from "react-icons/io5";
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Wallet() {
    const { open } = useWeb3Modal();
    const { address } = useWeb3ModalAccount();
    const { disconnect } = useDisconnect();
    const { walletProvider } = useWeb3ModalProvider();

    const [recipientAddress, setRecipientAddress] = useState('');
    const [amount, setAmount] = useState('');
    const [transactionHash, setTransactionHash] = useState('');
    const [error, setError] = useState<Error | null>(null);

    const [account, setAccount] = useState('');
    const [balance, setBalance] = useState('');

    //fetching balance
    useEffect(() => {
        const getData = async () => {
        try {
            const response = await axios.get(`https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=M5PIID748VRB4WSKTVCBSUG58V26YKJCFP`);
            const balanceInEther = ethers.formatUnits(response.data.result);
            setAccount(response.data)
            setBalance(balanceInEther);
        } catch (error) {
            console.log(error);
        }
        };
        if (address) {
        getData();
        }
    }, []);

    //sending eth
    async function onSend() {
    try {
    if (!walletProvider) {
        throw new Error('Wallet provider is not available');
      }
      const provider = new BrowserProvider(walletProvider);
      const signer = await provider.getSigner();
      const valueInWei = ethers.parseEther(amount);
      const tx = await signer.sendTransaction({
        to: recipientAddress,
        value: valueInWei, // Amount in Wei
      });
      
      await tx.wait(); // Wait for transaction to be mined
      setTransactionHash(tx.hash);

      setRecipientAddress('');
      setAccount('');
    } catch (error) {
      console.error('Error sending transaction:', error);
      setError(error as Error);
      setRecipientAddress('');
      setAmount('');
    }
  }

  //error messages
  function getErrorDisplayMessage(error: Error): string {
    if (error.message.includes('insufficient funds')) {
      return 'Insufficient funds.';
    } else if (error.message.includes('Invalid recipient address')) {
      return 'Invalid recipient address';
    } else if (error.message.includes('exceeded the gas limit')) {
      return 'Gas limit exceeded. ';
    } else if (error.message.includes('Invalid nonce')) {
      return 'Invalid nonce.';
    } else {
      return 'An error occurred while sending the transaction.';
    }
  }

  //truncate address
   const truncateAddress = (address: string) => {
    const start = address.substring(0, 6);
    const end = address.substring(address.length - 4);
    return `${start}...${end}`;
  };

  //copy clipboard
   const copyToClipboard = () => {
    if (address) {
        navigator.clipboard.writeText(address);
        alert('Address copied to clipboard!');
    } else {
        console.error('Address is undefined or null');
    }
    };

  return (
    <div className=' flex flex-col gap-10'>
        { walletProvider == null ? (
            <div className=' flex flex-col items-center justify-center gap-5'>
                <h1 className=' text-4xl font-bold bg-gradient-to-r from-[#6BF019] to-[#17CFA9] text-transparent bg-clip-text'>phantom <span className=' text-lg text-white'>v1</span></h1>
                 <button onClick={()=>open()} className=' flex items-center justify-center mt-5 gap-2 py-2 w-56 rounded-full text-lg font-medium bg-gradient-to-r from-[#6BF019] to-[#17CFA9] '>
                    Connect Wallet
                    <RiSendPlane2Fill size={15}/>
                </button>
                <p className=' text-sm font-medium text-zinc-400 mt-20'>Powered By:</p>
                <div className=' flex items-center justify-center gap-5'>
                    <Image src='/wc.png' width={50} height={50} alt="walletconnect" />
                    <Image src='/ethscan.png' width={100} height={50} alt="etherscan" />
                    <p className=' text-lg font-bold'>Web3Modal</p>
                </div>
            </div>
        ) : (
            <div className=' flex flex-col items-center justify-center gap-10'>
                <h1 className=' text-4xl font-bold bg-gradient-to-r from-[#6BF019] to-[#17CFA9] text-transparent bg-clip-text'>phantom <span className=' text-lg text-white'>v1</span></h1>

                <div className=' grid place-items-center h-20 w-20 rounded-full bg-zinc-300  bg-opacity-25'>
                    <div className=' h-16 w-16  rounded-full bg-gradient-to-r from-[#6BF019] to-[#17CFA9]'>
                    </div>
                </div>

                <div className=' flex flex-col items-center justify-center gap-1 '>
                    <div onClick={copyToClipboard} className=' flex items-center justify-center gap-2'>
                        <p onClick={copyToClipboard} className=' text-lg font-medium text-zinc-300'>{address && truncateAddress(address)}</p>
                        <Image src='/copy.png' width={25} height={25} alt="Copy" />

                    </div>
                    <div className=' flex items-center justify-center gap-2 text-lg font-medium text-white'>
                        <Image src='/eth.png' width={30} height={30} alt="ETH" />
                         {account && (
                        <div>
                        <p>{balance}</p>
                        </div>
                    )}
                    <p >ETH</p>
                    </div>
                    
                </div>

                <div className=' flex flex-col items-center justify-center gap-3'>
                     <Dialog>
                    <DialogTrigger asChild>
                        <button className=' flex items-center justify-center gap-2 py-2 w-48 rounded-full text-lg font-medium bg-gradient-to-r from-[#6BF019] to-[#17CFA9] '>
                            Send
                            <RiSendPlane2Fill size={15}/>
                        </button>
                    </DialogTrigger>
                    <DialogContent className=" grid place-items-center sm:max-w-[425px]">
                        <DialogHeader className=' grid place-items-center'>
                        
                        <DialogDescription className=' grid place-items-center gap-2'>
                            <div className=' grid place-items-center h-16 w-16 rounded-full bg-zinc-300  bg-opacity-25'>
                                <div className=' h-12 w-12  rounded-full bg-gradient-to-r from-[#6BF019] to-[#17CFA9]'>
                                </div>
                            </div>
                            <h2 className=' text-lg text-white font-medium'>Sender</h2>
                            <p className=' text-lg '>{address && truncateAddress(address)}</p>
                            <div className=' flex items-center justify-center gap-2 text-lg font-medium text-white'>
                                <Image src='/eth.png' width={30} height={30} alt="ETH" />
                                {account && (
                                <div>
                                <p>{balance}</p>
                                </div>
                            )}
                            <p >ETH</p>
                            </div>
                        </DialogDescription>
                        </DialogHeader>
                        <div className=' flex flex-col gap-5 w-full'>
                            <div className=' flex flex-col gap-2'>
                                <p>Address:</p>
                                <Input className=' w-full' type='text' id='address' placeholder='Address'value={recipientAddress} onChange={(e) => setRecipientAddress(e.target.value)}/>
                            </div>

                            <div className=' flex flex-col gap-2'>
                                <p>Amount:</p>
                                <Input className=' w-full' id='amount' placeholder='Address' value={amount} onChange={(e) => setAmount(e.target.value)}/>
                            </div>

                        </div>

                        <div className=' flex flex-col items-center justify-center gap-5 mt-10'>
                            <button onClick={onSend} className=' flex items-center justify-center mt-5 gap-2 py-1 w-40 rounded-full text-lg font-medium bg-gradient-to-r from-[#6BF019] to-[#17CFA9] '>
                            Send
                            <RiSendPlane2Fill size={15}/>
                            </button>

                            <div>
                                { error ? (
                                    <p className=' text-sm font-medium text-red-600'>{getErrorDisplayMessage(error)}</p>
                                    
                                ) : (
                                    <div>
                                        {transactionHash && (
                                            <div>
                                            <p className=' text-sm font-medium text-green-500'>{transactionHash}</p>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    
                    </DialogContent>
                    </Dialog>
                    <button onClick={() => disconnect()} className=' flex items-center justify-center gap-2 py-2 w-48 rounded-full text-lg font-medium bg-zinc-200 text-black'>
                        Disconnect
                        <IoLogOut size={20}/>
                    </button>
                    
                </div>         

            </div>
        )}
      
    </div>
  );
}
