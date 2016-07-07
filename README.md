#设计模式

###单例
是指一个特定的类只能有一个实例对象，就是说第二次使用类创建对象的时候应该得到与以一次所创建的对象相同

有三种方法实现
######1.将实例放入构造函数的静态属性中
```javascript
function Fun(){
    if(typeof Fun.instance ==='object'){
      return Fun.instance;
    }
    Fun.instance=this;
}
var f1=new Fun();
var f2=new Fun();
console.log(f1===f2);//true
```
这种方法的缺点是instance属性是公开的。其他代码有可能会影响到实例的属性。

######2.闭包中的实例
```javascript
  function Fun(){
    var instance;
    Fun = function(){
      return instance;
    }
    Fun.prototype=this;
    instance=new Fun();
    instance.constructor=Fun;
    return instance;
  }

  var f1=new Fun();
  var f2=new Fun();
  console.log(f1===f2);//true
  ```
加原型赋值是为了防止在new之后加上的原型属性不起作用，加constructor是为了后面new出来的实例的constructor可以指向构造函数本身

######3.构造函数和事例包含在即时函数中
```javascript
var Fun;
(function(){
  var instance;
  Fun=function(){
    if(instance){
      return instance;
    }
    instance=this;
  }
}());
var f1=new Fun();
var f2=new Fun();
console.log(f1===f2);//true
```
