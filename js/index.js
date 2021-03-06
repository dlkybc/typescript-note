"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log(998);
//配置自动编译·1
//  tsc --init      ------- "outDir": "./js",
// 任务-运行任务   --监视config.json
/**
 *写ts代码  必须指定类型    var str = 1;
str = true;   ts是错的
 */
//布尔
// var flag: boolean = true
// flag = false
// console.log(flag)
//数字
// var num: number = 123
// num = 'str'
// num = 345
//字符串
// var str: string = "this ts"
//数组   定义数组两种方式
//1.
// var arr = ["1", 2]  //es5定义
// var arr: number[] = [11, 22]
// console.log(arr)
//2.
// var arr:Array<number>=[11,22,33]
// console.log(arr)
//3  用any定义数组可作为第三种
//元祖类型  属于数组的一种
// let arr:[number,string]=[1,'255']
// console.log(arr)
//枚举类型
// enum fl {success = 1, error = 2};
// let s:fl = fl.success
// console.log(s)
// console.log(fl) //{1: "success", 2: "error", success: 1, error: 2}
// console.log(fl['1']) //元素隐式具有 "any" 类型，因为索引表达式的类型不为 "number"。
// enum Color {red,blue,'black'}
// var col: Color = Color.blue
// console.log(col)  //打印下标  1 如果标识符没有赋值，值就是下标
// enum Color {red, blue=3, 'black'}
// var col: Color = Color.black
// console.log(col)  //打印4   改变了下标
// enum Er {'undefined'=-1,'null'=-2,'success'=1}
// var e: Er = Er.null
// console.log(e)  //-2
//任意类型  any
/**
 *var num: any = 1323
num = 'str'
console.log(num)
var oBox:any = document.getElementById('box')
// console.log(oBox)  不写:any 能运行但会警告
oBox.style.color = "red"
 */
/**
  * null和undefined是其他数据类型（never）的子类型
  */
// var aaa: number;
// console.log(aaa)//输出undefined  警告
// var aaa: undefined;
// console.log(aaa)//输出undefined
//定义为赋值就是undefined  无警告
// var aaa: number | undefined;
// console.log(aaa)  //undefined
// aaa = 133
// console.log(aaa)  //133
//一个元素可能是number可能undefined可能null
// var num:number | null | undefined
//voil类型 表示没有任何类型，一般用于定义方法的时候没有返回值
//es5定义
// function run() {
//   console.log('run')
// }
// run()
// function run():void {
//   console.log('run')
// }
// run()
// function run():num {
//   console.log('run')
// }
// run()   //num 或者undefined 能执行   有警告
// function run(): number{
//   return 123
// }
// console.log(run())  //123  正确
//never类型  包括null undefined 代表从不会出现的值，这就意味着什么never的变量只能摆never类型所赋值 用的不多
// var a: undefined;
// a = undefined;
// var b: null
// b = null
// var c: never;
// // a = 123;  //错
// c = (() => {
//   throw new Error('错误')
// })()
// console.log(c)
//函数的定义
//1  函数声明
// function run(): string{
//    return '1 2'
// }
//  //2  匿名函数
// var run2 = function (): string{
//    return '122'
//  }
// run()
// run2()
// //定义方法传参  匿名函数也如此
// function getInfo(name: string, age: number): string{
//   return `${name}---${age}`
// }
// alert(getInfo('zhangsan',20))
// //没有返回值
// function run3():void {
//  console.log(123)
// }
//方法可选参数  es5里实参和形参可以不一样，ts必须一样，如果不一样，需要配置可选参数、 注意  可选参数必须配置到参数的最后面   否则能运行有警告
/**
 *function getInfo(name: string, age: number): string{
  if (age) {
    return `${name}---${age}`
  } else {
    return `${name}--`
  }
}
alert(getInfo('zhangdan'))   //可执行，有警告
 */
/**
 *
function getInfo(name: string, age?: number): string {
  if (age) {
    return `${name}---${age}`
  } else {
    return `${name}--`
  }
}
alert(getInfo('zhangdan'))   //可执行，无警告
 */
//es5没法设置默认参数  es6和ts可以设置默认参数 和可选参数有类似处，但位置无限制
/**
 *
function getInfo(name: string, age: number=20): string {
  if (age) {
    return `${name}---${age}`
  } else {
    return `${name}--`
  }
}
alert(getInfo('zhangdan'))   //可执行，无警告  张三--20
 */
