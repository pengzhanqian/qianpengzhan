# JAVA基础知识 \- 运算符

[[toc]]

> 说在前面的话，本文为个人学习[B站免费的马士兵java初级教程](https://www.bilibili.com/video/BV1RK4y1g7A5/?spm_id_from=333.337.search-card.all.click&vd_source=65c7f6924d2d8ba5fa0d4c448818e08a)后进行总结的文章，本文主要用于<b>JAVA基础知识</b>。

## 【1】运算符概述

::: info Java支持的所有的运算符

1. 算数运算符
   1. 加法运算符  `+` 
   2. 减法运算符  `-`
   3. 乘法运算符  `*`
   4. 除法运算符  `/`
   5. 求余运算符  `%`
   6. 自增运算符 `++`
   7. 自减运算符 `–`
2. 赋值运算符
   1. 赋值运算符 `=` 
   2. 先加法后赋值运算符 `+=`
   3. 先减法后赋值运算符 `-=`
   4. 先乘法后赋值运算符 `*=`
   5. 先除法后赋值运算符 `/=`
3. 关系运算符
   1. 大于 `>`
   2. 小于 `<`
   3. 大于等于 `>=`
   4. 小于等于 `<=`
   5. 等等于 `==`
   6. 不等于 `!=` 
4. 逻辑运算符
   1. 逻辑与 `&`
   2. 短路与 `&&`
   3. 逻辑或 `|`
   4. 短路或 `||`
   5. 逻辑非 `!`
   6. 逻辑异或 `^`
5. 条件运算符
   1. 三元运算符  若条件为true/false 则 A 或 B  `condition ? A : B` 
6. 位运算符
   1. `&` 
   2. `|`
   3. `^`
   4. `~`
   5. `>>`
   6. `<<`
   7. `>>>`

:::

::: info 相关单词释义

- 运算符/操作符：    operator
- 表达式： expression
- 操作数： operand
- 语句： sentence

:::

## 【2】算数运算符

### 【2.1】加法运算符 +

1. 加法运算符 + 在Java中的作用有哪些?
   1. 表示1个正数 ， 比如 +5 即 正数 5
   2. 表示数学中的2个操作数相加，加法操作， 比如  2 + 3 = 5 即： 数字 2 和 数字 3 相加 等于 5
   3. 表示字符串之间的拼接， 比如 "I" +  " can" + " speak"  + " English"  = "I can speak English"
2. 使用代码进行演示

::: important 代码演示加法运算符

``` java
// 代码演示加法运算符 +
public class OperAdd {
	public static void main(String[] args) {
		// 1) 表示正数
		System.out.println(+3); // 结果为 3
		// 2) 表示相加
		System.out.println(2 + 4); // 结果为 6
		// 3) 表示字符串的拼接
		// 规则：+号左右两侧的任意一侧有字符串，那么这个加号就是字符串拼接的作用，结果一定是字符串
		// 出现字符数据类型 和 数字 则需要计算Unicode码
		System.out.println("I" + " can" + " speak" + " English");// I can speak English
		System.out.println("num=" + 6);// num=6
		System.out.println(1 + "6");// 16  不是 7 
		int num = 56;
		System.out.println("num="+num);//"num=56" ---> num=56
		System.out.println(5+6+"7");//11+"7"--->"117"  --->117
		System.out.println(5+'6'+"7");//59 +"7"--->"597" --->597
		System.out.println("5"+6+"7");//"56"+"7"  --->"567"--->567
		System.out.println("5"+'6'+"7");//"56"+"7"--->"567"--->567
		System.out.println("5"+'6'+'7');//"56"+'7'--->"567"---567
	}
}
```

编译执行下, 看结果是否和我们注释后的答案一致 `javac -encoding utf-8  OperAdd.java` `java OperAdd`

``` powershell
E:\pri-workspace\java\operators>javac -encoding utf-8 OperAdd.java

E:\pri-workspace\java\operators>java OperAdd
3
6
I can speak English
num=6
16
num=56
117
597
567
567
567

E:\pri-workspace\java\operators>
```

源码大家参考下，稍微看下即可，就不过多解释了

![image-20241119100852184](../../../../.vuepress/public/images/image-20241119100852184.png)

:::

### 【2.2】减法运算符 -

1. 减法运算符在Java中的作用有哪些？
   1.  表示负数，比如 -3 
   2. 表示数学中的2个操作数相减，减法操作， 比如 18 - 6 = 12 即操作数18 减去 操作6 等于 12
2. 使用代码进行演示

::: important  代码演示减法运算符

``` java
// 代码演示减法运算符 -
public class OperSub {
	public static void main(String[] args) {
		// 1) 表示负数
		System.out.println(-2); // 结果为 -3
		// 2) 表示相减
		System.out.println(22 - 12); // 结果为 10
		System.out.println(100 - '6');//100 - 54 --->46
	}
}
```

编译执行下, 看结果是否和我们注释后的答案一致 `javac -encoding utf-8  OperSub.java` `java OperSub`

``` powershell
E:\pri-workspace\java\operators>java OperSub
-2
10
46

E:\pri-workspace\java\operators>
```

源码大家参考下，稍微看下即可，就不过多解释了

![image-20241119105818156](../../../../.vuepress/public/images/image-20241119105818156.png)

:::

### 【2.3】乘法运算符 *

1. 乘法运算符 `*` 在Java中的作用?
   1.  表示2个数值类型的操作数进行数学上的相乘
2. 使用代码进行演示

::: important  代码演示乘法运算符

``` java
// 代码演示乘法运算符  * 
public class OperMultiply {
	public static void main(String[] args) {
		// 1) 表示2个数值类型的数相乘
		System.out.println(7 * 8); // 结果为 56
		System.out.println(-10 * 2); // 结果为 -20
		System.out.println(2 * '6'); // 结果为 2*54 = 108
	}
}
```

编译执行下, 看结果是否和我们注释后的答案一致 `javac -encoding utf-8  OperMultiply.java` `java OperMultiply`

``` powershell
E:\pri-workspace\java\operators>javac -encoding utf-8 OperMultiply.java

E:\pri-workspace\java\operators>java OperMultiply
56
-20
108

E:\pri-workspace\java\operators>
```

源码大家参考下，稍微看下即可，就不过多解释了

![image-20241119111922895](../../../../.vuepress/public/images/image-20241119111922895.png)

:::

### 【2.4】除法运算符 /

1. 除法运算符 `/` 在Java中的作用?

   1.  表示2个数值类型的操作数进行数学上的相除

   ::: warning 注意

   28 / 7 = 4   这里的28叫做被除数 / 为除以 7为除数 = 等于,赋值  4为商 

   :::

2. 使用代码进行演示

::: important  代码演示除法运算符

``` java
// 代码演示除法运算符  * 
public class OperDivise {
	public static void main(String[] args) {
		// 1) 表示2个数值类型的操作数进行数学上的相除
		System.out.println(56 / 8); // 结果为 7
		System.out.println(-100 / 10); // 结果为 -10
		System.out.println(108 / '6'); // 结果为 108 / 54 = 2
	}
}
```

编译执行下, 看结果是否和我们注释后的答案一致 `javac -encoding utf-8  OperDivise.java` `java OperDivise`

``` powershell

```

源码大家参考下，稍微看下即可，就不过多解释了



:::

## 【3】赋值运算符

## 【4】关系运算符

## 【5】逻辑运算符

## 【6】条件运算符

## 【7】位运算符

## 【8】运算符的优先级别

## 【9】运算符总结


## 【10】参考资料

- [B站免费的马士兵java初级教程](https://www.bilibili.com/video/BV1RK4y1g7A5/?spm_id_from=333.337.search-card.all.click&vd_source=65c7f6924d2d8ba5fa0d4c448818e08a)