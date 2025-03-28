import { useState, useEffect } from "react";
import { ethers } from "ethers";
// import "./App.css"

const WalletConnector = () => {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);

  // Connect to MetaMask
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });

        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);

        const balance = await provider.getBalance(address);
        setBalance(ethers.utils.formatEther(balance));
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      alert("MetaMask not detected. Please install MetaMask.");
    }
  };

  // Send ETH transactions
  const sendTransaction = async () => {
    if (!account) {
      alert("Connect wallet first!");
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    try {
      const tx = await signer.sendTransaction({
        to: "0x50e80fd1a15e2957954a4C23769B5745f3B20B64", // Replace with actual receiver's address
        value: ethers.utils.parseEther("0.01"),
      });
      console.log("Transaction sent: ", tx.hash);
      alert(`Transaction Sent! Hash: ${tx.hash}`);
    } catch (error) {
      console.error("Transaction Error:", error);
    }
  };

  // Listen for account changes
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length) {
          setAccount(accounts[0]);
        } else {
          setAccount(null);
          setBalance(null);
        }
      });

      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });
    }
  }, []);


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg p-6 rounded-lg w-80 text-center">
        <h1 className="text-center text-2xl font-bold text-gray-800">Ethereum Wallet</h1>
        <button onClick={connectWallet} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-600">
            {account ? `Connected: ${account.substring(0, 6)}...` : "Connect Wallet"}   
        </button>

        <p className="text-lg mt-4 text-gray-700">{balance && <p>Balance: {balance} ETH</p>}</p>
        <button onClick={sendTransaction} className="bg-green-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-green-600">
          Send 0.01 ETH
        </button>
      </div>
    </div>
  );
};



export default WalletConnector;
