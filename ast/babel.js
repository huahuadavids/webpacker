/**
 *@author huahuadavids
 *@date 2020/1/4 16:47
 */
const babel = require("@babel/core");

// 可以实现类型判断，生成ast节点
// https://babeljs.io/docs/en/next/babel-types.html
const types = require("@babel/types");


let code = "let sum = (a,b) => a + b";

// 可以对特定类型的节点进行处理

let visitor = {
  ArrowFunctionExpression(path) {
    console.log(path.type)
    let params = path.node.params;

    let body = types.BlockStatement(
      [types.returnStatement(path.node.body)]
    );

    let fn = types.functionExpression(null, params, body, false, false);


    path.replaceWith(fn);
  }
}
// visitor模式
let arrowPlugin = {
  visitor
}

// babel 内部会把代码转成ast
let res = babel.transformSync(code, {
  plugins: [
    arrowPlugin
  ]
});

//
// console.log(res.code);
// console.log(res.map);
// console.log(res.ast);