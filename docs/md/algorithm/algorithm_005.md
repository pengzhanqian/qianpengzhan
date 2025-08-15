# 算法 - 冒泡排序

[[toc]]

> 说在前面的话，本文为个人学习[B站免费的左程云算法结构基础课](https://www.bilibili.com/video/BV1Ef4y1T7Qi/?spm_id_from=333.788.recommend_more_video.1&vd_source=65c7f6924d2d8ba5fa0d4c448818e08a)后进行总结的文章，主要是以`Java`来运行算法.

## 【1】定义

> - <b>冒泡排序 (`Bubble Sort`)</b>
>
> ::: info 定义
>
> <b>冒泡排序 (`Bubble Sort`)</b> 即 它是一种简单的排序算法，它重复地遍历要排序的数列，一次比较两个元素，如果它们的顺序错误就把它们交换过来。这个算法的名字由来是因为越小的元素会经由交换慢慢"浮"到数列的顶端（升序排列）。
>
> :::
>
> - <b>核心思想</b>
>
> ::: info 核心思想
>
> 冒泡排序是一种简单的‌**比较交换排序算法**‌，其基本思想是‌**重复遍历待排序的数组，每次比较相邻的两个元素，如果顺序错误就交换它们**‌。通过多轮遍历，较大的元素会逐渐“冒泡”到数组的末尾，从而实现排序。
>
> :::

## 【2】算法流程图

> ```text
> 开始
>   ↓
> 设置数组长度n
>   ↓
> 外层循环i从0到n-2
>   ↓
>   内层循环j从0到n-i-2
>     ↓
>     比较arr[j]和arr[j+1]
>      ／       ＼
> arr[j]>arr[j+1]  否
>     ↓
>     是
>     ↓
> 交换arr[j]和arr[j+1]
>     ↓
> 检查是否发生交换
>   ／      ＼
> 否        是
> ↓          ↓
> 结束      继续下一轮
> ```
>
> ```mermaid
> graph TD
>     A[开始] --> B[初始化i=0, swapped=true]
>     B --> C{swapped且i<n-1?}
>     C -- 是 --> D[设置swapped=false]
>     D --> E[初始化j=0]
>     E --> F{j < n-i-1?}
>     F -- 是 --> G["arr[j] > arr[j+1]?"]
>     G -- 是 --> H[交换元素并设swapped=true]
>     H --> I[j++]
>     G -- 否 --> I
>     I --> F
>     F -- 否 --> J[i++]
>     J --> C
>     C -- 否 --> K[结束]
> ```
>
> 流程说明：
>
> - 蓝色节点表示算法开始/结束
> - 菱形节点表示条件判断
> - 矩形节点表示操作步骤
> - 箭头方向表示程序执行流向

## 【3】算法步骤说明

### 【3.1】 标准冒泡排序（无优化）

> 1. **从数组的第一个元素开始**‌，比较相邻的两个元素：
>    - 如果 `arr[j] > arr[j+1]`，则交换它们的位置。
>    - 否则，保持不变。
> 2. ‌**遍历完一轮后**‌，最大的元素会“冒泡”到数组的末尾。
> 3. **重复这个过程**‌，每次遍历的范围缩小 1，直到整个数组有序。
>
> ```java
> // 标准冒泡排序
>     public static void bubbleSort(int[] arr) {
>         int n = arr.length;
>         for (int i = 0; i < n - 1; i++) {
>             for (int j = 0; j < n - i - 1; j++) {
>                 if (arr[j] > arr[j + 1]) {
>                     // 交换相邻元素
>                     int temp = arr[j];
>                     arr[j] = arr[j + 1];
>                     arr[j + 1] = temp;
>                 }
>             }
>         }
>     }
> ```

### 【3.2】优化冒泡排序（提前终止）

> 为了减少不必要的比较，可以添加一个‌**标志位**‌，记录本轮是否发生过交换：
>
> - 如果某轮遍历‌**没有发生任何交换**‌，说明数组已经有序，可以‌**提前终止算法**‌。
>
> 其算法步骤如下:
>
> 1. **初始化阶段**‌
>    - 获取数组长度`n`
>    - 声明`swapped`标志位（初始值不影响）
> 2. ‌**外层循环（控制轮次）**‌
>    - 每轮将当前最大值推到未排序部分的末尾
>    - 共需最多`n-1`轮（`i`从`0`到`n-2`）
> 3. ‌**内层循环（比较交换）**‌
>    - 比较范围：`0`到`n-i-1`（每轮减少已排序部分）
>    - 若`arr[j] > arr[j+1]`则交换，并标记`swapped=true`
> 4. **提前终止检测**‌
>    - 若某轮未发生交换（`!swapped`），说明数组已有序，直接退出
>
> ```java
>     // 优化冒泡排序（提前终止）
>     public static void optimizedBubbleSort(int[] arr) {
>         int n = arr.length;
>         boolean swapped;
>         for (int i = 0; i < n - 1; i++) {
>             swapped = false;
>             for (int j = 0; j < n - i - 1; j++) {
>                 if (arr[j] > arr[j + 1]) {
>                     // 交换相邻元素
>                     int temp = arr[j];
>                     arr[j] = arr[j + 1];
>                     arr[j + 1] = temp;
>                     swapped = true;
>                 }
>             }
>             // 如果本轮没有交换，说明数组已有序
>             if (!swapped) break;
>         }
>     }
> ```

## 【4】核心计算步骤

> 冒泡排序的核心是通过 ‌**相邻元素比较与交换**‌，逐步将较大的元素“浮”到数组的末尾

### 【4.1】（1）外层循环控制排序轮次

> - 每完成一轮排序，最大的元素会移动到数组末尾。
> - 最多需要 `n-1` 轮排序（`n` 为数组长度）。

### 【4.2】（2）内层循环进行相邻元素比较与交换

> - ‌**比较范围**‌：`0 ~ n-i-1`（`i` 是当前轮次，每轮减少比较次数）。
> - ‌**核心判断**‌：如果 `arr[j] > arr[j+1]`，则交换这两个元素。

### 【4.3】（3）交换操作（原地修改）‌

> - 使用临时变量 `temp`交换 `arr[j]`和 `arr[j+1]`：
>
>   ```java
>   int temp = arr[j];
>   arr[j] = arr[j + 1];
>   arr[j + 1] = temp;
>   ```

### 【4.4】（4）提前终止优化

> - **优化思路**‌：如果某一轮没有发生任何交换，说明数组已经有序，可以提前结束排序。
>
> ‌**实现方式**‌：
>
> - 使用 `swapped` 标志位记录本轮是否发生交换。
> - 如果没有交换（`swapped == false`），则直接 `break` 退出循环。

### 【4.5】（5）时间复杂度

> 有2轮循环，每轮n次，最终需要n²次

> **最优情况（已排序数组）**‌：`O(n)`（只需一轮检查）。
>
> ‌**最坏情况（逆序数组）**‌：`O(n²)`（仍需完整轮次）

### 【4.6】（6）空间复杂度

> 只有交换，空间复杂度为`O(1)`.

## 【5】核心特性

> - ‌**时间复杂度**‌：固定为 `O(n²)`，无论数据是否有序。
> - ‌**空间复杂度**‌：`O(1)`（原地排序）。
> - ‌**不稳定性**‌：交换可能改变相等元素的原始顺序。

## 【6】代码示例

> ```java
> package com.learn.algorithm.business;
> 
> /**
>  * 冒泡排序
>  *
>  * @author qianpengzhan
>  * @since 2025/8/15 11:42
>  */
> public class BubbleSort {
> 
> 
>     // 标准冒泡排序
>     public static void standardBubbleSort(int[] arr) {
>         if (arr == null || arr.length < 2) {
>             return;
>         }
>         // n 为 数组的长度
>         int n = arr.length;
>         // 外层 i ~ n-1 进行遍历
>         for (int i = 0; i < n - 1; i++) {
>             // 内层 j ~ n-1-i 进行遍历
>             for (int j = 0; j < n - 1 - i; j++) {
>                 // 比较相邻的2个元素 若前者大于后者，则交换
>                 if (arr[j] > arr[j + 1]) {
>                     // 交换相邻元素
>                     int temp = arr[j];
>                     arr[j] = arr[j + 1];
>                     arr[j + 1] = temp;
>                 }
>             }
>         }
>     }
> 
>     // 提前终止优化的冒泡排序
>     public static void optimizedBubbleSort(int[] arr) {
>         if (arr == null || arr.length < 2) {
>             return;
>         }
>         // n 为 数组的长度
>         int n = arr.length;
>         // 添加提前终止标识
>         boolean swapped;
>         // 外层 i ~ n-1 进行遍历
>         for (int i = 0; i < n - 1; i++) {
>             // 默认是尚未排序好的
>             swapped = false;
>             // 内层 j ~ n-1-i 进行遍历
>             for (int j = 0; j < n - 1 - i; j++) {
>                 // 比较相邻的2个元素 若前者大于后者，则交换
>                 if (arr[j] > arr[j + 1]) {
>                     // 交换相邻元素
>                     int temp = arr[j];
>                     arr[j] = arr[j + 1];
>                     arr[j + 1] = temp;
>                     // 本轮交换过 则继续
>                     swapped = true;
>                 }
>             }
>             // 若是本轮没有交换 说明数组已经有序
>             if (!swapped) {
>                 break;
>             }
>         }
>     }
> }
> 

## 【7】对数器

> 以下是冒泡排序的对数器（验证器）`Java`代码实现，用于验证排序算法的正确性：
>
> ```java
> package com.learn.algorithm.business;
> 
> import java.util.Arrays;
> import java.util.Random;
> 
> /**
>  * 冒泡排序
>  *
>  * @author qianpengzhan
>  * @since 2025/8/15 11:42
>  */
> public class BubbleSort {
> 
> 
>     // 标准冒泡排序
>     // 待测试的冒泡排序实现
>     public static void standardBubbleSort(int[] arr) {
>         if (arr == null || arr.length < 2) {
>             return;
>         }
>         // n 为 数组的长度
>         int n = arr.length;
>         // 外层 i ~ n-1 进行遍历
>         for (int i = 0; i < n - 1; i++) {
>             // 内层 j ~ n-1-i 进行遍历
>             for (int j = 0; j < n - 1 - i; j++) {
>                 // 比较相邻的2个元素 若前者大于后者，则交换
>                 if (arr[j] > arr[j + 1]) {
>                     // 交换相邻元素
>                     int temp = arr[j];
>                     arr[j] = arr[j + 1];
>                     arr[j + 1] = temp;
>                 }
>             }
>         }
>     }
> 
>     // 提前终止优化的冒泡排序
>     public static void optimizedBubbleSort(int[] arr) {
>         if (arr == null || arr.length < 2) {
>             return;
>         }
>         // n 为 数组的长度
>         int n = arr.length;
>         // 添加提前终止标识
>         boolean swapped;
>         // 外层 i ~ n-1 进行遍历
>         for (int i = 0; i < n - 1; i++) {
>             // 默认是尚未排序好的
>             swapped = false;
>             // 内层 j ~ n-1-i 进行遍历
>             for (int j = 0; j < n - 1 - i; j++) {
>                 // 比较相邻的2个元素 若前者大于后者，则交换
>                 if (arr[j] > arr[j + 1]) {
>                     // 交换相邻元素
>                     int temp = arr[j];
>                     arr[j] = arr[j + 1];
>                     arr[j + 1] = temp;
>                     // 本轮交换过 则继续
>                     swapped = true;
>                 }
>             }
>             // 若是本轮没有交换 说明数组已经有序
>             if (!swapped) {
>                 break;
>             }
>         }
>     }
> 
>     // 绝对正确的对照排序方法
>     public static void comparator(int[] arr) {
>         Arrays.sort(arr);
>     }
> 
>     // 生成随机测试数组
>     public static int[] generateRandomArray(int maxSize, int maxValue) {
>         Random random = new Random();
>         int[] arr = new int[random.nextInt(maxSize + 1)];
>         for (int i = 0; i < arr.length; i++) {
>             arr[i] = random.nextInt(maxValue + 1) - random.nextInt(maxValue);
>         }
>         return arr;
>     }
> 
>     // 复制数组
>     public static int[] copyArray(int[] arr) {
>         return arr == null ? null : Arrays.copyOf(arr, arr.length);
>     }
> 
>     // 判断两个数组是否相同
>     public static boolean isEqual(int[] arr1, int[] arr2) {
>         return Arrays.equals(arr1, arr2);
>     }
> 
>     // 对数器主测试方法
>     public static void main(String[] args) {
>         int testTime = 500000;
>         int maxSize = 100;
>         int maxValue = 100;
>         boolean succeed = true;
> 
>         for (int i = 0; i < testTime; i++) {
>             int[] arr1 = generateRandomArray(maxSize, maxValue);
>             int[] arr2 = copyArray(arr1);
> 
>             //standardBubbleSort(arr1);
>             optimizedBubbleSort(arr1);
>             comparator(arr2);
> 
>             if (!isEqual(arr1, arr2)) {
>                 succeed = false;
>                 System.out.println("原始数组: " + Arrays.toString(arr2));
>                 System.out.println("冒泡排序结果: " + Arrays.toString(arr1));
>                 break;
>             }
>         }
> 
>         System.out.println(succeed ? "测试通过！" : "测试失败！");
>     }
> }
> 
> ```
>
> 1. 包含冒泡排序实现和绝对正确的对照方法`Arrays.sort()`
> 2. 随机数组生成器可控制数组大小和数值范围
> 3. 支持大规模随机测试（默认50万次）
> 4. 自动比较排序结果并输出错误案例
> 5. 提供数组复制和相等判断工具方法
>
> 使用方法：直接运行main方法即可自动验证冒泡排序的正确性，测试失败时会打印出错案例。

## 【8】参考资料

- [B站免费的左程云算法结构基础课](https://www.bilibili.com/video/BV1Ef4y1T7Qi/?spm_id_from=333.788.recommend_more_video.1&vd_source=65c7f6924d2d8ba5fa0d4c448818e08a)