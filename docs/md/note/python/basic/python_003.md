# 第三章: Python3 基础语法

[\[toc]] 

> 说在前面的话，本文为个人学习[Python3 教程](https://www.runoob.com/python3/python3-tutorial.html)后进行总结的文章，本文主要用于<b>Python3基础知识</b>。

## 1. 编码

默认情况下，`Python3 `源码文件以 **`UTF-8`** 编码，所有字符串都是 `unicode `字符串。

当然你也可以为源码文件指定不同的编码：

```python
# -*- coding: cp-1252 -*-
# -*- coding: utf8 -*-
```

上述定义允许在源文件中使用 `Windows-1252` 字符集中的字符编码，对应适合语言为保加利亚语、白俄罗斯语、马其顿语、俄语、塞尔维亚语。

## 2.标识符

### 2.1 规则

`Python`的**标识符**的规则如下:

- 第一个字符必须以字母（a-z, A-Z）或下划线 _ 。
- 标识符的其他的部分由字母、数字和下划线组成。
- 标识符对大小写敏感，`count `和 `Count `是不同的标识符。
- 标识符对长度无硬性限制，但建议保持简洁（一般不超过 20 个字符）。
- 禁止使用保留关键字，如 `if`、`for`、`class `等不能作为标识符。

### 2.2 例子

合法标识符如下例子:

```python
age = 25                # 普通变量名，最常见
user_name = "Alice"     # 用下划线连接单词，清晰易读
_total = 100            # 下划线开头通常表示“内部使用”或“私有”
MAX_SIZE = 1024         # 全大写通常表示“常量”（固定不变的值）
calculate_area()        # 函数名，动词+名词
StudentInfo             # 类名，首字母大写（驼峰命名法）
__private_var           # 双下划线开头，有特殊含义
```

非法标识符如下例子：

```python
2nd_place = "silver"    # 错误：以数字开头
user-name = "Bob"       # 错误：包含连字符
class = "Math"          # 错误：使用关键字
$price = 9.99          # 错误：包含特殊字符
for = "loop"           # 错误：使用关键字
```

### 2.3 特例

> `Python3 `允许使用 `Unicode `字符作为标识符，可以用中文作为变量名，非 ASCII 标识符也是允许的了。

```python
姓名 = "张三"  # 合法
π = 3.14159   # 合法
圆周率 = 3.1415923 # 合法
```

### 2.4 标识符的测试

```python
#!/usr/bin/python3
# -*- coding: utf8 -*-

# 测试标识符是否合法

def is_valid_identifier(name):
    try:
        exec(f"{name} = None")
        return True
    except:
        return False

print(is_valid_identifier("2var"))  # False
print(is_valid_identifier("var2"))  # True
print(is_valid_identifier("圆周率"))  # True
print(is_valid_identifier("姓名"))  # True
print(is_valid_identifier("π"))  # True
```

执行后如下:

![image-20260319175730318](./../../../../.vuepress/public/images/image-20260319175730318.png)

## 3、保留关键字

### 3.1 关键字的查询和罗列

> **保留字**即**关键字**，我们不能把它们用作任何标识符名称。`Python`的标准库提供了一个 `keyword 模块，可以输出当前版本的所有关键字：

```
>>> import keyword
>>> keyword.kwlist
['False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']
>>> 
```

![image-20260319180458814](./../../../../.vuepress/public/images/image-20260319180458814.png)

### 3.2 关键字详解

>  更多 Python 保留关键字参考：[https://www.runoob.com/python3/python3-keyword.html](https://www.runoob.com/python3/python3-keyword.html)。

| **类别**     | **关键字** | **说明**                               |
| ------------ | ---------- | -------------------------------------- |
| **逻辑值**   | `True`     | 布尔真值                               |
|              | `False`    | 布尔假值                               |
|              | `None`     | 表示空值或无值                         |
| **逻辑运算** | `and`      | 逻辑与运算                             |
|              | `or`       | 逻辑或运算                             |
|              | `not`      | 逻辑非运算                             |
| **条件控制** | `if`       | 条件判断语句                           |
|              | `elif`     | 否则如果（else if 的缩写）             |
|              | `else`     | 否则分支                               |
| **循环控制** | `for`      | 迭代循环                               |
|              | `while`    | 条件循环                               |
|              | `break`    | 跳出循环                               |
|              | `continue` | 跳过当前循环的剩余部分，进入下一次迭代 |
| **异常处理** | `try`      | 尝试执行代码块                         |
|              | `except`   | 捕获异常                               |
|              | `finally`  | 无论是否发生异常都会执行的代码块       |
|              | `raise`    | 抛出异常                               |
| **函数定义** | `def`      | 定义函数                               |
|              | `return`   | 从函数返回值                           |
|              | `lambda`   | 创建匿名函数                           |
| **类与对象** | `class`    | 定义类                                 |
|              | `del`      | 删除对象引用                           |
| **模块导入** | `import`   | 导入模块                               |
|              | `from`     | 从模块导入特定部分                     |
|              | `as`       | 为导入的模块或对象创建别名             |
| **作用域**   | `global`   | 声明全局变量                           |
|              | `nonlocal` | 声明非局部变量（用于嵌套函数）         |
| **异步编程** | `async`    | 声明异步函数                           |
|              | `await`    | 等待异步操作完成                       |
| **其他**     | `assert`   | 断言，用于测试条件是否为真             |
|              | `in`       | 检查成员关系                           |
|              | `is`       | 检查对象身份（是否是同一个对象）       |
|              | `pass`     | 空语句，用于占位                       |
|              | `with`     | 上下文管理器，用于资源管理             |
|              | `yield`    | 从生成器函数返回值                     |

## 4. 注释

