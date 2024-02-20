import { drawError } from './dom.js';

export default function displayError(error) {
  error = error.toString();

  if (error.match(/does not support ENS/)) {
    drawError('Please check address is correct.');
    console.log(error);
  } else if (error.match(/invalid decimal value/)) {
    console.log(error);
    drawError(
      'Please check amount is in Ethereum and recipient address is correct'
    );
  } else if (error.match(/could not detect network/)) {
    drawError('Please make sure you have Ganache started locally on port 7545');
  } else {
    console.log(error);
  }
}
