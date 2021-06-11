function majorityElement(arr_input = []) {
    let repeat_value = {};
    for (let value of arr_input) {
        repeat_value[value] = repeat_value[value] ? repeat_value[value] + 1 : 1;
    }

    let obj_keys = Object.keys(repeat_value);
    let obj_values = Object.values(repeat_value);

    let arr_len = arr_input.length;
    let max_ele = Math.max(...obj_values);

    if ((arr_len / 2) < max_ele) {
        let ele_index = obj_values.findIndex(val => val == max_ele);
        console.log(obj_keys[ele_index]);
    } else {
        console.log('No Majority Element');
    }
}

majorityElement([3, 3, 4, 2, 4, 4, 2, 4, 4]);
// majorityElement([3, 3, 4, 2, 4, 4, 2, 4]);