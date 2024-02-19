import { ethers } from './ethers-5.1.esm.min.js';

export default class Web3 {
  constructor(providerUrl) {
    this.provider = new ethers.providers.JsonRpcProvider(providerUrl);
  }

  toEther(bigNumber) {
    return ethers.utils.formatEther(bigNumber);
  }

  async getBalance(wallet) {
    try {
      return this.toEther(await this.provider.getBalance(wallet));
    } catch (error) {
      throw new Error();
    }
  }
}