//剩余参数
// function sum(a: number, b: number, c: number, d: number):number {
//   return a+b+c+d
// }
// alert(sum(1, 2, 3, 4))
//三点运算符  接受形参传过来的值
// function sum(...result: number[]): number {
//   var sum = 0
//   for (var i = 0; i < result.length; i++){
//   sum +=result[i]
//   }
//   return sum
// }
// alert(sum(1, 2, 3, 4,5,6))   21
// function sum(a:number,...result: number[]): number {
//   var sum = 0
//   for (var i = 0; i < result.length; i++) {
//     sum += result[i]
//   }
//   return sum
// }
// alert(sum(1, 2, 3, 4, 5, 6))   //20
//ts函数的重载  ts的重载，通过为同一个函数提供多个函数定义来试下多种功能的目的,ts为了兼容es5,es6，写法和java有区别
//es5中，出现同名函数，下面的会替代上面的
// function css(config:any):any {
// }
// function css(config: any,val:any): any {
// }
// ts重载
// function getInfo(name: string): string;
// function getInfo(age: number): number;
// function getInfo(str: any): any{
//   if (typeof str == 'string') {
//     return str+'我就'
//   } else {
//     return str + '我年龄'
//   }
// };
// alert(getInfo('张三'))
// alert(getInfo(22))
// alert(getInfo(true)) //警告
// function getInfo(name: string): string;
// function getInfo(name: string,age:number): string;
// function getInfo(name: any, age?: any): any{
//   if (age) {
//     return 'wpo'+ name+age
//   } else {
//     return  'name'+name
//   }
// }
// alert(getInfo('zhangan'))
// alert(getInfo('zhangan', 20))
// alert(getInfo(123)) //类型“123”的参数不能赋给类型“string”的参数
// alert(getInfo('zhangan', true))//类型“true”的参数不能赋给类型“number”的参数。
//箭头函数  箭头函数this指向上下文
// setTimeout(() => {
//   console.log(this)
// }, 1000);
/*
class Person{
  name: string; //属性 前面省略了public关键词
  constructor(n:string) {//构造函数你实例化类的时候触发的方法
 this.name=n
  }
  run():void {
  console.log(this.name)
  }
}
var p = new Person('张三')
p.run()

*/
/*
class Person{
  name: string; //属性 前面省略了public关键词
  constructor(n:string) {//构造函数你实例化类的时候触发的方法
 this.name=n
  }
  getName(): string{
    return this.name
  }
  setName(name:string): void{
    this.name=name
  }
}
var p = new Person('张三')
console.log(p.getName())  //张三
p.setName('李四')
console.log(p.getName())
*/
//ts实现继承  extends super
/**
 class Person {
    name: string //属性 前面省略了public关键词
    constructor(name: string) {
        //构造函数你实例化类的时候触发的方法
        this.name = name
    }
  run(): string{
      return `${this.name}在云端`
    }
}
var p = new Person('张三丰')
console.log(p.run()) //张三
class Web extends Person{
  constructor(name: string) {
   super(name) //初始化父类的构造函数
 }
}
var w = new Web('李四')
console.log(w.run())
 */
//ts中继承的探讨  父类的方法和子类的方法一致  优先使用子类
/**
 class Person {
    name: string //属性 前面省略了public关键词
    constructor(name: string) {
        //构造函数你实例化类的时候触发的方法
        this.name = name
    }
  run(): string{
      return `${this.name}在云端`
    }
}
var p = new Person('张三丰')
class Web extends Person{
  constructor(name: string) {
   super(name) //初始化父类的构造函数
  }
   run(): string{
      return `${this.name}在云端--子类`
    }
  work() {
    console.log(`${this.name}在工作`)
  }
}
var w = new Web('李四')
// console.log(w.run())  //李四在云端
w.work()   //李四在工作
console.log(w.run())  //在运动--子类
 */
