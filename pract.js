function solution() {
    if (n === 0) return 1

    let count = 0

    if (n < 0) n = Math.abs(n)

    while (n > 0) {
        n = Math.floor(n / 10);
        count++
    }

    return count
}

let n = 0
console.log(solution())