// （这是一个 交互式问题 ）

// 给你一个 山脉数组 mountainArr，请你返回能够使得 mountainArr.get(index) 等于 target 最小 的下标 index 值。

// 如果不存在这样的下标 index，就请返回 -1。

//  

// 所谓山脉数组，即数组 A 假如是一个山脉数组的话，需要满足如下条件：

// 首先，A.length >= 3

// 其次，在 0 < i < A.length - 1 条件下，存在 i 使得：

// A[0] < A[1] < ... A[i-1] < A[i]
// A[i] > A[i+1] > ... > A[A.length - 1]
//  

// 你将 不能直接访问该山脉数组，必须通过 MountainArray 接口来获取数据：

// MountainArray.get(k) - 会返回数组中索引为k 的元素（下标从 0 开始）
// MountainArray.length() - 会返回该数组的长度

function Mountain(arr){
  this.length = function() {
    return arr.length;
  } 
  this.get = function(i){
    return arr[i]
  }
};

function findIndex(target, arr) {
  var MountainArray = new Mountain(arr)
  const length = MountainArray.length()
  let hasFind = true
  
  let index = -1
  let num = length % 2 === 0 ? length/2 : length/2 + 0.5
  if(arr[num] === )
  if(arr[num1] < ) {
    if(arr[num1] === target) return num1
    if(arr[num2] === target) return num2
    if(arr[num2] < target)

  }
  for()

  return index
}

console.log('*****', findIndex(3, [0,1,2,4,2,1]))