//3  类里面的修饰符  ts里面定义属性的时候提供了三种修饰符
/**
 public :公有  在当前类里面 、子类、类外面都可以访问
 protected：保护类型  在当前类里面 、子类可以访问  ，类外部不可访问
 provate 私有   当前·类里面可以访问子，类、类外面都不可以访问
 属性如果不加修饰符默认public
 class Person {
  public name: string //公有属性
constructor(name: string) {
        //构造函数你实例化类的时候触发的方法
        this.name = name
    }
  run(): string{
      return `${this.name}在云端`
    }
}
var p = new Person('张三丰')
class Web extends Person{
  constructor(name: string) {
   super(name) //初始化父类的构造函数
  }
   run(): string{
      return `${this.name}在云端--子类`
    }
  work() {
    console.log(`${this.name}在工作`)
  }
}
var w = new Web('李四')
w.work()   //李四在工作
//类外部访问公有属性
var p = new Person('哈哈哈')
console.log(p.name)
 */
//  protected：保护类型  在类里面 、子类可以访问  ，类外部不可访问
/**
 class Person {
  protected name: string //公有属性
constructor(name: string) {
        //构造函数你实例化类的时候触发的方法
        this.name = name
    }
  run(): string{
      return `${this.name}在云端`
    }
}
var p = new Person('张三丰')
class Web extends Person{
  constructor(name: string) {
   super(name) //初始化父类的构造函数
  }
   run(): string{
      return `${this.name}在云端--子类`
    }
  work() {
    console.log(`${this.name}在工作`)
  }
}
var w = new Web('李四')
w.work()   //李四在工作   子类调用
//类外部访问公有属性
var p = new Person('哈哈哈')
console.log(p.name) //属性“name”受保护，只能在类“Person”及其子类中访问  哈哈哈可以打印 但有警告

 */
// provate 私有   类里面可以访问子，类、类外面都不可以访问
// class Person {
//   private name: string //公有属性
// constructor(name: string) {
//         //构造函数你实例化类的时候触发的方法
//         this.name = name
//     }
//   run(): string{
//       return `${this.name}在云端`
//     }
// }
// var p = new Person('张三丰')
// class Web extends Person{
//   constructor(name: string) {
//    super(name) //初始化父类的构造函数
//   }
//    run(): string{
//       return `${this.name}在云端--子类`
//     }
//   work() {
//     console.log(`${this.name}在工作`) //属性“name”为私有属性，只能在类“Person”中访问。
//   }
// }
// var w = new Web('李四')
// w.work()   //李四在工作   子类调用
// //类外部访问公有属性 以下是
// var p = new Person('哈哈哈')
// console.log(p) //属性“name”为私有属性，只能在类“Person”中访问 哈哈哈可以打印 但有警告
//静态属性  静态方法
// class Person {
//   public name: string;
//   public age: number;
//   constructor(name:string) {
//         this.name=name
//   }
//   run() {
//     console.log(`${this.name}`)
//     alert(`${this.name}在运动`)
//   }
//   work() {
//     alert(`${this.name}在工作`)
//   }
//   // static print() {//静态方法    没法直接调用类里面的属性 alert('print'+this.age) 警告
//   //   alert('print'+this.age)
//   // }
//    static print() {//静态方法    没法直接调用类里面的属性 alert('print'+this.age) 警告
//     alert('print'+Person.sex)
//   }
//   static  sex = '男'
// }
// var p = new Person ('张三')
// // p.run()
// Person.print()
// alert(Person.sex)
//多态：父类定义一个方法不去实现 让继承它的子类去实现，每一个子类有不同的表现
//多态属于继承
// class Animal {
//     name: string
//     constructor(name: string) {
//         this.name = name
//     }
//     eat() {//具体吃什么 继承他的子类去实现，每个子类表现不一样
//         console.log('eat')
//     }
// }
// class Dog extends Animal {
//     constructor(name:string) {
//         super(name)
//   }
//   eat() {
//     return this.name+'吃粮食'
//   }
// }
// class Cat extends Animal {
//     constructor(name:string) {
//         super(name)
//   }
//   eat() {
//     return this.name+'吃老鼠'
//   }
// }
// 抽象方法
//ts中的抽象类，他是提供其他继承的基类，不能直接被实例化
//用abstract关键字定义抽象类和抽象方法，抽象类中的方法不包含具体实现并且必须在派生类中实现
//abstract  抽象方法只能放在抽象类里面
//抽象类和抽象方法用来定义标准  标准：Animal 这个类必须要求它的子类包含eat方法
// abstract class Animal {
//   public name:string
//   constructor(name:string){
//  this.name=name
//   }
//   abstract eat(): any;
//   run() {
//   }
// }
// var a = new Animal()    //无法创建抽象类的实例  警告
// class Dog extends Animal {
//   constructor(name:any) {
//     super(name)
//   }
//   //抽象类的子类必须实现抽象类里面的抽象方法
//   eat() {
//  console.log(this.name+'粮食')
//   }
// }
// var d = new Dog('够')
// d.eat()
/**
 接口的作用：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范，在程序设计里面，接口起到一种限制和规范的作用。接口定义了某一批类所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，它只规定这批类里必须提供某些方法，提供这些方法的类就可以满足实际需要。ts的接口类似于Java，同时还增加了更零零花的接口类型，包括属性，函数，可索引和类等
 定义标准
 */
