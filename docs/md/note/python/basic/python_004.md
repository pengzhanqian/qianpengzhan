# 第四章: Python3 基础数据类型介绍

[[toc]]

> 说在前面的话，本文为个人学习[Python3 教程](https://www.runoob.com/python3/python3-tutorial.html)后进行总结的文章，本文主要用于<b>Python3基础知识</b>。

## 1. 变量

> `Python`中的变量不需要声明。每个变量在使用前都必须赋值，变量赋值以后该变量才会被创建。
>
> 在 `Python`中，变量就是变量，它没有类型，我们所说的"类型"是变量所指的内存中对象的类型。
>
> 等号（=）用来给变量赋值。
>
> 等号（=）运算符左边是一个变量名,等号（=）运算符右边是存储在变量中的值。

实例如下:

```python
#!/usr/bin/python3

counter = 100          # 整型变量
miles   = 1000.0       # 浮点型变量
name    = "runoob"     # 字符串

print (counter)
print (miles)
print (name)
```

执行以上代码，输出结果为：

```python
100
1000.0
runoob
```

## 2.多个变量赋值

> Python允许你同时为多个变量赋值。

例如：

```python
a = b = c = 1
```

以上实例，创建一个整型对象，值为 1，从后向前赋值，三个变量被赋予相同的数值。

> 您也可以为多个对象指定多个变量。

例如：

```python
a, b, c = 1, 2, "runoob"
```

以上实例，两个整型对象 1 和 2 的分配给变量 a 和 b，字符串对象 "runoob" 分配给变量 c。

## 3.查看变量的类型

> 可以通过 type() 函数查看变量的类型：

例如：

```python
# 变量定义
x = 10          # 整数
y = 3.14         # 浮点数
name = "Alice"   # 字符串
is_active = True # 布尔值

# 多变量赋值
a, b, c = 1, 2, "three"

# 查看数据类型
print(type(x))        # <class 'int'>
print(type(y))        # <class 'float'>
print(type(name))     # <class 'str'>
print(type(is_active)) # <class 'bool'>

print(type(a))		  # <class 'int'>
print(type(b))	      # <class 'int'>
print(type(c))        # <class 'str'>
```

## 4.标准数据类型

> `Python3` 种常见的数据类型有:
>
> - **Number 数字**
> - **String 字符串**
> - **bool 布尔类型**
> - **List 列表类型**
> - **Tuple 元组类型**
> - **Set 集合**
> - **Dictionary 字典**
> - **bytes 字节数组类型**

> `Python3` 的六个标准数据类型中: 
>
> - <b>不可变数据(3个)</b> ： **Number(数字)、String(字符串)、Tuple(元组)**
> - <b>可变数据(3个)</b> ： **List(列表)、Dictionary(字典)、Set(集合)**

