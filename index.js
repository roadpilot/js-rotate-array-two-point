/*
Given an array, rotate the array to the right by k steps, where k is non-negative.

Constraints:
1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
0 <= k <= 105
*/

const reverseReverse = (array, start, end) => {
  while (start < end) {
    [array[start++], array[end--]] = [array[end], array[start]]
  }
}

const rotate = function(nums, k) {
  k = k % nums.length
  if (k === 0) return nums
  nums.reverse()
  reverseReverse(nums, 0, k - 1)
  reverseReverse(nums, k, nums.length - 1)
}

/*
looking at our constraints above, there's nothing keeping 'k' smaller than the length of the array.
In order to avoid rotating through the entire array one or more times, we can perform the operation
k & nums.length to assign k either back to itself (smaller number % larger number = smaller number), 
OR it'll assign k to equal the remainder, which will be the total number of moves we need to make in the event
that k is larger than nums.length
ex. k = 10, nums.length = 3
10 % 3 = 1, so we only need to rotate right one time since the first nine rotations will just result in the orig array

nums = [1,2,3,4,5,6,7], k = 3
call nums.reverse()
nums = [7,6,5,4,3,2,1]
Now we can reverse parts of the array twice using a helper function and destructuring assignment
First we'll reverse from index 0 to k - 1
[5,6,7,4,3,2,1]
and next we'll reverse from index k to the end
[5,6,7,1,2,3,4]
And that's it! Cool, huh?!
*/