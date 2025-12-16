const nums = [4, 5, 1, 3, 9];

function sort(nums) {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    let minIdx = i;

    for (let j = i + 1; j < n; j++) {
      if (nums[j] < nums[minIdx]) {
        minIdx = j;
      }
    }

    if (minIdx != i) [nums[i], nums[minIdx]] = [nums[minIdx], nums[i]];
  }
}

sort(nums);
console.log(nums);
