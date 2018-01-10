/**
 * 交叉类型
 */
function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
}

class Person {
    constructor(public name: string) { }
}
interface Loggable {
    log(): void;
}
class ConsoleLogger implements Loggable {
    log() {
        // ...
    }
}
var jim = extend(new Person("Jim"), new ConsoleLogger());
var n = jim.name;
jim.log();

/**
 * 联合类型
 * 联合类型表示一个值可以是几种类型之一。 
 * 我们用竖线（ |）分隔每个类型，
 * 所以 number | string | boolean表示一个值可以是 number， string，或 boolean。
 */
interface Bird {
    fly();
    layEggs();
}

interface Fish {
    swim();
    layEggs();
}

function getSmallPet(): Fish | Bird {
    // ...
}

let pet = getSmallPet();
pet.layEggs(); // okay
pet.swim();    // errors
/**
 * 如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员。
 */


/**
 * 类型保护与区分类型
 */
function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
}
/**
 * 在这个例子里， pet is Fish就是类型谓词。 
 * 谓词为 parameterName is Type这种形式， 
 * parameterName必须是来自于当前函数签名里的一个参数名。
 */

/**
 * 类型别名
 * 类型别名会给一个类型起个新名字。 类型别名有时和接口很像，
 * 但是可以作用于原始值，联合类型，元组以及其它任何你需要手写的类型。
 */
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}

/**
 * 起别名不会新建一个类型 - 它创建了一个新 名字来引用那个类型。 
 * 给原始类型起别名通常没什么用，尽管可以做为文档的一种形式使用。
 */
type Container<T> = { value: T };
type Tree<T> = {
    value: T;
    left: Tree<T>;
    right: Tree<T>;
}

/**
 * 接口 vs. 类型别名
 * 
 * 其一，接口创建了一个新的名字，可以在其它任何地方使用。
 *  类型别名并不创建新名字—比如，错误信息就不会使用别名。
 *  在下面的示例代码里，在编译器中将鼠标悬停在 interfaced上，
 * 显示它返回的是 Interface，
 * 但悬停在 aliased上时，显示的却是对象字面量类型。
 * 
 * 另一个重要区别是类型别名不能被 extends和 implements（自己也不能 extends和 implements其它类型）。 
 * 因为 软件中的对象应该对于扩展是开放的，
 * 但是对于修改是封闭的，你应该尽量去使用接口代替类型别名。
 * 
 * 另一方面，如果你无法通过接口来描述一个类型并且需要使用联合类型或元组类型，
 * 这时通常会使用类型别名。
 */
type Alias = { num: number }
interface Interface {
    num: number;
}
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;

//todo 这个泛型有点复杂，需要实际项目中配合实践理解