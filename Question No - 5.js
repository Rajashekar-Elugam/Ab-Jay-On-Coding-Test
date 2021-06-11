function maximumNumberOf1s(arr_2D) {
    let sum = [];
    for (let row of arr_2D) {
        let count = 0;
        for (let one of row) {
            if (one === 1) {
                count += 1;
            }
        }
        sum.push(count);
    }
    console.log(sum.indexOf(Math.max(...sum)));
}

let arr_2D = [
    [0, 1, 1, 1],
    [0, 0, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 0, 0]
];
maximumNumberOf1s(arr_2D);