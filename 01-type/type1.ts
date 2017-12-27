let isDone: boolean = false;

let age: number = 12;

let username: string = "hello";

let list: number[] = [1, 2, 3];

let list2: Array<number> = [4, 7, 5];//支持泛型


let x: [string, number] = ['hello', 10];//tuple

//支持枚举类型
enum Color { Red, Green, Blue };
enum Season { Spring = 0, Fall = 2, Winter = 3 };
let c: Color = Color.Blue;
let s: Season = Season.Fall;

//any type
let notSure: any = 124;
notSure = `hi`;

//void 某种程度上和any相反
function warnUser(): void { }

//声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
let unusuable: void = undefined;
unusuable = null;

// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量

//然而，当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。 这能避免 很多常见的问题。 也许在某处你想传入一个 string或null或undefined，你可以使用联合类型string | null | undefined

//never
//never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。

//返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

function fail() {
    return error('something wrong');
}

function infiniteLoop():never {
    while(true){
        //some tasks
    }
}

//类型断言 好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。
let someValue1:any = 'this is a string';
let strLen1:number = (<string>someValue1).length;

let someValue2:any = 'this is another string';
let strLen2:number = (someValue2 as string).length;
//两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；然而，当你在TypeScript里使用JSX时，只有 as语法断言是被允许的。

//let 
//和es6中的相同
