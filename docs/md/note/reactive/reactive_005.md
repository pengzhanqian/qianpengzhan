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

```mermaid
flowchart LR
A(["命令式编程 start"])
A --> B(["Controller"])
B --> C(["Service"])
C --> D(["DAO"])
D --> E(["END"])
```

```mermaid
flowchart LR
A(["响应式编程 start"])
B(["DAO 数据源，源源不断的从数据库中查询而来"])
C(["Service"])
D(["Controller"])
E(["浏览器"])
A --> B --> C --> D --> E 
```



> 以前：浏览器--> `Controller`-->`Service`--->`Dao`--->数据库  ： 这是以往的**阻塞式编程流程** 
>
> 现在: DAO(查询得到数据源,是发布者) --> `Service` --> `Contorller` --> 浏览器(订阅者)  : 这是**响应式编程**
>
> 在这其中，`service`, `controller` 则是中间处理器的作用.
>
> `Context` 则是承担着上下文的数据传递的作用。

### 3.5 原生API搭建简单服务器

[参照](https://docs.spring.io/spring-framework/reference/6.2-SNAPSHOT/web/webflux/reactive-spring.html)

![image-20250710103938447](../../../.vuepress/public/images/image-20250710103938447.png)

```java
// 函数式接口
package org.springframework.http.server.reactive;

import reactor.core.publisher.Mono;

public interface HttpHandler {
    Mono<Void> handle(ServerHttpRequest request, ServerHttpResponse response);
}
```

```java
package com.learn.spring.webflux.demo;


import org.springframework.core.io.buffer.DataBuffer;
import org.springframework.core.io.buffer.DataBufferFactory;
import org.springframework.http.server.reactive.HttpHandler;
import org.springframework.http.server.reactive.ReactorHttpHandlerAdapter;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.http.server.reactive.ServerHttpResponse;
import reactor.core.publisher.Mono;
import reactor.netty.DisposableServer;
import reactor.netty.http.server.HttpServer;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

/**
 * @author qianpengzhan
 * @since 2025/7/10 9:58
 */
public class SpringWebFluxDemoApplication {
    public static void main(String[] args) throws IOException {
        // 快速编写一个可以处理http请求的服务器

        // 1.创建一个可以处理http请求的处理器
        HttpHandler httpHandler = (ServerHttpRequest request,
                                   ServerHttpResponse response) -> {
            // Mono<Void> handle(ServerHttpRequest request, ServerHttpResponse response);
            System.out.println("请求进来了...." + request.getURI());
            // 这里我们在编写一段内容给浏览器响应
            String respContent = request.getURI().toString() + ", Hello!";
            DataBufferFactory dataBufferFactory = response.bufferFactory();
            DataBuffer dataBuffer = dataBufferFactory.wrap(respContent.getBytes(StandardCharsets.UTF_8));
            // 处理业务逻辑
            return response.writeWith(Mono.just(dataBuffer));
//            return response.setComplete();
        };

        // 2. 创建1个Reactor的Http请求的适配器
        ReactorHttpHandlerAdapter adapter = new ReactorHttpHandlerAdapter(httpHandler);

        // 3. 启动1个Netty服务器 监听8080端口 接收数据 拿到数据提交给 HttpHandler 进行业务处理
        /*
        HttpServer.create()
          .host("0.0.0.0")
          .handle((req, res) -> res.sendString(Flux.just("hello")))
          .bind()
          .block();
         */
        // reactor.netty.transport.ServerTransport$InetDisposableBind@1224144a
        DisposableServer server = HttpServer.create()
                .host("localhost")
                .port(8080)
                .handle(adapter)
                .bindNow();
        System.out.println("服务器启动完成,监听8080端口...");

        // 4. 阻塞住
        System.in.read();
        System.out.println("服务停止..");
    }
}
```

> 请求:
>
> ![image-20250710141133617](../../../.vuepress/public/images/image-20250710141133617.png)

## 【4】Spring WebFlux Controller

> `SpringMVC`: `DispathcerServlet`
>
> `SpringWebFlux`: `DispatherHandler`

> `SpringWebFlux` 写`Controller`和`SpringMVC`差不多的。就是返回参数改为`Flux<T>`. `Mono<T>`即可。

> `SpringMVC`写法如下:

```java
package com.learn.spring.webflux.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author qianpengzhan
 * @since 2025/7/10 14:39
 */
@RestController
public class MvcDemoController {


    @GetMapping("/hello-world")
    public String HelloWorld() {
        return "Hello World";
    }
}

```

> `SpringWebFlux`的写法如下:

```java
package com.learn.spring.webflux.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

/**
 * @author qianpengzhan
 * @since 2025/7/10 14:39
 */
@RestController
public class WebFluxDemoController {


    @GetMapping("/webflux/hello-world")
    public Mono<String> helloWorld() {
        return Mono.just("Hello World");
    }
}
```

> 服务启动：

![image-20250710150100114](../../../.vuepress/public/images/image-20250710150100114.png)

>  访问如下:

![image-20250710150126132](../../../.vuepress/public/images/image-20250710150126132.png)

![image-20250710150202114](../../../.vuepress/public/images/image-20250710150202114.png)

## 【5】Server Send Event (SSE) 服务端事件推送

> 简单的例子：

```java
package com.learn.spring.webflux.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;

import java.time.Duration;

/**
 * @author qianpengzhan
 * @since 2025/7/10 15:13
 */
@RestController
public class SseController {


    // 告诉前端数据类型是 事件流  text/event-stream
    @GetMapping(value = "/sse", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<String> sse() {
        return Flux.range(1, 100)
                .map(i -> "Hello-" + i)
                // 每隔500毫秒发送浏览器1个字符串 直到结束
                .delayElements(Duration.ofMillis(500));
    }
}

```

> 启动服务后，访问会出现如下动图的展示：

![20250710-154540](../../../.vuepress/public/images/20250710-154540.gif)



## 【X】参考资料

- [SpringBoot3响应式编程精讲](https://www.bilibili.com/video/BV1gsYEeLEuM?spm_id_from=333.788.videopod.episodes&vd_source=65c7f6924d2d8ba5fa0d4c448818e08a)
- [官方SpringBoot3,.5.3-SpringWebFlux指导](https://docs.spring.io/spring-boot/reference/web/reactive.html)