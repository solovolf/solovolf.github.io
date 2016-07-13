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
装饰者比较方便的特征在于其预期行为的可定制性与可配置性。可以从仅具有一些功能的普通对象开始，然后从可用的装饰资源池中选择需要用于增强普通对象的那些功能，并且按照顺序进行装饰，尤其当装饰顺序很重要的时候。<br>
以下是买东西时考虑到在不同州的税费不同而最终价格不同的解决办法，典型的装饰模式。
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
  
###策略
策略模式支持在运行时选择算法。代码使用同一个接口来工作，但是它却根据客户正在试图执行任务的上下文，从多个算法中选择用于处理特定任务的算法。<br>
使用策略的一个经典场景是解决表单验证问题。可以创建一个具有validate()方法的验证器(validator)对象。无论表单的具体类型是什么，该方法都将会被调用，并总是返回一个包含未经验证的数据列表以及任意的错误消息的对象。<br>
但是根据具体的表单形式以及待验证的数据，验证器的内部将选择不同类型的检查方法。验证器将选择最佳的策略（strategy）以处理任务，并且将具体的数据验证委托给适当的算法。
```javascript
var validator={
    types:{},
    messages:[],
    validate:function(data){
      var i,msg,type,checker,result_ok;
      this.messages=[];
      for(i in data){
        if(data.hasOwnProperty(i)){
          type = this.config[i];
          checker=this.types[type];
        }
        if(!type){
          continue;
        }
        if(!checker){
          throw {
            name:'ValidationError',
            message:'No handler to validate type:'+type
          }
        }
        result_ok=checker.validate(data[i]);
        if(!result_ok){
          msg = "Invalid value for *"+i+"*,"+checker.instructions;
          this.messages.push(msg);
        }
      }
      return this.hasErrors();
    },
    hasErrors:function(){
      return this.messages.length!==0;
    }
  };

  validator.types.isNonEmpty={
    validate:function(value){
      return value !=="";
    },
    instructions:'传入的值不能为空'
  };
  validator.types.isNumber = {
    validate: function (value) {
      return !isNaN(value);
    },
    instructions: "传入的值只能是合法的数字，例如：1, 3.14 or 2010"
  };
  validator.types.isAlphaNum = {
    validate: function (value) {
      return !/[^a-z0-9]/i.test(value);
    },
    instructions: "传入的值只能保护字母和数字，不能包含特殊字符"
  };
  var data = {
    first_name: "",
    last_name: "Xu",
    age: "unknown",
    username: "TomXu"
  };

  validator.config = {
    first_name: 'isNonEmpty',
    age: 'isNumber',
    username: 'isAlphaNum'
  };
  validator.validate(data);

  if (validator.hasErrors()) {
    console.log(validator.messages.join("\n"));
  }
```
策略和装饰比较容易混淆，个人理解：<br>
策略模式是指一个事物有几种解决办法，而通过环境使得这几种解决办法可以通过互换来改变行为。比如一个类有一个排序的方法，而排序可以有很多种，比如：冒泡／快速／插入 等等，可以做一个排序抽象类，具体的排序都集成自这个抽象类，运行时可以动态的选择一种方法。在js中没有抽象类的概念，所以这里的策略模式采用的是普通的对象，通过给对象附加属性方法的形式来实现。<br>
而装饰模式则有一个很经典的例子，悟空七十二变。每变一种，就有那种动物具有的特性，但本质还是猴子。装饰模式就是在不改变现有接口状态下对功能做补充。<br>
总结区别就是：装饰模式的重点是对原有方法做补充，而策略模式的重点在于动态对功能的内部实现做选择。一个附加一个选择。
