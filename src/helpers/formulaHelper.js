export function getApy(t1, t0) {
  const mpr = (t1 - t0) / t0
  const apr = mpr * 12
  const apy = Math.pow(1 + apr / 12, 12) - 1
  return apy
}
