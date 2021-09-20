class Array {
    constructor() {
        this.data = {};
        this.index = 0;
    }
    //ADD ELEMENT
    push(item) {
        this.data[this.index] = item;
        this.index++;
        return item
    }
    //GET ELEMENT  
    get(index) {
        return this.data[index]
    }
    //REMOVE LAST ELEMENT
    pop() {
        let item = this.data[this.index - 1];
        delete this.data[this.index - 1];
        this.index--;
        return item;
    }
    //GET ALL ELEMENTS
    getAll() {
        return [{ index: this.index - 1, data: this.data }]
    }
    //REMOVE CERTAIN ELEMENT
    slice(index) {
        delete this.data[index];
        this.shift(index);
    }
    shift(index) {
        for (var i = index; i < this.index; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.index - 1];
        this.index--;
    }
    //FIND AN ELEMENT
    find(item) {
        for (var i = 0; i < this.index; i++) {
            if (this.data[i] == item) {
                return true;

            }
        }
        return false;
    }
};


// let myArray = new Array();

// let x = myArray.push('hashim');
// x = myArray.push('reja');
// x = myArray.push('hello');
// x = myArray.push('wassup');
// x = myArray.find('yoo')



let x = [0, 3, 4, 31]
let y = [4, 30];

function mergeTwo(arr1, arr2) {
    let merged = [];
    let index1 = 0;
    let index2 = 0;
    let current = 0;

    while (current < (arr1.length + arr2.length)) {
        let unmerged1 = arr1[index1];
        let unmerged2 = arr2[index2];

        // if next comes from arr1
        if (unmerged1 < unmerged2) {
            merged[current] = unmerged1;
            index1++;

            // if next comes from arr2
        } else {
            merged[current] = unmerged2;
            index2++;
        }

        current++;
    }

    return merged;
}

//examples

let nums = [3, 2, 5, 1];
let target = 6;

//best solution two sums
function twosums(nums, target) {
    let obj = {};
    nums.forEach((item, i) => obj[item] = i);
    for (var i = 0; i < nums.length; i++) {
        if (obj[target - nums[i]] !== undefined) {
            if (i !== obj[target - nums[i]]) {
                return [i, obj[target - nums[i]]];
            }
        }
    }
}

//time complexity - 0(n)
//space complexity - 0(n)


//solution 1 -- two sums
for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            if (nums[i] + nums[j] == 9) {
                return [i, j]
            }
        }
    }
}

//nested for loop with same input 0(n^2) quadratic time
//space complexity = 0(1)


//contiguous sub array

let subarraymax = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function subArrayMaximum(nums) {
    let max_sum = 0;
    let global_sum = Number.NEGATIVE_INFINITY;
    for (var i = 0; i < nums.length; i++) {
        max_sum = Math.max(nums[i], nums[i] + max_sum);
        if (max_sum > global_sum) {
            global_sum = max_sum
        }
    }
    return global_sum;
}

/////shift zeroes

let zeroArray = [0, 0, 1];

function shiftArray(nums) {
    let count = 0;
    for (var i = nums.length; i >= 0; i--) {
        if (nums[i] === 0) {
            nums.splice(i,1)
            count++;
        }
    }
    for(var i = 0 ; i < count;i++){
        nums.push(0)
    }
    return nums;
}

///find duplicates in array 

let duplicateArray = [1,2,3];

//brute force O(n^2) -- quadratic
function checkDuplicates (nums){
    for(var i = 0 ; i < nums.length ; i++){
        for(var j = 0 ; j < nums.length ; j++){
            if(i != j){
                if(nums[i] == nums[j]){
                    return true;
                }
            }
        }
    }
    return false;
}
//otimize o(n) -- linear
function checkDuplicatesOptimize(nums){
    let obj = {};
    for(var i = 0 ; i< nums.length;i++){
        if(obj[nums[i]] == true){
            return true;
        }else{
            obj[nums[i]] = true
        }
    }
    return false;
}

//reverse an array

let reverse = [1,2,3,4,5,6,7];
let k = 2;

function reverseArray(nums,k){
    for (var i=0; i< k; i++) {
        var popedElement = nums.pop();
        nums.unshift(popedElement);
        }
    return nums;
};

let test = reverseArray(reverse,k);
console.log(test);