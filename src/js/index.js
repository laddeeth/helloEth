import Web3 from './web3.js';
import { drawBalance, emptyUser } from './dom.js';

const providerUrl = 'HTTP://127.0.0.1:7545';
const web3 = new Web3(providerUrl);

const checkBalanceButton = document.querySelector('#checkBalance');
const inputWallet = document.querySelector('#account');

function initApp() {
  console.log('Hello Eth');
}

async function getBalance() {
  emptyUser();
  try {
    const balance = await web3.getBalance(inputWallet.value);
    drawBalance(balance);
  } catch (error) {
    console.log(error);
  }
}

inputWallet.addEventListener('keydown', emptyUser);
document.addEventListener('DOMContentLoaded', initApp);
checkBalanceButton.addEventListener('click', getBalance);
