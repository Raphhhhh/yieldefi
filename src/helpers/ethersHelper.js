import { ethers } from 'ethers'
import { getProvider } from '~/helpers/ethersConnect'
import { getApy } from '~/helpers/formulaHelper'

async function getTokenBalance(contractAddress, abi, methodName, args) {
  const contract = new ethers.Contract(contractAddress, abi, getProvider())
  if (contract) {
    const balance = await contract[methodName](...args)
    return ethers.utils.formatUnits(
      Array.isArray(balance) ? balance[0] : balance,
      18
    )
  }
  return 0
}

async function getMultiplier(contractAddress, abi, methodName, block) {
  const contract = new ethers.Contract(contractAddress, abi, getProvider())
  if (contract) {
    const multiplier = await contract[methodName]({
      blockTag: block || 'latest',
    })
    return ethers.utils.formatUnits(
      Array.isArray(multiplier) ? multiplier[0] : multiplier,
      18
    )
  }
  return 1
}

export async function getBlockPerTime(time) {
  const EthDater = require('block-by-date-ethers')
  const dater = new EthDater(
    getProvider() // ethers provider, required.
  )
  return (await dater.getDate(time)).block
}

export async function getLastMonthBlock() {
  const d = new Date()
  d.setMonth(d.getMonth() - 1)
  return await getBlockPerTime(d)
}

export async function getDatasFromContract(stakingContract, multipliers) {
  const tokenBalance = await getTokenBalance(...stakingContract)
  if (tokenBalance === '0.0') {
    return {
      invested: 0,
      apy: 0,
    }
  }
  const lastMonthBlock = await getLastMonthBlock()

  const nowMultiplier = await multipliers.reduce(async (acc, val) => {
    const y = [...val, null]
    const x = await getMultiplier(...y)
    return (await acc) * x
  }, 1)

  const oneMonthAgoMultiplier = await multipliers.reduce(async (acc, val) => {
    const y = [...val, lastMonthBlock]
    const x = await getMultiplier(...y)
    return (await acc) * x
  }, 1)

  return {
    invested: tokenBalance * nowMultiplier,
    apy: getApy(nowMultiplier, oneMonthAgoMultiplier),
  }
}

export default {
  getBlockPerTime,
  getLastMonthBlock,
  getDatasFromContract,
}
