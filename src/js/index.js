import Web3 from './web3.js';
import { drawBalance, drawSuccess, emptyUser, drawBlocks } from './dom.js';
import displayError from './errorHandler.js';

const providerUrl = 'HTTP://127.0.0.1:7545';
const web3 = new Web3(providerUrl);

const checkBalanceButton = document.querySelector('#checkBalance');
const inputWallet = document.querySelector('#account');

async function initApp() {
  drawBlocks(await web3.getLatestBlock());
}

async function getBalance() {
  emptyUser();
  try {
    const balance = await web3.getBalance(inputWallet.value);
    drawBalance(balance);
    const transferButton = document.querySelector('#transferButton');
    transferButton.addEventListener('click', transferEth);
  } catch (error) {
    displayError(error);
  }
}

async function transferEth() {
  const recipient = document.querySelector('#recipient');
  const amount = document.querySelector('#amount');
  try {
    await web3.transferEth(inputWallet.value, recipient.value, amount.value);
    emptyUser();
    drawSuccess(inputWallet.value, recipient.value, amount.value);
    initApp();
  } catch (error) {
    displayError(error);
  }
}

inputWallet.addEventListener('input', emptyUser);
document.addEventListener('DOMContentLoaded', initApp);
checkBalanceButton.addEventListener('click', getBalance);
