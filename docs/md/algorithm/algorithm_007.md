# 算法 - 二分法

[[toc]]

> 说在前面的话，本文为个人学习[B站免费的左程云算法结构基础课](https://www.bilibili.com/video/BV1Ef4y1T7Qi/?spm_id_from=333.788.recommend_more_video.1&vd_source=65c7f6924d2d8ba5fa0d4c448818e08a)后进行总结的文章，主要是以`Java`来运行算法.

## 【1】定义

> <b>二分法</b>是一种在有序集合中高效查找特定元素的搜索算法。
>
> 其<b>核心思想</b>是通过不断将搜索区间一分为二来缩小范围，直至找到目标或确认不存在.

## 【2】核心概念

> 1. <b>数学定义</b>
>     对闭区间`[a,b]`上连续且`f(a)·f(b)<0`的函数，通过区间二分逼近零点。
> 2. <b>算法特性</b>
>    - ‌<b>时间复杂度</b>：`O(log n)`，远优于线性查找的`O(n)`
>    - <b>前提条件</b>：数据必须有序
>    - ‌<b>分类</b>：标准查找、边界查找（首/末次出现）

## 【3】如何计算时间复杂度

> 假设我们所求的次数为`x`, 我们每次查找都是切1半然后比较，每一轮是2次，然后再切半然后比较，则次数为$2^x$ = N ,所以 x = $log_2N$, 故时间复杂度为： <b>O($log_2N$)</b>

## 【4】标准代码示例

> - 标准二分查找实现：
>
> ```java
> public class BinarySearch {
>     public static int search(int[] nums, int target) {
>         int left = 0, right = nums.length - 1;
>         // 0 ~ N-1
>         while (left <= right) {
>             // 取中间值
>             // 防止 left + right 超出了数据的最大范围 故 先-后+
>             // int mid = left + ((right - left) >> 1)  // 右移1相当于除以2
>             int mid = left + (right - left) / 2; // 防溢出
>             if (nums[mid] == target) return mid;
>             else if (nums[mid] < target) left = mid + 1;
>             else right = mid - 1;
>         }
>         return -1;
>     }
> }
> ```
>
> - 查找边界的变体：
>
> ```java
> // 查找第一个等于target的索引
> public static int findFirst(int[] nums, int target) {
>     int left = 0, right = nums.length - 1;
>     int res = -1;
>     while (left <= right) {
>         // 取中间值
>         // 防止 left + right 超出了数据的最大范围 故 先-后+
>         // int mid = left + ((right - left) >> 1)  // 右移1相当于除以2
>         int mid = left + (right - left) / 2;  // 防止溢出
>         if (nums[mid] >= target) {
>             right = mid - 1;
>             if (nums[mid] == target) res = mid;
>         } else {
>             left = mid + 1;
>         }
>     }
>     return res;
> }
> ```
>
> 

## 【5】二分法案例

### 【5.1】案例一

> - 在一个有序数组中，找某个数是否存在

### 【5.2】案例二

> - 在一个有序数组中，找>=某个数最左侧的位置

### 【5.3】案例三

> - 在一个有序数组中，找<=某个数最右侧的位置

### 【5.4】案例四

> - 局部最小值问题

## 【6】参考资料

- [B站免费的左程云算法结构基础课](https://www.bilibili.com/video/BV1Ef4y1T7Qi/?spm_id_from=333.788.recommend_more_video.1&vd_source=65c7f6924d2d8ba5fa0d4c448818e08a)