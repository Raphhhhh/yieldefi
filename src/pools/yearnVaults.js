// https://vaults.finance/all
export default [
  {
    inception: -1,
    icon: null,
    symbol: 'yvcrvRenWSBTC',
    apy: {
      description: 'Pool APY + Boosted CRV APY',
      type: 'curve',
      data: {
        totalApy: 0.04997579271289318,
        netApy: 0.02023206144859918,
        currentBoost: 2.3068374120056623,
        boostedApr: 0.04376618830377698,
        tokenRewardsApr: 0,
        poolApy: 0.0050319467154606706,
        baseApr: 0.018972376672929368,
      },
      composite: true,
      recommended: 0.02023206144859918,
    },
    address: '0xDdb166C6CB38CEDe52d12c405b6e906c1fB6f9d7',
    strategies: [],
    tvl: {
      totalAssets: 0,
      value: '0',
      price: 58036.367242391425,
    },
    endorsed: false,
    apiVersion: '0.3.3',
    name: 'crvRenWSBTC yVault',
    displayName: 'crvSBTC',
    updated: 1617904836,
    fees: {
      special: {},
      general: {
        managementFee: 200,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'Curve.fi renBTC/wBTC/sBTC',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3/logo-128.png',
      symbol: 'crvRenWSBTC',
      address: '0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3',
      displayName: 'crvSBTC',
      decimals: 18,
    },
    decimals: 18,
    emergencyShutdown: false,
    tags: [],
    type: 'v2',
  },
  {
    icon: null,
    symbol: 'pSLP',
    apy: {
      description: 'Curve Staking Rewards',
      type: 'curve',
      data: {
        oneDay: 0.5316,
        oneDayFarm: 0.5603,
        thirtyDayFarm: 0.5196999999999999,
        sevenDay: 0.5734,
        thirtyDay: 0.491,
        threeDay: 0.5397,
        threeDayFarm: 0.5684,
        sevenDayFarm: 0.6021,
      },
      composite: true,
      recommended: 0.5196999999999999,
    },
    address: '0xbD17B1ce622d73bD438b9E658acA5996dc394b0d',
    endorsed: true,
    strategies: [],
    tvl: {
      value: 8496333.98,
    },
    displayAddress: '0x5Eff6d166D66BacBC1BF52E2C54dD391AE6b1f48',
    name: 'pickling SushiSwap LP Token',
    displayName: 'SLP',
    updated: 1617904836,
    fees: {
      special: {},
      general: {
        withdrawalFee: 0,
        performanceFee: 0,
      },
    },
    token: {
      symbol: 'SLP',
      address: '0x5Eff6d166D66BacBC1BF52E2C54dD391AE6b1f48',
      displayAddress: '0x10B47177E92Ef9D5C6059055d92DdF6290848991',
      displayName: 'SLP',
      decimals: 18,
      name: 'SushiSwap LP Token',
      icon: null,
    },
    decimals: 18,
    tags: ['picklejar'],
    type: 'zap',
  },
  {
    inception: 12136043,
    icon: null,
    symbol: 'yvUSDT',
    apy: {
      description: 'no harvests',
      type: 'error',
      data: {
        grossApy: null,
        managementFee: null,
        oneWeekSample: null,
        oneMonthSample: null,
        inceptionSample: null,
        netApy: null,
        performanceFee: null,
      },
      composite: false,
      recommended: 0,
    },
    address: '0x32651dD149a6EC22734882F790cBEB21402663F9',
    strategies: [
      {
        name: 'StrategyLenderYieldOptimiser',
        address: '0x660F73c3C45ca124084a676D3635e5b015E99941',
      },
      {
        name: 'StrategyIdleidleUSDTYield',
        address: '0x644501563ebE624eaAC6532681aD09fCFd9Ca65f',
      },
    ],
    tvl: {
      totalAssets: 0,
      value: '0',
      price: 1.000718,
    },
    endorsed: false,
    apiVersion: '0.3.4',
    name: 'USDT yVault',
    displayName: 'USDT',
    updated: 1617904836,
    fees: {
      special: {},
      general: {
        managementFee: 200,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'Tether USD',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo-128.png',
      symbol: 'USDT',
      address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      displayName: 'USDT',
      decimals: 6,
    },
    decimals: 6,
    emergencyShutdown: false,
    tags: [],
    type: 'v2',
  },
  {
    inception: 11674522,
    icon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x5f18C75AbDAe578b483E5F43f12a39cF75b973a9/logo-128.png',
    symbol: 'yvUSDC',
    apy: {
      description: 'Price per share - One month sample',
      type: 'pricePerShareV2OneMonth',
      data: {
        grossApy: 0.27574287231218964,
        managementFee: 0.02,
        oneWeekSample: 0.20459429784975172,
        oneMonthSample: 0.15465059079889462,
        netApy: 0.20459429784975172,
        performanceFee: 0.2,
      },
      composite: true,
      recommended: 0.20459429784975172,
    },
    address: '0x5f18C75AbDAe578b483E5F43f12a39cF75b973a9',
    endorsed: true,
    strategies: [
      {
        name: 'StrategyIdleidleUSDCYield',
        address: '0x2E1ad896D3082C52A5AE7Af307131DE7a37a46a0',
      },
      {
        name: 'StrategyAH2EarncyUSDC',
        address: '0x86Aa49bf28d03B1A4aBEb83872cFC13c89eB4beD',
      },
      {
        name: 'StrategyGenericLevCompFarm',
        address: '0x4D7d4485fD600c61d840ccbeC328BfD76A050F87',
      },
      {
        name: 'IBLevComp',
        address: '0xE68A8565B4F837BDa10e2e917BFAaa562e1cD143',
      },
      {
        name: 'SingleSidedCrvUSDC',
        address: '0x80af28cb1e44C44662F144475d7667C9C0aaB3C3',
      },
    ],
    tvl: {
      totalAssets: 85311366588093,
      value: '85311366.588093',
      price: 1,
    },
    apiVersion: '0.3.0',
    name: 'USDC yVault',
    displayName: 'USDC',
    updated: 1617904836,
    fees: {
      special: {},
      general: {
        managementFee: 200,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'USD Coin',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo-128.png',
      symbol: 'USDC',
      address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      displayName: 'USDC',
      decimals: 6,
    },
    decimals: 6,
    emergencyShutdown: false,
    tags: [],
    type: 'v2',
  },
  {
    inception: -1,
    icon: null,
    symbol: 'yvsUSD',
    apy: {
      description: 'no harvests',
      type: 'error',
      data: {
        grossApy: null,
        managementFee: null,
        oneWeekSample: null,
        oneMonthSample: null,
        inceptionSample: null,
        netApy: null,
        performanceFee: null,
      },
      composite: false,
      recommended: 0,
    },
    address: '0xa5cA62D95D24A4a350983D5B8ac4EB8638887396',
    strategies: [
      {
        name: 'StrategyLenderYieldOptimiser',
        address: '0x215DeE632335829155Dcb62452c4878C48c1C884',
      },
    ],
    tvl: {
      totalAssets: 2.6271168035077263e21,
      value: '2674.231516',
      price: 1.017934,
    },
    endorsed: false,
    apiVersion: '0.3.3',
    name: 'sUSD yVault',
    displayName: 'sUSD',
    updated: 1617904836,
    fees: {
      special: {},
      general: {
        managementFee: 0,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'Synth sUSD',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x57Ab1ec28D129707052df4dF418D58a2D46d5f51/logo-128.png',
      symbol: 'sUSD',
      address: '0x57Ab1ec28D129707052df4dF418D58a2D46d5f51',
      displayName: 'sUSD',
      decimals: 18,
    },
    decimals: 18,
    emergencyShutdown: false,
    tags: [],
    type: 'v2',
  },
  {
    inception: 11457948,
    icon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x0FCDAeDFb8A7DfDa2e9838564c5A1665d856AFDF/logo-128.png',
    symbol: 'yvmusd3CRV',
    apy: {
      description: 'Pool APY + Boosted CRV APY',
      type: 'curve',
      data: {
        totalApy: 0.27876264639604803,
        netApy: 0.2005810758968871,
        currentBoost: 1.2922653464174312,
        boostedApr: 0.24368684000312385,
        tokenRewardsApr: 0,
        poolApy: 0.007675792351855346,
        baseApr: 0.1885733767284722,
      },
      composite: true,
      recommended: 0.2005810758968871,
    },
    address: '0x0FCDAeDFb8A7DfDa2e9838564c5A1665d856AFDF',
    endorsed: true,
    strategies: [
      {
        name: 'StrategyCurvemUSDVoterProxy',
        address: '0xBcC6abd115a32fC27f7B49F9e17D0BcefDd278aC',
      },
    ],
    tvl: {
      totalAssets: 2.704583320275981e24,
      value: '2822080.277223',
      price: 1.0434436447442457,
    },
    name: 'yearn Curve.fi MUSD/3Crv',
    displayName: 'crvMUSD',
    updated: 1617904836,
    fees: {
      special: {
        keepCrv: 1000,
      },
      general: {
        withdrawalFee: 50,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'Curve.fi MUSD/3Crv',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x1AEf73d49Dedc4b1778d0706583995958Dc862e6/logo-128.png',
      symbol: 'musd3CRV',
      address: '0x1AEf73d49Dedc4b1778d0706583995958Dc862e6',
      displayName: 'crvMUSD',
      decimals: 18,
    },
    decimals: 18,
    type: 'v1',
  },
  {
    inception: 12028606,
    icon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x27b7b1ad7288079A66d12350c828D3C00A6F07d7/logo-128.png',
    symbol: 'yvCurve-IronBank',
    apy: {
      description: 'Pool APY + Boosted CRV APY',
      type: 'curve',
      data: {
        totalApy: 0.5474136816431433,
        netApy: 0.3739310486901165,
        currentBoost: 1.2581022805021786,
        boostedApr: 0.39955996806198973,
        tokenRewardsApr: 0,
        poolApy: 0.051985636535112505,
        baseApr: 0.3175894156256542,
      },
      composite: true,
      recommended: 0.3739310486901165,
    },
    address: '0x27b7b1ad7288079A66d12350c828D3C00A6F07d7',
    strategies: [
      {
        name: 'StrategyCurveIBVoterProxy',
        address: '0x5148C3124B42e73CA4e15EEd1B304DB59E0F2AF7',
      },
    ],
    tvl: {
      totalAssets: 8.863789588285697e25,
      value: '89021094.669999',
      price: 1.0043231936332118,
    },
    endorsed: true,
    apiVersion: '0.3.2',
    name: 'Curve Iron Bank Pool yVault',
    displayName: 'crvIB',
    updated: 1617904836,
    fees: {
      special: {
        keepCrv: 1000,
      },
      general: {
        managementFee: 200,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'Curve.fi cyDAI/cyUSDC/cyUSDT',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x5282a4eF67D9C33135340fB3289cc1711c13638C/logo-128.png',
      symbol: 'ib3CRV',
      address: '0x5282a4eF67D9C33135340fB3289cc1711c13638C',
      displayName: 'crvIB',
      decimals: 18,
    },
    decimals: 18,
    emergencyShutdown: false,
    tags: [],
    type: 'v2',
  },
  {
    inception: -1,
    icon: null,
    symbol: 'yvsaCRV',
    apy: {
      description: 'Pool APY + Boosted CRV APY',
      type: 'curve',
      data: {
        totalApy: 0.49777148620126194,
        netApy: 0.3694393597783689,
        currentBoost: 1.8736038770700352,
        boostedApr: 0.3505153880293744,
        tokenRewardsApr: 0,
        poolApy: 0.05615928667301129,
        baseApr: 0.1870808404696059,
      },
      composite: true,
      recommended: 0.3694393597783689,
    },
    address: '0x32413274504908460f0c373C7f20F429Fb80ed3A',
    strategies: [],
    tvl: {
      totalAssets: 0,
      value: '0',
      price: 1.0141984984782904,
    },
    endorsed: false,
    apiVersion: '0.3.3',
    name: 'saCRV yVault',
    displayName: 'crvSAAVE',
    updated: 1617904836,
    fees: {
      special: {},
      general: {
        managementFee: 200,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'Curve.fi aDAI/aSUSD',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x02d341CcB60fAaf662bC0554d13778015d1b285C/logo-128.png',
      symbol: 'saCRV',
      address: '0x02d341CcB60fAaf662bC0554d13778015d1b285C',
      displayName: 'crvSAAVE',
      decimals: 18,
    },
    decimals: 18,
    emergencyShutdown: false,
    tags: [],
    type: 'v2',
  },
  {
    inception: 10559471,
    icon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x5dbcF33D8c2E976c6b560249878e6F1491Bca25c/logo-128.png',
    symbol: 'yyDAI+yUSDC+yUSDT+yTUSD',
    apy: {
      description: 'Pool APY + Boosted CRV APY',
      type: 'curve',
      data: {
        totalApy: 0.12790466973749298,
        netApy: 0.11504299748547914,
        currentBoost: 1.3430212947278155,
        boostedApr: 0.06226759574582556,
        tokenRewardsApr: 0,
        poolApy: 0.060224479510843684,
        baseApr: 0.04636381864551528,
      },
      composite: true,
      recommended: 0.11504299748547914,
    },
    address: '0x5dbcF33D8c2E976c6b560249878e6F1491Bca25c',
    endorsed: true,
    strategies: [
      {
        name: 'StrategyCurveYVoterProxy',
        address: '0x07DB4B9b3951094B9E278D336aDf46a036295DE7',
      },
    ],
    tvl: {
      totalAssets: 4.56304254291021e25,
      value: '49634651.240128',
      price: 1.0877534183249606,
    },
    name: 'yearn Curve.fi yDAI/yUSDC/yUSDT/yTUSD',
    displayName: 'yCRV',
    updated: 1617904836,
    fees: {
      special: {
        keepCrv: 1000,
      },
      general: {
        withdrawalFee: 50,
        performanceFee: 1000,
      },
    },
    token: {
      name: 'Curve.fi yDAI/yUSDC/yUSDT/yTUSD',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8/logo-128.png',
      symbol: 'yDAI+yUSDC+yUSDT+yTUSD',
      address: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
      displayName: 'yCRV',
      decimals: 18,
    },
    decimals: 18,
    type: 'v1',
  },
  {
    inception: -1,
    icon: null,
    symbol: 'yvcDAI+cUSDC',
    apy: {
      description: 'Pool APY + Boosted CRV APY',
      type: 'curve',
      data: {
        totalApy: 0.35466506411847654,
        netApy: 0.27041527285523065,
        currentBoost: 1.8282855883521387,
        boostedApr: 0.22222507512657827,
        tokenRewardsApr: 0,
        poolApy: 0.08524162816021794,
        baseApr: 0.12154833825872526,
      },
      composite: true,
      recommended: 0.27041527285523065,
    },
    address: '0x3C90033684F2504D55eeb652720785F70FA692D4',
    strategies: [],
    tvl: {
      totalAssets: 0,
      value: '0',
      price: 1.0623449080017862,
    },
    endorsed: false,
    apiVersion: '0.3.3',
    name: 'cDAI+cUSDC yVault',
    displayName: 'crvCOMP',
    updated: 1617904836,
    fees: {
      special: {},
      general: {
        managementFee: 200,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'Curve.fi cDAI/cUSDC',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x845838DF265Dcd2c412A1Dc9e959c7d08537f8a2/logo-128.png',
      symbol: 'cDAI+cUSDC',
      address: '0x845838DF265Dcd2c412A1Dc9e959c7d08537f8a2',
      displayName: 'crvCOMP',
      decimals: 18,
    },
    decimals: 18,
    emergencyShutdown: false,
    tags: [],
    type: 'v2',
  },
  {
    inception: 11505946,
    icon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0xcC7E70A958917cCe67B4B87a8C30E6297451aE98/logo-128.png',
    symbol: 'yvgusd3CRV',
    apy: {
      description: 'Pool APY + Boosted CRV APY',
      type: 'curve',
      data: {
        totalApy: 0.2900430346082381,
        netApy: 0.20847356025441022,
        currentBoost: 1.5826790847000123,
        boostedApr: 0.2529948829774305,
        tokenRewardsApr: 0,
        poolApy: 0.007548377681889187,
        baseApr: 0.15985229439320242,
      },
      composite: true,
      recommended: 0.20847356025441022,
    },
    address: '0xcC7E70A958917cCe67B4B87a8C30E6297451aE98',
    endorsed: true,
    strategies: [
      {
        name: 'StrategyCurveGUSDVoterProxy',
        address: '0xD42eC70A590C6bc11e9995314fdbA45B4f74FABb',
      },
    ],
    tvl: {
      totalAssets: 4.705555268173673e25,
      value: '47462877.754507',
      price: 1.0086562594541277,
    },
    name: 'yearn Curve.fi GUSD/3Crv',
    displayName: 'crvGUSD',
    updated: 1617904836,
    fees: {
      special: {
        keepCrv: 1000,
      },
      general: {
        withdrawalFee: 50,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'Curve.fi GUSD/3Crv',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0xD2967f45c4f384DEEa880F807Be904762a3DeA07/logo-128.png',
      symbol: 'gusd3CRV',
      address: '0xD2967f45c4f384DEEa880F807Be904762a3DeA07',
      displayName: 'crvGUSD',
      decimals: 18,
    },
    decimals: 18,
    type: 'v1',
  },
  {
    inception: -1,
    icon: null,
    symbol: 'yvbCRV',
    apy: {
      description: 'Pool APY + Boosted CRV APY',
      type: 'curve',
      data: {
        totalApy: 0.198194393053616,
        netApy: 0.1491163963521218,
        currentBoost: 1.4594137805230603,
        boostedApr: 0.10946824354173454,
        tokenRewardsApr: 0,
        poolApy: 0.07407794741414099,
        baseApr: 0.07500836637468274,
      },
      composite: true,
      recommended: 0.1491163963521218,
    },
    address: '0x6D2F347DCFc55C6AC80e515a58344acd7FeF0B84',
    strategies: [],
    tvl: {
      totalAssets: 0,
      value: '0',
      price: 1.0932679738724396,
    },
    endorsed: false,
    apiVersion: '0.3.3',
    name: 'bCRV yVault',
    displayName: 'crvBUSD',
    updated: 1617904836,
    fees: {
      special: {},
      general: {
        managementFee: 200,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'Curve.fi yDAI/yUSDC/yUSDT/yBUSD',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x3B3Ac5386837Dc563660FB6a0937DFAa5924333B/logo-128.png',
      symbol: 'yDAI+yUSDC+yUSDT+yBUSD',
      address: '0x3B3Ac5386837Dc563660FB6a0937DFAa5924333B',
      displayName: 'crvBUSD',
      decimals: 18,
    },
    decimals: 18,
    emergencyShutdown: false,
    tags: [],
    type: 'v2',
  },
  {
    inception: 11883450,
    icon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x03403154afc09Ce8e44C3B185C82C6aD5f86b9ab/logo-128.png',
    symbol: 'yva3CRV',
    apy: {
      description: 'Pool APY + Boosted CRV APY',
      type: 'curve',
      data: {
        totalApy: 0.3905715755787197,
        netApy: 0.3002139814629974,
        currentBoost: 2.199062289187135,
        boostedApr: 0.26083027844240525,
        tokenRewardsApr: 0,
        poolApy: 0.07795890777796452,
        baseApr: 0.11860977277674974,
      },
      composite: true,
      recommended: 0.3002139814629974,
    },
    address: '0x03403154afc09Ce8e44C3B185C82C6aD5f86b9ab',
    endorsed: true,
    strategies: [
      {
        name: 'StrategyCurvea3CRVVoterProxy',
        address: '0x7A10bE29c4d9073E6B3B6b7D1fB5bCDBecA2AA1F',
      },
    ],
    tvl: {
      totalAssets: 1.7776063425867123e25,
      value: '18420300.063158',
      price: 1.0362418057280862,
    },
    name: 'yearn Curve.fi aDAI/aUSDC/aUSDT',
    displayName: 'crvAAVE',
    updated: 1617904836,
    fees: {
      special: {
        keepCrv: 1000,
      },
      general: {
        withdrawalFee: 50,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'Curve.fi aDAI/aUSDC/aUSDT',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0xFd2a8fA60Abd58Efe3EeE34dd494cD491dC14900/logo-128.png',
      symbol: 'a3CRV',
      address: '0xFd2a8fA60Abd58Efe3EeE34dd494cD491dC14900',
      displayName: 'crvAAVE',
      decimals: 18,
    },
    decimals: 18,
    type: 'v1',
  },
  {
    inception: 10532760,
    icon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x597aD1e0c13Bfe8025993D9e79C69E1c0233522e/logo-128.png',
    symbol: 'yUSDC',
    apy: {
      description: 'Price per share - One month sample',
      type: 'pricePerShareV1OneMonth',
      data: {
        withdrawalFee: 0.005,
        grossApy: 0.17710345578874592,
        oneWeekSample: 0.13674697025945495,
        oneMonthSample: 0.14168276463099674,
        netApy: 0.14168276463099674,
      },
      composite: false,
      recommended: 0.14168276463099674,
    },
    address: '0x597aD1e0c13Bfe8025993D9e79C69E1c0233522e',
    endorsed: true,
    strategies: [
      {
        name: 'StrategyUSDC3pool',
        address: '0x4f2fdebE0dF5C92EEe77Ff902512d725F6dfE65c',
      },
    ],
    tvl: {
      totalAssets: 14174177116747,
      value: '14174177.116747',
      price: 1,
    },
    name: 'yearn USD//C',
    displayName: 'USDC',
    updated: 1617904836,
    fees: {
      special: {
        keepCrv: 0,
      },
      general: {
        withdrawalFee: 50,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'USD Coin',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo-128.png',
      symbol: 'USDC',
      address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      displayName: 'USDC',
      decimals: 6,
    },
    decimals: 6,
    type: 'v1',
  },
  {
    inception: 11925258,
    icon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0xBacB69571323575C6a5A3b4F9EEde1DC7D31FBc1/logo-128.png',
    symbol: 'yvsaCRV',
    apy: {
      description: 'Pool APY + Boosted CRV APY',
      type: 'curve',
      data: {
        totalApy: 0.4835112825680593,
        netApy: 0.3585132091659769,
        currentBoost: 1.8736038770700352,
        boostedApr: 0.3505153880293744,
        tokenRewardsApr: 0,
        poolApy: 0.05615001464564511,
        baseApr: 0.1870808404696059,
      },
      composite: true,
      recommended: 0.3585132091659769,
    },
    address: '0xBacB69571323575C6a5A3b4F9EEde1DC7D31FBc1',
    endorsed: true,
    strategies: [
      {
        name: 'StrategyCurvesaCRVVoterProxy',
        address: '0x8e2057b8fe8e680B48858cDD525EBc9510620621',
      },
    ],
    tvl: {
      totalAssets: 2.580993267137821e24,
      value: '2617639.496114',
      price: 1.0141984984782904,
    },
    name: 'yearn Curve.fi aDAI/aSUSD',
    displayName: 'crvSAAVE',
    updated: 1617904836,
    fees: {
      special: {
        keepCrv: 1000,
      },
      general: {
        withdrawalFee: 50,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'Curve.fi aDAI/aSUSD',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x02d341CcB60fAaf662bC0554d13778015d1b285C/logo-128.png',
      symbol: 'saCRV',
      address: '0x02d341CcB60fAaf662bC0554d13778015d1b285C',
      displayName: 'crvSAAVE',
      decimals: 18,
    },
    decimals: 18,
    type: 'v1',
  },
  {
    inception: 11861570,
    icon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x8e6741b456a074F0Bc45B8b82A755d4aF7E965dF/logo-128.png',
    symbol: 'yvdusd3CRV',
    apy: {
      description: 'Pool APY + Boosted CRV APY',
      type: 'curve',
      data: {
        totalApy: 0.5810443531000372,
        netApy: 0.4321582024698953,
        currentBoost: 1.5279492891286086,
        boostedApr: 0.17529218051419315,
        tokenRewardsApr: 0.28396511309475664,
        poolApy: 0.007019952393002796,
        baseApr: 0.11472382085020799,
      },
      composite: true,
      recommended: 0.4321582024698953,
    },
    address: '0x8e6741b456a074F0Bc45B8b82A755d4aF7E965dF',
    endorsed: true,
    strategies: [
      {
        name: 'StrategyCurveDUSDVoterProxy',
        address: '0x33F3f002b8f812f3E087E9245921C8355E777231',
      },
    ],
    tvl: {
      totalAssets: 2.522870990922096e24,
      value: '2499832.634113',
      price: 0.9908681986149482,
    },
    name: 'yearn Curve.fi DUSD/3Crv',
    displayName: 'crvDUSD',
    updated: 1617904836,
    fees: {
      special: {
        keepCrv: 1000,
      },
      general: {
        withdrawalFee: 50,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'Curve.fi DUSD/3Crv',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x3a664Ab939FD8482048609f652f9a0B0677337B9/logo-128.png',
      symbol: 'dusd3CRV',
      address: '0x3a664Ab939FD8482048609f652f9a0B0677337B9',
      displayName: 'crvDUSD',
      decimals: 18,
    },
    decimals: 18,
    type: 'v1',
  },
  {
    inception: 10774539,
    icon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0xe1237aA7f535b0CC33Fd973D66cBf830354D16c7/logo-128.png',
    symbol: 'yWETH',
    apy: {
      description: 'Price per share - One month sample',
      type: 'pricePerShareV1OneMonth',
      data: {
        withdrawalFee: 0,
        grossApy: 0,
        oneWeekSample: 0,
        oneMonthSample: 0,
        netApy: 0,
      },
      composite: false,
      recommended: 0,
    },
    address: '0xe1237aA7f535b0CC33Fd973D66cBf830354D16c7',
    endorsed: true,
    strategies: [
      {
        name: 'StrategyMKRVaultDAIDelegate',
        address: '0x39AFF7827B9D0de80D86De295FE62F7818320b76',
      },
    ],
    tvl: {
      totalAssets: 7.342829177072104e21,
      value: '15119910.334545',
      price: 2059.1396,
    },
    name: 'yearn Wrapped Ether',
    displayName: 'WETH',
    updated: 1617904836,
    fees: {
      special: {
        keepCrv: 0,
      },
      general: {
        withdrawalFee: 0,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'Wrapped Ether',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo-128.png',
      symbol: 'WETH',
      address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      displayName: 'WETH',
      decimals: 18,
    },
    decimals: 18,
    type: 'v1',
  },
  {
    inception: 11794543,
    icon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0xFe39Ce91437C76178665D64d7a2694B0f6f17fE3/logo-128.png',
    symbol: 'yvusdn3CRV',
    apy: {
      description: 'Pool APY + Boosted CRV APY',
      type: 'curve',
      data: {
        totalApy: 0.7097231002092694,
        netApy: 0.34647571493129964,
        currentBoost: 1.9450543512157072,
        boostedApr: 0.6316747223204071,
        tokenRewardsApr: 0,
        poolApy: 0.014109692023957995,
        baseApr: 0.32475941966639377,
      },
      composite: true,
      recommended: 0.34647571493129964,
    },
    address: '0xFe39Ce91437C76178665D64d7a2694B0f6f17fE3',
    endorsed: true,
    strategies: [
      {
        name: 'StrategyCurveUSDNVoterProxy',
        address: '0x406813fF2143d178d1Ebccd2357C20A424208912',
      },
    ],
    tvl: {
      totalAssets: 4.408945842780568e25,
      value: '45794089.612059',
      price: 1.0386630102759042,
    },
    name: 'yearn Curve.fi USDN/3Crv',
    displayName: 'crvUSDN',
    updated: 1617904836,
    fees: {
      special: {
        keepCrv: 5000,
      },
      general: {
        withdrawalFee: 0,
        performanceFee: 1000,
      },
    },
    token: {
      name: 'Curve.fi USDN/3Crv',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x4f3E8F405CF5aFC05D68142F3783bDfE13811522/logo-128.png',
      symbol: 'usdn3CRV',
      address: '0x4f3E8F405CF5aFC05D68142F3783bDfE13811522',
      displayName: 'crvUSDN',
      decimals: 18,
    },
    decimals: 18,
    type: 'v1',
  },
  {
    inception: 11682487,
    icon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0xe11ba472F74869176652C35D30dB89854b5ae84D/logo-128.png',
    symbol: 'yvHEGIC',
    apy: {
      description: 'Price per share - One month sample',
      type: 'pricePerShareV2OneMonth',
      data: {
        grossApy: 0.07171275215608279,
        managementFee: 0.02,
        oneWeekSample: 0.04079580215266108,
        oneMonthSample: 0.04137020172486623,
        netApy: 0.04137020172486623,
        performanceFee: 0.2,
      },
      composite: true,
      recommended: 0.04137020172486623,
    },
    address: '0xe11ba472F74869176652C35D30dB89854b5ae84D',
    endorsed: true,
    strategies: [
      {
        name: 'StrategyLenderYieldOptimiser',
        address: '0x0cF55d57d241161E0ec68E72cBB175dbFe84173a',
      },
      {
        name: 'StrategyHegicETH',
        address: '0x41d638024C525C70A53b883608048e705e061F2c',
      },
      {
        name: 'StrategyHegicWBTC',
        address: '0x0Ce77bc655aFaAc83947c2e859819185966Ca825',
      },
    ],
    tvl: {
      totalAssets: 3.729881969144499e24,
      value: '916111.229969',
      price: 0.245614,
    },
    apiVersion: '0.3.0',
    name: 'HEGIC yVault',
    displayName: 'HEGIC',
    updated: 1617904836,
    fees: {
      special: {},
      general: {
        managementFee: 200,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'Hegic',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x584bC13c7D411c00c01A62e8019472dE68768430/logo-128.png',
      symbol: 'HEGIC',
      address: '0x584bC13c7D411c00c01A62e8019472dE68768430',
      displayName: 'HEGIC',
      decimals: 18,
    },
    decimals: 18,
    emergencyShutdown: false,
    tags: [],
    type: 'v2',
  },
  {
    inception: 11219034,
    icon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x629c759D1E83eFbF63d84eb3868B564d9521C129/logo-128.png',
    symbol: 'yvcDAI+cUSDC',
    apy: {
      description: 'Pool APY + Boosted CRV APY',
      type: 'curve',
      data: {
        totalApy: 0.3491288583002699,
        netApy: 0.2732326239454074,
        currentBoost: 1.8282855883521387,
        boostedApr: 0.22222507512657827,
        tokenRewardsApr: 0,
        poolApy: 0.08524160754452514,
        baseApr: 0.12154833825872526,
      },
      composite: true,
      recommended: 0.2732326239454074,
    },
    address: '0x629c759D1E83eFbF63d84eb3868B564d9521C129',
    endorsed: true,
    strategies: [
      {
        name: 'StrategyCurveCompoundVoterProxy',
        address: '0x530da5aeF3c8f9CCbc75C97C182D6ee2284B643F',
      },
    ],
    tvl: {
      totalAssets: 2.1691348366850196e25,
      value: '23043693.485216',
      price: 1.0623449080017862,
    },
    name: 'yearn Curve.fi cDAI/cUSDC',
    displayName: 'crvCOMP',
    updated: 1617904836,
    fees: {
      special: {
        keepCrv: 1000,
      },
      general: {
        withdrawalFee: 50,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'Curve.fi cDAI/cUSDC',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x845838DF265Dcd2c412A1Dc9e959c7d08537f8a2/logo-128.png',
      symbol: 'cDAI+cUSDC',
      address: '0x845838DF265Dcd2c412A1Dc9e959c7d08537f8a2',
      displayName: 'crvCOMP',
      decimals: 18,
    },
    decimals: 18,
    type: 'v1',
  },
  {
    inception: 12165497,
    icon: null,
    symbol: 'yvhCRV',
    apy: {
      description: 'Pool APY + Boosted CRV APY',
      type: 'curve',
      data: {
        totalApy: 0.23099145413841446,
        netApy: 0.14530229221910881,
        currentBoost: 2.5,
        boostedApr: 0.19895170084476688,
        tokenRewardsApr: 0,
        poolApy: 0.012648534161393358,
        baseApr: 0.07958068033790675,
      },
      composite: true,
      recommended: 0.14530229221910881,
    },
    address: '0x625b7DF2fa8aBe21B0A976736CDa4775523aeD1E',
    strategies: [
      {
        name: 'CurvehCRVVoterProxy',
        address: '0x91cBf0014a966615e1050c90A1aBf1d1d5d8cffd',
      },
    ],
    tvl: {
      totalAssets: 263280035103513250000,
      value: '8096221.686459',
      price: 30751.36967098726,
    },
    endorsed: true,
    apiVersion: '0.3.3',
    name: 'hCRV yVault',
    displayName: 'crvHBTC',
    updated: 1617904836,
    fees: {
      special: {
        keepCrv: 1000,
      },
      general: {
        managementFee: 200,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'Curve.fi hBTC/wBTC',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0xb19059ebb43466C323583928285a49f558E572Fd/logo-128.png',
      symbol: 'hCRV',
      address: '0xb19059ebb43466C323583928285a49f558E572Fd',
      displayName: 'crvHBTC',
      decimals: 18,
    },
    decimals: 18,
    emergencyShutdown: false,
    tags: [],
    type: 'v2',
  },
  {
    inception: 11810257,
    icon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0xF6C9E9AF314982A4b38366f4AbfAa00595C5A6fC/logo-128.png',
    symbol: 'yvust3CRV',
    apy: {
      description: 'Pool APY + Boosted CRV APY',
      type: 'curve',
      data: {
        totalApy: 0.6046341086664964,
        netApy: 0.44273001289281094,
        currentBoost: 2.5,
        boostedApr: 0.4329804253641998,
        tokenRewardsApr: 0,
        poolApy: 0.05730372585405944,
        baseApr: 0.17319217014567992,
      },
      composite: true,
      recommended: 0.44273001289281094,
    },
    address: '0xF6C9E9AF314982A4b38366f4AbfAa00595C5A6fC',
    endorsed: true,
    strategies: [
      {
        name: 'StrategyCurveUSTVoterProxy',
        address: '0x3be2717DA725f43b7d6C598D8f76AeC43e231B99',
      },
    ],
    tvl: {
      totalAssets: 2,
      value: '0',
      price: 1.0329956566378333,
    },
    name: 'yearn Curve.fi UST/3Crv',
    displayName: 'crvUST',
    updated: 1617904836,
    fees: {
      special: {
        keepCrv: 1000,
      },
      general: {
        withdrawalFee: 50,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'Curve.fi UST/3Crv',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x94e131324b6054c0D789b190b2dAC504e4361b53/logo-128.png',
      symbol: 'ust3CRV',
      address: '0x94e131324b6054c0D789b190b2dAC504e4361b53',
      displayName: 'crvUST',
      decimals: 18,
    },
    decimals: 18,
    type: 'v1',
  },
  {
    inception: 11992804,
    icon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x96Ea6AF74Af09522fCB4c28C269C26F59a31ced6/logo-128.png',
    symbol: 'yvlinkCRV',
    apy: {
      description: 'Pool APY + Boosted CRV APY',
      type: 'curve',
      data: {
        totalApy: 0.3714723535316232,
        netApy: 0.26335416529364913,
        currentBoost: 1.312375895323815,
        boostedApr: 0.3246590097566638,
        tokenRewardsApr: 0,
        poolApy: 0.0005397050592929287,
        baseApr: 0.24738263702760072,
      },
      composite: true,
      recommended: 0.26335416529364913,
    },
    address: '0x96Ea6AF74Af09522fCB4c28C269C26F59a31ced6',
    endorsed: true,
    strategies: [
      {
        name: 'StrategyCurveLINKVoterProxy',
        address: '0x153Fe8894a76f14bC8c8B02Dd81eFBB6d24E909f',
      },
    ],
    tvl: {
      totalAssets: 1.9747668468411096e24,
      value: '63572985.479558',
      price: 32.19265382202009,
    },
    name: 'yearn Curve.fi LINK/sLINK',
    displayName: 'crvLINK',
    updated: 1617904836,
    fees: {
      special: {
        keepCrv: 1000,
      },
      general: {
        withdrawalFee: 50,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'Curve.fi LINK/sLINK',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0xcee60cFa923170e4f8204AE08B4fA6A3F5656F3a/logo-128.png',
      symbol: 'linkCRV',
      address: '0xcee60cFa923170e4f8204AE08B4fA6A3F5656F3a',
      displayName: 'crvLINK',
      decimals: 18,
    },
    decimals: 18,
    type: 'v1',
  },
  {
    inception: 12195763,
    icon: null,
    symbol: 'yvBOOST',
    apy: {
      description: 'no harvests',
      type: 'error',
      data: {
        grossApy: null,
        managementFee: null,
        oneWeekSample: null,
        oneMonthSample: null,
        inceptionSample: null,
        netApy: null,
        performanceFee: null,
      },
      composite: false,
      recommended: 0,
    },
    address: '0x9d409a0A012CFbA9B15F6D4B36Ac57A46966Ab9a',
    strategies: [
      {
        name: 'StrategyYearnVECRV',
        address: '0x43DC3A717F7436ebC924e547B586C7e2896Cef9C',
      },
    ],
    tvl: {
      totalAssets: 5.05e22,
      value: '39547.2065',
      price: 0.783113,
    },
    endorsed: false,
    apiVersion: '0.3.5',
    name: 'Yearn Compounding veCRV yVault',
    displayName: 'yveCRV-DAO',
    updated: 1617904836,
    fees: {
      special: {},
      general: {
        managementFee: 200,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'veCRV-DAO yVault',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0xc5bDdf9843308380375a611c18B50Fb9341f502A/logo-128.png',
      symbol: 'yveCRV-DAO',
      address: '0xc5bDdf9843308380375a611c18B50Fb9341f502A',
      displayName: 'yveCRV-DAO',
      decimals: 18,
    },
    decimals: 18,
    emergencyShutdown: false,
    tags: [],
    type: 'v2',
  },
  {
    inception: 11039342,
    icon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x9cA85572E6A3EbF24dEDd195623F188735A5179f/logo-128.png',
    symbol: 'y3Crv',
    apy: {
      description: 'Pool APY + Boosted CRV APY',
      type: 'curve',
      data: {
        totalApy: 0.2509819260168628,
        netApy: 0.18236244905552285,
        currentBoost: 1.5423326024490351,
        boostedApr: 0.2161258006427132,
        tokenRewardsApr: 0,
        poolApy: 0.01221024951753669,
        baseApr: 0.14012917855690266,
      },
      composite: true,
      recommended: 0.18236244905552285,
    },
    address: '0x9cA85572E6A3EbF24dEDd195623F188735A5179f',
    endorsed: true,
    strategies: [
      {
        name: 'StrategyCurve3CrvVoterProxy',
        address: '0xC59601F0CC49baa266891b7fc63d2D5FE097A79D',
      },
    ],
    tvl: {
      totalAssets: 8.908895257036803e25,
      value: '89872495.79579',
      price: 1.008795066086368,
    },
    name: 'yearn Curve.fi DAI/USDC/USDT',
    displayName: '3Crv',
    updated: 1617904836,
    fees: {
      special: {
        keepCrv: 1000,
      },
      general: {
        withdrawalFee: 50,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'Curve.fi DAI/USDC/USDT',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490/logo-128.png',
      symbol: '3Crv',
      address: '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
      displayName: '3Crv',
      decimals: 18,
    },
    decimals: 18,
    type: 'v1',
  },
  {
    inception: 12060605,
    icon: null,
    symbol: 'yvUSDC',
    apy: {
      description: 'no harvests',
      type: 'error',
      data: {
        grossApy: null,
        managementFee: null,
        oneWeekSample: null,
        oneMonthSample: null,
        inceptionSample: null,
        netApy: null,
        performanceFee: null,
      },
      composite: false,
      recommended: 0,
    },
    address: '0x477faf103dADc5Fe5BAa40951cf7512dcBC18126',
    strategies: [
      {
        name: 'StrategyVesperUSDC',
        address: '0x282e8Af431d082D4A27251588315954b9BEc341b',
      },
    ],
    tvl: {
      totalAssets: 15986935588,
      value: '15986.935588',
      price: 1,
    },
    endorsed: false,
    apiVersion: '0.3.3',
    name: 'USDC yVault',
    displayName: 'USDC',
    updated: 1617904836,
    fees: {
      special: {},
      general: {
        managementFee: 0,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'USD Coin',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo-128.png',
      symbol: 'USDC',
      address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      displayName: 'USDC',
      decimals: 6,
    },
    decimals: 6,
    emergencyShutdown: false,
    tags: [],
    type: 'v2',
  },
  {
    inception: 11674216,
    icon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x19D3364A399d251E894aC732651be8B0E4e85001/logo-128.png',
    symbol: 'yvDAI',
    apy: {
      description: 'Price per share - One month sample',
      type: 'pricePerShareV2OneMonth',
      data: {
        grossApy: 0.17672280157329148,
        managementFee: 0.02,
        oneWeekSample: 0.09237356191213525,
        oneMonthSample: 0.1253782412586332,
        netApy: 0.1253782412586332,
        performanceFee: 0.2,
      },
      composite: true,
      recommended: 0.1253782412586332,
    },
    address: '0x19D3364A399d251E894aC732651be8B0E4e85001',
    endorsed: true,
    strategies: [
      {
        name: 'StrategyLenderYieldOptimiser',
        address: '0x32b8C26d0439e1959CEa6262CBabC12320b384c4',
      },
      {
        name: 'StrategyIdleidleDAIYield',
        address: '0x9f51F4df0b275dfB1F74f6Db86219bAe622B36ca',
      },
      {
        name: 'StrategyAH2EarncyDAI',
        address: '0x7D960F3313f3cB1BBB6BF67419d303597F3E2Fa8',
      },
      {
        name: 'StrategyGenericLevCompFarm',
        address: '0x4031afd3B0F71Bace9181E554A9E680Ee4AbE7dF',
      },
      {
        name: 'IBLevComp',
        address: '0x77b7CD137Dd9d94e7056f78308D7F65D2Ce68910',
      },
      {
        name: 'SingleSidedCrvDAI',
        address: '0x6a6B94A78cBA0F55BC4D41b37f2229427800B4dA',
      },
    ],
    tvl: {
      totalAssets: 3.580626453529604e26,
      value: '355809357.125754',
      price: 0.993707,
    },
    apiVersion: '0.3.0',
    name: 'DAI yVault',
    displayName: 'DAI',
    updated: 1617904836,
    fees: {
      special: {},
      general: {
        managementFee: 200,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'Dai Stablecoin',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo-128.png',
      symbol: 'DAI',
      address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      displayName: 'DAI',
      decimals: 18,
    },
    decimals: 18,
    emergencyShutdown: false,
    tags: [],
    type: 'v2',
  },
  {
    inception: 11889184,
    icon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0xB8C3B7A2A618C552C23B1E4701109a9E756Bab67/logo-128.png',
    symbol: 'yv1INCH',
    apy: {
      description: 'Price per share - One month sample',
      type: 'pricePerShareV2OneMonth',
      data: {
        grossApy: 0.20315543954705473,
        managementFee: 0.02,
        oneWeekSample: 0.1465243516376438,
        oneMonthSample: 0.0774123519397008,
        netApy: 0.1465243516376438,
        performanceFee: 0.2,
      },
      composite: false,
      recommended: 0.1465243516376438,
    },
    address: '0xB8C3B7A2A618C552C23B1E4701109a9E756Bab67',
    endorsed: true,
    strategies: [
      {
        name: 'StrategyLenderYieldOptimiser',
        address: '0x86eD4F77d40182b8686a25e125FB3f5a04203CaA',
      },
      {
        name: 'Strategy1INCHGovernance',
        address: '0xB12F6A5776EDd2e923fD1Ce93041B2000A22dDc7',
      },
    ],
    tvl: {
      totalAssets: 1.2643202309480623e23,
      value: '779295.003055',
      price: 6.163747,
    },
    apiVersion: '0.3.2',
    name: '1INCH yVault',
    displayName: '1INCH',
    updated: 1617904836,
    fees: {
      special: {},
      general: {
        managementFee: 200,
        performanceFee: 2000,
      },
    },
    token: {
      name: '1INCH Token',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x111111111117dC0aa78b770fA6A738034120C302/logo-128.png',
      symbol: '1INCH',
      address: '0x111111111117dC0aa78b770fA6A738034120C302',
      displayName: '1INCH',
      decimals: 18,
    },
    decimals: 18,
    emergencyShutdown: false,
    tags: [],
    type: 'v2',
  },
  {
    inception: 11805948,
    icon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x7F83935EcFe4729c4Ea592Ab2bC1A32588409797/logo-128.png',
    symbol: 'yvoBTC/sbtcCRV',
    apy: {
      description: 'Pool APY + Boosted CRV APY',
      type: 'curve',
      data: {
        totalApy: 0.2922748823911139,
        netApy: 0.22655967852806955,
        currentBoost: 1.8589968138899242,
        boostedApr: 0.04460769838154204,
        tokenRewardsApr: 0.2043932858863758,
        poolApy: 0.008988303037182383,
        baseApr: 0.0239955754890193,
      },
      composite: true,
      recommended: 0.22655967852806955,
    },
    address: '0x7F83935EcFe4729c4Ea592Ab2bC1A32588409797',
    endorsed: true,
    strategies: [
      {
        name: 'StrategyCurveOBTCVoterProxy',
        address: '0x15CfA851403aBFbbD6fDB1f6fe0d32F22ddc846a',
      },
    ],
    tvl: {
      totalAssets: 126406318547713230000,
      value: '7297756.02694',
      price: 57732.525642581044,
    },
    name: 'yearn Curve.fi oBTC/sbtcCRV',
    displayName: 'crvOBTC',
    updated: 1617904836,
    fees: {
      special: {
        keepCrv: 1000,
      },
      general: {
        withdrawalFee: 50,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'Curve.fi oBTC/sbtcCRV',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x2fE94ea3d5d4a175184081439753DE15AeF9d614/logo-128.png',
      symbol: 'oBTC/sbtcCRV',
      address: '0x2fE94ea3d5d4a175184081439753DE15AeF9d614',
      displayName: 'crvOBTC',
      decimals: 18,
    },
    decimals: 18,
    type: 'v1',
  },
  {
    inception: 10735275,
    icon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x7Ff566E1d69DEfF32a7b244aE7276b9f90e9D0f6/logo-128.png',
    symbol: 'ycrvRenWSBTC',
    apy: {
      description: 'Pool APY + Boosted CRV APY',
      type: 'curve',
      data: {
        totalApy: 0.04979278736509716,
        netApy: 0.04128743173961808,
        currentBoost: 2.3068374120056623,
        boostedApr: 0.04376618830377698,
        tokenRewardsApr: 0,
        poolApy: 0.0050319467154606706,
        baseApr: 0.018972376672929368,
      },
      composite: true,
      recommended: 0.04128743173961808,
    },
    address: '0x7Ff566E1d69DEfF32a7b244aE7276b9f90e9D0f6',
    endorsed: true,
    strategies: [
      {
        name: 'StrategyCurveBTCVoterProxy',
        address: '0x6D6c1AD13A5000148Aa087E7CbFb53D402c81341',
      },
    ],
    tvl: {
      totalAssets: 407253004398090000000,
      value: '23635484.923815',
      price: 58036.367242391425,
    },
    name: 'yearn Curve.fi renBTC/wBTC/sBTC',
    displayName: 'crvSBTC',
    updated: 1617904836,
    fees: {
      special: {
        keepCrv: 1000,
      },
      general: {
        withdrawalFee: 50,
        performanceFee: 1000,
      },
    },
    token: {
      name: 'Curve.fi renBTC/wBTC/sBTC',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3/logo-128.png',
      symbol: 'crvRenWSBTC',
      address: '0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3',
      displayName: 'crvSBTC',
      decimals: 18,
    },
    decimals: 18,
    type: 'v1',
  },
  {
    inception: 11850069,
    icon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x5533ed0a3b83F70c3c4a1f69Ef5546D3D4713E44/logo-128.png',
    symbol: 'yvcrvPlain3andSUSD',
    apy: {
      description: 'Pool APY + Boosted CRV APY',
      type: 'curve',
      data: {
        totalApy: 0.40679016252253325,
        netApy: 0.29269373322208875,
        currentBoost: 1.8645923490488294,
        boostedApr: 0.3012662187532827,
        tokenRewardsApr: 0.044742891513062294,
        poolApy: 0.004645029977955453,
        baseApr: 0.16157216289499707,
      },
      composite: true,
      recommended: 0.29269373322208875,
    },
    address: '0x5533ed0a3b83F70c3c4a1f69Ef5546D3D4713E44',
    endorsed: true,
    strategies: [
      {
        name: 'StrategyCurvesUSDVoterProxy',
        address: '0xd7F641697ca4e0e19F6C9cF84989ABc293D24f84',
      },
    ],
    tvl: {
      totalAssets: 2.8789511208208573e25,
      value: '29649670.948116',
      price: 1.0298775388608192,
    },
    name: 'yearn Curve.fi DAI/USDC/USDT/sUSD',
    displayName: 'crvSUSD',
    updated: 1617904836,
    fees: {
      special: {
        keepCrv: 1000,
      },
      general: {
        withdrawalFee: 50,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'Curve.fi DAI/USDC/USDT/sUSD',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0xC25a3A3b969415c80451098fa907EC722572917F/logo-128.png',
      symbol: 'crvPlain3andSUSD',
      address: '0xC25a3A3b969415c80451098fa907EC722572917F',
      displayName: 'crvSUSD',
      decimals: 18,
    },
    decimals: 18,
    type: 'v1',
  },
  {
    inception: 11922048,
    icon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0xa9fE4601811213c340e850ea305481afF02f5b28/logo-128.png',
    symbol: 'yvWETH',
    apy: {
      description: 'Price per share - One month sample',
      type: 'pricePerShareV2OneMonth',
      data: {
        grossApy: 0.10612887477756998,
        managementFee: 0.02,
        oneWeekSample: 0.06890309982205599,
        oneMonthSample: 0.060320845251068206,
        netApy: 0.06890309982205599,
        performanceFee: 0.2,
      },
      composite: false,
      recommended: 0.06890309982205599,
    },
    address: '0xa9fE4601811213c340e850ea305481afF02f5b28',
    endorsed: true,
    strategies: [
      {
        name: 'StrategyLenderYieldOptimiser',
        address: '0xeE697232DF2226c9fB3F02a57062c4208f287851',
      },
      {
        name: 'StrategyIdleidleWETHYield',
        address: '0x030bFfF524BbE7A77C789A0993cE8EF23cF8Efe9',
      },
      {
        name: 'StrategyMakerETHDAIDelegate',
        address: '0x0E5397B8547C128Ee20958286436b7BC3f9faAa4',
      },
      {
        name: 'StrategysteCurveWETHSingleSided',
        address: '0x2886971eCAF2610236b4869f58cD42c115DFb47A',
      },
    ],
    tvl: {
      totalAssets: 3.6789223994828672e22,
      value: '75754147.981022',
      price: 2059.1396,
    },
    apiVersion: '0.3.2',
    name: 'WETH yVault',
    displayName: 'WETH',
    updated: 1617904836,
    fees: {
      special: {},
      general: {
        managementFee: 200,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'Wrapped Ether',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo-128.png',
      symbol: 'WETH',
      address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      displayName: 'WETH',
      decimals: 18,
    },
    decimals: 18,
    emergencyShutdown: false,
    tags: [],
    type: 'v2',
  },
  {
    inception: 10651473,
    icon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x2f08119C6f07c006695E079AAFc638b8789FAf18/logo-128.png',
    symbol: 'yUSDT',
    apy: {
      description: 'Price per share - One month sample',
      type: 'pricePerShareV1OneMonth',
      data: {
        withdrawalFee: 0.005,
        grossApy: 0.13945116371992847,
        oneWeekSample: 0.11156093097594277,
        oneMonthSample: 0.10149073882260534,
        netApy: 0.11156093097594277,
      },
      composite: false,
      recommended: 0.11156093097594277,
    },
    address: '0x2f08119C6f07c006695E079AAFc638b8789FAf18',
    endorsed: true,
    strategies: [
      {
        name: 'StrategyUSDT3pool',
        address: '0xAa12d6c9d680EAfA48D8c1ECba3FCF1753940A12',
      },
    ],
    tvl: {
      totalAssets: 7595145269730,
      value: '7600598.584034',
      price: 1.000718,
    },
    name: 'yearn Tether USD',
    displayName: 'USDT',
    updated: 1617904836,
    fees: {
      special: {
        keepCrv: 0,
      },
      general: {
        withdrawalFee: 50,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'Tether USD',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo-128.png',
      symbol: 'USDT',
      address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      displayName: 'USDT',
      decimals: 6,
    },
    decimals: 6,
    type: 'v1',
  },
  {
    inception: -1,
    icon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0xc5bDdf9843308380375a611c18B50Fb9341f502A/logo-128.png',
    symbol: 'yveCRV',
    apy: {
      description: 'yveCRV Admin Fees',
      type: 'curve',
      data: {
        currentBoost: 1.6020778037554864,
        boostedApy: 0.14418448182552102,
        totalApy: 0.14418448182552102,
        poolApy: 0.08999842672280531,
        baseApy: 0.08999842672280531,
      },
      composite: true,
      recommended: 0.14418448182552102,
    },
    address: '0xc5bDdf9843308380375a611c18B50Fb9341f502A',
    endorsed: true,
    strategies: [],
    name: 'veCRV-DAO yVault (yveCRV-DAO)',
    displayName: 'CRV',
    updated: 1617904836,
    fees: {
      special: {},
      general: {
        withdrawalFee: 0,
        performanceFee: 0,
      },
    },
    token: {
      name: 'Curve DAO Token',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0xD533a949740bb3306d119CC777fa900bA034cd52/logo-128.png',
      symbol: 'CRV',
      address: '0xD533a949740bb3306d119CC777fa900bA034cd52',
      displayName: 'CRV',
      decimals: 18,
    },
    decimals: 18,
    type: 'v1',
  },
  {
    inception: 11806089,
    icon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x46AFc2dfBd1ea0c0760CAD8262A5838e803A37e5/logo-128.png',
    symbol: 'yvhCRV',
    apy: {
      description: 'Pool APY + Boosted CRV APY',
      type: 'curve',
      data: {
        totalApy: 0.09646246538641597,
        netApy: 0.07917279042639969,
        currentBoost: 1,
        boostedApr: 0.07958068033790675,
        tokenRewardsApr: 0,
        poolApy: 0.012648534161393358,
        baseApr: 0.07958068033790675,
      },
      composite: true,
      recommended: 0.07917279042639969,
    },
    address: '0x46AFc2dfBd1ea0c0760CAD8262A5838e803A37e5',
    endorsed: true,
    strategies: [
      {
        name: 'StrategyCurveHBTCVoterProxy',
        address: '0xE02363cB1e4E1B77a74fAf38F3Dbb7d0B70F26D7',
      },
    ],
    tvl: {
      totalAssets: 101309798188316560000,
      value: '3115415.055382',
      price: 30751.36967098726,
    },
    name: 'yearn Curve.fi hBTC/wBTC',
    displayName: 'crvHBTC',
    updated: 1617904836,
    fees: {
      special: {
        keepCrv: 0,
      },
      general: {
        withdrawalFee: 50,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'Curve.fi hBTC/wBTC',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0xb19059ebb43466C323583928285a49f558E572Fd/logo-128.png',
      symbol: 'hCRV',
      address: '0xb19059ebb43466C323583928285a49f558E572Fd',
      displayName: 'crvHBTC',
      decimals: 18,
    },
    decimals: 18,
    type: 'v1',
  },
  {
    inception: 11949653,
    icon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x123964EbE096A920dae00Fb795FFBfA0c9Ff4675/logo-128.png',
    symbol: 'yvpBTC/sbtcCRV',
    apy: {
      description: 'Pool APY + Boosted CRV APY',
      type: 'curve',
      data: {
        totalApy: 0.4235366494670036,
        netApy: 0.3274006034430607,
        currentBoost: 2.5,
        boostedApr: 0.024050758465633523,
        tokenRewardsApr: 0.32145338010868113,
        poolApy: 0.009510155978732083,
        baseApr: 0.00962030338625341,
      },
      composite: true,
      recommended: 0.3274006034430607,
    },
    address: '0x123964EbE096A920dae00Fb795FFBfA0c9Ff4675',
    endorsed: true,
    strategies: [
      {
        name: 'StrategyCurvePBTCVoterProxy',
        address: '0xD96041c5EC05735D965966bF51faEC40F3888f6e',
      },
    ],
    tvl: {
      totalAssets: 22399612159426920000,
      value: '1274211.957162',
      price: 56885.44730563628,
    },
    name: 'yearn Curve.fi pBTC/sbtcCRV',
    displayName: 'crvPBTC',
    updated: 1617904836,
    fees: {
      special: {
        keepCrv: 1000,
      },
      general: {
        withdrawalFee: 50,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'Curve.fi pBTC/sbtcCRV',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0xDE5331AC4B3630f94853Ff322B66407e0D6331E8/logo-128.png',
      symbol: 'pBTC/sbtcCRV',
      address: '0xDE5331AC4B3630f94853Ff322B66407e0D6331E8',
      displayName: 'crvPBTC',
      decimals: 18,
    },
    decimals: 18,
    type: 'v1',
  },
  {
    inception: 11662420,
    icon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x98B058b2CBacF5E99bC7012DF757ea7CFEbd35BC/logo-128.png',
    symbol: 'yveursCRV',
    apy: {
      description: 'Pool APY + Boosted CRV APY',
      type: 'curve',
      data: {
        totalApy: 0.46901005434706333,
        netApy: 0.33102861254476396,
        currentBoost: 1.5146862830943346,
        boostedApr: 0.397851913456853,
        tokenRewardsApr: 0,
        poolApy: 0.0002848089746214008,
        baseApr: 0.2626629143587978,
      },
      composite: true,
      recommended: 0.33102861254476396,
    },
    address: '0x98B058b2CBacF5E99bC7012DF757ea7CFEbd35BC',
    endorsed: true,
    strategies: [
      {
        name: 'StrategyCurveEURVoterProxy',
        address: '0x08553D7BE4fBa2b186A60738301a7E613349c053',
      },
    ],
    tvl: {
      totalAssets: 1.3890586322030603e25,
      value: '16765579.681497',
      price: 1.2069742264879513,
    },
    name: 'yearn Curve.fi EURS/sEUR',
    displayName: 'crvEURS',
    updated: 1617904836,
    fees: {
      special: {
        keepCrv: 1000,
      },
      general: {
        withdrawalFee: 50,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'Curve.fi EURS/sEUR',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x194eBd173F6cDacE046C53eACcE9B953F28411d1/logo-128.png',
      symbol: 'eursCRV',
      address: '0x194eBd173F6cDacE046C53eACcE9B953F28411d1',
      displayName: 'crvEURS',
      decimals: 18,
    },
    decimals: 18,
    type: 'v1',
  },
  {
    inception: -1,
    icon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x07FB4756f67bD46B748b16119E802F1f880fb2CC/logo-128.png',
    symbol: 'yvtbtc/sbtcCrv',
    apy: {
      description: 'Pool APY + Boosted CRV APY',
      type: 'curve',
      data: {
        totalApy: 0.11031094391954757,
        netApy: 0.08010433792020723,
        currentBoost: 2.5,
        boostedApr: 0.10195615701210171,
        tokenRewardsApr: 0,
        poolApy: 0.0037078363390343288,
        baseApr: 0.040782462804840686,
      },
      composite: true,
      recommended: 0.08010433792020723,
    },
    address: '0x07FB4756f67bD46B748b16119E802F1f880fb2CC',
    endorsed: true,
    strategies: [
      {
        name: 'StrategyCurveTBTCVoterProxy',
        address: '0x61A01a704665b3C0E6898C1B4dA54447f561889d',
      },
    ],
    tvl: {
      totalAssets: 0,
      value: '0',
      price: 56397.706604453284,
    },
    name: 'yearn Curve.fi tBTC/sbtcCrv',
    displayName: 'crvTBTC',
    updated: 1617904836,
    fees: {
      special: {
        keepCrv: 1000,
      },
      general: {
        withdrawalFee: 50,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'Curve.fi tBTC/sbtcCrv',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x64eda51d3Ad40D56b9dFc5554E06F94e1Dd786Fd/logo-128.png',
      symbol: 'tbtc/sbtcCrv',
      address: '0x64eda51d3Ad40D56b9dFc5554E06F94e1Dd786Fd',
      displayName: 'crvTBTC',
      decimals: 18,
    },
    decimals: 18,
    type: 'v1',
  },
  {
    inception: 11926130,
    icon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x39546945695DCb1c037C836925B355262f551f55/logo-128.png',
    symbol: 'yvhusd3CRV',
    apy: {
      description: 'Pool APY + Boosted CRV APY',
      type: 'curve',
      data: {
        totalApy: 0.5039751823582835,
        netApy: 0.35688582931716367,
        currentBoost: 2.5,
        boostedApr: 0.4172628152578925,
        tokenRewardsApr: 0,
        poolApy: 0.005643414515272197,
        baseApr: 0.166905126103157,
      },
      composite: true,
      recommended: 0.35688582931716367,
    },
    address: '0x39546945695DCb1c037C836925B355262f551f55',
    endorsed: true,
    strategies: [
      {
        name: 'StrategyCurveHUSDVoterProxy',
        address: '0xb21C4d2f7b2F29109FF6243309647A01bEB9950a',
      },
    ],
    tvl: {
      totalAssets: 282053367792562240000,
      value: '295.676794',
      price: 1.0483008819059492,
    },
    name: 'yearn Curve.fi HUSD/3Crv',
    displayName: 'crvHUSD',
    updated: 1617904836,
    fees: {
      special: {
        keepCrv: 1000,
      },
      general: {
        withdrawalFee: 50,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'Curve.fi HUSD/3Crv',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x5B5CFE992AdAC0C9D48E05854B2d91C73a003858/logo-128.png',
      symbol: 'husd3CRV',
      address: '0x5B5CFE992AdAC0C9D48E05854B2d91C73a003858',
      displayName: 'crvHUSD',
      decimals: 18,
    },
    decimals: 18,
    type: 'v1',
  },
  {
    inception: 10603467,
    icon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x37d19d1c4E1fa9DC47bD1eA12f742a0887eDa74a/logo-128.png',
    symbol: 'yTUSD',
    apy: {
      description: 'Price per share - One month sample',
      type: 'pricePerShareV1OneMonth',
      data: {
        withdrawalFee: 0.005,
        grossApy: 0.16342405443669858,
        oneWeekSample: 0.08868194331443081,
        oneMonthSample: 0.13073924354935887,
        netApy: 0.13073924354935887,
      },
      composite: false,
      recommended: 0.13073924354935887,
    },
    address: '0x37d19d1c4E1fa9DC47bD1eA12f742a0887eDa74a',
    endorsed: true,
    strategies: [
      {
        name: 'StrategyTUSDypool',
        address: '0x4BA03330338172fEbEb0050Be6940c6e7f9c91b0',
      },
    ],
    tvl: {
      totalAssets: 3.294035888661154e24,
      value: '3273306.520814',
      price: 0.993707,
    },
    name: 'yearn TrueUSD',
    displayName: 'TUSD',
    updated: 1617904836,
    fees: {
      special: {
        keepCrv: 0,
      },
      general: {
        withdrawalFee: 50,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'TrueUSD',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x0000000000085d4780B73119b644AE5ecd22b376/logo-128.png',
      symbol: 'TUSD',
      address: '0x0000000000085d4780B73119b644AE5ecd22b376',
      displayName: 'TUSD',
      decimals: 18,
    },
    decimals: 18,
    type: 'v1',
  },
  {
    inception: 11769265,
    icon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0xA8B1Cb4ed612ee179BDeA16CCa6Ba596321AE52D/logo-128.png',
    symbol: 'yvbBTC/sbtcCRV',
    apy: {
      description: 'Pool APY + Boosted CRV APY',
      type: 'curve',
      data: {
        totalApy: 0.05629819001000155,
        netApy: 0.04491050126234976,
        currentBoost: 1.7468539892002268,
        boostedApr: 0.039238796597161396,
        tokenRewardsApr: 0,
        poolApy: 0.01581066193210507,
        baseApr: 0.022462550871310282,
      },
      composite: true,
      recommended: 0.04491050126234976,
    },
    address: '0xA8B1Cb4ed612ee179BDeA16CCa6Ba596321AE52D',
    endorsed: true,
    strategies: [
      {
        name: 'StrategyCurveBBTCVoterProxy',
        address: '0x551F41aD4ebeCa4F5d025D2B3082b7AB2383B768',
      },
    ],
    tvl: {
      totalAssets: 111671619269975500000,
      value: '6404906.631651',
      price: 57354.829038227625,
    },
    name: 'yearn Curve.fi bBTC/sbtcCRV',
    displayName: 'crvBBTC',
    updated: 1617904836,
    fees: {
      special: {
        keepCrv: 1000,
      },
      general: {
        withdrawalFee: 50,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'Curve.fi bBTC/sbtcCRV',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x410e3E86ef427e30B9235497143881f717d93c2A/logo-128.png',
      symbol: 'bBTC/sbtcCRV',
      address: '0x410e3E86ef427e30B9235497143881f717d93c2A',
      displayName: 'crvBBTC',
      decimals: 18,
    },
    decimals: 18,
    type: 'v1',
  },
  {
    inception: 11773610,
    icon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0xcB550A6D4C8e3517A939BC79d0c7093eb7cF56B5/logo-128.png',
    symbol: 'yvWBTC',
    apy: {
      description: 'Price per share - One month sample',
      type: 'pricePerShareV2OneMonth',
      data: {
        grossApy: 0.08794247318201347,
        managementFee: 0.02,
        oneWeekSample: 0.054353978545610776,
        oneMonthSample: 0.039830533200306585,
        netApy: 0.054353978545610776,
        performanceFee: 0.2,
      },
      composite: true,
      recommended: 0.054353978545610776,
    },
    address: '0xcB550A6D4C8e3517A939BC79d0c7093eb7cF56B5',
    endorsed: true,
    strategies: [
      {
        name: 'StrategyIdleidleWBTCYield',
        address: '0x3E14d864E4e82eD98849Bf666971f39Cf49Ca986',
      },
    ],
    tvl: {
      totalAssets: 2099999999,
      value: '1209980.278596',
      price: 57618.108532,
    },
    apiVersion: '0.3.1',
    name: 'WBTC yVault',
    displayName: 'WBTC',
    updated: 1617904836,
    fees: {
      special: {},
      general: {
        managementFee: 200,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'Wrapped BTC',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo-128.png',
      symbol: 'WBTC',
      address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
      displayName: 'WBTC',
      decimals: 8,
    },
    decimals: 8,
    emergencyShutdown: false,
    tags: [],
    type: 'v2',
  },
  {
    inception: 10604055,
    icon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x881b06da56BB5675c54E4Ed311c21E54C5025298/logo-128.png',
    symbol: 'yLINK',
    apy: {
      description: 'Price per share - One month sample',
      type: 'pricePerShareV1OneMonth',
      data: {
        withdrawalFee: 0,
        grossApy: 0.00003157025047607547,
        oneWeekSample: 0.00000634726288218566,
        oneMonthSample: 0.00003157025047607547,
        netApy: 0.00003157025047607547,
      },
      composite: false,
      recommended: 0.00003157025047607547,
    },
    address: '0x881b06da56BB5675c54E4Ed311c21E54C5025298',
    endorsed: true,
    strategies: [
      {
        name: 'StrategyVaultUSDC',
        address: '0x25fAcA21dd2Ad7eDB3a027d543e617496820d8d6',
      },
    ],
    tvl: {
      totalAssets: 7.809956805398053e21,
      value: '251244.849968',
      price: 32.169813,
    },
    name: 'yearn ChainLink Token',
    displayName: 'LINK',
    updated: 1617904836,
    fees: {
      special: {
        keepCrv: 0,
      },
      general: {
        withdrawalFee: 0,
        performanceFee: 0,
      },
    },
    token: {
      name: 'ChainLink Token',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo-128.png',
      symbol: 'LINK',
      address: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
      displayName: 'LINK',
      decimals: 18,
    },
    decimals: 18,
    type: 'v1',
  },
  {
    inception: 11870118,
    icon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x986b4AFF588a109c09B50A03f42E4110E29D353F/logo-128.png',
    symbol: 'yveCRV',
    apy: {
      description: 'Pool APY + Boosted CRV APY',
      type: 'curve',
      data: {
        totalApy: 0.26634504178454566,
        netApy: 0.18489435236966323,
        currentBoost: 1.6258046648093176,
        boostedApr: 0.2336865462881924,
        tokenRewardsApr: 0,
        poolApy: 0.0029762278770102614,
        baseApr: 0.14373593048805794,
      },
      composite: true,
      recommended: 0.18489435236966323,
    },
    address: '0x986b4AFF588a109c09B50A03f42E4110E29D353F',
    endorsed: true,
    strategies: [
      {
        name: 'StrategyCurveEcrvVoterProxy',
        address: '0xB5F6747147990c4ddCeBbd0d4ef25461a967D079',
      },
    ],
    tvl: {
      totalAssets: 6.12777436626892e22,
      value: '126736252.84517',
      price: 2068.226492522399,
    },
    apiVersion: '0.3.2',
    name: 'eCRV yVault',
    displayName: 'crvSETH',
    updated: 1617904836,
    fees: {
      special: {},
      general: {
        managementFee: 200,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'Curve.fi ETH/sETH',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0xA3D87FffcE63B53E0d54fAa1cc983B7eB0b74A9c/logo-128.png',
      symbol: 'eCRV',
      address: '0xA3D87FffcE63B53E0d54fAa1cc983B7eB0b74A9c',
      displayName: 'crvSETH',
      decimals: 18,
    },
    decimals: 18,
    emergencyShutdown: false,
    tags: [],
    type: 'v2',
  },
  {
    inception: 11655023,
    icon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0xdCD90C7f6324cfa40d7169ef80b12031770B4325/logo-128.png',
    symbol: 'yvsteCRV',
    apy: {
      description: 'Pool APY + Boosted CRV APY',
      type: 'curve',
      data: {
        totalApy: 0.32254527972275915,
        netApy: 0.2357460683557908,
        currentBoost: 1.4314566785989247,
        boostedApr: 0.08596060776446413,
        tokenRewardsApr: 0.1548046018433141,
        poolApy: 0.04013299159449071,
        baseApr: 0.06005114164446828,
      },
      composite: true,
      recommended: 0.2357460683557908,
    },
    address: '0xdCD90C7f6324cfa40d7169ef80b12031770B4325',
    endorsed: true,
    strategies: [
      {
        name: 'StrategystETHCurve',
        address: '0x979843B8eEa56E0bEA971445200e0eC3398cdB87',
      },
    ],
    tvl: {
      totalAssets: 8.016462410762229e22,
      value: '166440976.373852',
      price: 2076.2397157928663,
    },
    apiVersion: '0.3.0',
    name: 'steCRV yVault',
    displayName: 'crvSTETH',
    updated: 1617904836,
    fees: {
      special: {},
      general: {
        managementFee: 200,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'Curve.fi ETH/stETH',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x06325440D014e39736583c165C2963BA99fAf14E/logo-128.png',
      symbol: 'steCRV',
      address: '0x06325440D014e39736583c165C2963BA99fAf14E',
      displayName: 'crvSTETH',
      decimals: 18,
    },
    decimals: 18,
    emergencyShutdown: false,
    tags: [],
    type: 'v2',
  },
  {
    inception: -1,
    icon: null,
    symbol: 'yvcrvRenWBTC',
    apy: {
      description: 'Pool APY + Boosted CRV APY',
      type: 'curve',
      data: {
        totalApy: 0.06577696771686878,
        netApy: 0.03408379075442563,
        currentBoost: 2.5,
        boostedApr: 0.051045682565255775,
        tokenRewardsApr: 0,
        poolApy: 0.012764211729238912,
        baseApr: 0.02041827302610231,
      },
      composite: true,
      recommended: 0.03408379075442563,
    },
    address: '0xbda3A6CB2aaef41805F6317841d7B8654eC8b124',
    strategies: [],
    tvl: {
      totalAssets: 0,
      value: '0',
      price: 58541.96369225578,
    },
    endorsed: false,
    apiVersion: '0.3.3',
    name: 'crvRenWBTC yVault',
    displayName: 'crvRENBTC',
    updated: 1617904836,
    fees: {
      special: {},
      general: {
        managementFee: 200,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'Curve.fi renBTC/wBTC',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x49849C98ae39Fff122806C06791Fa73784FB3675/logo-128.png',
      symbol: 'crvRenWBTC',
      address: '0x49849C98ae39Fff122806C06791Fa73784FB3675',
      displayName: 'crvRENBTC',
      decimals: 18,
    },
    decimals: 18,
    emergencyShutdown: false,
    tags: [],
    type: 'v2',
  },
  {
    inception: 10650221,
    icon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0xACd43E627e64355f1861cEC6d3a6688B31a6F952/logo-128.png',
    symbol: 'yDAI',
    apy: {
      description: 'Price per share - One month sample',
      type: 'pricePerShareV1OneMonth',
      data: {
        withdrawalFee: 0.005,
        grossApy: 0.1744722027952571,
        oneWeekSample: 0.1265367912523213,
        oneMonthSample: 0.1395777622362057,
        netApy: 0.1395777622362057,
      },
      composite: false,
      recommended: 0.1395777622362057,
    },
    address: '0xACd43E627e64355f1861cEC6d3a6688B31a6F952',
    endorsed: true,
    strategies: [
      {
        name: 'StrategyDAI3pool',
        address: '0x2F90c531857a2086669520e772E9d433BbfD5496',
      },
    ],
    tvl: {
      totalAssets: 1.3301158830710106e25,
      value: '13217454.638188',
      price: 0.993707,
    },
    name: 'yearn Dai Stablecoin',
    displayName: 'DAI',
    updated: 1617904836,
    fees: {
      special: {
        keepCrv: 0,
      },
      general: {
        withdrawalFee: 50,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'Dai Stablecoin',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo-128.png',
      symbol: 'DAI',
      address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      displayName: 'DAI',
      decimals: 18,
    },
    decimals: 18,
    type: 'v1',
  },
  {
    inception: 11974933,
    icon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x1B5eb1173D2Bf770e50F10410C9a96F7a8eB6e75/logo-128.png',
    symbol: 'yvusdp3CRV',
    apy: {
      description: 'Pool APY + Boosted CRV APY',
      type: 'curve',
      data: {
        totalApy: 0.6616688114263077,
        netApy: 0.46563639506684795,
        currentBoost: 1.3798013970019694,
        boostedApr: 0.5227322697967836,
        tokenRewardsApr: 0,
        poolApy: 0.007304365553582261,
        baseApr: 0.37884602155975167,
      },
      composite: true,
      recommended: 0.46563639506684795,
    },
    address: '0x1B5eb1173D2Bf770e50F10410C9a96F7a8eB6e75',
    endorsed: true,
    strategies: [
      {
        name: 'StrategyCurveUSDPVoterProxy',
        address: '0x8c151a8F106Bad20A501DC758c19Fab28a040759',
      },
    ],
    tvl: {
      totalAssets: 5.637515237254746e25,
      value: '56512893.858466',
      price: 1.0024433013503524,
    },
    name: 'yearn Curve.fi USDP/3Crv',
    displayName: 'crvUSDP',
    updated: 1617904836,
    fees: {
      special: {
        keepCrv: 1000,
      },
      general: {
        withdrawalFee: 50,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'Curve.fi USDP/3Crv',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x7Eb40E450b9655f4B3cC4259BCC731c63ff55ae6/logo-128.png',
      symbol: 'usdp3CRV',
      address: '0x7Eb40E450b9655f4B3cC4259BCC731c63ff55ae6',
      displayName: 'crvUSDP',
      decimals: 18,
    },
    decimals: 18,
    type: 'v1',
  },
  {
    inception: 10716120,
    icon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x2994529C0652D127b7842094103715ec5299bBed/logo-128.png',
    symbol: 'yyDAI+yUSDC+yUSDT+yBUSD',
    apy: {
      description: 'Pool APY + Boosted CRV APY',
      type: 'curve',
      data: {
        totalApy: 0.19692913671919157,
        netApy: 0.17357306027652808,
        currentBoost: 1.4594137805230603,
        boostedApr: 0.10946824354173454,
        tokenRewardsApr: 0,
        poolApy: 0.07407435784093268,
        baseApr: 0.07500836637468274,
      },
      composite: true,
      recommended: 0.17357306027652808,
    },
    address: '0x2994529C0652D127b7842094103715ec5299bBed',
    endorsed: true,
    strategies: [
      {
        name: 'StrategyCurveBUSDVoterProxy',
        address: '0x112570655b32A8c747845E0215ad139661e66E7F',
      },
    ],
    tvl: {
      totalAssets: 2.5913960298957944e25,
      value: '28330902.871053',
      price: 1.0932679738724396,
    },
    name: 'yearn Curve.fi yDAI/yUSDC/yUSDT/yBUSD',
    displayName: 'crvBUSD',
    updated: 1617904836,
    fees: {
      special: {
        keepCrv: 1000,
      },
      general: {
        withdrawalFee: 50,
        performanceFee: 1000,
      },
    },
    token: {
      name: 'Curve.fi yDAI/yUSDC/yUSDT/yBUSD',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x3B3Ac5386837Dc563660FB6a0937DFAa5924333B/logo-128.png',
      symbol: 'yDAI+yUSDC+yUSDT+yBUSD',
      address: '0x3B3Ac5386837Dc563660FB6a0937DFAa5924333B',
      displayName: 'crvBUSD',
      decimals: 18,
    },
    decimals: 18,
    type: 'v1',
  },
  {
    inception: 11993427,
    icon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0xE14d13d8B3b85aF791b2AADD661cDBd5E6097Db1/logo-128.png',
    symbol: 'yvYFI',
    apy: {
      description: 'Price per share - One month sample',
      type: 'pricePerShareV2OneMonth',
      data: {
        grossApy: 0.1305587690468177,
        managementFee: 0.02,
        oneWeekSample: 0.011887796734403393,
        oneMonthSample: 0.08844701523745417,
        netApy: 0.08844701523745417,
        performanceFee: 0.2,
      },
      composite: false,
      recommended: 0.08844701523745417,
    },
    address: '0xE14d13d8B3b85aF791b2AADD661cDBd5E6097Db1',
    endorsed: true,
    strategies: [
      {
        name: 'StrategyLenderYieldOptimiser',
        address: '0x6a97FC93e39b3f792f1fD6e01565ff412B002D20',
      },
      {
        name: 'StrategyMakerYFIDAIDelegate',
        address: '0x4730D10703155Ef4a448B17b0eaf3468fD4fb02d',
      },
    ],
    tvl: {
      totalAssets: 4.358825852685355e21,
      value: '204571610.34295',
      price: 46932.733093,
    },
    apiVersion: '0.3.2',
    name: 'YFI yVault',
    displayName: 'YFI',
    updated: 1617904836,
    fees: {
      special: {},
      general: {
        managementFee: 200,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'yearn.finance',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e/logo-128.png',
      symbol: 'YFI',
      address: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
      displayName: 'YFI',
      decimals: 18,
    },
    decimals: 18,
    emergencyShutdown: false,
    tags: [],
    type: 'v2',
  },
  {
    inception: 11860576,
    icon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0xE625F5923303f1CE7A43ACFEFd11fd12f30DbcA4/logo-128.png',
    symbol: 'yvankrCRV',
    apy: {
      description: 'Pool APY + Boosted CRV APY',
      type: 'curve',
      data: {
        totalApy: 0.16297683653803224,
        netApy: 0.1168577783095682,
        currentBoost: 1.8659651838660045,
        boostedApr: 0.14872337412457778,
        tokenRewardsApr: 0.004444860234053558,
        poolApy: 0,
        baseApr: 0.07970318814654671,
      },
      composite: true,
      recommended: 0.1168577783095682,
    },
    address: '0xE625F5923303f1CE7A43ACFEFd11fd12f30DbcA4',
    endorsed: true,
    strategies: [
      {
        name: 'StrategyCurveAnkrVoterProxy',
        address: '0xBdCeae91e10A80dbD7ad5e884c86EAe56b075Caa',
      },
    ],
    tvl: {
      totalAssets: 1.2792717764391972e21,
      value: '2673994.702863',
      price: 2090.2475549848673,
    },
    name: 'yearn Curve.fi ETH/aETH',
    displayName: 'crvANKR',
    updated: 1617904836,
    fees: {
      special: {
        keepCrv: 1000,
      },
      general: {
        withdrawalFee: 50,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'Curve.fi ETH/aETH',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0xaA17A236F2bAdc98DDc0Cf999AbB47D47Fc0A6Cf/logo-128.png',
      symbol: 'ankrCRV',
      address: '0xaA17A236F2bAdc98DDc0Cf999AbB47D47Fc0A6Cf',
      displayName: 'crvANKR',
      decimals: 18,
    },
    decimals: 18,
    type: 'v1',
  },
  {
    inception: 10599657,
    icon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x29E240CFD7946BA20895a7a02eDb25C210f9f324/logo-128.png',
    symbol: 'yaLINK',
    apy: {
      description: 'Price per share - One month sample',
      type: 'pricePerShareV1OneMonth',
      data: {
        withdrawalFee: 0,
        grossApy: 0.00010757240635402869,
        oneWeekSample: 0.000010762581731827924,
        oneMonthSample: 0.00010757240635402869,
        netApy: 0.00010757240635402869,
      },
      composite: false,
      recommended: 0.00010757240635402869,
    },
    address: '0x29E240CFD7946BA20895a7a02eDb25C210f9f324',
    endorsed: true,
    strategies: [
      {
        name: 'StrategyVaultUSDC',
        address: '0x25fAcA21dd2Ad7eDB3a027d543e617496820d8d6',
      },
    ],
    tvl: {
      totalAssets: 6.709710754949436e23,
      value: '21585014.027081',
      price: 32.169813,
    },
    name: 'yearn Aave Interest bearing LINK',
    displayName: 'aLINK',
    updated: 1617904836,
    fees: {
      special: {
        keepCrv: 0,
      },
      general: {
        withdrawalFee: 0,
        performanceFee: 0,
      },
    },
    token: {
      name: 'Aave Interest bearing LINK',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0xA64BD6C70Cb9051F6A9ba1F163Fdc07E0DfB5F84/logo-128.png',
      symbol: 'aLINK',
      address: '0xA64BD6C70Cb9051F6A9ba1F163Fdc07E0DfB5F84',
      displayName: 'aLINK',
      decimals: 18,
    },
    decimals: 18,
    type: 'v1',
  },
  {
    inception: 10695285,
    icon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0xBA2E7Fed597fd0E3e70f5130BcDbbFE06bB94fe1/logo-128.png',
    symbol: 'yYFI',
    apy: {
      description: 'Price per share - One month sample',
      type: 'pricePerShareV1OneMonth',
      data: {
        withdrawalFee: 0,
        grossApy: 0,
        oneWeekSample: 0,
        oneMonthSample: 0,
        netApy: 0,
      },
      composite: false,
      recommended: 0,
    },
    address: '0xBA2E7Fed597fd0E3e70f5130BcDbbFE06bB94fe1',
    endorsed: true,
    strategies: [
      {
        name: 'StrategyUnnamedV1',
        address: '0x395F93350D5102B6139Abfc84a7D6ee70488797C',
      },
    ],
    tvl: {
      totalAssets: 115739715120604040000,
      value: '5431981.158015',
      price: 46932.733093,
    },
    name: 'yearn yearn.finance',
    displayName: 'YFI',
    updated: 1617904836,
    fees: {
      special: {
        keepCrv: 0,
      },
      general: {
        withdrawalFee: 0,
        performanceFee: 0,
      },
    },
    token: {
      name: 'yearn.finance',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e/logo-128.png',
      symbol: 'YFI',
      address: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
      displayName: 'YFI',
      decimals: 18,
    },
    decimals: 18,
    type: 'v1',
  },
  {
    inception: 11841312,
    icon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x5334e150B938dd2b6bd040D9c4a03Cff0cED3765/logo-128.png',
    symbol: 'yvcrvRenWBTC',
    apy: {
      description: 'Pool APY + Boosted CRV APY',
      type: 'curve',
      data: {
        totalApy: 0.065525265098055,
        netApy: 0.050665050561667355,
        currentBoost: 2.5,
        boostedApr: 0.051045682565255775,
        tokenRewardsApr: 0,
        poolApy: 0.012764211729238912,
        baseApr: 0.02041827302610231,
      },
      composite: true,
      recommended: 0.050665050561667355,
    },
    address: '0x5334e150B938dd2b6bd040D9c4a03Cff0cED3765',
    endorsed: true,
    strategies: [
      {
        name: 'StrategyCurveRENVoterProxy',
        address: '0x76B29E824C183dBbE4b27fe5D8EdF0f926340750',
      },
    ],
    tvl: {
      totalAssets: 1256149443593346800,
      value: '73537.455119',
      price: 58541.96369225578,
    },
    name: 'yearn Curve.fi renBTC/wBTC',
    displayName: 'crvRENBTC',
    updated: 1617904836,
    fees: {
      special: {
        keepCrv: 1000,
      },
      general: {
        withdrawalFee: 50,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'Curve.fi renBTC/wBTC',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0x49849C98ae39Fff122806C06791Fa73784FB3675/logo-128.png',
      symbol: 'crvRenWBTC',
      address: '0x49849C98ae39Fff122806C06791Fa73784FB3675',
      displayName: 'crvRENBTC',
      decimals: 18,
    },
    decimals: 18,
    type: 'v1',
  },
  {
    inception: 11777410,
    icon:
      'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0xE0db48B4F71752C4bEf16De1DBD042B82976b8C7/logo-128.png',
    symbol: 'yvmUSD',
    apy: {
      description: 'Price per share - One month sample',
      type: 'pricePerShareV1OneMonth',
      data: {
        withdrawalFee: 0.005,
        grossApy: 0.2478429091843499,
        oneWeekSample: 0.16341498044442812,
        oneMonthSample: 0.19827432734747993,
        netApy: 0.19827432734747993,
      },
      composite: false,
      recommended: 0.19827432734747993,
    },
    address: '0xE0db48B4F71752C4bEf16De1DBD042B82976b8C7',
    endorsed: true,
    strategies: [
      {
        name: 'StrategymUSDCurve',
        address: '0x6f1EbF5BBc5e32fffB6B3d237C3564C15134B8cF',
      },
    ],
    tvl: {
      totalAssets: 1.0146098284452288e22,
      value: '10481.741362',
      price: 1.033081,
    },
    name: 'yearn mStable USD',
    displayName: 'mUSD',
    updated: 1617904836,
    fees: {
      special: {
        keepCrv: 0,
      },
      general: {
        withdrawalFee: 50,
        performanceFee: 2000,
      },
    },
    token: {
      name: 'mStable USD',
      icon:
        'https://raw.githack.com/yearn/yearn-assets/master/icons/tokens/0xe2f2a5C287993345a840Db3B0845fbC70f5935a5/logo-128.png',
      symbol: 'mUSD',
      address: '0xe2f2a5C287993345a840Db3B0845fbC70f5935a5',
      displayName: 'mUSD',
      decimals: 18,
    },
    decimals: 18,
    type: 'v1',
  },
]
