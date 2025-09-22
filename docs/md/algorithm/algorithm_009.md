# 算法 - 链表结构

[[toc]]

> 说在前面的话，本文为个人学习[B站免费的左程云算法结构基础课](https://www.bilibili.com/video/BV1Ef4y1T7Qi/?spm_id_from=333.788.recommend_more_video.1&vd_source=65c7f6924d2d8ba5fa0d4c448818e08a)后进行总结的文章，主要是以`Java`来运行算法.

## 【1】链表结构

> <b>链表</b>是一种物理存储结构上非连续、非顺序的存储结构，数据元素的逻辑顺序是通过链表中的指针链接次序实现的‌

## 【2】核心组成和定义

> - <b>节点结构</b>：每个节点包含两个部分：
>   - <b>数据域</b>：存储具体数据元素
>   - <b>指针域</b>：存储指向下一个节点的地址（单链表）或同时存储前驱和后继地址（双向链表）‌
> - <b>逻辑结构</b>
>   - 通过指针形成链式连接，逻辑上连续
>   - 物理存储位置可以离散分布‌

![image-20250821140019920](../../.vuepress/public/images/image-20250821140019920.png)

## 【3】主要特性

> 1. <b>动态扩展性</b>：无需预分配内存，按需创建节点‌
> 2. <b>高效增删</b>：插入/删除操作时间复杂度为`O(1)`（已知位置时）‌
> 3. <b>随机访问劣势</b>：需从头遍历，时间复杂度`O(n)‌`
> 4. ‌<b>内存开销</b>：每个节点需额外存储指针信息‌

## 【4】分类和变体

> - <b>单链表</b>：每个节点仅含指向下一个节点的指针‌
> - <b>双向链表</b>：节点包含指向前驱和后继的两个指针‌
> - <b>循环链表</b>：尾节点指针指向头节点形成环状结构‌
> - <b>带头链表</b>：额外设置不存储数据的头节点简化操作‌

![image-20250825113355462](../../.vuepress/public/images/image-20250825113355462.png)

## 【5】代码实现

### 【5.1】单链表

> - <b>代码示例</b>
>
> ```java
> package com.learn.algorithm.datastructure;
> 
> /**
>  * 链表结构 - 单链表
>  *
>  * @author qianpengzhan
>  * @since 2025/8/21 13:19
>  */
> public class SingleLinkedListStructureTest {
> 
>     // 单链的头节点
>     private Node head;
>     // 单链的大小
>     private int size;
> 
>     public static void main(String[] args) {
>         SingleLinkedListStructureTest test = new SingleLinkedListStructureTest();
>         test.append(1);
>         test.append(2);
>         test.append(3);
>         test.append(4);
>         test.printList();  // 1 -> 2 -> 3 -> 4 -> null
>         test.prepend(0);
>         test.prepend(-1);
>         test.printList(); // -1 -> 0 -> 1 -> 2 -> 3 -> 4 -> null
>         test.delete(3);
>         test.printList(); // -1 -> 0 -> 1 -> 2 -> 4 -> null
>     }
> 
>     // 添加新的元素节点到尾部
>     public void append(int val) {
>         // 新元素的节点
>         Node newNode = new Node(val);
>         if (head == null) {
>             // 若头节点为null 那么刚添加的则是头节点
>             head = newNode;
>         } else {
>             // 若已经存在了头节点 列出来
>             Node current = head;
>             // 遍历所有已经存在的节点 得到最后1个节点
>             while (current.next != null) {
>                 current = current.next;
>             }
>             // 最后1个节点的next为新节点 则添加到末尾了
>             current.next = newNode;
>         }
>         // 节点数自增
>         size++;
>     }
> 
>     // 头部插入节点
>     public void prepend(int val) {
>         Node newNode = new Node(val);
>         // 直接在头部节点之间插入1个节点  则新界点的next为原头部节点 头部节点=head
>         newNode.next = head;
>         // 直接替换掉了节点即可
>         head = newNode;
>         size++;
>     }
> 
>     // 删除节点
>     public boolean delete(int val) {
>         if (head == null) {
>             return false;
>         }
>         if (head.data == val) {
>             head = head.next;
>             size--;
>             return true;
>         }
>         Node current = head;
>         while (current.next != null) {
>             if (current.next.data == val) {
>                 current.next = current.next.next;
>                 size--;
>                 return true;
>             }
>             current = current.next;
>         }
>         return false;
>     }
> 
>     // 打印链表
>     public void printList() {
>         Node current = head;
>         while (current != null) {
>             System.out.print(current.data + " -> ");
>             current = current.next;
>         }
>         System.out.println("null");
>     }
> 
>     // 节点
>     public static class Node {
> 
>         // 数据域
>         private int data;
>         // 指针域
>         private Node next;
> 
>         public Node(int data) {
>             this.data = data;
>             this.next = null;
>         }
>     }
> }
> ```
>
> - <b>图解</b>
>
> ```text
> [Head] → [0|•] → [1|•] → [3|•] → null
> ```
>
> 1. 每个方框表示节点，包含数据域和指针域
> 2. 箭头表示指针引用关系
> 3. null表示链表结束
>
> - <b>核心特性</b>
>
> 1. 动态内存分配：节点在内存中非连续存储
> 2. 高效增删：已知位置时操作时间复杂度O(1)
> 3. 顺序访问：必须从头节点开始遍历
> 4. 空间开销：每个节点需额外存储指针
>
> - <b>实现功能</b>
>
> 1. 支持头部/尾部插入节点
> 2. 实现节点删除功能
> 3. 包含链表遍历打印方法
> 4. 维护链表长度计数器
> 5. 提供完整可运行的测试案例
>
> - <b>与数组相比，它的优势</b>
>
> | 特性         | 单链表       | 数组             |
> | ------------ | ------------ | ---------------- |
> | 插入删除效率 | O(1)         | O(n)             |
> | 内存利用率   | 动态分配     | 需预分配连续空间 |
> | 随机访问效率 | O(n)         | O(1)             |
> | 空间复杂度   | 额外指针开销 | 无额外开销       |

### 【5.2】双向链表

> - 代码示例
>
> ```java
> package com.learn.algorithm.datastructure;
> 
> import java.util.NoSuchElementException;
> 
> /**
>  * 双向链表
>  * T 代表链表的数据域的元素
>  *
>  * @author qianpengzhan
>  * @since 2025/8/25 15:36
>  */
> public class DoubleLinkedListStructureTest<T> {
> 
>     // 头部节点
>     private Node<T> head;
>     // 尾部节点
>     private Node<T> tail;
>     // 链表大小
>     private int size;
> 
>     // 测试代码
>     public static void main(String[] args) {
>         DoubleLinkedListStructureTest<Integer> list = new DoubleLinkedListStructureTest<>();
> 
>         list.prepend(1);
>         list.append(3);
>         list.add(1, 2);
> 
>         System.out.println("链表内容:");
>         list.display(); // 输出: null <- 1 <-> 2 <-> 3 -> null
> 
>         System.out.println("第二个元素: " + list.get(1)); // 输出: 2
> 
>         list.removeHead();
>         list.removeTail();
> 
>         System.out.println("删除首尾后:");
>         list.display(); // 输出: null <- 2 -> null
>     }
> 
>     /**
>      * 添加data元素到双向链表得头部
>      * 头插法
>      *
>      * @param data 元素
>      */
>     public void prepend(T data) {
>         /*
>          * 头插法‌：
>          *     创建新节点
>          *     若没有头节点 则链表为空 则头节点=尾节点=新节点
>          *     新节点的next指向原头节点
>          *     原头节点的prev指向新节点
>          *     更新头指针指向新节点
>          */
>         // 创建新节点
>         Node<T> newNode = new Node<>(data);
>         if (head == null) {
>             // 若没有头节点 则链表为空 则头节点=尾节点=新节点
>             head = tail = newNode;
>         } else {
>             // 新节点的next指向原头节点
>             newNode.next = head;
>             // 原头节点的prev指向新节点
>             head.prev = newNode;
>             // 更新头指针指向新节点
>             head = newNode;
>         }
>         size++;
>     }
> 
>     /**
>      * 添加data元素到双向表的尾部
>      * 尾插法
>      *
>      * @param data 元素
>      */
>     public void append(T data) {
>         /*
>          * 尾插法‌：
>          *     创建新节点
>          *     若没有头节点 则链表为空 则头节点=尾节点=新节点
>          *     新节点的prev指向原尾节点
>          *     原尾节点的next指向新节点
>          *     更新尾指针指向新节点
>          */
>         // 创建新节点
>         Node<T> newNode = new Node<>(data);
>         if (head == null) {
>             // 若没有头节点 则链表为空 则头节点=尾节点=新节点
>             head = tail = newNode;
>         } else {
>             // 新节点的prev指向原尾节点
>             newNode.prev = tail;
>             // 原尾节点的next指向新节点
>             tail.next = newNode;
>             // 更新尾指针指向新节点
>             tail = newNode;
>         }
>         size++;
>     }
> 
>     /**
>      * 在指定位置插入data元素
>      *
>      * @param index 指定位置
>      * @param data  元素
>      */
>     public void add(int index, T data) {
>         if (index < 0 || index > size) {
>             throw new IndexOutOfBoundsException();
>         }
>         if (index == 0) {
>             prepend(data);
>         } else if (index == size) {
>             append(data);
>         } else {
>             // 1 <-> 3 <-> null
>             // 1
>             Node<T> current = getNode(index);
>             // 2
>             Node<T> newNode = new Node<>(data);
> 
>             newNode.prev = current.prev;
>             newNode.next = current;
>             current.prev.next = newNode;
>             current.prev = newNode;
> 
>             size++;
>         }
>     }
> 
>     /**
>      * 删除头节点
>      *
>      * @return {@link T}
>      * @author qianpengzhan
>      */
>     public T removeHead() {
>         /*
>          * 头删除‌：
>          *     保存头节点的数据
>          *     将头指针指向原头节点的next
>          *     如果新头节点不为空，将其prev置为null
>          *     否则将尾指针也置为null
>          */
>         if (head == null) {
>             throw new NoSuchElementException();
>         }
>         // 保存头节点的数据
>         T data = head.data;
>         // 将头指针指向原头节点的next
>         head = head.next;
>         if (head == null) {
>             // 否则将尾指针也置为null
>             tail = null;
>         } else {
>             // 如果新头节点不为空，将其prev置为null
>             head.prev = null;
>         }
>         size--;
>         return data;
>     }
> 
>     /**
>      * 删除尾节点
>      *
>      * @return {@link T}
>      * @author qianpengzhan
>      */
>     public T removeTail() {
>         /*
>          * 尾删除‌：
>          *     保存尾节点的数据
>          *     将尾指针指向原尾节点的prev
>          *     如果新尾节点不为空，将其next置为null
>          *     否则将头指针也置为null
>          */
>         if (tail == null) {
>             throw new NoSuchElementException();
>         }
>         // 保存尾节点的数据
>         T data = tail.data;
>         // 将尾指针指向原尾节点的prev
>         tail = tail.prev;
>         if (tail != null) {
>             // 如果新尾节点不为空，将其next置为null
>             tail.next = null;
>         } else {
>             // 否则将头指针也置为null
>             head = null;
>         }
>         size--;
>         return data;
>     }
> 
>     /**
>      * 删除指定位置的节点
>      *
>      * @param index 指定位置
>      * @return {@link T}
>      * @author qianpengzhan
>      */
>     public T remove(int index) {
>         if (index < 0 || index > size) {
>             throw new NoSuchElementException();
>         }
>         if (index == 0) {
>             return removeHead();
>         } else if (index == size - 1) {
>             return removeTail();
>         } else {
>             /*
>              *中间删除‌：
>              *     定位要删除的节点C及其前驱A和后继B
>              *     将A的next指向B
>              *     将B的prev指向A
>              */
>             // 要删除的节点C
>             Node<T> cNode = getNode(index);
>             // 节点C的前驱节点A
>             Node<T> aNode = cNode.prev;
>             // 节点C的后继节点B
>             Node<T> bNode = cNode.next;
>             // 将A的next指向B
>             aNode.next = bNode;
>             // 将B的prev指向A
>             bNode.prev = aNode.prev;
>             size--;
>             return cNode.data;
>         }
>     }
> 
>     /**
>      * 获取指定位置得节点
>      *
>      * @param index 指定位置
>      * @return {@link Node}
>      */
>     public Node<T> getNode(int index) {
>         if (index < 0 || index >= size) {
>             throw new IndexOutOfBoundsException();
>         }
>         Node<T> currentNode;
>         if (index < size / 2) {
>             currentNode = head;
>             // 从前往后遍历找到该位置为止
>             for (int i = 0; i < index; i++) {
>                 currentNode = currentNode.next;
>             }
>         } else {
>             currentNode = tail;
>             // 从后往前遍历找到该位置为止
>             for (int i = size - 1; i > index; i--) {
>                 currentNode = currentNode.prev;
>             }
>         }
>         return currentNode;
>     }
> 
>     /**
>      * 获取指定位置数据
>      *
>      * @param index 指定位置
>      * @return {@link T}
>      * @author qianpengzhan
>      */
>     public T get(int index) {
>         return getNode(index).data;
>     }
> 
>     /**
>      * 获取链表大小
>      *
>      * @return {@link int}
>      * @author qianpengzhan
>      */
>     public int size() {
>         return size;
>     }
> 
>     /**
>      * 判断是否为空
>      *
>      * @return {@link boolean}
>      * @author qianpengzhan
>      */
>     public boolean isEmpty() {
>         return size == 0;
>     }
> 
>     /**
>      * 打印链表
>      *
>      * @author qianpengzhan
>      */
>     public void display() {
>         Node<T> current = head;
>         while (current != null) {
>             System.out.print(current.data + " <-> ");
>             current = current.next;
>         }
>         System.out.println("null");
>         /**
>         链表内容:
>             1 <-> 2 <-> 3 <-> null
>             第二个元素: 2
>             删除首尾后:
>             2 <-> null
>         */
>     }
> 
>     // 双向链表的数据结构
>     public static class Node<T> {
>         // 数据域
>         private T data;
>         // 指针域  -  前驱指针
>         private Node<T> prev;
>         // 指针域 - 后继指针
>         private Node<T> next;
> 
>         public Node(T data) {
>             this.data = data;
>             this.prev = null;
>             this.next = null;
>         }
>     }
> 
> }
> ```
>
> - 

## 【X】参考资料

- [B站免费的左程云算法结构基础课](https://www.bilibili.com/video/BV1Ef4y1T7Qi/?spm_id_from=333.788.recommend_more_video.1&vd_source=65c7f6924d2d8ba5fa0d4c448818e08a)