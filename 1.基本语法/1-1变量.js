/**
 * 变量是用来存储和表示数据的一种命名标识符。
 * 可以将变量看作是一个容器，用于存储各种类型的值，如数字(number)、字符串(string)、布尔值(boolean)等。
 * 通过给变量赋予一个值，可以在程序中使用这个变量来引用该值。
 */
//变量定义(string)
let myName = "爸爸";
//输出变量到终端
console.log(myName);
//输出多个变量到终端
console.log("我是:", myName);

//修改变量（赋值）
myName = "妈妈";

//输出变量到终端
console.log("我是:", myName);

//拼接变量
myName = myName + "和" + "孩子";
//输出变量到终端
console.log("我是:", myName);

/**
 * 变量有类型区分
 * string 字符串
 * number 数值类型
 * boolean 布尔型 (true false)
 */
console.log("------------number--------------");
//数值变量 number
let myMoney = 0;
console.log("你的余额:", myMoney);

console.log("现在充值100...");
// 代码特性 先计算 后赋值
//所以先计算 num + 100 然后将值赋值给 num
myMoney = myMoney + 100;
console.log("你的余额:", myMoney);

console.log("现在充值50...");
myMoney = myMoney + 50;
console.log("你的余额:", myMoney);

console.log("现在买一根雪糕-10快");
myMoney = myMoney - 10;
console.log("你的余额:", myMoney);

console.log("你把钱存银行，过了段时间他们翻倍了");
myMoney = myMoney * 2;
console.log("你的余额:", myMoney);

console.log("如果你现在把剩下的钱分给2个儿子");
let half = myMoney / 2;
console.log("每个人应该能分到:", half);

console.log("------------boolean--------------");
let boolean = true;
console.log("boolean的值:", boolean);
boolean = false;
console.log("boolean的值:", boolean);
console.log("boolean在代码中占用的内存较少主要用于判断时使用");
