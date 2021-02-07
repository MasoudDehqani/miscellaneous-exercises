function findMax(arr) {
  arr = arr.filter( e => typeof e === 'number')
  let max = arr[0]
  for (let i of arr) {
    i > max && (max = i)
  }
  return max
}
  
console.log(findMax([110, 1, 240, 5, 28, 'abc', 241, false, 3]))