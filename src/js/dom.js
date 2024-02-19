const transferDisplay = document.querySelector('#transferDisplay');

const drawBalance = (balance) => {
  const span = createSpan();
  const fa = createFa(['fa-solid', 'fa-arrow-down']);
  span.append(
    'Your balance is ' +
      balance +
      ' eth. Provide an address for recepient and enter amount to transfer.'
  );
  transferDisplay.append(span, fa);
};

const emptyUser = () => {
  emptyElement(transferDisplay);
};

const emptyElement = (element) => {
  while (element.firstChild) {
    element.firstChild.remove();
  }
};

const createSpan = () => {
  return document.createElement('span');
};

const createFa = (classList) => {
  let i = document.createElement('i');
  i.classList.add(...classList);
  return i;
};

export { drawBalance, emptyUser };
