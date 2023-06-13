/**
 * 循环是编程中的一种代码结构，用于重复执行一段代码块，直到满足特定条件为止。
 * 通过循环，我们可以有效地处理大量的数据、执行重复的任务和实现迭代算法
 */

//循环大致分2种

console.log("--------for----------");

//for 里面有三段代码以; 分割
//let i = 0 设置一个变量i 初始值为0 ，这段代码在循环开始时运行
//i < 5 判断i是否<5 ,在每次循环后执行，如果判断不成立则退出循环
//i++ 在每次后执行
for (let i = 0; i < 5; i++) {
  console.log("i =", i);
}

console.log("--------while----------");

let i = 0;
while (true) {
  if (i < 5) {
    console.log("i =", i);
  } else {
    //break 跳出循环语法
    break;
  }
  i++;
}

//for 一般用于知道需要循环几次 而while 一般适用于不确定循环次数
console.log("--------while 随机增加----------");
let count = 1;
let num = 0;
while (true) {
  console.log("第", count, "次循环");
  if (num < 5) {
    console.log("num =", num);
  } else {
    break;
  }
  //Math.random() 随机生成一个 0～1的小数
  num += Math.random();
  count++;
}
