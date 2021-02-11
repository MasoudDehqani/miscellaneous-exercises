let array = [1, [3, 8], 57, 6, {n: 2}]

function repeatBy(arr, repeat) {
	let repeatedArray = []
	for (let i = 0; i < arr.length; i++) {
		let repeated = 0
		while (repeated < repeat) {
			repeatedArray.push(arr[i])
			repeated++
		}
	}
	return repeatedArray
}

console.log(repeatBy(array, 2))