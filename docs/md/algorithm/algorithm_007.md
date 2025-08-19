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

```java
package com.learn.algorithm.business;

import java.util.Arrays;

/**
 * 在一个有序数组中，找某个数是否存在
 *
 * @author qianpengzhan
 * @since 2025/8/18 15:29
 */
public class BinarySearchExists {

    // 标准二分查找

    /**
     * @param arr    有序的数组
     * @param target 具体的目标数 要找的数是几
     * @return boolean
     */
    public static boolean exists(int[] arr, int target) {
        if (arr == null || arr.length == 0) return false;
        int left = 0, right = arr.length - 1;
        while (left <= right) {
            // 取最中间的下标的数据
            int mid = left + ((right - left) >> 1);
            if (arr[mid] == target) {
                // 找到了 则打印下标 返回找到了true
                System.out.println(mid);
                return true;
            } else if (arr[mid] < target) {
                // 当前值比目标值小 则左侧范围扩大，向右找
                left = mid + 1;
            } else {
                // 当前值比目标值大, 则右侧范围扩大，向左找
                right = mid - 1;
            }
        }
        return false;
    }

    // 对数器验证方法
    public static boolean verify(int[] arr, int target, boolean result) {
        // 线性查找验证
        for (int num : arr) {
            if (num == target) return result;
        }
        return !result;
    }

    // 随机数组生成器
    public static int[] generateRandomSortedArray(int maxSize, int maxValue) {
        int[] arr = new int[(int) (Math.random() * maxSize) + 1];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = (int) (Math.random() * maxValue);
        }
        // 二分查找的前提： 有序
        Arrays.sort(arr);
        return arr;
    }

    public static void main(String[] args) {
        int testTime = 100000;
        int maxSize = 100;
        int maxValue = 100;
        boolean succeed = true;

        for (int i = 0; i < testTime; i++) {
            int[] arr = generateRandomSortedArray(maxSize, maxValue);
            int target = (int) (Math.random() * maxValue);
            boolean result = exists(arr, target);
            if (!verify(arr, target, result)) {
                System.out.println("测试失败！");
                System.out.println("数组: " + Arrays.toString(arr));
                System.out.println("目标值: " + target);
                System.out.println("查找结果: " + result);
                succeed = false;
                break;
            }
        }
        System.out.println(succeed ? "所有测试通过！" : "存在测试失败！");
    }
}
```

### 【5.2】案例二

> - 在一个有序数组中，找>=某个数最左侧的位置

```java
package com.learn.algorithm.business;

import java.util.Arrays;

/**
 * 在一个有序数组中，找>=某个数最左侧的位置
 *
 * @author qianpengzhan
 * @since 2025/8/18 16:19
 */
public class BinaryNearLeft {

    // 在一个有序数组arr中，找>=某个数value最左侧的位置
    public static int nearestIndex(int[] arr, int value) {
        if (arr == null || arr.length == 0) return -1;
        int L = 0;
        int R = arr.length - 1;
        int index = -1; // 记录最左的下标 对号
        while (L <= R) {
            int mid = L + ((R - L) >> 1);
            if (arr[mid] >= value) {
                index = mid;
                R = mid - 1;
            } else {
                L = mid + 1;
            }
        }
        return index;
    }

    // 对数器验证方法
    public static boolean verify(int[] arr, int target, int index) {
        if (index == -1) {
            for (int num : arr) {
                if (num >= target) return false;
            }
            return true;
        }

        // 检查找到的位置确实>=target
        if (arr[index] < target) return false;

        // 检查这是最左侧的位置
        if (index > 0 && arr[index - 1] >= target) return false;

        return true;
    }

    public static int[] generateRandomSortedArray(int maxSize, int maxValue) {
        int[] arr = new int[(int) (Math.random() * maxSize) + 1];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = (int) (Math.random() * maxValue) - (int) (Math.random() * maxValue);
        }
        Arrays.sort(arr);
        return arr;
    }

    public static void main(String[] args) {
        int testTime = 500000;
        int maxSize = 100;
        int maxValue = 100;
        boolean succeed = true;

        for (int i = 0; i < testTime; i++) {
            int[] arr = generateRandomSortedArray(maxSize, maxValue);
            int target = (int) (Math.random() * maxValue) - (int) (Math.random() * maxValue);
            int index = nearestIndex(arr, target);
            if (!verify(arr, target, index)) {
                succeed = false;
                System.out.println("测试失败！");
                System.out.println("数组: " + Arrays.toString(arr));
                System.out.println("目标值: " + target);
                System.out.println("找到的位置: " + index);
                break;
            }
        }
        System.out.println(succeed ? "所有测试通过！" : "存在测试失败！");
    }
}

```

### 【5.3】案例三

> - 在一个有序数组中，找<=某个数最右侧的位置

