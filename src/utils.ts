import { BigNumber, Wallet } from "ethers";

export const ETHER = BigNumber.from(10).pow(18);

export function bigNumberToDecimal(value: BigNumber, base = 18): number {
  const divisor = BigNumber.from(10).pow(base)
  return value.mul(10000).div(divisor).toNumber() / 10000
}

//在没有设置FLASHBOTS_RELAY_SIGNING_KEY的情况下，随机创建一个钱包，返回钱包中的私钥
//该私钥用于在FlashBots 内部的声誉系统中作为唯一对的身份标识
export function getDefaultRelaySigningKey(): string {
  console.warn("You have not specified an explicity FLASHBOTS_RELAY_SIGNING_KEY environment variable. Creating random signing key, this searcher will not be building a reputation for next run")
  return Wallet.createRandom().privateKey;
}
