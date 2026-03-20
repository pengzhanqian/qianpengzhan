# 第四章: Python3 基础数据类型

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

