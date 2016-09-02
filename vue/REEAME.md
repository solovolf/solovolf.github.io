**首先在阅读源码的时候得搞清楚整个框架的基础结构，然后再根据框架的核心思想和亮点来一个一个剖析内部实现，最后再回过头来一个个整理实现思路，了解框架的设计精华所在。**

----------

首先程序结构梳理
![这里写图片描述](http://img.blog.csdn.net/20160901145911676)
引用自[勾三股四](http://jiongks.name/blog/vue-code-review/#comment-111936)


----------


框架内容大概分为两个部分

 1. 全局：包括全局接口、默认选项等。
 2. vm实例：实例api和初始化过程设计。

整个实例初始化的过程中，重中之重就是把数据 (Model) 和视图 (View) 建立起关联关系。Vue.js 和诸多 MVVM 的思路是类似的，主要做了三件事：

1. 通过 observer 对 data 进行了监听，并且提供订阅某个数据项的变化的能力
2. 把 template 解析成一段 document fragment，然后解析其中的 directive，得到每一个 directive 所依赖的数据项及其更新方法。比如 v-text="message" 被解析之后 (这里仅作示意，实际程序逻辑会更严谨而复杂)：
	1. 所依赖的数据项 this.$data.message，以及
	2. 相应的视图更新方法 node.textContent = this.$data.message
3. 通过 watcher 把上述两部分结合起来，即把 directive 中的数据依赖订阅在对应数据的 observer 上，这样当数据变化的时候，就会触发 observer，进而触发相关依赖对应的视图更新方法，最后达到模板原本的关联效果。

**所以整个 vm 的核心，就是如何实现 observer, directive (parser), watcher 这三样东西**


[最新的目录说明再此](https://github.com/vuejs/vue/blob/next/.github/CONTRIBUTING.md#project-structure)
