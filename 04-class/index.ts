//TypeScript使用的是结构性类型系统。 
//当我们比较两种不同的类型时，并不在乎它们从何处而来，
//如果所有成员的类型都是兼容的，我们就认为它们的类型是兼容的。

//然而，当我们比较带有 private或 protected成员的类型的时候，情况就不同了。
// 如果其中一个类型里包含一个 private成员，
//那么只有当另外一个类型中也存在这样一个 private成员， 并且它们都是来自同一处声明时，
//我们才认为这两个类型是兼容的。 对于 protected成员也使用这个规则。

//构造函数也可以被标记成 protected。 
//这意味着这个类不能在包含它的类外被实例化，但是能被继承。

/**
 * readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。
 */

 /**
  * 存取器 通过getters/setters来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问
  * 只带有 get不带有 set的存取器自动被推断为 readonly。
  */

/**
 * 把类当做接口使用
 */
class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};