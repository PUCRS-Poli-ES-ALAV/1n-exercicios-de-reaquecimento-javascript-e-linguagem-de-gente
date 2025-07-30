function exercicio1(num1, num2) {
    if(num2 < 0 || num1 <0) {
        return "ERROR"
    }
    if(num2 == 0) {
        return 0;
    }
    return num1 + exercicio1(num1, num2 -1);
}
function exercicio2(num1, num2) {
    if(num2 == 0) {
        return num1;
    }

    return exercicio2(num1+1,num2-1);
}

function exercicio3(num1) {
    if(num1 < 0) {
        throw new Error("ERROR");
    }
    if(num1 == 1){
        return 1;
    }
    return 1/num1 + exercicio3(num1-1)
}

function exercicio4 (str) {
    if(str.length == 1) {
        return str;
    }
    return str[str.length-1] + exercicio4(str.slice(0, -1))
}
function exercicio5 (num1) {
    if(num1 ==1) {
        return 1;
    }
    if(num1 ==2) {
        return 2;
    }
    return 2 * exercicio5(num1-1) + 3 * exercicio5(num1-2);
}
// A(m, n) = n + 1, se m = 0
// A(m, n) = A(m − 1, 1), se m != 0 e n = 0
// A(m, n) = A(m − 1, A(m, n − 1)), se m != 0 e n != 0.

function exercicio6 (m, n) {
    if(m==0) {
        return n+1;
    }
    if(m != 0 && n == 0) {
        return exercicio6(m-1, 1);
    }
    return exercicio6(m-1, exercicio6(m,n - 1))
}

(()=>{
    console.log(exercicio6(3, 5));
})();