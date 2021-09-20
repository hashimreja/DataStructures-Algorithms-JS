//Bubble sort
/**
 swapping the numbers by nested loop
 */
let x = [7, 3, 5, 7, 5, 7, 8, 9, 3, 1]

function bubbleSort(x) {
    for (var i = 0; i < x.length; i++) {
        for (var j = 0; j < x.length - i; j++) {
            if (x[j] > x[j + 1]) {
                let a = x[j];
                let b = x[j + 1];
                x[j] = b;
                x[j + 1] = a;

            }
        }
    }
    return x;
}
/*Selection sort*/
/**
 select the minimum value and place it to the top
 */
function selectionSort(x) {
    for (var i = 0; i < x.length; i++) {
        let index = i;
        for (var j = i + 1; j < x.length; j++) {
            if (x[j] < x[i]) {
                index = j;
            }
        }
        let temp = x[i];
        x[i] = x[index];
        x[index] = temp;
    }
    return x;
}

/**
 insertion sort
 [4,7,5,1,9]
firstslice  secondslice
 [4] ,      [7,5,1,9]
--> takes second element 7 and then do reverse bubble sorting in first array
 */
function insertionSort(x) {
    for (var i = 1; i < x.length; i++) {
        for (var j = i; j > 0; j--) {
            if (j[i] < j[i - 1]) {
                [j[i], j[i - 1]] = [j[i - 1], j[i]]
            }
        }
    }
    return x;
}

function merge(leftArr, rightArr) {
    let output = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            output.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            output.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }
    return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]
}

function mergeSort(x) {
    if (x.length <= 1) {
        //break statement is mandatory while writing a recursive function
        return x;
    }
    let middleIndex = Math.floor(x.length / 2);
    let leftArray = x.slice(0, middleIndex);
    let rightArray = x.slice(middleIndex);
    return merge(mergeSort(leftArray), mergeSort(rightArray));
}

/**
 quick sort example
                        1,4,8,3
                           3
                        /     \
                       1       4 8
                                8
                               /
                              4
                        small to the left and big to the right
                        1 3 4 8
                        
                         
 */

function quickSort(x) {
    if (x.length <= 1) {
        return x;
    }
    let PivotNumber = x[x.length - 1];
    let leftArr = [];
    let rightArr = [];
    for (var i = 0; i < x.length - 1; i++) {
        if (x[i] < PivotNumber) {
            leftArr.push(x[i])
        } else {
            rightArr.push(x[i])
        }
    }
    if (leftArr.length > 0 && rightArr.length > 0) {
        return [...quickSort(leftArr), PivotNumber, ...quickSort(rightArr)]
    } else if (leftArr.length > 0) {
        return [...quickSort(leftArr), PivotNumber]
    } else {
        return [PivotNumber, ...quickSort(rightArr)]
    }
}

console.log(quickSort(x))