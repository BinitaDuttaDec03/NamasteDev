let arr = [6, 5, 7, 0, 0, 1, 2, 3]

function solution(a) {
    let n = a.length;

    for (let i = 0; i < n - 1; i++) {
        let minIdx = i

        for (let j = i + 1; j < n; j++) {
            if (a[minIdx] > a[j]) {
                minIdx = j
            }
        }

        if (i != minIdx) {
            [a[i], a[minIdx]] = [a[minIdx], a[i]]
        }
    }
}

solution(arr)
console.log(arr)