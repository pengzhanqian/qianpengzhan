# 第九章: Python3 列表(List)

[[toc]]

> 说在前面的话，本文为个人学习[Python3 教程](https://www.runoob.com/python3/python3-tutorial.html)后进行总结的文章，本文主要用于<b>Python3基础知识</b>。

## 1. 列表（List）

> - 序列是 Python 中最基本的数据结构。
> - 序列中的每个值都有对应的位置值，称之为索引，第一个索引是 0，第二个索引是 1，依此类推。
> -  Python 有 6 个序列的内置类型，但最常见的是**列表**和**元组**。

> - List（列表） 是 Python 中使用最频繁的数据类型。
>
> - 列表可以完成大多数集合类的数据结构实现。
>
> - 列表中元素的类型可以不相同，它支持数字，字符串甚至可以包含列表（所谓嵌套）。
> - 列表是写在方括号 [] 之间、用逗号分隔开的元素列表。
>
> - 列表都可以进行的操作包括索引，切片，加，乘，检查成员。
> - Python 已经内置确定序列的长度以及确定最大和最小的元素的方法。
> - 列表的数据项不需要具有相同的类型

## 2.创建1个列表

> 创建一个列表，只要把逗号分隔的不同的数据项使用方括号括起来即可。

示例如下:

```python
#! /usr/bin/python3

# 创建1个列表

list1=['red', 'green', 'blue', 'yellow', 'white', 'black']
list2=[1,2,3,4,5]

print(list1)
print(list2)
```

执行后结果如下：

```python
['red', 'green', 'blue', 'yellow', 'white', 'black']
[1, 2, 3, 4, 5]
```

## 3. 访问列表中的值

> 与字符串的索引一样，列表索引从 0 开始，第二个索引是 1，依此类推。
>
> 通过索引列表可以进行截取、组合等操作。
>
> ![img](./../../../../.vuepress/public/images/positive-indexes-1.png)

实例1：

```python
#!/usr/bin/python3

list = ['red', 'green', 'blue', 'yellow', 'white', 'black']
print( list[0] )
print( list[1] )
print( list[2] )
```

之后结果如下：

```python
red
green
blue
```

