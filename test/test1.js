const {Worker, isMainThread} = require('worker_threads')

function doRepeat(func, times, wait) {
  return (text) => {
    let count = 0
    let interval
    interval = setInterval(() => {
      count++
      if (count === times) {
        clearInterval(interval)
      }
      func.apply(this. arguments)
      console.log(text)
    }, wait)
  }
}

function func (flag) {
  if (isMainThread) {
    new Worker(__filename, {env: {flag: flag}})
  } else {
    console.log(111, +new Date())
    for (var i = 0; i < 10000000000; i++) {
      let a = i
    }
    console.log(222, +new Date())
  }
}

var flagAAA = 1
const repeatFun =  doRepeat(() => {
  func(flagAAA++)
}, 5, 1000)

if (isMainThread) {
  repeatFun('hello world')
} else {
  func()
}


function deepCopy (obj) {
  const tempObj = Array.isArray(obj) ? [] : {}
  if (obj && typeof obj === 'object') {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] && typeof obj[key] === 'object') {
          tempObj[key] = deepCopy(obj[key])
        } else {
          tempObj[key] = obj[key]
        }
      }
    }
  }
  return tempObj
}

const obj1 = {
  a: ['12', '23'],
  b: 111
}

const obj2 = [
  ['12', '23'],
  111
]

const testA = deepCopy(obj1)
const testB = deepCopy(obj2)
obj1.c = 123
// obj2[0].push(123)
// console.log(obj1)
// console.log(testA)
// console.log(obj2)
// console.log(testB)

// 第三题
// 浏览器缓存分为强制缓存和协商缓存。发起http请求时，在响应头中会有对应的缓存标识Cache-Control和Expires，分别代表缓存方式和过期时间。请求时会先向浏览器缓存查找，并检查过期时间，如果没有过期，返回，如果过期，重新向服务器请求。协商缓存发生在强制缓存失效后，浏览器携带缓存标识向服务器发起请求，然后由服务器决定是否使用缓存

// 第四题
const getValFromPath = (obj, path) => path.split('.').reduce((acc, cur) =>  acc && acc[cur], obj)
const obj = { a: { b: { c: 1} } }
const a = getValFromPath(obj, 'a.b.c')
const b = getValFromPath(obj, 'a.b.c.c.d')
// console.log(a)
// console.log(b)
