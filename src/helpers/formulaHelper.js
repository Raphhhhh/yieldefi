export function getApy(t1, t0, days) {
  const mpr = (t1 - t0) / t0
  const apr = mpr * (365 / days)
  const apy = Math.pow(1 + apr / 52, 52) - 1
  return apy
}