//1.属性接口  对json的约束
// function preintLabel(labelledObj: {label: string}) {
//   console.log(labelledObj.label)
// }
// let myObj = {size: 10, label:"size 10 obj"}
// preintLabel(myObj)
/*
ts中自定义方法传入参数对json进行约束
*/
// function preintLabel(labelledObj: {label: string}) {
//   console.log(labelledObj.label)
// }
// let myObj = {size: 10, label:"size 10 obj"}
// preintLabel(myObj)
// 对批量方法传入参数进行约束
// interface FullName {  //就是传入对象的约束 也叫属性的接口
//   firstName: string;//分号结束
//   secondName: string;
// }
// function printName(name:FullName) {
//   //必须传入对象  有firstName  secondName 皆为string
//   console.log(name.firstName+'--'+name.secondName)
// }
// printName({
//   age: 22,
//   firstName: 'zhangsan ',
//   secondName:'lisi'
// })   会有警告age
//以下这样不会警告，正确
// var obj = { age: 22,  //传入的参数必须包含firstName   secondName
//   firstName: 'zhangsan ',
//   secondName:'lisi'}
// printName(obj)
// interface FullName {  //就是传入对象的约束 也叫属性的接口
//   firstName: string;//分号结束
//   secondName: string;
// }
// function printName(name:FullName) {
//   必须传入对象  有firstName  secondName 皆为string
//   console.log(name.firstName+'--'+name.secondName)
// }
// function printInfo(info:FullName) {
//   必须传入对象  有firstName  secondName 皆为string
//    console.log(info.firstName+'--'+info.secondName+'--'info.age)  age警告   所以最好只有FullName里的属性在这
//    console.log(info.firstName+'--'+info.secondName+'--')
// }
// var obj = { age: 22,  //传入的参数必须包含firstName   secondName  参数顺序无所谓
//   firstName: 'zhangsan ',
//   secondName:'lisi'}
// printName(obj)
// var info = { age: 22,  //传入的参数必须包含firstName   secondName
//   firstName: 'zhangsan ',
//   secondName:'lisi'}
// printInfo(info)
//接口可选属性   加？
// interface FullName {  //就是传入对象的约束 也叫属性的接口
//   firstName: string;//分号结束
//   secondName?: string;
// }
// function getName(name: FullName) {
//   console.log(name)
// }
// getName({
//   firstName: 'zhangdan',
//   // secondName:'lisi'
// })
//例子
// interface Config {
//     type: string,
//     url: string,
//     data?: string,
//     dataType: string
// }
//原生js封装ajax
// function ajax(config: Config) {
//     var xhr = new XMLHttpRequest()
//     xhr.open(config.type, config.url, 'true')
//     xhr.send(config.data)
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             console.log('success')
//             if (config.dataType == 'json') {
//                 JSON.parse(xhr.responseText)
//             } else {
//                 console.log(xhr.responseText)
//             }
//         }
//     }
// }
// ajax({
//     type: 'get',
//     url: 'https://www.baidu.com',
//     dataType: 'json'
// })
//函数类型接口  对方法传入的采纳数以及返回值进行约束 批量约束
//加密的函数类型接口
// interface encrypt {
//   (key: string, value: string): string;
// }
// var md5: encrypt = function (key: string, value: string): string{
//   //模拟操作
//   return key + value;
// }
// console.log(md5('name','zhangdan'))
// var sha:encrypt = function (key: string, value: string): string{
//   //模拟操作
//   return key +'1111'+ value;
// }
// console.log(sha('name','lis'))
//可索引接口  数组，对象的约束      不常用
//定义数组的方式  之前的
// var arr:number[] = [123,222,3344]
// var arr1:Array<string>=['11','4343']
//可索引接口 对数组的约束
// interface userArr {
//   [inde:number]:string
// }
// var arr:userArr=['12','566']
// console.log(arr[0])//12
//可索引接口 对对象的约束
// interface userObj{
//   [index:string]:string
// }
// var obj:userObj={name:'454'}
//类类型接口  对类的约束 和抽象类有点相似
// interface Animal{
//   name: string;
//   eat(str: string): void;
// }
// class Dog implements Animal{
//   name: string;
//   constructor(name:string) {
//    this.name = name
//   }
//   eat() {
//     console.log(this.name+'吃粮食')
//   }
// }
// var d = new Dog('小黑')
// d.eat()
// class Cat implements Animal{
//   name: string;
//   constructor(name:string) {
//    this.name = name
//   }
//   eat(food:string) {
//     console.log(this.name+food)
//   }
// }
// var c = new Cat('消化')
// c.eat('laoshu')
//接口的扩展    接口可以继承接口
// interface Animal {
//   eat(): void;
// }
// interface Person extends Animal{
//   work(): void;
// }
// class Web implements Person {
//   name: string;
//   constructor(name:string) {
//     this.name=name
//   }
//   eat() {
//     console.log('chichi')
//   }
//   work() {
//     console.log('workkw')
//   }
// }
// var w = new Web('lisi')
// w.eat()
// w.work()
//案例2
// interface Animal {
//   eat(): void;
// }
// interface Person extends Animal{
//   work(): void;
// }
// class Programmer {
//   name: string;
//   constructor(name: string) {
//     this.name=name
//   }
//   coding(code:string) {
//     console.log(this.name+code)
//   }
// }
// class Web extends Programmer implements Person {
//   constructor(name:string) {
//    super(name)
//   }
//   eat() {
//     console.log('chichi')
//   }
//   work() {
//     console.log('workkw')
//   }
// }
// var w = new Web('lisi')
// w.eat()
// w.work()
// w.coding('tsceeeee')
/**
 泛型：软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能
 在像c#和java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。这样用户就可以以自己的数据类型来使用组件
 通俗理解：泛型就是解决 类 接口 方法的复用性、以及对不特定数据类型的支持
 */
