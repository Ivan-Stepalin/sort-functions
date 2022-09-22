const arr = [1000, 5, 6, 2, 100, 20, 30, 25, 7];
function bubbleSort() {
    const newArr = arr;
    for(let j = 0; j < newArr.length - 1; j++) {
        for (let i = 0; i < newArr.length - j; i++) {
            if(newArr[i] > newArr[i+1]) {
                const arrTemp = [newArr[i], newArr[i+1]]
                newArr[i+1] = arrTemp[0]
                newArr[i] = arrTemp[1]
            }
        }
    }
}
bubbleSort()