module.exports = function reverse (n) {
  let finish = String(n).split('')
  finish = finish.reverse()

  let itog = ''

  itog = itog.concat(finish[0],finish[1],finish[2])
  return itog
}