//只能返回string
// function getData(value: string): string{
//   return value;
// }
//同时返回 string和number  代码冗余
// function getData1(value: string): string{
//   return value;
// }
// function getData2(value: number): number{
//   return value;
// }
//同时返回 string和number 用any 但是any放弃了类型检查，不是希望的传入什么返回什么
// function getData2(value: any): any{
//   return value;
// }
//泛型：可以支持不特定的类型   要求：传入的参数和返回的参数一致
//T表示泛型 具体是什么类型调用这个方法的时候决定的 任意的字母都行，但要保持统一，建议还是用T
// function getData<T>(value: T): T{   //用得多
// return value
// }
// console.log(getData<number>(123))
// console.log(getData<string>('789'))
// getData<number>(123)
// function getData<T>(value: T): any{  //用得不多
// return '123'
// }
// console.log(getData<number>(123))
// console.log(getData<string>('789'))
//泛型类 比如有个最小堆算法，需要同时支持返回数字和字符串a-z两种类型，通过类的泛型来实现
// class MinClass {
//   public list: number[]=[];
//   add(num:number) {
//     this.list.push(num)
//   }
//   min() :number{
//     var minnum = this.list[0]
//     for (var i = 0; i < this.list.length; i++){
//       if (minnum > this.list[i]) {
//         minnum=this.list[i]
//       }
//     }
//     return minnum
//   }
// }
// var m = new MinClass()
// m.add(2)
// m.add(23)
// m.add(20)
// alert(m.min())
// class MinClass<T> {
//   public list: T[]=[];
//   add(num:T):void {
//     this.list.push(num)
//   }
//   min() :T{
//     var minnum = this.list[0]
//     for (var i = 0; i < this.list.length; i++){
//       if (minnum > this.list[i]) {
//         minnum=this.list[i]
//       }
//     }
//     return minnum
//   }
// }
// var m1 = new MinClass<number>()//实例化类 并且制定了类的T代表的类是number
// m1.add(2)
// m1.add(23)
// m1.add(20)
// console.log(m1.min())
// var m2 = new MinClass<string>()
// m2.add('a')
// m2.add('d')
// m2.add('r')
// console.log(m2.min())   //a   asicll码比较的
//泛型接口
//函数类型接口
// interface ConfigFn{
//   (value1: string, value2: string): string;
// }
// var setData: ConfigFn = function (value1:string,value2:string) :string{
// return  value1+value2
// }
// console.log(setData('name','zhangsan '))
//泛型接口
// interface ConfigFn {
//     <T>(value: T): T
// }
// var setData: ConfigFn = function<T>(value:T): T {
//     return value
// }
// console.log(setData<string>('name'))
// console.log(setData<number>(854))
// 泛型接口2
// interface ConfigFn <T>{
//     (value: T): T
// }
// function setData<T>(value: T): T{
//   return value
// }
// var myData :ConfigFn<string>=setData
// console.log(myData('ass'))
//泛类：泛型可以帮助我们避免重复的代码以及对不特定数据类型的支持（类型校验），下面我们看看把类当做参数的泛型类  1.定义个类  2把类作为参数来约束数据传入的类型
//定义一个user类，这个类的作用是映射数据库字段，然后定义一个mysqldb的类，这个类用于操作数据库，然后把user类作为参数传入mysqldb中  把类作为参数来约束数据传入的类型
// class User {
//   username: string | undefined;   //ts怕不给username，password赋值，所以必须| undefined，否则警告
//   password: string | undefined;
// }
// class MysqlDb {
//   add(user: User): boolean{
//     console.log(user)
//     return true
//   }
// }
// var u = new User()
// u.username = "zhangsan"
// u.password='1234565'
// var db = new MysqlDb()
// db.add(u)
// class ArtcleCate {
//   title: string | undefined;   //ts怕不给username，password赋值，所以必须| undefined，否则警告
//   desc: string | undefined;
//   status: number | undefined;
// }
// class MysqlDb {
//   add(info: ArtcleCate): boolean{
//     console.log(info)
//     return true
//   }
// }
// var u = new ArtcleCate()
// u.title = "国内"
// u.desc = '新闻'
// u.status = 56855
// var db = new MysqlDb()
// db.add(u)
//操作数据库的泛型
// class ArtcleCate {
//   title: string | undefined;   //ts怕不给username，password赋值，所以必须| undefined，否则警告
//   desc: string | undefined;
//   status: number | undefined;
// }
// class MysqlDb <T>{
//   add(info:T): boolean{
//     console.log(info)
//     return true
//   }
// }
//想给user表加入数据
//1 定义一个user类，和数据库进行映射
// class User {
//   username: string | undefined;
//   password: string | undefined;
// }
// var u = new User()
// u.username = "zhangsan"
// u.password="88888888"
// var db = new MysqlDb()
// db.add(u)
// db.add('12333')  //也可打印出12333  无警告，需要改善
// var db = new MysqlDb<User>()
// db.add(u)
// db.add('122')  //警告
//定义一个ArtcleCate类，和数据库进行映射
// class ArtcleCate {
//   title: string | undefined;
//   desc: string | undefined;
//   status: number | undefined;
//   constructor(params: {
//     title: string | undefined,
//     desc: string | undefined,
//     status?: number | undefined,
//   }) {
//     this.title = params.title;
//     this.desc = params.desc;
//     this.status = params.status;
//   }
// }
// class MysqlDb<T>{
//   add(info: T): boolean {
//     console.log(info)
//     return true
//   }
//   updated(info: T, id: number): boolean{
//     console.log(info)
//     console.log(id)
//   return true
//   }
// }
// var a = new ArtcleCate({
//   title: 'fenlei',
//   desc:'aaadddsss'
// })
// var db = new MysqlDb<ArtcleCate>()
// db.add(a)
// var b = new ArtcleCate({
//   title: 'fei',
//   desc:'ooo'
// })
// b.status = 123
// var dd = new MysqlDb<ArtcleCate>()
// dd.updated(b,23)
/**
 功能：定义一个操作数据库库 支持Mysql  Mssql   MongoDb
 要求：Mysql  Mssql   MongoDb 功能一样，都有add updated get 方法
 注意: 约束统一的规范，以及代码重用
 解决方案：需要约束规范所以要定义接口，需要胆码重用所以用到泛型
  1 接口：在面向对象编程中，接口是一种规范的定义，它定义了行为和动作的规范
  2 泛型  通俗理解：泛型是解决 类 接口 方法的复用性
 */
