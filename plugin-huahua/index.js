module.exports = function ({types}) {
  return {
    name: "huahua",
    visitor: {
      ImportDeclaration(path, ref){
        // 当前节点
        const node = path.node;

        // 配置支持的库
        const libs = ref.opts.libs;

        // 当前的库
        const lib = node.source.value;

        if(libs.indexOf(lib) > -1){
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
        }
      }
    }
  };
}



