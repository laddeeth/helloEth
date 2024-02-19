import Web3 from './web3.js';

const providerUrl = 'HTTP://127.0.0.1:7545';
const web3 = new Web3(providerUrl);

const checkBalanceButton = document.querySelector('#checkBalance');
const inputWallet = document.querySelector('#account');

function initApp() {
  console.log('Hello Eth');
}

async function getBalance() {
  try {
    console.log(await web3.getBalance(inputWallet.value));
  } catch {
    console.log('Wrong wallet adress at provider');
  }
}

document.addEventListener('DOMContentLoaded', initApp);
checkBalanceButton.addEventListener('click', getBalance);
