// console.log('Hello world!')

// let variableName = "hi"
// console.log(variableName)

// parseInt
// parseFloat

// let name = "peppermint"
// console.log(`hello ${name}`)

// array.indexOf()

// const music = { genre: "pop", bpm: 120 }
// console.log(music.genre)

/// forEach()
const myEach = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i])
  }
}
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// myEach(myArray, (a) => console.log(a))
// myEach(myArray, console.log)

// map()
const myMap = (arr, cb) => {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(cb(arr[i]))
  }
  return newArr
}

// console.log(myMap(myArray, (a) => a * 2))

// filter()
const myFilter = (arr, cb) => {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

// console.log(myFilter(myArray, (a) => a % 2 == 0))
// console.log(
//   myFilter(["bread", "water", "ice", "cucumber", "salad"], (s) => s.length == 5)
// )

// some()
const mySome = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      return true
    }
  }
  return false
}

// console.log(mySome(myArray, (a) => a % 11 == 0))

// every()
const myEvery = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    if (!cb(arr[i])) {
      return false
    }
  }
  return true
}

// console.log(myEvery(myArray, (a) => a < 11))
// console.log(myEvery(myArray, (a) => a < 6))
// console.log(myEvery([2, 4, 6, 8], (a) => a % 2 == 0))

const myReduce = (arr, cb, iv = 0) => {
  let value = iv
  for (let i = 0; i < arr.length; i++) {
    value = cb(value, arr[i])
  }
  return value
}

// console.log(myReduce(myArray, (total, num) => { return total + num }, 0))
// console.log(myReduce(myArray, (total, num) => { return total - num }, 0 ))

// includes()
const myIncludes = (arr, cb, ii = 0) => {
  for (let i = ii; i < arr.length; i++) {
    if (cb(arr[i])) {
      return true
    }
  }
  return false
}

// console.log(myIncludes(myArray, (a) => a == 5))
// console.log(myIncludes(myArray, (a) => a == 5, 6))
// console.log(myIncludes(myArray, (a) => a == 15))
// console.log(myIncludes(myArray, (a) => a == -7))
// console.log(myIncludes(["cat", "dog"], (a) => a == "cat"))
// console.log(myIncludes(["cat", "dog"], (a) => a == "snake"))

// indexOf
const myIndexOf = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      return i
    }
  }
  return -1
}

// console.log(myIndexOf(myArray, (a) => a == 5))
// console.log(myIndexOf(myArray, (a) => a == 7))
// console.log(myIndexOf(myArray, (a) => a == 89))

// push()
const myPush = (arr, element) => {
  arr[arr.length] = element
  return arr.length
}

// console.log(myPush(myArray, 11)) // 11
// console.log(myPush(myArray, "cat")) // 12
// console.log(myArray) // ... 11, cat

// lastIndexOf()
const myLastIndexOf = (arr, cb) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (cb(arr[i])) {
      return i
    }
  }
  return -1
}

// console.log(myLastIndexOf(myArray, (a) => a == 5))
// console.log(myLastIndexOf(myArray, (a) => a == 7))
// console.log(myLastIndexOf(["cat", "dog", "lizard", "cat"], (a) => a == "cat"))
// console.log(myLastIndexOf(["cat", "dog", "lizard", "cat"], (a) => a == "dog"))

const myObject = {
  a: "cat",
  b: "dog",
  c: "lizard",
  d: 99,
  e: true,
}

// Object.keys()
const grabKeys = (obj) => {
  let keysArray = []
  for (const key in obj) {
    myPush(keysArray, key)
  }
  return keysArray
}

// console.log(grabKeys(myObject))

// Object.values()

const grabValues = (obj) => {
  let valueArray = []
  for (const key in obj) {
    myPush(valueArray, obj[key])
  }
  return valueArray
}

// console.log(grabValues(myObject))

/* Given an array nums, write a function to move all 0's to the end of it
while maintaining the relative order of the non-zero elements. */

moveZeros = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      nums.splice(i, 1)
      nums.push(0)
    }
  }
}

myArray2 = [0, 1, 0, 3, 12]
moveZeros(myArray2)
console.log(myArray2) // output: [1, 3, 12, 0, 0]
