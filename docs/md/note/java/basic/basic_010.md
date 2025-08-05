# JAVA基础知识 \- 常用类

[[toc]]

> 说在前面的话，本文为个人学习[B站免费的马士兵java初级教程](https://www.bilibili.com/video/BV1RK4y1g7A5/?spm_id_from=333.337.search-card.all.click&vd_source=65c7f6924d2d8ba5fa0d4c448818e08a)后进行总结的文章，本文主要用于<b>JAVA基础知识</b>。

## 【1】包装类

### 1.1 引入

> - 【1】什么是包装类？
>
>   - > ::: info <b>包装类</b>
>     >
>     > <b>包装类</b>：以前定义变量，经常使用基本数据类型，对于基本数据类型来说，它就是一个数，加点属性，加点方法，加点构造器，将基本数据类型对应进行了一个封装，产生了一个新的类 -- <b>包装类</b>
>     >
>     > :::
>
>     > EG:
>     >
>     > `int,byte`.....--->基本数据类型
>     > 包装类--->引用数据类型
>
> - 【2】对应关系
>
>   - 基本数据类型          对应的包装类                继承关系
>     - `byte`                          `Byte`                           --->`Number`--->`Object`
>     - `short`                         `Short`                         --->`Number`--->`Object`
>     - `int`                             `Integer`                      --->`Number`--->`Object`
>     - `long`                          `Long`                          --->`Number`--->`Object`
>     - `float`                          `Float`                          --->`Number`--->`Object`
>     - `double`                      `Double`                      --->`Number`--->`Object`
>     - `char`                          `Character`                  `Object`
>     - `boolean`                    `Boolean`                    `Object`
>
> - 【3】已经有基本数据类型了，为什么要封装为包装类？
>
>   - （1）`java`语言 面向对象的语言，最擅长的操作各种各样的类。
>   - （2）以前学习装数据的--->数组，`int[]`  `String[]`  `double[`]   Student[]
>   - （3）以后学习的装数据的--->集合，有一个特点，只能装引用数据类型的数据 
>
> - 【4】是不是有了包装类以后就不用基本数据类型了？
>
>   - > 不是。

### 1.2 `Integer` 

#### 1.2.1 使用

> 无需导入包，直接使用, 在 `java,lang`包下
>
> ![image-20250805102540788](../../../../.vuepress/public/images/image-20250805102540788.png)

#### 1.2.2 类的继承关系

> ![image-20250805102613899](../../../../.vuepress/public/images/image-20250805102613899.png)

#### 1.2.3 实现接口

> ![image-20250805102817491](../../../../.vuepress/public/images/image-20250805102817491.png)

#### 1.2.4 被`final`修饰

> 这个类被`final`修饰，那么这个类<font style="color:red;"><b>不能有子类，不能被继承</b></font>
>
> ![image-20250805102932650](../../../../.vuepress/public/images/image-20250805102932650.png)

#### 1.2.5 类的衍生

> 包装类是对基本数据类型的封装： 对`int`类型封装产生了`Integer`
>
> ![image-20250805103018984](../../../../.vuepress/public/images/image-20250805103018984.png)

#### 1.2.6 类的历史

> ![image-20250805103056481](../../../../.vuepress/public/images/image-20250805103056481.png)
>
> 从`JDK1.0` 就开始有包装类了

#### 1.2.7 属性

> 我们写一段测试代码， 如下，然后编译执行下:
>
> ```java
> package com.learn.javabasic.oftenuse;
> 
> /**
>  * @author qianpengzhan
>  * @since 2025/8/5 10:43
>  */
> public class IntegerTest {
>     public static void main(String[] args) {
>         //属性：
>         System.out.println(Integer.MAX_VALUE);
>         System.out.println(Integer.MIN_VALUE);
>         //“物极必反”原理：
>         System.out.println(Integer.MAX_VALUE + 1);
>         System.out.println(Integer.MIN_VALUE - 1);
>     }
> }
> 结果：
> 2147483647
> -2147483648
> -2147483648
> 2147483647
> ```
>
> 这里我们发现： ` Integer.MAX_VALUE + 1 =  -2147483648`  变成负数了.
>
> 这个就是超出了包装类的最大值后会出现的反值现象。

#### 1.2.8 构造器

