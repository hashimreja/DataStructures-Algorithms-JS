/*
sample structure show how hashmaps holds data with length of 2
[
    [['grapes',1000] , ['name' , 'hashim]] <-- hash collision , [empty set]
]
*/
class hashMaps {
    constructor(size) {
        this.data = new Array(size);
    }

    hash(key) {
        let hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;

        }
        return hash;
    }

    set(key, value) {
        if (!this.data[this.hash(key)]) {
            this.data[this.hash(key)] = [];
            this.data[this.hash(key)].push([key, value]);
        } else {
            this.data[this.hash(key)].push([key, value])
        }
    }
    get(key) {
        if (this.data[this.hash(key)]) {
            for (var i = 0; i < this.data[this.hash(key)].length; i++) {
                if (this.data[this.hash(key)][i][0] === key) {
                    return this.data[this.hash(key)][i][1]
                }
            }
        }
        return undefined
    }
}


/**
 Hashmap interview problem
 */

//return first reccuring character
//O(a*b)
let characters = [2,2,5, 1, 3, 3, 4];

function firstRecurringCharacter(nums) {
    let obj = {};
    for (var i = 0; i < nums.length; i++) {
        if (obj[nums[i]] !== undefined) {
            return nums[i]
        } else {
            obj[nums[i]] = i
        }
    }
    return undefined
};

let test = firstRecurringCharacter(characters);
console.log(test, 'testt')