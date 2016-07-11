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
