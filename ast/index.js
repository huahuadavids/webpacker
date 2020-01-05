/**
 *@author huahuadavids
 *@date 2020/1/4 15:38
 */
let esprima = require("esprima");
let estraverse = require("estraverse");
let escodegen = require("escodegen")

let code = "function demo(){}";

let tree = esprima.parse(code);

estraverse.traverse(tree, {
  enter(node){
    console.log("enter--", node.type)
    if(node.type === 'Identifier'){
      node.name = "_" + node.name
    }
  },
  leave(node){
    console.log("leave--",node.type)
  },
})


let res = escodegen.generate(tree)

console.log(res);