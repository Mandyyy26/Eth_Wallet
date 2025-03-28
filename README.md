# Ethereum Wallet

This is a simple Ethereum wallet application built with the goal of interacting with the Ethereum blockchain using MetaMask.

## Features

- **Connect to MetaMask**: Easily connect the wallet with the MetaMask extension.
- **View Wallet Balance**: Retrieve and display the balance of any Ethereum wallet.
- **Send ETH**: Send a specific amount of ETH to a pre-defined, hardcoded Ethereum address.

## Technologies Used

- **Web3.js**: A JavaScript library to interact with the Ethereum blockchain.
- **MetaMask**: Browser extension to manage Ethereum wallets and interact with the blockchain.
- **React**: Frontend framework used for building the UI.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Vite**: Build tool for faster development.

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/Mandyyy26/Eth_Wallet.git
    cd Eth_Wallet
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the application:
    ```bash
    npm run dev
    ```

   The application will start on `http://localhost:5173`. Open the app in your browser and connect it with your MetaMask wallet.

## Usage

- **Connect Wallet**: Click on the "Connect" button to connect your wallet using MetaMask.
- **View Balance**: Your Ethereum balance will be displayed once the wallet is connected.
- **Send ETH**: Enter the amount of ETH you want to send and click the "Send" button to transfer ETH to the hardcoded address.
