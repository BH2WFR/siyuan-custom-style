# 思源笔记 个人 css 样式 （持续更新）



## 代码地址（欢迎 star 和 issues）：

> Github: [https://github.com/BH2WFR/siyuan-custom-style](https://github.com/BH2WFR/siyuan-custom-style)
>
> ld246: [https://ld246.com/article/1766143036572](https://ld246.com/article/1766143036572)

**致谢：**

- （有序列表和无序列表部分） ：[[css] 自定义多级有序列表和无序列表 - 链滴](https://ld246.com/article/1746943932806)

## 更新内容

* 支持对 LaTeX 公式中的颜色进行重映射，暗色模式下也可以正常显示
* 标题前增加了标题序号，但不适用于 引述/callout 中的标题
* 对 新更新的 Callout 增加了边框样式
* 更新了分隔线的样式
* 增加了有序列表/无序列表 的样式 （借鉴自 本论坛另一用户的思路）
* 增加了亮色模式下的护眼底色
* (2025-11-24): 取消了标题前的章节号, 取消了有序列表的自定义计数器
* (2025-12-29): 增加了对 `<kbd>` (键盘) 键盘 abc行内块的样式
* (2026-01-13): 增加了浮动工具栏、数据库的样式，调整了护眼底色的适用范围
* (2026-01-14): 针对荧光和高亮格式，增加了与 代码块、公式 混合文本的样式处理逻辑
* (2016-02-03): 删除荧光和高亮格式在连续的文本之间的特殊处理逻辑

## 截图：

### 页面护眼色：

![image.png](https://b3logfile.com/file/2026/01/image-HGbxT9g.png?imageView2/2/interlace/1/format/webp)

![image.png](https://b3logfile.com/file/2026/01/image-WnAxOIy.png?imageView2/2/interlace/1/format/webp)

### 文本样式：

![image.png](https://b3logfile.com/file/2026/02/image-usw0yYz.png)

![image.png](https://b3logfile.com/file/2026/02/image-fB13jwk.png)

* 给一个有多种样式、或代码块、或公式的文本加同一颜色的高亮时，会视作一个个单独的块来渲染，故这里有已知 bug：
  
  ![image.png](https://b3logfile.com/file/2026/02/image-qQZvebm.png)
  
* 支持 `==荧光==` ==荧光== 样式、`代码块 abcd` 样式，键盘热键 Ctrl+Z 样式

  ![image.png](https://b3logfile.com/file/2026/02/image-VLnaUVL.png)

* **样式 13** 为「 **挖空块** 」，鼠标移动或点击即可显示隐藏内容

  ![image.png](https://b3logfile.com/file/2026/01/image-2YARM61.png)

* **样式 12** 为 「 **伪代码块** 」，可以对里面的文本进行高亮等格式化操作：
  
  ![image.png](https://b3logfile.com/file/2026/01/image-If1wHZV.png?imageView2/2/interlace/1/format/webp)

### 数据库 及 数据库选择项的 样式：

![image.png](https://b3logfile.com/file/2026/01/image-edSEiF3.png?imageView2/2/interlace/1/format/webp)

![image.png](https://b3logfile.com/file/2026/01/image-D6nnKWf.png?imageView2/2/interlace/1/format/webp)

### 引述块和 Callout 的样式：

![image.png](https://b3logfile.com/file/2025/12/image-x9chiPh.png?imageView2/2/interlace/1/format/webp)

![image.png](https://b3logfile.com/file/2025/12/image-3Fjwd1P.png?imageView2/2/interlace/1/format/webp)

### 标题、有序列表、无序列表的样式：

> 注：2025-12-24: 已关掉标题的序号显示功能，因在页面过长时，序号无法正确排序
>
> 对于有序列表，不再适用自定义序号，而使用系统原生序号

![image.png](https://b3logfile.com/file/2025/12/image-9fRnuFY.png?imageView2/2/interlace/1/format/webp)

![image.png](https://b3logfile.com/file/2025/12/image-8XYwJkV.png?imageView2/2/interlace/1/format/webp)

![image.png](https://b3logfile.com/file/2025/12/image-PHi5F0j.png?imageView2/2/interlace/1/format/webp)

### 表格样式：

![image.png](https://b3logfile.com/file/2026/01/image-N5c1BmG.png?imageView2/2/interlace/1/format/webp)

![image.png](https://b3logfile.com/file/2026/01/image-70Vc8TA.png?imageView2/2/interlace/1/format/webp)

### 公式颜色样式：

> 暗色模式下, 公式的颜色仍然可以醒目地显示.
>
> 暂时不支持公式文本背景色的重绘

![image.png](https://b3logfile.com/file/2025/12/image-PddvYHc.png?imageView2/2/interlace/1/format/webp)

![image.png](https://b3logfile.com/file/2025/12/image-lIouq4w.png?imageView2/2/interlace/1/format/webp)

### 浮动工具栏样式

![image.png](https://b3logfile.com/file/2026/01/image-o0yRbFD.png?imageView2/2/interlace/1/format/webp)

![image.png](https://b3logfile.com/file/2026/01/image-WCTTJE2.png?imageView2/2/interlace/1/format/webp)
