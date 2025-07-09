# 第五章: Spring WebFlux

[[toc]]

> 说在前面的话，本文为个人学习[SpringBoot3响应式编程精讲](https://www.bilibili.com/video/BV1gsYEeLEuM?spm_id_from=333.788.videopod.episodes&vd_source=65c7f6924d2d8ba5fa0d4c448818e08a)后进行总结的文章，本文主要用于<b>响应式编程</b>。

## 【1】本章学习图解

![image-20250709144609335](../../../.vuepress/public/images/image-20250709144609335.png)

## 【2】响应式Web和阻塞式Web对比

> - `Spring webFlux`:  底层完全是基于 `netty` + `reactor` + `springweb`完成的1个全异步非阻塞**响应式Web架构**
> - **底层**: **异步 + 消息队列(内存级别) + 事件回调机制**  =  **整套系统**
> - **优点** :  可以使用少量资源就可以处理大量的请求

![image-20250709165722880](../../../.vuepress/public/images/image-20250709165722880.png)

> **`Mon`** : **返回0|1数据流**
>
> **`Flux`** : **返回N数据流**

## 【3】Spring WebFlux 的引入和介绍

> 再次强调下,Spring WebFlux的底层容器不是`tomcat`,而是：
>
> - **Netty** 

### 3.1 新建项目

![image-20250709173259651](../../../.vuepress/public/images/image-20250709173259651.png)

![image-20250709173342621](../../../.vuepress/public/images/image-20250709173342621.png)

### 3.2 引入依赖

> 在项目的`pom.xml`中加入如下依赖：

```xml
    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-starter-parent</artifactId>
                <version>3.5.3</version>
            </dependency>
        </dependencies>
    </dependencyManagement>

 <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-webflux</artifactId>
        </dependency>
</dependencies>
```

### 3.3 官网文档

> 所有的学习参考[这里](https://docs.spring.io/spring-framework/reference/6.2-SNAPSHOT/web/webflux.html)

### 3.4 编程方式改变

> 以前：浏览器--> `Controller`-->`Service`--->`Dao`--->数据库  ： 这是以往的**阻塞式编程流程** 
>
> 现在: DAO(查询得到数据源,是发布者) --> `Service` --> `Contorller` --> 浏览器(订阅者)  : 这是**响应式编程**
>
> 在这其中，`service`, `controller` 则是中间处理器的作用.
>
> `Context` 则是承担着上下文的数据传递的作用。

## 【X】参考资料

- [SpringBoot3响应式编程精讲](https://www.bilibili.com/video/BV1gsYEeLEuM?spm_id_from=333.788.videopod.episodes&vd_source=65c7f6924d2d8ba5fa0d4c448818e08a)