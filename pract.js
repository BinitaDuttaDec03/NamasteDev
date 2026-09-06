let arr = [9, 8, 6, 0, 0, 1, 2]

function solution(a) {
    let n = a.length;

    for (let i = 0; i < n - 1; i++) {
        let curr = a[i + 1]
        let prev = i

        while (prev >= 0) {
            if (curr >= a[prev])
                break

            a[prev + 1] = a[prev]
            prev--
        }

        a[prev + 1] = curr
    }
}

solution(arr)
console.log(arr)