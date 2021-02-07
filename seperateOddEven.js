function seperateOddEven(arr) {
  arr = arr.filter( e => typeof e === 'number')
  const listOfOddEven = {odd: [], even: []}
  arr.forEach( e => e % 2 === 0 ? listOfOddEven['even'].push(e) : listOfOddEven.odd.push(e))
  console.log(listOfOddEven)
}
    
seperateOddEven([true, 1, 2, 3, 10, 201, false, 0, 15, 8, 77, '123', 92, 44])