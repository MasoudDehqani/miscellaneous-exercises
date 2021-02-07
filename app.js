// function getDuplicates(arr) {
//   let dups = []
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       // checking reference types
//       if (typeof arr[i] === 'object' && typeof arr[j] === 'object') {
//         if (i !== j && JSON.stringify(arr[i]) === JSON.stringify(arr[j])) {
//           !(JSON.stringify(dups).includes(JSON.stringify(arr[i]))) && dups.push(arr[i])
//         }
//         continue
//       }
//       // checking primitive types
//       if (i !== j && arr[i] === arr[j]) {
//         !(dups.includes(arr[i])) && dups.push(arr[i])
//       }
//     }
//   }
//   console.log(dups)
// }
  
// getDuplicates([1, 2, [31, 7], 1, true, '1', [31, 7], 25, true, 1, [0, 24], [31, 7], 25])
  
// function seperateOddEven(arr) {
//   arr = arr.filter( e => typeof e === 'number')
//   const listOfOddEven = {odd: [], even: []}
//   arr.forEach( e => e % 2 === 0 ? listOfOddEven['even'].push(e) : listOfOddEven.odd.push(e))
//   console.log(listOfOddEven)
// }
  
// seperateOddEven([true, 1, 2, 3, 10, 201, false, 0, 15, 8, 77, '123', 92, 44])
  
// function findMax(arr) {
//   arr = arr.filter( e => typeof e === 'number')
//   let max = arr[0]
//   for (let i of arr) {
//     i > max && (max = i)
//   }
//   return max
// }
  
// console.log(findMax([110, 1, 240, 5, 28, 'abc', 241, false, 3]))


const root = document.querySelector('#root')
const button = document.getElementsByTagName('button')[0]
console.log(root)
button.onclick = () => console.log('789')

