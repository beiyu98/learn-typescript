/*
泛型函数
 */

function identity<T>(arg:T):T{
    return arg;
}

//手动传入泛型类型
let op1 = identity<string>('hello');

//自动类型推断
let op2 = identity('hello world');

/*
使用泛型变量
 */
function loggingIdentity1<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}

function loggingIdentity2<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);
    return arg;
}

let mylog1:<T>(arg:T[]) =>T[] = loggingIdentity1;
let mylog2:{<T>(arg:T[]):T[]} = loggingIdentity1;

/**
 * 泛型接口
 */
interface GenericIdentityFn<T>{
    <T>(arg:T):T;
}

function identity3<T>(arg:T):T {
    return arg;
}

let myIdentity:GenericIdentityFn<number> = identity3;

/**
 * 泛型类
 * 类有两部分：静态部分和实例部分。 
 * 泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型类型。
 */
class GenericNumber<T>{
    zeroV:T;
    add:(x:T,y:T)=>T;
}

let myGener1 = new GenericNumber<number>();
myGener1.zeroV = 0;
myGener1.add = function (x,y) {
    return x+y;
}