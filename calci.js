function add(a,b){
    return a + b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function dic(a,b){
    return a/b;
}
const x = function calc(a,b,operation){
    return operation(a,b);
}
console.log(`add ${x(3,5,add)}`);
console.log(`add ${x(3,5,sub)}`);
console.log(`add ${x(3,5,mul)}`);
console.log(`add ${x(3,5,dic)}`);