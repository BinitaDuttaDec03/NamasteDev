const nums = [4, 5, 1, 3, 9];

function sort(nums) {
  const n = nums.length;

  for (let i = 0; i < n - 1; i++) {
    let isSwapped = false;

    for (let j = 0; j < n - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        isSwapped = true;
      }
    }

    if (!isSwapped) break;
  }
}

sort(nums);
console.log(nums);
