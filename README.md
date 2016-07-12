#javascript设计模式

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

###工厂
工厂模式是为了创建对象，它通常在类或者类的静态方法中实现。<br>
具有下列目标<br>
1.当创建相似对象时执行重复操作。<br>
2.在编译时不知道具体类型的情况下，提供一种创建对象的接口。<br>
```javascript
  //构造函数
  function CarMaker(){}
  //原型方法
  CarMaker.prototype.drive=function(){
    console.log("Vroom, I have "+this.doors+" doors");
  }
  //静态工厂方法
  CarMaker.factory=function(type){
    var constr=type,nrecar;
    if(typeof CarMaker[constr] !=='function'){
      throw{
        name:'Error',
        message:constr+"doesn't exist"
      }
    }
    if(typeof CarMaker[constr].prototype.drive!=='function'){
      CarMaker[constr].prototype=new CarMaker();
    }
    newcar=new CarMaker[constr]();
    return newcar;
  }
  //汽车厂商
  CarMaker.Compact=function(){
    this.doors=4;
  }
  CarMaker.Convertible=function(){
    this.doors=2;
  }
  CarMaker.SUV=function(){
    this.doors=5;
  }

  var corolla=CarMaker.factory('Compact');
  var solstice=CarMaker.factory('Convertible');
  var cherokee=CarMaker.factory('SUV');
  corolla.drive();//Vroom, I have 4 doors
  solstice.drive();//Vroom, I have 2 doors
  cherokee.drive();//Vroom, I have 5 doors
 ```
工厂在js中比较少用到，因为动态对象的缘故，一般通过构造函数就能实现大部分功能。以上是为了实现工厂模式才这样写，当然这样写也符合设计模式的思维，毕竟减少了代码的重复。



###迭代器
在迭代器模式中，通常有一个包含某种数据集合的对象。该数据可能存储在一个复杂数据结构的内部，而要提供一种简单的方法能够访问数据结构中的每个元素。对象的消费者并不需要知道如何组织数据，所有需要做的就是取出单个数据进行工作。
在es6中 已经实现了几种迭代器模式。

- 通过generator 和 yield 实现 （详情请自行查询api）
- 通过for of  Symbol.iterator 实现 （详情请自行查询api）

此种方法的迭代器对象主要提供next方法，next方法中返回value／done两个属性，done表示迭代是否完成，value表示本次迭代中返回的值。



###装饰
在装饰者模式中，可以在运行时动态添加附加功能到对象中。由于js对象是可变的，因此，添加功能到对象的过程变得很简单。
装饰者比较方便的特征在于其预期行为的可定制性与可配置性。可以从仅具有一些功能的普通对象开始，然后从可用的装饰资源池中选择需要用于增强普通对象的那些功能，并且按照顺序进行装饰，尤其当装饰顺序很重要的时候。
```javascript
  function Sale(price){
    this.price=price||100;
    this.decorateList=[];
  }
  Sale.decorators={};
  Sale.decorators.fedtax={
    getPrice:function(price){
      return price+price*5/100;
    }
  }
  Sale.decorators.quebec={
    getPrice:function(price){
      return price+price*7.5/100;
    }
  }
  Sale.prototype.decorate=function(decorator){
    this.decorateList.push(decorator);
  }
  Sale.prototype.getPrice=function(){
    var price=this.price,name,max=this.decorateList.length;
    for(var i=0;i<max;i++){
      name=this.decorateList[i];
      price=Sale.decorators[name].getPrice(price);
    }
    return price;
  }
  var sale=new Sale(100);
  sale.decorate('fedtax');//105
  sale.decorate('quebec');//107.5  112.875
  console.log(sale.getPrice());
  ```
