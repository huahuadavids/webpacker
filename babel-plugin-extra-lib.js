/**
 *@author huahuadavids
 *@date 2020/1/5 11:55
 */
const babel = require("@babel/core");
const types = require("@babel/types");
const fs = require("fs")

const code = 'import {a, b} from "lodash"';
const code1 = 'import a, {b} from "lodash"';

const visitor = {
  ImportDeclaration(path){
    const node = path.node;
    let vars = node.specifiers;
    if(vars[0].type !== 'ImportDefaultSpecifier'){
      let imports = vars.map(item => {
        return types.ImportDeclaration(
          [types.ImportDefaultSpecifier(item.local)],
          types.StringLiteral( `${node.source.value}/${item.local.name}`)
        )
      })
      path.replaceWithMultiple(imports)
    }


    // fs.writeFile("path.js", path, 'utf-8', function (err, data) {
    //   if(err){
    //     console.log("err")
    //   }else {
    //     console.log("success")
    //   }
    // })
  }
};
const plugin = {
  visitor
}
let res = babel.transform(code, {
  plugins: [
    plugin
  ]
})

console.log(res.code);
