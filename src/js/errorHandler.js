import { drawError } from './dom.js';

export default function displayError(error) {
  error = error.toString();

  if (error.match(/does not support ENS/)) {
    drawError('Please check address is correct.');
    console.log(error);
  } else if (/invalid decimal value/) {
    console.log(error);
    drawError(
      'Please check amount is in Ethereum and recipient address is correct'
    );
  } else {
    console.log(error);
  }
}
