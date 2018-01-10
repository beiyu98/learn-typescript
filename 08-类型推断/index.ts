/**
 * 变量x的类型被推断为数字。
 *  这种推断发生在初始化变量和成员，
 * 设置默认参数值和决定函数返回值时。
 */
let x = 3;

/**
 * 如果没有找到最佳通用类型的话，
 * 类型推断的结果为联合数组类型，(Rhino | Elephant | Snake)[]
 */
let zoo = [new Rhino(), new Elephant(), new Snake()];

/**
 * 上下文类型
 */
/**
 * TypeScript类型推论也可能按照相反的方向进行。 这被叫做“按上下文归类”。
 * 按上下文归类会发生在表达式的类型与所处的位置相关时
 */
window.onmousedown = function(mouseEvent) {
    console.log(mouseEvent.button); //<- Error
};
/**
 * 这个例子会得到一个类型错误，
 * TypeScript类型检查器使用Window.onmousedown函数的类型来推断右边函数表达式的类型。 
 * 因此，就能推断出 mouseEvent参数的类型了。 
 * 如果函数表达式不是在上下文类型的位置， mouseEvent参数的类型需要指定为any，
 * 这样也不会报错了。
 */
window.onmousedown = function(mouseEvent: any) {
    console.log(mouseEvent.button);  //<- Now, no error is given
};