// interface DBI <T>{
//   add(info:T): boolean;
//   update(info:T,id:number): boolean;
//   delete(id:number): boolean;
//   get(id:number): any[];
// }
//定义一个操作mysql数据库的类 注意：要实现泛型接口，这个类也应该是泛型类
// class MysqlDb<T> implements DBI<T>{
//   add(info: T): boolean {
//      console.log(info)
//     return true
//     throw new Error("Method not implemented.");
//   }
//   update(info: T, id: number): boolean {
//     throw new Error("Method not implemented.");
//   }
//   delete(id: number): boolean {
//     throw new Error("Method not implemented.");
//   }
//   get(id: number): any[] {
//     throw new Error("Method not implemented.");
//   }
// }
//定义一个操作mssql数据库的类
// class MssqlDb<T> implements DBI<T>{
//   constructor() {
//     console.log('数据库建立连接')
//   }
//   add(info: T): boolean {
//     console.log(info,'mssql')
//     return true
//     // throw new Error("Method not implemented.");
//   }
//   update(info: T, id: number): boolean {
//     throw new Error("Method not implemented.");
//   }
//   delete(id: number): boolean {
//     throw new Error("Method not implemented.");
//   }
//   get(id: number): any[] {
//     var list = [{
//       title: 'xxx',
//       desc:'ddd'
//     }]
//     return list
//     throw new Error("Method not implemented.");
//   }
// }
//操作用户表  定义一个user类，和数据库进行映射
// c
/**
 模块的概念（官方）：
   关于术语的一点说明，请务必注意一点，ts 1.5 里术语以及发生了变化。’内部模块‘现在叫做“命名空间”，’外部模块‘现在则简称为’模块‘ 模块在自身的作用域里执行，而不是全局作用域
   这意味着定义在一个模块里的变量、函数、类等等在模块外部是不可见的。除非你明确地使用export形式之一导出他们。相反，如果想使用模块导出的变量，你必须要导入他们，可以用import形式之一
 模块的概念（自己理解）：
   我们可以把一些公共的功能抽离成一个文件作为一个模块
   模块里面的变量，函数，类等默认是私有的、如果我们要在外部访问里面的数据先export导出再import导入
 */
