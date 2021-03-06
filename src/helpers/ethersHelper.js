import { ethers } from 'ethers'
import { getProvider } from '~/helpers/ethersConnect'
import { getApy } from '~/helpers/formulaHelper'

export async function getTokenBalance(
  contractAddress,
  abi,
  methodName,
  args,
  decimals
) {
  const contract = new ethers.Contract(contractAddress, abi, getProvider())
  if (contract) {
    const balance = await contract[methodName](...args)
    return Array.isArray(balance)
      ? balance.reduce(
          (a, b) =>
            Number.parseFloat(ethers.utils.formatUnits(a, decimals)) +
            Number.parseFloat(ethers.utils.formatUnits(b, decimals))
        )
      : ethers.utils.formatUnits(balance, decimals)
  }
}

export async function getMultiplier(
  contractAddress,
  abi,
  methodName,
  decimals,
  block = null
) {
  const contract = new ethers.Contract(contractAddress, abi, getProvider())
  if (contract) {
    const multiplier = await contract[methodName]({
      blockTag: block || 'latest',
    })
    return ethers.utils.formatUnits(
      Array.isArray(multiplier) ? multiplier[0] : multiplier,
      decimals
    )
  }
  return 1
}

export async function callMethod(
  contractAddress,
  abi,
  methodName,
  block = null
) {
  const contract = new ethers.Contract(contractAddress, abi, getProvider())
  if (contract) {
    const result = await contract[methodName]({
      blockTag: block || 'latest',
    })
    return result
  }
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
  d.setDate(d.getDate() - 30)
  return await getBlockPerTime(d)
}

export async function getLastWeekBlock() {
  const d = new Date()
  d.setDate(d.getDate() - 7)
  return await getBlockPerTime(d)
}

export async function getLastDayBlock() {
  const d = new Date()
  d.setDate(d.getDate() - 1)
  return await getBlockPerTime(d)
}

export async function getSimpleVault(stakingContract, multipliers) {
  const tokenBalance = await getTokenBalance(...stakingContract)
  if (tokenBalance === '0.0') {
    return {
      invested: 0,
      apy: 0,
    }
  }
  if (!multipliers) return tokenBalance

  const lastMonthBlock = await getLastMonthBlock()

  const nowMultiplier = await multipliers.reduce(async (acc, val) => {
    const y = [...val, null]
    const x = await getMultiplier(...y)
    return (await acc) * x
  }, 1)

  const thirtyDaysAgoMultiplier = await multipliers.reduce(async (acc, val) => {
    const y = [...val, lastMonthBlock]
    try {
      const x = await getMultiplier(...y)
      return (await acc) * x
    } catch (e) {
      return 0
    }
  }, 1)

  let apy = getApy(nowMultiplier, thirtyDaysAgoMultiplier, 30)
  if (thirtyDaysAgoMultiplier === 0) {
    apy = 0
  }
  if (apy > 2 || apy === 0) {
    const sevenDaysAgoBlock = await getLastWeekBlock()
    const sevenDaysAgoMultiplier = await multipliers.reduce(
      async (acc, val) => {
        const y = [...val, sevenDaysAgoBlock]
        try {
          const x = await getMultiplier(...y)
          return (await acc) * x
        } catch (e) {
          return 0
        }
      },
      1
    )
    apy = getApy(nowMultiplier, sevenDaysAgoMultiplier, 7)
    if (sevenDaysAgoMultiplier === 0) {
      apy = 0
    }
  }

  if (apy < 0.035 || apy === 0) {
    const oneDayAgoBlock = await getLastDayBlock()
    const oneDayAgoMultiplier = await multipliers.reduce(async (acc, val) => {
      const y = [...val, oneDayAgoBlock]
      try {
        const x = await getMultiplier(...y)
        return (await acc) * x
      } catch (e) {
        return 0
      }
    }, 1)
    apy = getApy(nowMultiplier, oneDayAgoMultiplier, 1)
    if (oneDayAgoMultiplier === 0) {
      apy = 0
    }
  }
  return {
    invested: tokenBalance * nowMultiplier,
    apy,
  }
}

export default {
  getBlockPerTime,
  getLastMonthBlock,
  getLastWeekBlock,
  getLastDayBlock,
  getSimpleVault,
  getTokenBalance,
  getMultiplier,
  callMethod,
}
