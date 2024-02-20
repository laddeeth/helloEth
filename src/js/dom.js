const transferDisplay = document.querySelector('#transferDisplay');
const errorWindow = document.querySelector('#error');
const blocks = document.querySelector('#blockCount');

const drawError = (message) => {
  emptyElement(errorWindow);
  const span = createSpan();
  span.append(message + ' (This message will self-destruct in 5 seconds)');
  errorWindow.append(span);
  errorWindow.classList.toggle('hide');
  setTimeout(() => {
    errorWindow.classList.toggle('hide');
  }, 5000);
};

const drawBlocks = (blockNumber) => {
  blocks.innerHTML = parseInt(blockNumber);
};

const drawSuccess = (from, to, amount) => {
  const div = createDiv();
  div.classList.add('success');
  const p = createP();
  p.append(
    `Congratulations ${from}! Your transfer of ${amount}ETH to ${to} is a success. Check balance to initiate a new transfer.`
  );
  div.append(p);
  transferDisplay.append(div);
};

const drawBalance = (balance) => {
  const span = createSpan();
  const fa = createFa(['fa-solid', 'fa-arrow-down']);
  span.append(
    'Your balance is ' +
      balance +
      ' eth. Provide an address for recipient and enter amount to transfer.'
  );
  const fa2 = createFa(['fa-solid', 'fa-wallet']);
  const recipientInput = createInput('text', 'recipient');
  const span2 = createSpan();
  span2.append(fa2, ' Recipient');
  const label = createLabel('recipient', span2);
  const span3 = createSpan();
  const fa3 = createFa(['fa-brands', 'fa-ethereum']);
  span3.append('Amount in ', fa3);
  const label2 = createLabel('amount', span3);
  const amountInput = createInput('number', 'amount');
  const button = createButton('Transfer', 'transferButton');
  transferDisplay.append(
    span,
    fa,
    label,
    recipientInput,
    label2,
    amountInput,
    button
  );
};

const emptyUser = () => {
  emptyElement(transferDisplay);
};

const emptyElement = (element) => {
  while (element.firstChild) {
    element.firstChild.remove();
  }
};

const createP = () => {
  return document.createElement('p');
};
const createDiv = () => {
  return document.createElement('div');
};
const createSpan = () => {
  return document.createElement('span');
};

const createFa = (classList) => {
  let i = document.createElement('i');
  i.classList.add(...classList);
  return i;
};

const createInput = (type, name) => {
  const input = document.createElement('input');
  input.setAttribute('type', type);
  input.setAttribute('id', name);
  input.setAttribute('name', name);
  return input;
};

const createLabel = (inputName, text) => {
  const label = document.createElement('label');
  label.setAttribute('for', inputName);
  label.append(text);
  return label;
};

const createButton = (text, id) => {
  const button = document.createElement('button');
  button.setAttribute('id', id);
  button.append(text);
  return button;
};

export { drawBalance, emptyUser, drawError, drawSuccess, drawBlocks };
