/**
 *@author huahuadavids
 *@date 2020/1/4 16:47
 */
const babel = require("@babel/core");

// 可以实现类型判断，生成ast节点
// https://babeljs.io/docs/en/next/babel-types.html
const types = require("@babel/types");

// parser是从右往前算的
let code = "let sum = 10 * 3 * 4 * 3";

// 可以对特定类型的节点进行处理

let visitor = {
  BinaryExpression(path) {
    console.log(path.toLocaleString())
    // console.log(path.parentPath)
    let node = path.node;
    let {left, right} = node;
    if(!isNaN(left.value) && !isNaN(left.value) ){
      let res = eval(left.value + node.operator + right.value);
      path.replaceWith(types.numericLiteral(res));
      // 如果父节点也是表达式，递归
      // if(path.parentPath.node.type === 'BinaryExpression'){
      //   visitor.BinaryExpression(path.parentPath)
      // }
    }
  }
}

// 递归也是从大到小，从右往左
// 10 * 3 * 4 * 3
// 10 * 3 * 4
// 10 * 3



// visitor模式
let sumPlugin = {
  visitor
}

let res = babel.transformSync(code, {
  plugins: [
    sumPlugin
  ]
});

console.log(res.code)