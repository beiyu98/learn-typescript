//可选属性
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;//索引签名
}

//只读属性
interface Point {
    readonly x: number;
    readonly y: number;
}

//函数类型
interface SearchFunc {
    (source: string, substring: string): boolean;
}

//可索引的类型
interface StringArray {
    [index: number]: string;
}

//定义了StringArray接口，它具有索引签名。
//这个索引签名表示了当用 number去索引StringArray时会得到string类型的返回值。
let myArray：StringArray;
myArray = ['Bob', 'Jack'];
let myStr: string = myArray[0];

//类类型
//与C#或Java里接口的基本作用一样，TypeScript也能够用它来明确的强制一个类去符合某种契约。
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) {

    }
}

//继承接口
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square = <Square>{};
square.color = 'red';
square.sideLength = 4;

//继承多接口
interface PenStroke{
    penWidth:number;
}

interface SquarePro extends Shape,PenStroke{
    sideWidth:number;
}

//混合类型
//todo 需要好好理解

//接口继承类
//当接口继承了一个类类型时，
//它会继承类的成员但不包括其实现。
// 就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。
// 接口同样会继承到类的private和protected成员。 
//这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，
//这个接口类型只能被这个类或其子类所实现（implement）。
class Control{
    private state:any;
}

interface SelectableControl extends Control{
    select():void;
}

class Button extends Control implements SelectableControl{
    select(){
        
    }
}