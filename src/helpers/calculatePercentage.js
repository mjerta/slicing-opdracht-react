function calculatePercentage(firstPrice, priceToCompare) {
  return Math.round(((priceToCompare - firstPrice) / firstPrice) * 100)
}
export default calculatePercentage;