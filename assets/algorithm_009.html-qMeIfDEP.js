import{_ as t,c,b as s,d as i,a as p,w as e,r as o,o as u,e as l}from"./app-GRT9i7xS.js";const d="/qianpengzhan/assets/image-20250821140019920-Cq-B9ubh.png",k="/qianpengzhan/assets/image-20250825113355462-6_smw0BP.png",r={},v={class:"table-of-contents"};function m(b,n){const a=o("router-link");return u(),c("div",null,[n[8]||(n[8]=s("h1",{id:"算法-链表结构",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#算法-链表结构"},[s("span",null,"算法 - 链表结构")])],-1)),s("nav",v,[s("ul",null,[s("li",null,[p(a,{to:"#【1】链表结构"},{default:e(()=>n[0]||(n[0]=[l("【1】链表结构")])),_:1,__:[0]})]),s("li",null,[p(a,{to:"#【2】核心组成和定义"},{default:e(()=>n[1]||(n[1]=[l("【2】核心组成和定义")])),_:1,__:[1]})]),s("li",null,[p(a,{to:"#【3】主要特性"},{default:e(()=>n[2]||(n[2]=[l("【3】主要特性")])),_:1,__:[2]})]),s("li",null,[p(a,{to:"#【4】分类和变体"},{default:e(()=>n[3]||(n[3]=[l("【4】分类和变体")])),_:1,__:[3]})]),s("li",null,[p(a,{to:"#【5】代码实现"},{default:e(()=>n[4]||(n[4]=[l("【5】代码实现")])),_:1,__:[4]}),s("ul",null,[s("li",null,[p(a,{to:"#【5-1】单链表"},{default:e(()=>n[5]||(n[5]=[l("【5.1】单链表")])),_:1,__:[5]})]),s("li",null,[p(a,{to:"#【5-2】双向链表"},{default:e(()=>n[6]||(n[6]=[l("【5.2】双向链表")])),_:1,__:[6]})])])]),s("li",null,[p(a,{to:"#【x】参考资料"},{default:e(()=>n[7]||(n[7]=[l("【X】参考资料")])),_:1,__:[7]})])])]),n[9]||(n[9]=i('<blockquote><p>说在前面的话，本文为个人学习<a href="https://www.bilibili.com/video/BV1Ef4y1T7Qi/?spm_id_from=333.788.recommend_more_video.1&amp;vd_source=65c7f6924d2d8ba5fa0d4c448818e08a" target="_blank" rel="noopener noreferrer">B站免费的左程云算法结构基础课</a>后进行总结的文章，主要是以<code>Java</code>来运行算法.</p></blockquote><h2 id="【1】链表结构" tabindex="-1"><a class="header-anchor" href="#【1】链表结构"><span>【1】链表结构</span></a></h2><blockquote><p><b>链表</b>是一种物理存储结构上非连续、非顺序的存储结构，数据元素的逻辑顺序是通过链表中的指针链接次序实现的‌</p></blockquote><h2 id="【2】核心组成和定义" tabindex="-1"><a class="header-anchor" href="#【2】核心组成和定义"><span>【2】核心组成和定义</span></a></h2><blockquote><ul><li><b>节点结构</b>：每个节点包含两个部分： <ul><li><b>数据域</b>：存储具体数据元素</li><li><b>指针域</b>：存储指向下一个节点的地址（单链表）或同时存储前驱和后继地址（双向链表）‌</li></ul></li><li><b>逻辑结构</b><ul><li>通过指针形成链式连接，逻辑上连续</li><li>物理存储位置可以离散分布‌</li></ul></li></ul></blockquote><p><img src="'+d+'" alt="image-20250821140019920"></p><h2 id="【3】主要特性" tabindex="-1"><a class="header-anchor" href="#【3】主要特性"><span>【3】主要特性</span></a></h2><blockquote><ol><li><b>动态扩展性</b>：无需预分配内存，按需创建节点‌</li><li><b>高效增删</b>：插入/删除操作时间复杂度为<code>O(1)</code>（已知位置时）‌</li><li><b>随机访问劣势</b>：需从头遍历，时间复杂度<code>O(n)‌</code></li><li>‌<b>内存开销</b>：每个节点需额外存储指针信息‌</li></ol></blockquote><h2 id="【4】分类和变体" tabindex="-1"><a class="header-anchor" href="#【4】分类和变体"><span>【4】分类和变体</span></a></h2><blockquote><ul><li><b>单链表</b>：每个节点仅含指向下一个节点的指针‌</li><li><b>双向链表</b>：节点包含指向前驱和后继的两个指针‌</li><li><b>循环链表</b>：尾节点指针指向头节点形成环状结构‌</li><li><b>带头链表</b>：额外设置不存储数据的头节点简化操作‌</li></ul></blockquote><p><img src="'+k+`" alt="image-20250825113355462"></p><h2 id="【5】代码实现" tabindex="-1"><a class="header-anchor" href="#【5】代码实现"><span>【5】代码实现</span></a></h2><h3 id="【5-1】单链表" tabindex="-1"><a class="header-anchor" href="#【5-1】单链表"><span>【5.1】单链表</span></a></h3><blockquote><ul><li><b>代码示例</b></li></ul><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre><code class="language-java"><span class="line"><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>learn<span class="token punctuation">.</span>algorithm<span class="token punctuation">.</span>datastructure</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 链表结构 - 单链表</span>
<span class="line"> *</span>
<span class="line"> * <span class="token keyword">@author</span> qianpengzhan</span>
<span class="line"> * <span class="token keyword">@since</span> 2025/8/21 13:19</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SingleLinkedListStructureTest</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 单链的头节点</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">Node</span> head<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 单链的大小</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token keyword">int</span> size<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">SingleLinkedListStructureTest</span> test <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SingleLinkedListStructureTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        test<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        test<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        test<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        test<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        test<span class="token punctuation">.</span><span class="token function">printList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 1 -&gt; 2 -&gt; 3 -&gt; 4 -&gt; null</span></span>
<span class="line">        test<span class="token punctuation">.</span><span class="token function">prepend</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        test<span class="token punctuation">.</span><span class="token function">prepend</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        test<span class="token punctuation">.</span><span class="token function">printList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -1 -&gt; 0 -&gt; 1 -&gt; 2 -&gt; 3 -&gt; 4 -&gt; null</span></span>
<span class="line">        test<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        test<span class="token punctuation">.</span><span class="token function">printList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -1 -&gt; 0 -&gt; 1 -&gt; 2 -&gt; 4 -&gt; null</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 添加新的元素节点到尾部</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">append</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 新元素的节点</span></span>
<span class="line">        <span class="token class-name">Node</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 若头节点为null 那么刚添加的则是头节点</span></span>
<span class="line">            head <span class="token operator">=</span> newNode<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 若已经存在了头节点 列出来</span></span>
<span class="line">            <span class="token class-name">Node</span> current <span class="token operator">=</span> head<span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">// 遍历所有已经存在的节点 得到最后1个节点</span></span>
<span class="line">            <span class="token keyword">while</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                current <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token comment">// 最后1个节点的next为新节点 则添加到末尾了</span></span>
<span class="line">            current<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">// 节点数自增</span></span>
<span class="line">        size<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 头部插入节点</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">prepend</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">Node</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// 直接在头部节点之间插入1个节点  则新界点的next为原头部节点 头部节点=head</span></span>
<span class="line">        newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// 直接替换掉了节点即可</span></span>
<span class="line">        head <span class="token operator">=</span> newNode<span class="token punctuation">;</span></span>
<span class="line">        size<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 删除节点</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>head<span class="token punctuation">.</span>data <span class="token operator">==</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span></span>
<span class="line">            size<span class="token operator">--</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token class-name">Node</span> current <span class="token operator">=</span> head<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">while</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>next<span class="token punctuation">.</span>data <span class="token operator">==</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                current<span class="token punctuation">.</span>next <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span></span>
<span class="line">                size<span class="token operator">--</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            current <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 打印链表</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">printList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">Node</span> current <span class="token operator">=</span> head<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">while</span> <span class="token punctuation">(</span>current <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>current<span class="token punctuation">.</span>data <span class="token operator">+</span> <span class="token string">&quot; -&gt; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            current <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;null&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 节点</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 数据域</span></span>
<span class="line">        <span class="token keyword">private</span> <span class="token keyword">int</span> data<span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// 指针域</span></span>
<span class="line">        <span class="token keyword">private</span> <span class="token class-name">Node</span> next<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">public</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token keyword">int</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data<span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><b>图解</b></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">[Head] → [0|•] → [1|•] → [3|•] → null</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol><li>每个方框表示节点，包含数据域和指针域</li><li>箭头表示指针引用关系</li><li>null表示链表结束</li></ol><ul><li><b>核心特性</b></li></ul><ol><li>动态内存分配：节点在内存中非连续存储</li><li>高效增删：已知位置时操作时间复杂度O(1)</li><li>顺序访问：必须从头节点开始遍历</li><li>空间开销：每个节点需额外存储指针</li></ol><ul><li><b>实现功能</b></li></ul><ol><li>支持头部/尾部插入节点</li><li>实现节点删除功能</li><li>包含链表遍历打印方法</li><li>维护链表长度计数器</li><li>提供完整可运行的测试案例</li></ol><ul><li><b>与数组相比，它的优势</b></li></ul><table><thead><tr><th>特性</th><th>单链表</th><th>数组</th></tr></thead><tbody><tr><td>插入删除效率</td><td>O(1)</td><td>O(n)</td></tr><tr><td>内存利用率</td><td>动态分配</td><td>需预分配连续空间</td></tr><tr><td>随机访问效率</td><td>O(n)</td><td>O(1)</td></tr><tr><td>空间复杂度</td><td>额外指针开销</td><td>无额外开销</td></tr></tbody></table></blockquote><h3 id="【5-2】双向链表" tabindex="-1"><a class="header-anchor" href="#【5-2】双向链表"><span>【5.2】双向链表</span></a></h3><blockquote><ul><li>代码示例</li></ul><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre><code class="language-java"><span class="line"><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>learn<span class="token punctuation">.</span>algorithm<span class="token punctuation">.</span>datastructure</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">NoSuchElementException</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 双向链表</span>
<span class="line"> * T 代表链表的数据域的元素</span>
<span class="line"> *</span>
<span class="line"> * <span class="token keyword">@author</span> qianpengzhan</span>
<span class="line"> * <span class="token keyword">@since</span> 2025/8/25 15:36</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DoubleLinkedListStructureTest</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 头部节点</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> head<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 尾部节点</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> tail<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 链表大小</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token keyword">int</span> size<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 测试代码</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">DoubleLinkedListStructureTest</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DoubleLinkedListStructureTest</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        list<span class="token punctuation">.</span><span class="token function">prepend</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        list<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;链表内容:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        list<span class="token punctuation">.</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: null &lt;- 1 &lt;-&gt; 2 &lt;-&gt; 3 -&gt; null</span></span>
<span class="line"></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;第二个元素: &quot;</span> <span class="token operator">+</span> list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 2</span></span>
<span class="line"></span>
<span class="line">        list<span class="token punctuation">.</span><span class="token function">removeHead</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        list<span class="token punctuation">.</span><span class="token function">removeTail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;删除首尾后:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        list<span class="token punctuation">.</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: null &lt;- 2 -&gt; null</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 添加data元素到双向链表得头部</span>
<span class="line">     * 头插法</span>
<span class="line">     *</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token parameter">data</span> 元素</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">prepend</span><span class="token punctuation">(</span><span class="token class-name">T</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">/*</span>
<span class="line">         * 头插法‌：</span>
<span class="line">         *     创建新节点</span>
<span class="line">         *     若没有头节点 则链表为空 则头节点=尾节点=新节点</span>
<span class="line">         *     新节点的next指向原头节点</span>
<span class="line">         *     原头节点的prev指向新节点</span>
<span class="line">         *     更新头指针指向新节点</span>
<span class="line">         */</span></span>
<span class="line">        <span class="token comment">// 创建新节点</span></span>
<span class="line">        <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 若没有头节点 则链表为空 则头节点=尾节点=新节点</span></span>
<span class="line">            head <span class="token operator">=</span> tail <span class="token operator">=</span> newNode<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 新节点的next指向原头节点</span></span>
<span class="line">            newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">// 原头节点的prev指向新节点</span></span>
<span class="line">            head<span class="token punctuation">.</span>prev <span class="token operator">=</span> newNode<span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">// 更新头指针指向新节点</span></span>
<span class="line">            head <span class="token operator">=</span> newNode<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        size<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 添加data元素到双向表的尾部</span>
<span class="line">     * 尾插法</span>
<span class="line">     *</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token parameter">data</span> 元素</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">append</span><span class="token punctuation">(</span><span class="token class-name">T</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">/*</span>
<span class="line">         * 尾插法‌：</span>
<span class="line">         *     创建新节点</span>
<span class="line">         *     若没有头节点 则链表为空 则头节点=尾节点=新节点</span>
<span class="line">         *     新节点的prev指向原尾节点</span>
<span class="line">         *     原尾节点的next指向新节点</span>
<span class="line">         *     更新尾指针指向新节点</span>
<span class="line">         */</span></span>
<span class="line">        <span class="token comment">// 创建新节点</span></span>
<span class="line">        <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 若没有头节点 则链表为空 则头节点=尾节点=新节点</span></span>
<span class="line">            head <span class="token operator">=</span> tail <span class="token operator">=</span> newNode<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 新节点的prev指向原尾节点</span></span>
<span class="line">            newNode<span class="token punctuation">.</span>prev <span class="token operator">=</span> tail<span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">// 原尾节点的next指向新节点</span></span>
<span class="line">            tail<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">// 更新尾指针指向新节点</span></span>
<span class="line">            tail <span class="token operator">=</span> newNode<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        size<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 在指定位置插入data元素</span>
<span class="line">     *</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token parameter">index</span> 指定位置</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token parameter">data</span>  元素</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">,</span> <span class="token class-name">T</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> index <span class="token operator">&gt;</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IndexOutOfBoundsException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">prepend</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">==</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">append</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 1 &lt;-&gt; 3 &lt;-&gt; null</span></span>
<span class="line">            <span class="token comment">// 1</span></span>
<span class="line">            <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> current <span class="token operator">=</span> <span class="token function">getNode</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">// 2</span></span>
<span class="line">            <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            newNode<span class="token punctuation">.</span>prev <span class="token operator">=</span> current<span class="token punctuation">.</span>prev<span class="token punctuation">;</span></span>
<span class="line">            newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> current<span class="token punctuation">;</span></span>
<span class="line">            current<span class="token punctuation">.</span>prev<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span></span>
<span class="line">            current<span class="token punctuation">.</span>prev <span class="token operator">=</span> newNode<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            size<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 删除头节点</span>
<span class="line">     *</span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">T</span></span><span class="token punctuation">}</span></span>
<span class="line">     * <span class="token keyword">@author</span> qianpengzhan</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">removeHead</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">/*</span>
<span class="line">         * 头删除‌：</span>
<span class="line">         *     保存头节点的数据</span>
<span class="line">         *     将头指针指向原头节点的next</span>
<span class="line">         *     如果新头节点不为空，将其prev置为null</span>
<span class="line">         *     否则将尾指针也置为null</span>
<span class="line">         */</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">NoSuchElementException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">// 保存头节点的数据</span></span>
<span class="line">        <span class="token class-name">T</span> data <span class="token operator">=</span> head<span class="token punctuation">.</span>data<span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// 将头指针指向原头节点的next</span></span>
<span class="line">        head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 否则将尾指针也置为null</span></span>
<span class="line">            tail <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 如果新头节点不为空，将其prev置为null</span></span>
<span class="line">            head<span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        size<span class="token operator">--</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> data<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 删除尾节点</span>
<span class="line">     *</span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">T</span></span><span class="token punctuation">}</span></span>
<span class="line">     * <span class="token keyword">@author</span> qianpengzhan</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">removeTail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">/*</span>
<span class="line">         * 尾删除‌：</span>
<span class="line">         *     保存尾节点的数据</span>
<span class="line">         *     将尾指针指向原尾节点的prev</span>
<span class="line">         *     如果新尾节点不为空，将其next置为null</span>
<span class="line">         *     否则将头指针也置为null</span>
<span class="line">         */</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>tail <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">NoSuchElementException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">// 保存尾节点的数据</span></span>
<span class="line">        <span class="token class-name">T</span> data <span class="token operator">=</span> tail<span class="token punctuation">.</span>data<span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// 将尾指针指向原尾节点的prev</span></span>
<span class="line">        tail <span class="token operator">=</span> tail<span class="token punctuation">.</span>prev<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>tail <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 如果新尾节点不为空，将其next置为null</span></span>
<span class="line">            tail<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 否则将头指针也置为null</span></span>
<span class="line">            head <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        size<span class="token operator">--</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> data<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 删除指定位置的节点</span>
<span class="line">     *</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token parameter">index</span> 指定位置</span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">T</span></span><span class="token punctuation">}</span></span>
<span class="line">     * <span class="token keyword">@author</span> qianpengzhan</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> index <span class="token operator">&gt;</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">NoSuchElementException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token function">removeHead</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">==</span> size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token function">removeTail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">/*</span>
<span class="line">             *中间删除‌：</span>
<span class="line">             *     定位要删除的节点C及其前驱A和后继B</span>
<span class="line">             *     将A的next指向B</span>
<span class="line">             *     将B的prev指向A</span>
<span class="line">             */</span></span>
<span class="line">            <span class="token comment">// 要删除的节点C</span></span>
<span class="line">            <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> cNode <span class="token operator">=</span> <span class="token function">getNode</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">// 节点C的前驱节点A</span></span>
<span class="line">            <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> aNode <span class="token operator">=</span> cNode<span class="token punctuation">.</span>prev<span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">// 节点C的后继节点B</span></span>
<span class="line">            <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> bNode <span class="token operator">=</span> cNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">// 将A的next指向B</span></span>
<span class="line">            aNode<span class="token punctuation">.</span>next <span class="token operator">=</span> bNode<span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">// 将B的prev指向A</span></span>
<span class="line">            bNode<span class="token punctuation">.</span>prev <span class="token operator">=</span> aNode<span class="token punctuation">.</span>prev<span class="token punctuation">;</span></span>
<span class="line">            size<span class="token operator">--</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">return</span> cNode<span class="token punctuation">.</span>data<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 获取指定位置得节点</span>
<span class="line">     *</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token parameter">index</span> 指定位置</span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">Node</span></span><span class="token punctuation">}</span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">getNode</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> index <span class="token operator">&gt;=</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IndexOutOfBoundsException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> currentNode<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> size <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            currentNode <span class="token operator">=</span> head<span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">// 从前往后遍历找到该位置为止</span></span>
<span class="line">            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> index<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">            currentNode <span class="token operator">=</span> tail<span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">// 从后往前遍历找到该位置为止</span></span>
<span class="line">            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;</span> index<span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>prev<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">return</span> currentNode<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 获取指定位置数据</span>
<span class="line">     *</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token parameter">index</span> 指定位置</span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">T</span></span><span class="token punctuation">}</span></span>
<span class="line">     * <span class="token keyword">@author</span> qianpengzhan</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token function">getNode</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">.</span>data<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 获取链表大小</span>
<span class="line">     *</span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token punctuation">{</span><span class="token keyword">@link</span> int<span class="token punctuation">}</span></span>
<span class="line">     * <span class="token keyword">@author</span> qianpengzhan</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> size<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 判断是否为空</span>
<span class="line">     *</span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token punctuation">{</span><span class="token keyword">@link</span> boolean<span class="token punctuation">}</span></span>
<span class="line">     * <span class="token keyword">@author</span> qianpengzhan</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> size <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 打印链表</span>
<span class="line">     *</span>
<span class="line">     * <span class="token keyword">@author</span> qianpengzhan</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> current <span class="token operator">=</span> head<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">while</span> <span class="token punctuation">(</span>current <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>current<span class="token punctuation">.</span>data <span class="token operator">+</span> <span class="token string">&quot; &lt;-&gt; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            current <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;null&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token doc-comment comment">/**</span>
<span class="line">        链表内容:</span>
<span class="line">            1 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>-</span><span class="token punctuation">&gt;</span></span> 2 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>-</span><span class="token punctuation">&gt;</span></span> 3 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>-</span><span class="token punctuation">&gt;</span></span> null</span>
<span class="line">            第二个元素: 2</span>
<span class="line">            删除首尾后:</span>
<span class="line">            2 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>-</span><span class="token punctuation">&gt;</span></span> null</span>
<span class="line">        */</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 双向链表的数据结构</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 数据域</span></span>
<span class="line">        <span class="token keyword">private</span> <span class="token class-name">T</span> data<span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// 指针域  -  前驱指针</span></span>
<span class="line">        <span class="token keyword">private</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> prev<span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// 指针域 - 后继指针</span></span>
<span class="line">        <span class="token keyword">private</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> next<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">public</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token class-name">T</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data<span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li></li></ul></blockquote><h2 id="【x】参考资料" tabindex="-1"><a class="header-anchor" href="#【x】参考资料"><span>【X】参考资料</span></a></h2><ul><li><a href="https://www.bilibili.com/video/BV1Ef4y1T7Qi/?spm_id_from=333.788.recommend_more_video.1&amp;vd_source=65c7f6924d2d8ba5fa0d4c448818e08a" target="_blank" rel="noopener noreferrer">B站免费的左程云算法结构基础课</a></li></ul>`,18))])}const y=t(r,[["render",m]]),g=JSON.parse('{"path":"/md/algorithm/algorithm_009.html","title":"算法 - 链表结构","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1758507682000,"contributors":[{"name":"钱鹏展","username":"","email":"873373549@qq.com","commits":5},{"name":"qianpengzhan","username":"qianpengzhan","email":"873373549@qq.com","commits":1,"url":"https://github.com/qianpengzhan"}],"changelog":[{"hash":"eac2ce56dd0834cfc1b443c0f1e0739c831b72db","time":1758507682000,"email":"873373549@qq.com","author":"qianpengzhan","message":"bugfixed"},{"hash":"c20bcf8c0c687509f29fe28d1e03a4381d92041c","time":1756257376000,"email":"873373549@qq.com","author":"钱鹏展","message":"submit"},{"hash":"ce12c6cb5a196528519058b2a8da72cef946e855","time":1756092625000,"email":"873373549@qq.com","author":"钱鹏展","message":"submit"},{"hash":"5fdd4f14d6f5577450d543062494d5562c49542b","time":1755591344000,"email":"873373549@qq.com","author":"钱鹏展","message":"submit"},{"hash":"8047cc4b13873a7f186d76e289f1fab4750d39ef","time":1755248680000,"email":"873373549@qq.com","author":"钱鹏展","message":"submit"},{"hash":"217cb3b10491c50e6c567ed02484095c99d3359c","time":1755239288000,"email":"873373549@qq.com","author":"钱鹏展","message":"submit"}]},"filePathRelative":"md/algorithm/algorithm_009.md"}');export{y as comp,g as data};