```java
package com.learn.algorithm.business;

import java.util.Arrays;

/**
 * 在一个有序数组arr中，找<=某个数value最右侧的位置
 *
 * @author qianpengzhan
 * @since 2025/8/19 11:07
 */
public class BinaryNearRight {
    // 在一个有序数组arr中，找<=某个数value最右侧的位置
    public static int nearestIndex(int[] arr, int value) {
        if (arr == null || arr.length == 0) return -1;
        int L = 0;
        int R = arr.length - 1;
        int index = -1; // 记录最左的下标 对号
        while (L <= R) {
            int mid = L + ((R - L) >> 1);
            if (arr[mid] <= value) {
                index = mid;
                L = mid + 1;
            } else {
                R = mid - 1;
            }
        }
        return index;
    }

    // 对数器验证方法
    public static boolean verify(int[] arr, int value, int index) {
        if (index == -1) {
            for (int num : arr) {
                if (num <= value) return false;
            }
            return true;
        }

        // 检查找到的位置确实<=value
        if (arr[index] > value) return false;

        // 检查这是最右侧的位置
        if (index < arr.length - 1 && arr[index + 1] <= value) return false;

        return true;
    }

    public static int[] generateRandomSortedArray(int maxSize, int maxValue) {
        int[] arr = new int[(int) (Math.random() * maxSize) + 1];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = (int) (Math.random() * maxValue) - (int) (Math.random() * maxValue);
        }
        Arrays.sort(arr);
        return arr;
    }

    public static void main(String[] args) {
        int testTime = 500000;
        int maxSize = 100;
        int maxValue = 100;
        boolean succeed = true;

        for (int i = 0; i < testTime; i++) {
            int[] arr = generateRandomSortedArray(maxSize, maxValue);
            int target = (int) (Math.random() * maxValue) - (int) (Math.random() * maxValue);
            int index = nearestIndex(arr, target);
            if (!verify(arr, target, index)) {
                succeed = false;
                System.out.println("测试失败！");
                System.out.println("数组: " + Arrays.toString(arr));
                System.out.println("目标值: " + target);
                System.out.println("找到的位置: " + index);
                break;
            }
        }
        System.out.println(succeed ? "所有测试通过！" : "存在测试失败！");
    }
}

```

### 【5.4】案例四

> - 局部最小值问题

```java
package com.learn.algorithm.business;

import java.util.Arrays;

/**
 * @author qianpengzhan
 * @since 2025/8/19 11:15
 */
public class BinaryPartMin {
    // 查找局部最小值
    public static int findPartMinimum(int[] arr) {
        if (arr == null || arr.length == 0) {
            return -1;
        }
        if (arr.length == 1 || arr[0] < arr[1]) {
            return 0;
        }
        if (arr[arr.length - 1] < arr[arr.length - 2]) {
            return arr.length - 1;
        }
        int left = 1;
        int right = arr.length - 2;
        int mid = 0;
        while (left < right) {
            mid = (left + right) / 2;
            if (arr[mid] > arr[mid - 1]) {
                right = mid - 1;
            } else if (arr[mid] > arr[mid + 1]) {
                left = mid + 1;
            } else {
                return mid;
            }
        }
        return left;
    }

    // 验证得到的结果，是不是局部最小
    public static boolean verify(int[] arr, int index) {
        if (arr.length <= 1) {
            return true;
        }
        if (index == 0) {
            return arr[index] < arr[index + 1];
        }
        if (index == arr.length - 1) {
            return arr[index] < arr[index - 1];
        }
        return arr[index] < arr[index - 1] && arr[index] < arr[index + 1];
    }


    // 为了测试
    // 生成相邻不相等的数组
    public static int[] generateRandomArray(int maxSize, int maxValue) {
        int[] arr = new int[(int) (Math.random() * maxSize) + 1];
        arr[0] = (int) (Math.random() * maxValue) - (int) (Math.random() * maxValue);
        for (int i = 1; i < arr.length; i++) {
            do {
                arr[i] = (int) (Math.random() * maxValue) - (int) (Math.random() * maxValue);
            } while (arr[i] == arr[i - 1]);
        }
        return arr;
    }


    // 对数器测试
    public static void main(String[] args) {
        int testTime = 100000;
        int maxSize = 100;
        int maxValue = 100;
        boolean succeed = true;

        for (int i = 0; i < testTime; i++) {
            int[] arr = generateRandomArray(maxSize, maxValue);
            int index = findPartMinimum(arr);

            if (!verify(arr, index)) {
                succeed = false;
                System.out.println("测试失败！");
                System.out.println("数组: " + Arrays.toString(arr));
                System.out.println("找到的位置: " + index);
                break;
            }
        }
        System.out.println(succeed ? "所有测试通过！" : "存在测试失败！");
    }
}

```

## 【6】参考资料

- [B站免费的左程云算法结构基础课](https://www.bilibili.com/video/BV1Ef4y1T7Qi/?spm_id_from=333.788.recommend_more_video.1&vd_source=65c7f6924d2d8ba5fa0d4c448818e08a)