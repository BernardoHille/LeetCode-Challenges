/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeviation = function(nums) {
  // First, we multiply all odd numbers by 2 to ensure we can only divide by 2 later
  nums = nums.map(num => num % 2 === 0 ? num : num * 2);
  let minDeviation = Infinity;
  let minValue = Math.min(...nums);
  
  // We use a priority queue (implemented as a binary heap) to keep track of the smallest odd number
  let maxHeap = new MaxHeap();
  for (let num of nums) {
    maxHeap.insert(num);
  }
  
  while (true) {
    // We get the current maximum odd number in the heap
    let maxOdd = maxHeap.deleteMax();
    // We update the minimum deviation if needed
    minDeviation = Math.min(minDeviation, maxOdd - minValue);
    // If the maximum odd number is even, we divide it by 2 and add it back to the heap
    if (maxOdd % 2 === 0) {
      maxHeap.insert(maxOdd / 2);
      minValue = Math.min(minValue, maxOdd / 2);
    } else {
      // If the maximum odd number is odd, we can't divide it by 2 anymore, so we break out of the loop
      break;
    }
  }
  
  return minDeviation;
}

class MaxHeap {
  constructor() {
    this.heap = [];
  }
  
  insert(val) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }
  
  deleteMax() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    
    let max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return max;
  }
  
  bubbleUp(idx) {
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (this.heap[parentIdx] < this.heap[idx]) {
        [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
        idx = parentIdx;
      } else {
        break;
      }
    }
  }
  
  bubbleDown(idx) {
    while (idx * 2 + 1 < this.heap.length) {
      let leftChildIdx = idx * 2 + 1;
      let rightChildIdx = idx * 2 + 2;
      let maxChildIdx = rightChildIdx < this.heap.length && this.heap[rightChildIdx] > this.heap[leftChildIdx] ? rightChildIdx : leftChildIdx;
      if (this.heap[maxChildIdx] > this.heap[idx]) {
        [this.heap[maxChildIdx], this.heap[idx]] = [this.heap[idx], this.heap[maxChildIdx]];
        idx = maxChildIdx;
      } else {
        break;
      }
    }
  } 
};