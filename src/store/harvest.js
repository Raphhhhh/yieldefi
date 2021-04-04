import Vue from 'vue'
import { getSimpleVault } from '~/helpers/ethersHelper'

// commons
const stakingContractAbi = ['function balanceOf(address) view returns (uint)']
const contractAbi = ['function getPricePerFullShare() view returns (uint)']
const curveContractAbi = [
  'function get_virtual_price() view external returns (uint)',
]

// 3CRV
const treePoolContract = '0x71B9eC42bB3CB40F017D8AD8011BE8e384a95fa5'
const staking3PoolContract = '0x27F12d1a08454402175b9F0b53769783578Be7d9'
const curveCRV3PoolContract = '0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7'

// husd
const husdContract = '0x29780C39164Ebbd62e9DDDE50c151810070140f2'
const husdStakingContract = '0x72C50e6FD8cC5506E166c273b6E814342Aa0a3c1'
const husdCrvContract = '0x3eF6A01A0f81D6046290f3e2A8c5b843e738E604'

// ycrv
const ycrvContract = '0x0FE4283e0216F94f5f9750a7a11AC54D3c9C38F3'
const ycrvStakingContract = '0x6D1b6Ea108AA03c6993d8010690264BA96D349A8'
const ycrvCrvContract = '0x45F783CCE6B7FF23B2ab2D70e416cdb7D6055f51'

// compound
const compoundContract = '0x998cEb152A42a3EaC1f555B1E911642BeBf00faD'
const compoundStakingContract = '0xC0f51a979e762202e9BeF0f62b07F600d0697DE1'
const compoundCrvContract = '0xA2B47E3D5c44877cca798226B7B8118F9BFb7A56'

// busd
const busdContract = '0x4b1cBD6F6D8676AcE5E412C78B7a59b4A1bbb68a'
const busdStakingContract = '0x093C2ae5E6F3D2A897459aa24551289D462449AD'
const busdCrvContract = '0x79a8C46DeA5aDa233ABaFFD40F3A0A2B1e5A4F27'

// usdn
const usdnContract = '0x683E683fBE6Cf9b635539712c999f3B3EdCB8664'
const usdnStakingContract = '0xef4Da1CE3f487DA2Ed0BE23173F76274E0D47579'
const usdnCrvContract = '0x0f9cb53Ebe405d49A0bbdBD291A65Ff571bC83e1'

// gusd
const gusdContract = '0xB8671E33fcFC7FEA2F7a3Ea4a117F065ec4b009E'
const gusdStakingContract = '0x538613A19Eb84D86a4CcfcB63548244A52Ab0B68'
const gusdCrvContract = '0x4f062658EaAF2C1ccf8C8e36D6824CDf41167956'

// ust
const ustContract = '0x84A1DfAdd698886A614fD70407936816183C0A02'
const ustStakingContract = '0x84A1DfAdd698886A614fD70407936816183C0A02'
const ustCrvContract = '0x890f4e345B1dAED0367A877a1612f86A1f86985f'

// usdp
const usdpContract = '0x02d77f6925f4ef89EE2C35eB3dD5793f5695356f'
const usdpStakingContract = '0x15AEB9B209FEC67c672dBF5113827daB0b80f390'
const usdpCrvContract = '0x42d7025938bEc20B69cBae5A77421082407f053A'

async function _curveBasedFetch(
  ctx,
  stakingContract,
  contract,
  curveContract,
  name
) {
  const requests3Pool = await getSimpleVault(
    [
      stakingContract,
      stakingContractAbi,
      'balanceOf',
      [ctx.rootState.ethers.address],
    ],
    [
      [contract, contractAbi, 'getPricePerFullShare'],
      [curveContract, curveContractAbi, 'get_virtual_price'],
    ]
  )
  ctx.commit('pushUserVault', { ...requests3Pool, name })
}

export const state = () => ({
  userVaults: [],
})

export const getters = {
  get(state) {
    return state.userVaults.filter((t) => t.invested > 0)
  },
}

export const mutations = {
  pushUserVault(state, vault) {
    const i = state.userVaults.findIndex((uv) => uv.name === vault.name)
    if (i > -1) {
      Vue.set(state.userVaults, i, vault)
    } else {
      state.userVaults.push(vault)
    }
  },
  resetVaults(state) {
    state.userVaults = []
  },
}

export const actions = {
  async fetch(ctx) {
    ctx.commit('resetVaults')
    await Promise.allSettled([
      _curveBasedFetch(
        ctx,
        staking3PoolContract,
        treePoolContract,
        curveCRV3PoolContract,
        '3CRV'
      ),
      _curveBasedFetch(
        ctx,
        husdStakingContract,
        husdContract,
        husdCrvContract,
        'CRV:HUSD'
      ),
      _curveBasedFetch(
        ctx,
        ycrvStakingContract,
        ycrvContract,
        ycrvCrvContract,
        'yCRV'
      ),
      _curveBasedFetch(
        ctx,
        compoundStakingContract,
        compoundContract,
        compoundCrvContract,
        'CRV:Compound'
      ),
      _curveBasedFetch(
        ctx,
        busdStakingContract,
        busdContract,
        busdCrvContract,
        'CRV:BUSD'
      ),
      _curveBasedFetch(
        ctx,
        usdnStakingContract,
        usdnContract,
        usdnCrvContract,
        'CRV:USDN'
      ),
      _curveBasedFetch(
        ctx,
        gusdStakingContract,
        gusdContract,
        gusdCrvContract,
        'CRV:GUSD'
      ),
      _curveBasedFetch(
        ctx,
        ustStakingContract,
        ustContract,
        ustCrvContract,
        'CRV:UST'
      ),
      _curveBasedFetch(
        ctx,
        usdpStakingContract,
        usdpContract,
        usdpCrvContract,
        'CRV:USDP'
      ),
    ])
  },
}
