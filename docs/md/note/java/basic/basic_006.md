# JAVA基础知识 \- 方法的定义/调用/重载

[[toc]]

> 说在前面的话，本文为个人学习[B站免费的马士兵java初级教程](https://www.bilibili.com/video/BV1RK4y1g7A5/?spm_id_from=333.337.search-card.all.click&vd_source=65c7f6924d2d8ba5fa0d4c448818e08a)后进行总结的文章，本文主要用于<b>JAVA基础知识</b>。

## 【1】什么是方法?

> <b>方法(`method`)</b> 就是一段用来完成特定功能的代码片段，类似于其它语言的函数(`function`)。
>
> <b>方法</b>用于定义该类或该类的实例的行为特征和功能实现。
>
> <b>方法</b>是类和对象行为特征的抽象。
>
> <b>方法</b>很类似于面向过程中的函数。面向过程中，函数是最基本单位，整个程序由一个个函数调用组成。面向对象中，整个程序的基本单位是类，<b>方法</b>是从属于类和对象的。
>
> <b>方法</b>在被调用的时候，1个方法，`JVM`就会在内存虚拟机栈中创建1个<b>栈帧</b>。
>
> <b>栈帧</b> 用于存储:
>
> - 方法中定义的局部变量表
> - 操作数栈
> - 方法返回地址
> - 动态连接

> 例子：
>
> ```java
> void main() {
>     int a = 1;
>     callB();      // 调用点位置：地址【0x105】
>     int b = 2;    // 返回后继续执行的位置：地址【0x108】
> }
> 
> void callB() {
>     System.out.print("B");
> }
> ```
>
> <b>栈帧</b>创建的过程:
>
> ```mermaid
> graph LR
> main栈帧 --> |压入| callB栈帧
> callB栈帧[callB 栈帧结构：
>  局部变量表：空
>  操作数栈：空
>  返回地址：0x108]
> 
> ```
>
> 当 `callB()`执行完毕（遇到`return`或执行到方法结尾）：
>
> - `JVM`从当前栈帧（`callB`）中读取‌<b>返回地址(0x108)</b> ‌
> - 弹出`callB`栈帧
> - 将程序计数器（`PC`）设置为 ‌**0x108**‌
> - 继续执行`main()`中`int b=2;`的代码
>
> ------

## 【2】方法的声明格式

```java 
[修饰符1  修饰符2  …]  返回值类型    方法名(形式参数列表){
        Java语句；… … …
}
```

## 【3】方法的调用方式

> <font style="color: orange"><b>对象名.方法名(实参列表)</b></font>

## 【4】 方法的详细说明

> - <font style="color: orange"><b>形式参数</b></font> ：在方法声明时用于接收外界传入的数据。
> - <font style="color: orange"><b>实参</b></font>：调用方法时实际传给方法的数据。
> - <font style="color: orange"><b>返回值</b></font>：方法在执行完毕后返还给调用它的环境的数据。
> - <font style="color: orange"><b>返回值类型</b></font>：事先约定的返回值的数据类型，如无返回值，必须显示指定为为void。

## 【5】方法的代码示例

```java
public class Method01 {
    //方法的定义：（写方法）
    public static int add(int num1, int num2) {
        int sum = 0;
        sum += num1;
        sum += num2;
        return sum;
    }

    public static void main(String[] args) {
        int num = add(10, 20);
        System.out.println(num);
    }
}
```

> 然后编译为`.class`文件
>
> ` javac -encoding utf-8 .\Method01.java`
>
> 得到1个`.class`文件 `Method01.class`
>
> 然后再使用命令行将其编译为字节码文件
>
> `javap -v -p Method01.lcass`
>
> 得到如下代码:

```java 
 Last modified 2025-7-25; size 484 bytes
  MD5 checksum b7d64f502de97f0edc7919de8d115a55
  Compiled from "Method01.java"
public class Method01
  minor version: 0
  major version: 52
  flags: ACC_PUBLIC, ACC_SUPER
Constant pool:
   #1 = Methodref          #6.#17         // java/lang/Object."<init>":()V
   #2 = Methodref          #5.#18         // Method01.add:(II)I
   #3 = Fieldref           #19.#20        // java/lang/System.out:Ljava/io/PrintStream;
   #4 = Methodref          #21.#22        // java/io/PrintStream.println:(I)V
   #5 = Class              #23            // Method01
   #6 = Class              #24            // java/lang/Object
   #7 = Utf8               <init>
   #8 = Utf8               ()V
   #9 = Utf8               Code
  #10 = Utf8               LineNumberTable
  #11 = Utf8               add
  #12 = Utf8               (II)I
  #13 = Utf8               main
  #14 = Utf8               ([Ljava/lang/String;)V
  #15 = Utf8               SourceFile
  #16 = Utf8               Method01.java
  #17 = NameAndType        #7:#8          // "<init>":()V
  #18 = NameAndType        #11:#12        // add:(II)I
  #19 = Class              #25            // java/lang/System
  #20 = NameAndType        #26:#27        // out:Ljava/io/PrintStream;
  #21 = Class              #28            // java/io/PrintStream
  #22 = NameAndType        #29:#30        // println:(I)V
  #23 = Utf8               Method01
  #24 = Utf8               java/lang/Object
  #25 = Utf8               java/lang/System
  #26 = Utf8               out
  #27 = Utf8               Ljava/io/PrintStream;
  #28 = Utf8               java/io/PrintStream
  #29 = Utf8               println
  #30 = Utf8               (I)V
{
  public Method01();
    descriptor: ()V
    flags: ACC_PUBLIC
    Code:
      stack=1, locals=1, args_size=1
         0: aload_0
         1: invokespecial #1                  // Method java/lang/Object."<init>":()V
         4: return
      LineNumberTable:
        line 1: 0

  //这就是1个方法  1个独立的栈帧
  public static int add(int, int);
    descriptor: (II)I
    flags: ACC_PUBLIC, ACC_STATIC
    Code:
      stack=2, locals=3, args_size=2
         0: iconst_0
         1: istore_2
         2: iload_2
         3: iload_0
         4: iadd
         5: istore_2
         6: iload_2
         7: iload_1
         8: iadd
         9: istore_2
        10: iload_2
        11: ireturn
      LineNumberTable:
        line 4: 0
        line 5: 2
        line 6: 6
        line 7: 10

  //这就是1个方法  1个独立的栈帧
  public static void main(java.lang.String[]);
    descriptor: ([Ljava/lang/String;)V
    flags: ACC_PUBLIC, ACC_STATIC
    Code:
      stack=2, locals=2, args_size=1
         0: bipush        10
         2: bipush        20
         4: invokestatic  #2                  // Method add:(II)I
         7: istore_1
         8: getstatic     #3                  // Field java/lang/System.out:Ljava/io/PrintStream;
        11: iload_1
        12: invokevirtual #4                  // Method java/io/PrintStream.println:(I)V
        15: return
      LineNumberTable:
        line 11: 0
        line 12: 8
        line 13: 15
}
SourceFile: "Method01.java"
```

## 【6】方法总结

> 1. **方法**：对特定的功能进行提取，形成一个代码片段，这个代码片段就是我们所说的方法
>
> 2. 方法和方法是**并列**的关系，所以我们定义的方法不能写到`main`方法中
>
> 3. **方法的语法结构**
>
>    ```java
>     修饰符 方法返回值类型 方法名(形参列表){
>            方法体;
>            return 方法返回值;
>     }
>    ```
>
> 4. **方法的作用**：提高代码的复用性
>
> 5. **总结方法定义的格式**
>
>    1. **修饰符**: 暂时使用 `public static`/ `public`/ `private` 
>    2. **方法返回值类型**  : 方法的返回值对应的数据类型
>       1. **可以是基本数据类型**（byte,short,int,long,float,double,char,boolean） 
>       2. **也可以是引用数据类型** 
>    3. **方法名** :见名知意，首字母小写，其余遵循驼峰命名，  eg: addNum ,一般尽量使用英文来命名  
>    4. **形参列表** : 方法定义的时候需要的形式参数 ：  int  num1, int num2 -->相当于告诉方法的调用者：需要传入几个参数，需要传入的参数的类型，实际参数：方法调用的时候传入的具体的参数：  10,20  -->根据形式参数的需要传入的
>
> 6. **方法体**：具体的业务逻辑代码
>
> 7. **return 方法返回值** 
>
>    1. 方法如果有返回值的话： return+方法返回值，将返回值返回到方法的调用处
>    2. 方法没有返回值的话：return可以省略不写了，并且方法的返回值类型为：void

## 【7】方法的重载

### 7.1 什么是方法的重载

> ::: info 什么是方法的重载?
> **方法的重载** 是指一个类中可以定义多个<font style="color:red;"><b>方法名相同，但参数不同</b></font>的方法。 调用时，会根据不同的参数自动匹配对应的方法。
>
> :::
>
> ::: warning 注意
>
> <b>注意本质</b>：<b>重载</b>的方法，实际是完全不同的方法，只是名称相同而已！
>
> :::

### 7.2 构成方法重载的条件

> ::: info 构成方法重载的条件
>
> - 不同的含义：形参类型、形参个数、形参顺序不同
> - 只有返回值不同不构成方法的重载
>   - int a(String str){}与 void a(String str){}不构成方法重载
> - 只有形参的名称不同，不构成方法的重载
>   - int a(String str){}与int a(String s){}不构成方法重载
>
> :::

### 7.3 代码示例

```java
public class MethodOverride {
    public static void main(String[] args) {
        //10+20:
        int sum = add(10, 20);
        System.out.println(sum);

        //20+40+80:
        //System.out.println(add(add(20,40),80));
        System.out.println(add(20, 40, 80));
        //30+60+90+120:
        //System.out.println(add(add(30,60),add(90,120)));
        System.out.println(add(30, 60, 90, 120));
        //9.8+4.7:
        //System.out.println(add(9.8,4.7));
        System.out.println(add(9.8, 4.7));
    }

    //定义一个方法：两个数相加：两个int类型数据相加
    public static int add(int num1, int num2) {
        return num1 + num2;
    }

    //定义一个方法：三个数相加：
    public static int add(int num1, int num2, int num3) {
        return num1 + num2 + num3;
    }

    //定义一个方法：四个数相加：
    public static int add(int num1, int num2, int num3, int num4) {
        return num1 + num2 + num3 + num4;
    }

    //定义一个方法：两个数相加：两个double类型的数据相加
    public static double add(double num1, double num2) {
        return num1 + num2;
    }
}
```

### 7.4 重载总结

> 1. 方法的重载：在同一个类中，方法名相同，形参列表不同的多个方法，构成了方法的重载。
> 2. 方法的重载只跟：方法名和形参列表有关，与修饰符，返回值类型无关。
> 3. 注意：形参列表不同指的是什么？
>    1. （1）个数不同
>       add()   add(int num1)   add(int num1,int num2)
>    2. （2）顺序不同
>       add(int num1,double num2)   add(double num1,int num2)
>    3. （3）类型不同
>       add(int num1)   add(double num1)
> 4. 请问下面的方法是否构成了方法的重载？
>    1. (1)add(int a)  和  add(int b)   --->不构成,相当于方法的重复定义
>    2. (2)public static int add(int a) 和  public static void add(int b)  --->不构成

## 【8】参考资料

- [B站免费的马士兵java初级教程](https://www.bilibili.com/video/BV1RK4y1g7A5/?spm_id_from=333.337.search-card.all.click&vd_source=65c7f6924d2d8ba5fa0d4c448818e08a)

