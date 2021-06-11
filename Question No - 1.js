function rotate(d, n, arr_input = []) {
    let left_values = [];
    let remaining_values = [];

    for (let value of arr_input) {
        if (0 < d) {
            left_values.push(value);
            d -= 1;
        } else {
            remaining_values.push(value);
        }
    }
    console.log(...remaining_values, ...left_values);
}
rotate(2, 5, [1, 2, 3, 4, 5]);