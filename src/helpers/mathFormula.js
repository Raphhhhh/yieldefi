export function getApy(fpps1, vp1, fpps0, vp0) {
  let result = 0
  console.log({
    fpps1,
    fpps0,
    vp1,
    vp0,
  })
  const percFpps = ((fpps1 - fpps0) / fpps0) * 100
  console.log("percFpps pourcentage d'augmenation de fpps", percFpps)
  const percvps = ((vp1 - vp0) / vp0) * 100
  console.log("percvps pourcentage d'augmenation de vp", percvps)
  const a = 1 + percFpps / 100
  console.log('a', a)
  const b = 1 + percvps / 100
  console.log('b', b)
  console.log('Monthly augment', a * b)
  const apm = (a * b) / 100
  result = Math.pow(1 + apm, 12) - 1
  return result
}

export function getApy2(fpps1, vp1, fpps0, vp0) {
  let result = 0
  console.log({
    fpps1,
    fpps0,
    vp1,
    vp0,
  })
  const diff = fpps1 - fpps0
  console.log('diff', diff)
  result = Math.pow(1 + (diff * 12) / 12, 12) - 1
  return result
}
