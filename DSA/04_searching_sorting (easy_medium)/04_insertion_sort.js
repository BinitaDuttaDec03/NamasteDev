const nums = [4, 5, 1, 3, 9];

function sort(nums) {
  const n = nums.length;

  for (let i = 1; i < n; i++) {
    let curr = nums[i];
    let prev = i - 1;

    while (prev >= 0 && nums[prev] > curr) {
      nums[prev + 1] = nums[prev];
      prev--;
    }

    nums[prev + 1] = curr;
  }
}

sort(nums);
console.log(nums);
