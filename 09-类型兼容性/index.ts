/**
 * TypeScript里的类型兼容性是基于结构子类型的。 
 * 结构类型是一种只使用其成员来描述类型的方式。 
 * 它正好与名义（nominal）类型形成对比。
 */
interface Named {
    name: string;
}

class Person {
    name: string;
}

let p: Named;
// OK, because of structural typing
p = new Person();

/**
 * 枚举类型与数字类型兼容，并且数字类型与枚举类型兼容。
 * 不同枚举类型之间是不兼容的。
 */

 /**
  * 类与对象字面量和接口差不多，但有一点不同：类有静态部分和实例部分的类型。 
  比较两个类类型的对象时，只有实例的成员会被比较。 
  静态成员和构造函数不在比较的范围内。
  */
  class Animal {
    feet: number;
    constructor(name: string, numFeet: number) { }
}

class Size {
    feet: number;
    constructor(numFeet: number) { }
}

let a: Animal;
let s: Size;

a = s;  //OK
s = a;  //OK

/**
 * 泛型
 */

interface Empty<T> {
}
let x: Empty<number>;
let y: Empty<string>;

x = y;  // okay, y matches structure of x
