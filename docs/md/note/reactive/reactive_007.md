# 第七章: Spring Reactive Security 认证鉴权

[[toc]]

> 说在前面的话，本文为个人学习[SpringBoot3响应式编程精讲](https://www.bilibili.com/video/BV1gsYEeLEuM?spm_id_from=333.788.videopod.episodes&vd_source=65c7f6924d2d8ba5fa0d4c448818e08a)后进行总结的文章，本文主要用于<b>响应式编程</b>。

## 【1】本章学习图解

![image-20250717133227606](../../../.vuepress/public/images/image-20250717133227606.png)

## 【2】创建项目

- ![image-20250717114626452](../../../.vuepress/public/images/image-20250717114626452.png)

- ![image-20250717133000590](../../../.vuepress/public/images/image-20250717133000590.png)

- pom.xml 如下: 

- ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://maven.apache.org/POM/4.0.0"
           xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
      <modelVersion>4.0.0</modelVersion>
      <parent>
          <groupId>com.learn</groupId>
          <artifactId>reactive-programming</artifactId>
          <version>1.0.0</version>
      </parent>
  
      <artifactId>05-spring-reactive-security</artifactId>
  
      <name>05-spring-reactive-security</name>
  
      <dependencies>
          <!--  响应式web      -->
          <dependency>
              <groupId>org.springframework.boot</groupId>
              <artifactId>spring-boot-starter-webflux</artifactId>
          </dependency>
          <!-- 响应式Spring Data r2dbc -->
          <dependency>
              <groupId>org.springframework.boot</groupId>
              <artifactId>spring-boot-starter-data-r2dbc</artifactId>
          </dependency>
          <!--  引入 r2dbc-mysql驱动  -->
          <dependency>
              <groupId>io.asyncer</groupId>
              <artifactId>r2dbc-mysql</artifactId>
          </dependency>
          <!-- lombok、单元测试的jar  start-->
          <dependency>
              <groupId>org.projectlombok</groupId>
              <artifactId>lombok</artifactId>
          </dependency>
          <dependency>
              <groupId>junit</groupId>
              <artifactId>junit</artifactId>
              <scope>test</scope>
          </dependency>
          <dependency>
              <groupId>org.springframework.boot</groupId>
              <artifactId>spring-boot-starter-test</artifactId>
          </dependency>
          <!-- lombok、单元测试的jar  end-->
      </dependencies>
  
      <build>
          <plugins>
              <plugin>
                  <groupId>org.apache.maven.plugins</groupId>
                  <artifactId>maven-compiler-plugin</artifactId>
                  <configuration>
                      <compilerArgs>
                          <!--在 Maven 或 Gradle 中配置 -parameters 编译选项，确保字节码保留参数名：-->
                          <arg>-parameters</arg>
                      </compilerArgs>
                  </configuration>
              </plugin>
          </plugins>
      </build>
  </project>
  
  ```

- `application.yaml`如下：

- ```yaml
  server:
    port: 9002
  
  spring:
    r2dbc:
      username: root
      password: 123456
      url: r2dbc:mysql://127.0.0.1:3306/security
  
  # 打开日志
  logging:
    level:
      org.springframework.r2dbc: debug
      org.springframework.data.r2dbc: debug
  ```

- 其他代码:

- 

- ```java
  package com.learn.spring.reactive.security;
  
  import org.springframework.boot.SpringApplication;
  import org.springframework.boot.autoconfigure.SpringBootApplication;
  
  /**
   * @author qianpengzhan
   * @since 2025/7/17 13:25
   */
  @SpringBootApplication
  public class SpringReactiveSecurityApplication {
      public static void main(String[] args) {
          SpringApplication.run(SpringReactiveSecurityApplication.class, args);
      }
  }
  
  package com.learn.spring.reactive.security;
  
  import org.junit.Test;
  import org.springframework.boot.test.context.SpringBootTest;
  
  /**
   * @author qianpengzhan
   * @since 2025/7/17 13:26
   */
  @SpringBootTest
  public class SecurityTest {
  
  
      @Test
      public void contextLoads() {
          assert true;
      }
  }
  
  
  config:
  package com.learn.spring.reactive.security.config;
  
  import org.springframework.context.annotation.Configuration;
  import org.springframework.data.r2dbc.convert.R2dbcCustomConversions;
  import org.springframework.data.r2dbc.repository.config.EnableR2dbcRepositories;
  
  /**
   * r2dbc的配置功能
   *
   * @author qianpengzhan
   * @since 2025/7/16 16:32
   */
  @EnableR2dbcRepositories  // 开启仓库功能 jpa
  @Configuration
  public class R2dbcConfig {
  
  
      // 新增1个转换器
      //@Bean
      //@ConditionalOnMissingBean
      public R2dbcCustomConversions conversions() {
          // 将自定义的转换器加入到配置中
          return null;
      }
  }
  ```

## 【3】响应式鉴权认证引入依赖

```xml
<!-- 引入 响应式鉴权认证框架 -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```

## 【4】数据库SQL导入

```sql
-- `security`.t_user definition

CREATE TABLE `t_user` (
  `user_id` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '主键ID',
  `user_name` varchar(16)  NOT NULL DEFAULT '' COMMENT '用户名',
  `user_password` varchar(255)  NOT NULL DEFAULT '' COMMENT '密码',
  `phone` varchar(11)  NOT NULL DEFAULT '' COMMENT '手机号',
  `sex` tinyint(1) unsigned NOT NULL DEFAULT '1' COMMENT '性别',
  `age` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '年龄',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`user_id`) USING BTREE
) ENGINE=InnoDB  COMMENT='用户表';

-- `security`.t_role definition

CREATE TABLE `t_role` (
  `role_id` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '主键ID',
  `role_name` varchar(16)  NOT NULL DEFAULT '' COMMENT '角色名称',
  `remark` varchar(255)  NOT NULL DEFAULT '' COMMENT '备注',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`role_id`) USING BTREE
) ENGINE=InnoDB  COMMENT='角色表';

-- `security`.t_permission definition

CREATE TABLE `t_permission` (
  `permission_id` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '主键ID',
  `permission_code` varchar(32)  DEFAULT NULL COMMENT '权限code',
  `permission_name` varchar(32)  DEFAULT NULL COMMENT '权限名称',
  `remark` varchar(255)  DEFAULT NULL COMMENT '备注',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`permission_id`) USING BTREE
) ENGINE=InnoDB  COMMENT='权限表';

-- `security`.t_user_role definition

CREATE TABLE `t_user_role` (
  `user_role_id` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '主键ID',
  `user_id` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '关联的用户ID',
  `role_id` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '关联的角色ID',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`user_role_id`) USING BTREE
) ENGINE=InnoDB  COMMENT='用户角色关联表';

-- `security`.t_role_permission definition

CREATE TABLE `t_role_permission` (
  `role_permission_id` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '主键ID',
  `role_id` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '关联的角色ID',
  `permission_id` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '关联的权限ID',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`role_permission_id`) USING BTREE
) ENGINE=InnoDB  COMMENT='角色权限关联表';
```

## 【X】参考资料

- [SpringBoot3响应式编程精讲](https://www.bilibili.com/video/BV1gsYEeLEuM?spm_id_from=333.788.videopod.episodes&vd_source=65c7f6924d2d8ba5fa0d4c448818e08a)
- [官网](https://docs.spring.io/spring-security/reference/reactive/getting-started.html)

