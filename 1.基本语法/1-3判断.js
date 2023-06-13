/**
 * 上一节课，我们发现当我们的钱为0时仍然可以购买雪糕
 * 但是实际生活中没钱肯定不能购买
 * 这时候我们就要让程序来进行判断
 */

//先定义一个myMoney变量
console.log("----------1------------");
let myMoney = 100;
console.log("你现在余额:", myMoney);
//定义一个买雪糕的函数
function buyIcecreams(count) {
  console.log("调用 buyIcecreams 函数");
  let iceCost = 10;
  const cost = iceCost * count;
  //如果我的钱 足够买 雪糕才让购买
  //if 如果 myMoney 大于或等于 cost 的价格
  //else 否则
  if (myMoney >= cost) {
    myMoney -= cost;
    console.log("你买了", count, "根雪雪糕,价格是:", cost);
  } else {
    console.log("你现在余额不足,无法购买！");
  }

  console.log("你现在余额:", myMoney);
  return cost;
}

//让我们购买3次雪糕，每次购买4根
buyIcecreams(4);
buyIcecreams(4);
buyIcecreams(4);

//if 也可以

//再定义一个买雪糕的函数，这次如果 总数不够 ，但是可以买一根的话 就买一根
function buyIcecreams2(count) {
  console.log("调用 buyIcecreams 函数");
  let iceCost = 10;
  const cost = iceCost * count;
  //如果我的钱 足够买 雪糕才让购买
  //if 如果 myMoney 大于或等于 cost 的价格
  //else 否则
  if (myMoney >= cost) {
    myMoney -= cost;
    console.log("你买了", count, "根雪雪糕,价格是:", cost);
  } else if (myMoney >= iceCost) {
    myMoney -= iceCost;
    console.log("你的钱只够买1根雪雪糕,价格是:", iceCost);
  } else {
    console.log("你现在余额不足,无法购买！");
  }

  console.log("你现在余额:", myMoney);
  return cost;
}
console.log("----------2------------");
//我们把钱设为10块
myMoney = 10;
console.log("你现在余额:", myMoney);
buyIcecreams2(2)