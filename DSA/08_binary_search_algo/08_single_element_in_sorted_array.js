/* Problem statement (Leetcode - 540)
    You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly    once.

    Return the single element that appears only once.

    Your solution must run in O(log n) time and O(1) space.

    Example 1:

    Input: nums = [1,1,2,3,3,4,4,8,8]
    Output: 2
    Example 2:

    Input: nums = [3,3,7,7,10,11,11]
    Output: 10
    
    Constraints:

    1 <= nums.length <= 105
    0 <= nums[i] <= 105
*/

var singleNonDuplicate = function (nums) {
    let l = 0, r = nums.length - 1;

    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2);

        if (nums[mid] === nums[mid - 1]) {
            // mid element equals to the previous element
            let leftLength = mid - 1 - l;

            if (leftLength % 2 !== 0) r = mid - 2; // odd part is on the left side
            else l = mid + 1; // odd part is on the right side    
        } else if (nums[mid] === nums[mid + 1]) {
            // mid element equals to the next element
            let leftLength = mid - l;

            if (leftLength % 2 !== 0) r = mid - 1; // odd part is on the left side
            else l = mid + 2; // odd part is on the right side    
        } else {
            // unique element
            return nums[mid];
        }
    }
};