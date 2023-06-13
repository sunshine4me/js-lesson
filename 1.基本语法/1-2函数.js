/**
 * 函数是一段可重复使用的代码块
 * 接收输入参数并返回输出结果
 * 作用是将一些相关的代码组织起来，使程序结构更清晰、易于理解和维护
 */

let myMoney = 100;
console.log("你现在余额:", myMoney);

/**
 * 普通的购物代码
 */

//雪糕价格
let iceCost = 10;
// myMoney -= iceMoney 是  myMoney = myMoney - iceMoney 的缩写
//依然遵循先计算 后赋值的概念 先计算 - 再计算 =
myMoney -= iceCost;
console.log("你买了一根雪雪糕,价格是:", iceCost);
console.log("你现在余额:", myMoney);

//定义一个买雪糕的函数
function buyIcecream() {
  console.log("调用 buyIcecream 函数");
  let iceCost = 10;
  myMoney -= iceCost;
  console.log("你买了一根雪雪糕,价格是:", iceCost);
  console.log("你现在余额:", myMoney);
}

//然后我们再买2根雪糕
buyIcecream();
buyIcecream();

//如果钱为0，我们再买1根雪糕 会发生什么
buyIcecream();

//如果我们有时候想买1根 有时想买2根我应该如何对函数进行改造
/**
 * 购买复数雪糕的函数
 * 注意函数名是 buyIcecreams 多了个 s 表示复数，
 * @param {*} count 表示购买数量
 * @returns 花了多少钱
 */
function buyIcecreams(count) {
  console.log("调用 buyIcecreams 函数");
  let iceCost = 10;
  const cost = iceCost * count;
  myMoney -= cost;
  console.log("你买了", count, "根雪雪糕,价格是:", cost);
  console.log("你现在余额:", myMoney);
  // return 关键字表示 返回 ，
  // 这里表示这次消费一共花了多少钱
  return cost;
}

//我们来买2根雪糕
let cost1 = buyIcecreams(2);

//我们来买4根雪糕
let cost2 = buyIcecreams(4);
//通过 两次 return 的值 我们获得总共花费的价格
console.log("看看我们用 buyIcecreams 花了多少钱:", cost1 + cost2);

//如果我们的钱为0，我们再买1根雪糕，会发生什么
buyIcecreams(1);
