import { getProvider } from '~/helpers/ethersConnect'

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

export default {
  getBlockPerTime,
  getLastMonthBlock,
}
