import { ethers } from './ethers-5.1.esm.min.js';

export default class Web3 {
  constructor(providerUrl) {
    this.provider = new ethers.providers.JsonRpcProvider(providerUrl);
  }

  toEther(bigNumber) {
    return parseFloat(ethers.utils.formatEther(bigNumber)).toFixed(2);
  }

  async getBalance(wallet) {
    try {
      return this.toEther(await this.provider.getBalance(wallet));
    } catch (error) {
      throw new Error(error);
    }
  }

  async transferEth(from, to, amount) {
    try {
      const signer = await this.provider.getSigner(from);
      await signer.sendTransaction({
        to: to,
        value: ethers.utils.parseEther(amount),
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async getLatestBlock() {
    try {
      return await this.provider.getBlockNumber();
    } catch (error) {
      throw new Error(error);
    }
  }
}
