let flattened = []
let array = [1 , [[1], 3], 5, [[10]], [21, [33, 0, [90, 12]]]]

function flatten(arr) {
  arr.forEach(element => {
    if (Array.isArray(element)) {
      flatten(element)
    } else {
      flattened.push(element)
    }
  });
}

flatten(array)

console.log(flattened)