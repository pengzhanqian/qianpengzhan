# Java代码细节 - 详述Main方法

[[toc]]

> 说在前面的话，本文为日常积累的一些`Java`相关代码细节积累。	

## 【1】 方法定义与语法结构
Java程序的入口点必须遵循严格的方法签名规范：
```java
public static void main(String[] args) {
    // 程序逻辑代码
}
```
- **public**：访问修饰符，确保JVM可以从外部调用此方法
- **static**：静态修饰符，允许JVM无需创建类实例即可直接调用
- **void**：返回值类型，表示该方法无返回值
- **main**：方法名，JVM规定的唯一入口方法名（大小写敏感）
- **String[] args**：参数列表，用于接收命令行输入的参数

## 【2】 参数传递机制
> `args`参数是字符串数组，用于接收命令行参数：

```java
public class CommandLineExample {
    public static void main(String[] args) {
        System.out.println("参数数量: " + args.length);
        for (int i = 0; i < args.length; i++) {
            System.out.println("参数" + i + ": " + args[i]);
        }
    }
}
```
>  **运行方式**：`java CommandLineExample 参数1 参数2 参数3`



## 【3】 方法重载与入口识别
> 可以重载main方法，但JVM只会识别标准签名的main方法作为入口：

```java
public class MainOverload {
    // JVM唯一识别的入口方法
    public static void main(String[] args) {
        System.out.println("程序入口");
        main("Hello from overloaded method");
    }
    
    // 重载的main方法（非入口点）
    public static void main(String message) {
        System.out.println(message);
    }
}
```

## 【4】 常见语法错误与解决方案
| 错误类型 | 错误示例 | 正确写法 |
|---------|---------|---------|
| 缺少static | `public void main(String[] args)` | `public static void main(String[] args)` |
| 方法名错误 | `public static void Main(String[] args)` | `public static void main(String[] args)` |
| 参数类型错误 | `public static void main(int[] args)` | `public static void main(String[] args)` |
| 返回类型错误 | `public static int main(String[] args)` | `public static void main(String[] args)` |

## 【5】 JDK版本特性差异
- **Java 1.0-8**：仅支持`String[] args`形式
- **Java 9+**：支持使用可变参数语法`String... args`
  ```java
  public static void main(String... args) {
      // 功能与String[] args完全相同
  }
  ```

## 【6】 特殊用法与最佳实践

1. **参数验证**：在方法开头检查必要参数
   ```java
   public static void main(String[] args) {
       if (args.length < 2) {
           System.err.println("用法: java Program <参数1> <参数2>");
           System.exit(1); // 非0退出码表示异常终止
       }
       // 业务逻辑
   }
   ```

2. **委托模式**：保持main方法简洁，将业务逻辑委托给其他类
   ```java
   public class Application {
       public static void main(String[] args) {
           new BusinessLogic().execute(args);
       }
   }
   
   class BusinessLogic {
       public void execute(String[] args) {
           // 实际业务逻辑
       }
   }
   ```

3. **单元测试支持**：设计可测试的main方法
   ```java
   public class Calculator {
       public static void main(String[] args) {
           if (args.length == 2) {
               int a = Integer.parseInt(args[0]);
               int b = Integer.parseInt(args[1]);
               System.out.println(add(a, b));
           }
       }
       
       // 可独立测试的核心方法
       public static int add(int a, int b) {
           return a + b;
       }
   }
   ```

## 【7】 底层执行原理

>  当使用`java ClassName`命令启动程序时：
>
> 1. JVM加载指定的类
> 2. 检查类中是否存在符合规范的main方法
> 3. 若存在，调用main方法并将命令行参数传递给args数组
> 4. 方法执行完成后，JVM正常退出（状态码0）
> 5. 若方法抛出异常，JVM将异常信息打印到标准错误流并非0状态码退出