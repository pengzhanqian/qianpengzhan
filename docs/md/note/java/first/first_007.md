# 初识JAVA \- IDE工具 - Intellj idea

[[toc]]

> 说在前面的话，本文为个人学习[B站免费的马士兵java初级教程](https://www.bilibili.com/video/BV1RK4y1g7A5/?spm_id_from=333.337.search-card.all.click&vd_source=65c7f6924d2d8ba5fa0d4c448818e08a)后进行总结的文章，本文主要用于<b>初步了解JAVA</b>。

## 【1】什么是IDE?

>  **集成开发环境**（IDE，Integrated Development Environment ）是用于提供程序开发环境的应用程序，一般包括代码编辑器、编译器、调试器和图形用户界面等工具。集成了代码编写功能、分析功能、编译功能、调试功能等一体化的开发软件服务套。所有具备这一特性的软件或者软件套（组）都可以叫集成开发环境。如微软的Visual Studio系列，Borland的C++ Builder、Delphi系列等。该程序可以独立运行，也可以和其它程序并用。IDE多被用于开发HTML应用软件。例如，许多人在设计网站时使用IDE（如HomeSite、DreamWeaver等），因为很多项任务会自动生成。编程开发软件将编辑、编译、调试等功能集成在一个桌面环境中,这样就大大方便了用户。

- ❀优点
  - 节省时间和精力。
    -  IDE的目的就是要让开发更加快捷方便，通过提供工具和各种性能来帮助开发者组织资源，减少失误，提供捷径。
  - 建立统一标准。
    - 当一组程序员使用同一个开发环境时，就建立了统一的工作标准，当IDE提供预设的模板，或者不同团队分享代码库时，这一效果就更加明显了。
  - 管理开发工作。
    - 首先，IDE提供文档工具，可以自动输入开发者评论，或者迫使开发者在不同区域编写评论。
    - 其次，IDE可以展示资源，更便于发现应用所处位置，无需在文件系统里面艰难的搜索。

- ❀缺点
  - 学习曲线问题
    - DE基本上是比较复杂的工具，为了更好的熟练使用，需要一定的时间和耐心。
  - 初学者的困难
    - 对初学者来说，使用IDE来学习开发有相当的难度，不适合学习一种新语言时使用。
  - 无法修复坏代码或设计
    - 开发者不能完全依赖工具的便捷，还是必须保持专业水准和熟练度，开发的成果好坏主要还是看开发员的技术。

## 【2】JetBrains公司

- 【1】IntelliJ IDEA就是Java的IDE。

- 【2】市场占有率竹节攀升，超过了Eclipse。

- 【3】JetBrains公司介绍

  > JetBrains是一家捷克的软件开发公司，该公司位于捷克的布拉格，并在 俄罗斯的圣彼得堡及美国麻州波士顿都设有办公室，该公司最为人所熟知的产品是Java编程语言开发撰写时所用的集成开发环境：IntelliJ IDEA。

- 【4】公司旗下还有其它产品
  - WebStorm: 用于开发JavaScript、HTML5、 CS3等前端技术;
  - PyCharm: 用于开发python（python语言热度排行榜排名第一，在人工智能大数据领域应用）
  - PhpStorm: 用于开发PHP
  - RubyMine: 用于开发Ruby/Rails
  - AppCode: 用于开发Objective - C/Swift,替换xcode的
  - CLion: 用于开发C/C++
  - DataGrip: 用于开发数据库和SQL
  - Rider: 用于开发.NET
  - GoLand: 用于开发Go（区块链主流开发语言就是Go语言）

## 【3】[Intellj Idea](官网：https://www.jetbrains.com/)介绍

> IDEA 全称IntelliJ IDEA，是用于java语言开发的集成环境IDE(Integrated Development Environment)，也可用于其他语言。
>         IntelliJ在业界被公认为最好的java开发工具之一，尤其在智能代码助手、代码自动提示、重构、J2EE支持、Ant、JUnit、CVS整合、代码审查、 创新的GUI设计等方面的功能可以说是超常的。
>
> IDEA是JetBrains公司的产品，这家公司总部位于捷克共和国的首都布拉格，开发人员以严谨著称的东欧程序员为主。

## 【4】Intellj Idea 支持

![image-20241030170058734](../../../../.vuepress/public/images/image-20241030170058734.png)

![image-20241030170110114](../../../../.vuepress/public/images/image-20241030170110114.png)

## 【5】Intellj Idea 对比Eclipse的优势

- ①强大的整合能力。比如: Git、 Maven、 Spring 等
- ②提示功能的快速、便捷
- ③提示功能的范围广
- ④好用的快捷键和代码模板
- ⑤精准搜索

## 【6】Intellj Idea 的下载

- 下载前的环境准备
  - （1）硬件环境：内存8G以上   CPU i5以上   安装在固态硬盘下
  - （2）软件环境：需要安装JDK8/JDK17

- 官网下载  https://www.jetbrains.com.cn/idea/download/?section=windows

![image-20241031114737700](../../../../.vuepress/public/images/image-20241031114737700.png)

## 【7】Intellj Idea 的安装破解

> 这个根据版本的不同，可以去网上找找对应的教程，每个版本不同给出的破解方案不同。

这里只给一个百度网盘的2024.1.4 的破解版

- 链接: https://pan.baidu.com/s/1tCv63iK0AA-OiCFnS0ch9w?pwd=h4hn 
- 提取码: h4hn 
- 二维码：![image-20241031150855867](../../../../.vuepress/public/images/image-20241031150855867.png)

将安装包进行点击安装，按照步骤一步一步进行点击安装道完成即可。

- 打开IDE

  ![image-20241031145721111](../../../../.vuepress/public/images/image-20241031145721111.png)

- 选择主题 (按照个人习惯)

  ![image-20241031150527999](../../../../.vuepress/public/images/image-20241031150527999.png)

  ![image-20241031150605351](../../../../.vuepress/public/images/image-20241031150605351.png)

  ![image-20241031150613148](../../../../.vuepress/public/images/image-20241031150613148.png)

- 免费试用(破解版则按照步骤进行激活即可)

  ![image-20241031150738093](../../../../.vuepress/public/images/image-20241031150738093.png)

  

- 这样就进入了IDE的界面了，可以进行JAVA开发了

## 【8】使用Intellj Idea创建Java项目

1. 点击 New Project，如下图所示

   Name: 你想取的项目名称，建议英文+数字等，不建议中文

   Location: 你这个项目放入的本地磁盘空间位置

   JDK: 选择你要用的JDK版本

   ![image-20241031152448183](../../../../.vuepress/public/images/image-20241031152448183.png)

2. 然后点击create，出现如下图所示

   ![image-20241031152541704](../../../../.vuepress/public/images/image-20241031152541704.png)

3. 这样就创建好了1个Java项目，然后运行一下，点击Main代码的左边绿色小三角，选择debug

   ![image-20241031152642067](../../../../.vuepress/public/images/image-20241031152642067.png)

   ![image-20241031152659515](../../../../.vuepress/public/images/image-20241031152659515.png)

## 【9】Intellj Idea 的界面展示

- 项目下的内容
  - 工程下的src类似于Eclipse下的src目录，用于存放代码
  - 工程下的.idea 和TestProject.iml文件都是IDEA工程特有的。类似于Eclipse 工程下的settings、.classpath、.project 等。
- 配置
  - ![image-20241031160244245](../../../../.vuepress/public/images/image-20241031160244245.png)
  - ![image-20241031160708366](../../../../.vuepress/public/images/image-20241031160708366.png)

## 【10】 Intellj Idea Module 概念和应用

- 在Eclipse中我们有Workspace (工作空间)和Project (工程)的概念，在IDEA中只有Project (工程)和Module (模块)的概念。
-   这里的对应关系为: 
  - IDEA官网说明:
    - An Eclipse workspace is similar to a project in IntelliJ IDEA 
    - An Eclipse project maps to a module in IntelliJ IDEA
  - 翻译:
    - Eclipse中 workspace 相当于 IDEA中的Project
    - Eclipse中   Project     相当于 IDEA中的Module
- 在IntelliJ IDEA中Project(工程) 是最顶级的级别，次级别是Module(模块)。 
- 一个Project下可以有多个Module。

- 从Eclipse 转过来的人总是下意识地要在同一个窗口管理n个项目，这在Intellij IDEA是无法做到的。Intellij IDEA提供的解决方案是打开多个项目实例，即打开多个项目窗口。即:一个Project 打开一个Window窗口。
- IDEA这样设置的原因
  - 目前主流的大型项目都是分布式部署的，结构都是类似这种多Module的。
  - 这类项目一般是这样划分的，比如: 积分模块、任务模块、活动模块等等，模块之间彼此可以相互依赖。这些Module之间都是处于同一个项目业务下的模块，彼此之间是有不可分割的业务关系的。
  - ![image-20241031161037772](../../../../.vuepress/public/images/image-20241031161037772.png)

- out目录的说明：里面存放的是编译后的字节码文件

  ![image-20241031161125166](../../../../.vuepress/public/images/image-20241031161125166.png)

- 添加和删除模块

  ![image-20241031161220555](../../../../.vuepress/public/images/image-20241031161220555.png)

  ![image-20241031161251645](../../../../.vuepress/public/images/image-20241031161251645.png)

## 【11】Intellj Idea的常用设置

1. 进入设置，File -> Settings 或者选择扳手图标

   ![image-20241031161714401](../../../../.vuepress/public/images/image-20241031161714401.png)

2. 设置主题

   ![image-20241031162813834](../../../../.vuepress/public/images/image-20241031162813834.png)

3. 设置编辑区的字体变大或者变小

   ![image-20241031162957917](../../../../.vuepress/public/images/image-20241031162957917.png)

4. 设置鼠标悬浮在代码上有提示

   ![image-20241031163232831](../../../../.vuepress/public/images/image-20241031163232831.png)

5. 设置自动导包和优化多余的包

   手动导包：快捷键：alt+enter
   自动导包和优化多余的包：

   ![image-20241031163637124](../../../../.vuepress/public/images/image-20241031163637124.png)

6. 设置同一个包下的类，超过指定个数的时候，导包合并为*

   ![image-20241031164213602](../../../../.vuepress/public/images/image-20241031164213602.png)

   ![image-20241031164131166](../../../../.vuepress/public/images/image-20241031164131166.png)

7. 设置显示行号 ，  方法和方法间的分隔符

   ![image-20241031164348879](../../../../.vuepress/public/images/image-20241031164348879.png)

8. 设置忽略大小写，进行提示

   ![image-20241031165427503](../../../../.vuepress/public/images/image-20241031165427503.png)

9. 设置多个类不隐藏，多行显示

   ![image-20241031165534430](../../../../.vuepress/public/images/image-20241031165534430.png)

   ![image-20241031165558287](../../../../.vuepress/public/images/image-20241031165558287.png)

10. 设置默认的字体，字体大小，字体行间距：(编辑区和控制台都会变化)

    ![image-20241031165704872](../../../../.vuepress/public/images/image-20241031165704872.png)

11. 设置代码中注释的字体颜色

    ![image-20241031165854277](../../../../.vuepress/public/images/image-20241031165854277.png)

12. 设置修改类头的文档注释信息

    >  注意：对新建的类才有效

    ``` java
    /** 
     * @author xxx
     * @since ${DATE} - ${MONTH} - ${DAY} - ${TIME}
     */
    ```

    ![image-20241031170224207](../../../../.vuepress/public/images/image-20241031170224207.png)

13. 设置项目文件编码

    ![image-20241031170342521](../../../../.vuepress/public/images/image-20241031170342521.png)

14. 设置自动编译

    ![image-20241031170447435](../../../../.vuepress/public/images/image-20241031170447435.png)

15. 设置省电模式

    ![image-20241031170535313](../../../../.vuepress/public/images/image-20241031170535313.png)

16. 设置导入jar包

    ![image-20241031170844732](../../../../.vuepress/public/images/image-20241031170844732.png)

17. 设置生成序列化版本号

    ![image-20241031171006808](../../../../.vuepress/public/images/image-20241031171006808.png)

18. 待后续补充

## 【12】Intellj Idea 的常用快捷键

1. 创建内容：alt+insert
2. main方法：psvm
3. 输出语句：sout
4. 复制行：ctrl+d
5. 删除行：ctrl+y
6. 代码向上/下移动：Ctrl + Shift + Up / Down
7. 搜索类：  ctrl+n
8. 生成代码  ：alt + Insert（如构造函数等，getter,setter,hashCode,equals,toString）
9. 百能快捷键 : alt + Enter （导包，生成变量等）
10. 单行注释或多行注释 ：  Ctrl + / 或 Ctrl + Shift + /
11. 重命名 shift+f6
12. for循环  直接 ：fori   回车即可
13. 代码块包围：try-catch,if,while等  ctrl+alt+t
14.  代码自动补全提示: Alt + /
15. 显示代码结构  : alt + 7
16. 显示导航栏： alt +1 
17. 撤回：ctrl+z
18. 缩进：tab  取消缩进： shift+tab

## 【13】IntellJ Idea 中的断点调试

调试在开发中大量应用

1. Debug的优化设置：更加节省内存空间

   > 设置Debug连接方式，默认是Socket。 Shared memory是Windows 特有的一个属性，一般在Windows系统下建议使用此设置，
   > 内存占用相对较少

   ![image-20241031171842843](../../../../.vuepress/public/images/image-20241031171842843.png)

2. 常用断点调试快捷键

   1. ![image-20241031171910727](../../../../.vuepress/public/images/image-20241031171910727.png)一步一步的向下运行代码，不会走入任何方法中。
   2. ![image-20241031171919588](../../../../.vuepress/public/images/image-20241031171919588.png)一步一步的向下运行代码，不会走入系统类库的方法中，但是会走入自定义的方法中。
   3. ![image-20241031171926133](../../../../.vuepress/public/images/image-20241031171926133.png)一步一步的向下运行代码，会走入系统类库的方法中，也会走入自定义的方法中。![image-20241031171932074](../../../../.vuepress/public/images/image-20241031171932074.png)跳出方法
   4. ![image-20241031171938024](../../../../.vuepress/public/images/image-20241031171938024.png)结束程序
   5. ![image-20241031171944017](../../../../.vuepress/public/images/image-20241031171944017.png)进入到下一个断点，如果没有下一个断点了，就直接运行到程序结束。
   6. ![image-20241031171949655](../../../../.vuepress/public/images/image-20241031171949655.png)在当前次取消未执行的断点。
   
3. 条件判断进行断点调试

   ![image-20241031172824914](../../../../.vuepress/public/images/image-20241031172824914.png)

   ![image-20241031173021242](../../../../.vuepress/public/images/image-20241031173021242.png)

4. 线程中的断点调试(待后续更新)

## 【14】参考资料

- [B站免费的马士兵java初级教程](https://www.bilibili.com/video/BV1RK4y1g7A5/?spm_id_from=333.337.search-card.all.click&vd_source=65c7f6924d2d8ba5fa0d4c448818e08a)