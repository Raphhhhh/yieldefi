export const stakeContractAddress = '0xfEA5E213bbD81A8a94D0E1eDB09dBD7CEab61e1c'
export const stakeDaoCurveFiEurssEurContract =
  '0xCD6997334867728ba14d7922f72c893fcee70e84'
export const curveFinanceEursCRVEursContract =
  '0x0Ce6a5fF5217e38315f87032CF90686C96627CAA'

export const baseAbi = [
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function balanceOf(address) override view returns (uint)',
  'function userInfo(uint256,address) view returns (uint, uint)',
  'function getPricePerFullShare() view returns (uint)',
  'function get_virtual_price() view external returns (uint)',
]
