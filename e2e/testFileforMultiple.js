module.exports = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'mul3mul5'
  }

  if (num % 3 === 0) {
    return 'mul3'
  }

  if (num % 5 === 0) {
    return 'mul5'
  }
}
