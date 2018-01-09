/**
 * 在JavaScript里，函数可以使用函数体外部的变量。
 */
let z = 100;

function addToZ(x, y) {
    return x + y + z;
}

/**
 * 函数定义
 */
let myAdd1: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
}

//全类型
let myAdd2 = function (x: number, y: number): number {
    return x + y;
}

//类型推断
//这叫做“按上下文归类”，是类型推论的一种。 它帮助我们更好地为程序指定类型。
let myAdd3: (baseValue1: number, baseValue2: number) => number = function (x, y) {
    return x + y;
}

/**
 * 可选参数
 * 默认类型
 * 剩余参数
 */
function hello(name: string, age?: number, country = 'China', ...restOfName: string[]) {

}

/**
 * this 部分没有看理解
 */
// todo http://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/

/**
 * 方法的重载
 *  体会：
 *  1.和Java的函数重载相似较高
 */
