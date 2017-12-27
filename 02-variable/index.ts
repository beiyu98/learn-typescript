//let var

for (let i = 0; i < 10 ; i++) {
    setTimeout(function() {console.log(i); }, 100 * i);
}

for (var i = 0; i < 10 ; i++) {
    setTimeout(function() {console.log(i); }, 100 * i);
}

//仔细思考两个for循环的不同

//const
//const 是对let的一个增强，它能阻止对一个变量再次赋值。
//与let声明相似，但是就像它的名字所表达的，它们被赋值后不能再改变。 换句话说，它们拥有与 let相同的作用域规则，但是不能对它们重新赋值。
//实际上const变量的内部状态是可修改的。 幸运的是，TypeScript允许你将对象的成员设置成只读的

//解构
let input:number[] = [1,3];
let [first,second] = input;

// swap variables
[first, second] = [second, first];

let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let { a, b } = o;
({ a, b } = { a: "baz", b: 101 });

let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };

//TypeScript编译器不允许展开泛型函数上的类型参数