# deep into webpack 

### 打包后的代码解析-简单解析 (./dist1-simple)
- bundle1-71k.js 就是一个匿名执行函数，
- 后边的参数，是文件路径是key，代码是value，
- 前边都是一样的, 重点是一个__webpack_require__ 方法

### 打包后的代码-按需加载解析 (./dist2-lazy-load)
- 原理 jsonp 

### webpack core  
- webpack 内部有一个事件流，叫tapable 
- module webpack一切都是模块，一个文件一个模块
- chunk 代码块，一个chunk多个模块，用于代码分割合并
- loader 模块转行器，如 less 转 css
- plugins 插件 工作流处理
- output.path 必须是绝对路径

### webpack 运行过程
> webpack启动后会从entry配置的module，递归解析entry所有的module，每次找到一个module。就会根据配置的loader，去
找出对应的转换规则，对module转换后，再解析出当前module依赖的module，这些模块会以entry为单位就行分组，
一个entry以及他的所有依赖被分到一个组，就是一个chunk，最后webpack会把所有文件转化为chunk输出，再整个过程中，
webpack会在恰当的时机，执行相应的plugin定义的逻辑 
