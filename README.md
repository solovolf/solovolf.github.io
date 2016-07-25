#javascript设计模式

* [1.单例](#1)


<h3 id="1">单例</h3>
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

<h3 id="2">工厂</h3>
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


###外观
为子系统中的一组接口提供了一个一致的界面，此模块定义了一个高层接口，这个接口值得这一子系统更加容易使用。<br>
外观模式不仅简化类中的接口，而且对接口与调用者也进行了解耦。外观模式经常被认为开发者必备，它可以将一些复杂操作封装起来，并创建一个简单的接口用于调用。<br>
外观模式经常被用于JavaScript类库里，通过它封装一些接口用于兼容多浏览器，外观模式可以让我们间接调用子系统，从而避免因直接访问子系统而产生不必要的错误。<br>
外观模式的优势是易于使用，而且本身也比较轻量级。但也有缺点<br> 外观模式被开发者连续使用时会产生一定的性能问题，因为在每次调用时都要检测功能的可用性。<br>
在js中外观模式被多处用到，最典型的就是编写一个方法来处理兼容性问题时：<br>
```javascript
var myEvent={
    addEvent:function (ele,eventtype,handler){
      if(ele.addEventListener){
        ele.addEventListener(eventtype,handler);
      }else{
        ele.attachEvent(eventtype,handler);
      }
    }
}
```
那么何时使用外观模式呢？一般来说分三个阶段：<br>
首先，在设计初期，应该要有意识地将不同的两个层分离，比如经典的三层结构，在数据访问层和业务逻辑层、业务逻辑层和表示层之间建立外观Facade。<br>
其次，在开发阶段，子系统往往因为不断的重构演化而变得越来越复杂，增加外观Facade可以提供一个简单的接口，减少他们之间的依赖。<br>
第三，在维护一个遗留的大型系统时，可能这个系统已经很难维护了，这时候使用外观Facade也是非常合适的，为系系统开发一个外观Facade类，为设计粗糙和高度复杂的遗留代码提供比较清晰的接口，让新系统和Facade对象交互，Facade与遗留代码交互所有的复杂工作。<br>


###代理
为其他对象提供一种代理以控制对这个对象的访问。<br>
代理模式使得代理对象控制具体对象的引用，代理几乎可以是任何对象，或者是一些难以复制的东西。<br>
在代理模式中，一个对象充当另一个对象的接口，他与外观模式的区别之处在于：外观模式中合并了多个方法调用的便利方法。代理则介于对象的客户端和对象本身之间，并且对该对象的访问进行保护。<br>


###中介者
中介者模式（Mediator），用一个中介对象来封装一系列的对象交互。中介者使各对象不需要显式地相互引用，从而使其耦合松散，而且可以独立地改变它们之间的交互。<br>
软件开发中，中介者是个行为设计模式，通过提供一个统一的接口让系统的不同部分进行通信。一般如果系统有很多字模块需要直接沟通，都要创建一个中央控制点让其各模块通过该中央控制点进行交互。中介者模式可以让这些字模块不需要直接沟通，而达到解耦的目的。
打个比方，平时很常见的机场交通控制系统，塔台就是中介者，他控制着飞机的起飞和降落，因为所有的沟通都是从飞机向塔台汇报来完成的，而不是飞机之间的相互沟通，中央控制系统就是该系统的关键，也就是软件设计中扮演的中介者角色。<br>


###观察者
观察者模式又叫发布订阅模式（Publish/Subscribe），它定义了一种一对多的关系，让多个观察者对象同时监听某一个主题对象，这个主题对象的状态发生变化时就会通知所有的观察者对象，使得它们能够自动更新自己。<br>

这种设计模式广泛应用于客户端javascript编程中。所有的浏览器事件都是该模式的例子。它的另一个名字也称为自定义事件，与那些由浏览器触发的事件相比，自定义事件表示是由编程者编程实现的事件。<br>
设计模式的背后主要动机是促进形成松散耦合。这种模式不是一个对象调用另一个对象的方法，而是一个对象订阅另一个对象的特定活动并在状态改变后获得通知。订阅者也称之为观察者，而被观察的对象成为发布者活着主题。当发生了一个重要的事件时，发布者将会通知所有订阅者并且可能经常以事件对象的形势传递消息。


##下面说明几点模式的不同
###代理模式
######使用场合
引用计数，C++利用引用计数来管理对象内存的回收，我们在使用这个对象时，都是通过引用计数来操作的，因为我们不知道这个对象实际的地址，这个引用计数就是该对象的代理；
######特点
1. 一对一，一个代理只能代表一个对象。
2. 只能代理一方，也就是PB是B的代理，A能通过PB访问B，但是B不能用过PB访问A。

###中介者
######使用场合
1. Android的Binder的总服务ServiceManager就是一个中介者，它们负责所有的客户端和所有服务之间的通信。
######特点
1. 多对多，这些被管理的对象之间都可以通信，他们的业务关系时交织在一起的。
2. A能够通过中介访问B，B也能通过中介访问A。

###桥接模式
######使用场合
当一个类有很多属性时，我们可以通过继承的方式来继承这些属性，但是如果属性不稳定时，继承会造成大量的继承类，所以这个时候使用组合或者聚合更好一些。
######特点
1. 一对多的关系，一个类可以有很多其他属性。
2. 桥接强调不是对象之间的通信，而是拥有某些属性。
