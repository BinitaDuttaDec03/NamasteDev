const nums = [4, 5, 1, 3, 9];

// Approach - 1
// function sort(nums) {
//   let n = arr.length;

//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
// }

// sort(nums);
// console.log(nums);

// Approach - 2
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