// import {getData,save as sa} from './modules/db'
// getData()
// save() 改名
// sa()
/**
 *export default  默认导出
 每个模块都可以有一个default导出，默认导出使用default标记，且一个模块只能够有一个default导出，需要使用一种特殊的导入形式 不需要接对象的括号
 */
// import {MysqlDb, MssqlDb} from './modules/db'
//  class User {
//   username: string | undefined;
//   password: string | undefined;
// }
// var u = new User()
// u.username = "zhangsan"
// u.password="88888888"
// var db = new MysqlDb<User>()
// db.add(u)
// import { UserClass,dbuser} from './mod/user'
// var u = new UserClass()
// u.username = "lisisis"
// u.password='99999'
// dbuser.add(u)
//命名空间   避免命名冲突
// namespace A {
// }
// namespace B{
//   export function aa() {
//   }
//   export class Dog {
//     name: string;
//     constructor(name:string) {
//       this.name=name
//     }
//     eat() {
//       console.log('eat')
//     }
//   }
// }
// var d = new B.Dog('ss')
// d.eat()
// import {c} from './mlo/a'
// var f = new c.Dog('ss')
// f.eat()
/**
 命名空间  内部模块，主要用于组织代码，避免命名冲突
 模块      ts的外部模块的简称，侧重代码的复用，一个模块里可以有多个命名空间
 */
/**
 装饰器：
   装饰器是一种特殊类型的声明，它能够被附加到类声明，方法，属性，参数上，可以修改类的行为
   本质上就是一个方法，可以注入到类、方法、属性、参数上，扩展其功能；
常见的装饰器：类装饰器、属性装饰器、方法装饰器、参数装饰器...
装饰器在写法上有：普通装饰器(无法传参)、装饰器工厂(可传参)
装饰器已是ES7的标准特性之一，是过去几年JS最大的成就之一


 */
