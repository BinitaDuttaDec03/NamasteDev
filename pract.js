let arr = [1, 2, 3, 4, 5, 6]

function solution(a) {
    let n = a.length;

    for (let i = 0; i < n; i++) {
        let isSwapped = false

        for (let j = 0; j < n - 1 - i; j++) {
            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]]
                isSwapped = true
            }
        }

        if (!isSwapped) return
    }
}

solution(arr)
console.log(arr)