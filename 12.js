function f(n) {

    const arr = [1,1,2,3,5,8,13]

    const newArr = arr.findIndex((item, index) => {
        return index === n
    })
}
function fi(n) {
   // return n<=1 ? fi(n - 1) + fi(n - 2) : n
    if (n >= 2) {
        return fi(n - 1) + fi(n - 2)
    } else {
        return n
    }
}

function fib(n) {
    if (n == 0 && n == 1){
        return 1
    }

    let fib1 = 0
    let fib2 = 1



        ...
    let fibn = fib1 + fib2

    let fib3 =  fib1 + fib2
    let fib4 = fib2 + fib3
    for(let i; i.length >0;i++){

    }
}