//类装饰器在类声明之前被声明，应用于类构造函数，可以监视、修改、替换类的定义，传入一个参数
//普通装饰器
// function logClass(par:any) {
//   console.log(par) //par 就是当前类
//   par.prototype.apiurl = 'xxx'  //动态扩展的属性
//   par.prototype.run = function () {
//     console.log('run')
//   }
// }
// @logClass  //不加分号
// class HttpClient{
//   constructor() {
//   }
//   getData() {
//   }
// }
// var htt:any = new HttpClient()
// console.log(htt.apiurl)
// htt.run()
// 装饰器工厂
// function logClass(par:string) {
//   return function (target:any) {
//     console.log(target)   //fun  httpclient
//     console.log(par)  //hello
//     target.prototype.pig = par
//   }
// }
// @logClass('hello')
// class HttpClient{
//   constructor() {
//   }
//   getData() {
//   }
// }
// var htt:any = new HttpClient()
// console.log(htt.pig)
//类装饰器
// 下面是类装饰器重载构造函数的例子
// 类装饰器表达式在运行时当做函数被调用，类的构造函数作为其唯一的参数
//  如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明
// function logClass(target:string) {
//   console.log(target)
//   return class extends target{
//     apiurl: any = "修改api"
//     getData() {
//       this.apiurl += '----'
//       console.log(this.apiurl)  //修改ap---   重载
//     }
//   }
// }
// @logClass
// class HttpClient{
//   apiurl: string |undefined;
//   constructor() {
//     this.apiurl='构造函数api'
//   }
//   getData() {
//     console.log(this.apiurl)
//   }
// }
// var htt:any = new HttpClient()
// console.log(htt.getData())
// 属性装饰器 属性装饰器表达式会在运行时当做函数被调用，传入下列2个参数
// 1 对于静态成员来说是类的构造函数，对于实力成员是类的原型对象
//    2 成员的名字
//类装饰器
// function logClass(par:string) {
//   return function (target: any) {
//     // console.log(par)
//     // console.log(target)
//   }
// }
// 属性装饰器
// function logPro(par:any) {
//   return function (target: any,attr:any) {
//     console.log(target, attr) //{constructor: ƒ} "url"
//     target[attr] = par
//   }
// }
// @logClass('xxx')
// class HttpClient{
//   @logPro('aaa')
//   url: any | undefined;
//   getData() {
//     console.log(this.url,'sss')
//   }
// }
// var htt:any = new HttpClient()
// console.log(htt.getData())//aaa
//参数装饰器表达式会在运行时被调用，可以为类的原型增加一些元素数据，传入3个参数：
// 对于静态成员来说是类的构造函数，对于实例成员来说是类的原型对象；
// 方法名称；
// 参数在函数参数列表中的索引；
//方法装饰器
// function get(par:any){
//   return function (target: any, medname: any, desc: any) {
//     console.log(target)  //{getData: ƒ, constructor: ƒ}
//     console.log(medname)  //getData
//     console.log(desc) //{writable: true, enumerable: true, configurable: true, value: ƒ}
//     target.api = 'bbb'
//     target.run = function () {
//       console.log('run')
//     }
//   }
// }
// class HttpClient{
//   url: any | undefined;
//   @get('getaaa')
//   getData() {
//     console.log(this.url,'sss')
//   }
// }
// var htt:any = new HttpClient()
// console.log(htt.api)  //bbb
// htt.run()  //run
// 、、方法装饰器2
function get(par) {
    return function (target, medname, desc) {
        console.log(target); //{getData: ƒ, constructor: ƒ}
        console.log(medname); //getData
        console.log(desc); //{writable: true, enumerable: true, configurable: true, value: ƒ}
        //修改装饰器方法 把装饰器方法里面传入的参数改为string类型
        var omed = desc.value;
        desc.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            args = args.map(function (value) {
                return String(value);
            });
            console.log(args);
            omed.apply(this, args); //会打 getdatassss
        };
    };
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.getData = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log(args);
        console.log('getdatasss');
    };
    __decorate([
        get('getlog')
    ], HttpClient.prototype, "getData", null);
    return HttpClient;
}());
var htt = new HttpClient();
htt.getData(123, 'sss'); //2) ["123", "sss"]
//方法参数装饰器  用的不多
// 参数装饰器表倒是会在运行时当做函数被调用，可以使用参数装饰器为类的元凶增加一些元素数据，传入一下3个参数
1;
对于;
