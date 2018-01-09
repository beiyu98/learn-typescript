/*
泛型
 */
function identity(arg) {
    return T;
}
//手动传入泛型类型
var op1 = identity('hello');
//自动类型推断
var op2 = identity('hello world');
/*
使用泛型变量
 */
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