> `Integer`的源码中是没有空参构造器的。
>
> - （1）int类型作为构造器的参数：
>
>   ```java
>   Integer i1 = new Integer(12);
>   ```
>
> ![image-20250805111704999](../../../../.vuepress/public/images/image-20250805111704999.png)
>
> - （2）String类型作为构造器的参数：
>
> ```java
> Integer i2 = new Integer("12");
> Integer i3 = new Integer("abcdef");
> ```
>
> ![image-20250805111809471](../../../../.vuepress/public/images/image-20250805111809471.png)
>
> ::: warning 注意
>
> ```java
> @Deprecated(since="9", forRemoval = true)
> public Integer(int value) {
>     this.value = value;
> }
> @Deprecated(since="9", forRemoval = true)
> public Integer(String s) throws NumberFormatException {
>     this.value = parseInt(s, 10);
> }
> ```
>
> JDK9之后就没有构造器，只能`Integer.valueOf()`
>
> :::

#### 1.2.9 自动拆装箱

> - 包装类特有的机制：自动装箱  自动拆箱
>
> ```java
> //自动装箱：int--->Integer
> Integer i = 12;
> System.out.println(i);
> //自动拆箱：Integer--->int
> Integer i2 = new Integer(12);
> int num = i2;
> System.out.println(num);
> ```
>
> - （1）自动装箱  自动拆箱 是从`JDK1.5`以后新出的特性
> - （2）自动装箱  自动拆箱 ：将基本数据类型和包装类进行快速的类型转换。
> - 验证：
>   - ![image-20250805112307039](../../../../.vuepress/public/images/image-20250805112307039.png)
>   - 可以自定打断点测试是否走入valueOf方法中：
>   - ![image-20250805112341881](../../../../.vuepress/public/images/image-20250805112341881.png)

#### 1.2.10 常用方法

> - `valueOf`方法的底层：
>
> ![image-20250805112420211](../../../../.vuepress/public/images/image-20250805112420211.png)

> - `CompareTo()`
>
> 代码示例：
>
> ```java
> package com.learn.javabasic.oftenuse;
> 
> /**
>  * @author qianpengzhan
>  * @since 2025/8/5 10:43
>  */
> public class IntegerTest {
>     public static void main(String[] args) {
>         //属性：
>         System.out.println(Integer.MAX_VALUE);
>         System.out.println(Integer.MIN_VALUE);
>         //“物极必反”原理：
>         System.out.println(Integer.MAX_VALUE + 1);
>         System.out.println(Integer.MIN_VALUE - 1);
> 
> 
>         //compareTo：只返回三个值：要么是0,-1,1
>         Integer i1 = Integer.valueOf(6);
>         Integer i2 = Integer.valueOf(12);
>         System.out.println(i1.compareTo(i2));// return (x < y) ? -1 : ((x == y) ? 0 : 1);
>         //equals:Integer对Object中的equals方法进行了重写，比较的是底层封装的那个value的值。
>         //Integer对象是通过new关键字创建的对象：
>         Integer i3 = Integer.valueOf(12);
>         Integer i4 = Integer.valueOf(12);
>         System.out.println(i3 == i4);//false 因为==比较的是两个对象的地址
>         boolean flag = i3.equals(i4);
>         System.out.println(flag);
>         //Integer对象通过自动装箱来完成：
>         Integer i5 = 130;
>         Integer i6 = 130;
>         System.out.println(i5.equals(i6));//true
>         System.out.println(i5 == i6);
>         /*
>         如果自动装箱值在-128~127之间，那么比较的就是具体的数值
>         否在，比较的就是对象的地址
>          */
>         //intValue() :作用将Integer--->int
>         Integer i7 = 130;
>         int i = i7.intValue();
>         System.out.println(i);
>         //parseInt(String s) :String--->int:
>         int i8 = Integer.parseInt("12");
>         System.out.println(i8);
>         //toString:Integer--->String
>         Integer i10 = 130;
>         System.out.println(i10.toString());
>     }
> }
> 
> ```

## 【2】日期相关类

### 2.1 最早的`Date`类

> 

## 【X】参考资料

- [B站免费的马士兵java初级教程](https://www.bilibili.com/video/BV1RK4y1g7A5/?spm_id_from=333.337.search-card.all.click&vd_source=65c7f6924d2d8ba5fa0d4c448818e08a)