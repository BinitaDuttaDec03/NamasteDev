function solution() {
  const n = a.length

  for (let i = 0; i < n - 1; i++) {
    let min = i

    for (let j = i + 1; j < n; j++) {
      if (a[min] > a[j]) {
        min = j
      }
    }

    if (min !== i) {
      [a[i], a[min]] = [a[min], a[i]]
    }
  }
}

const a = [2, 0, -9, 3, 2, 3]
solution()
console.log(a)