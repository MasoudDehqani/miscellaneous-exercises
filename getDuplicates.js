function getDuplicates(arr) {
  let dups = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      // checking reference types
      if (typeof arr[i] === 'object' && typeof arr[j] === 'object') {
        if (i !== j && JSON.stringify(arr[i]) === JSON.stringify(arr[j])) {
          !(JSON.stringify(dups).includes(JSON.stringify(arr[i]))) && dups.push(arr[i])
        }
        continue
      }
      // checking primitive types
      if (i !== j && arr[i] === arr[j]) {
        !(dups.includes(arr[i])) && dups.push(arr[i])
      }
    }
  }
  console.log(dups)
}
  
getDuplicates([1, 2, [31, 7], 1, true, '1', [31, 7], 25, true, 1, [0, 24], [31, 7], 25])