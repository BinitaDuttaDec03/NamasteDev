/* Problem Statement (Leetcode - 739)
    Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

    Example 1:

    Input: temperatures = [73,74,75,71,69,72,76,73]
    Output: [1,1,4,2,1,1,0,0]
    Example 2:

    Input: temperatures = [30,40,50,60]
    Output: [1,1,1,0]
    Example 3:

    Input: temperatures = [30,60,90]
    Output: [1,1,0]

    Constraints:

    1 <= temperatures.length <= 105
    30 <= temperatures[i] <= 100
*/

const dailyTemperatures = function (arr) {
    let n = arr.length;
    let ans = new Array(n).fill(0);

    let st = [];

    for (let i = n - 1; i >= 0; i--) {
        let top = st[st.length - 1];

        if (top && arr[i] < arr[top]) {
            ans[i] = top - i;
        } else {
            while (st.length) {
                top = st[st.length - 1];

                if (arr[i] < arr[top]) {
                    ans[i] = top - i;
                    break;
                } else {
                    st.pop();
                }
            }
        }

        st.push(i);
    }

    return ans;
};

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
console.log(dailyTemperatures(temperatures))