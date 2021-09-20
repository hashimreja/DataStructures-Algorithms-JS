/*
any thing that can be done through recursion can be done through loops
recursion offers readabiliy and eats up too much space with function calls and can result in stack overflow
time complexity of recursion O(2^n) Daam!!!
*/

function factorial(num){
    let answer = 1;
    for(var i = 1 ; i <= num ; i++){
        answer = answer * i
    }
    return answer;
}

function factorialRecursive(number){
    if(number <= 2) {
        return number
    }else{
        return number * factorialRecursive(number - 1)
    }
}

// 0 1 1 2 3 5 8 13   {O(n)}
function fibonacciIterativeSequence(number){
   let arr = [0,1]
    for(var i = 2 ; i < number + 1 ; i++){
        arr.push(arr[i-2] + arr[i-1])
    }
    return arr[number]
}

//time complexity {O(2^n) too slow}
function fibonacciRecursiveSequence(number){
    if(number < 2){
        return number;
    }
    return fibonacciRecursiveSequence(number-1) + fibonacciRecursiveSequence(number-2)
}
