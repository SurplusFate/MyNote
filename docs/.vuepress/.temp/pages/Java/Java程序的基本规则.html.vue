<template><div><h1 id="java程序的基本规则" tabindex="-1"><a class="header-anchor" href="#java程序的基本规则" aria-hidden="true">#</a> Java程序的基本规则</h1>
<p>Java类名、方法名、变量名统称为“标识符”，凡是程序员自己有权利命名的单词都是标识符。
主方法的<code v-pre>main</code>也属于标识符,但这个标识符不能被修改,因为这个<code v-pre>main</code>是SUN固定死的。</p>
<h2 id="main方法的问题" tabindex="-1"><a class="header-anchor" href="#main方法的问题" aria-hidden="true">#</a> main方法的问题</h2>
<p>如果需要用Java解释器直接运行一个Java类，则这个Java类必须包含main方法，这个main方法必须使用public和static来修饰，必须使用void声明该方法的返回值，而且该方法的参数类型只能是一个字符串数组，而不能是其他形式的参数。</p>
<p>对于这个main方法而言，前面的public和static修饰符的位置可以互换，但其他部分则是固定的。定义main方法时，不要写成Main方法，如果不小心把方法名的首字母写成了大写，编译时不会出现任何问题，但运行该程序时将给出如下错误提示：</p>
<p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202206071630867.png" alt="image-20220516223404651" loading="lazy"></p>
<p>这个错误提示，提示Java解释器找不到main方法，因为Java解释器只会选择从main方法开始执行；对于Main方法，Java解释器会把该方法当成一个普通方法，而不是程序的入口。</p>
<h2 id="java关键字" tabindex="-1"><a class="header-anchor" href="#java关键字" aria-hidden="true">#</a> Java关键字</h2>
<p>Java关键字是预先定义的具有特别意义的标识符，也可以叫Java保留字，Java关键字不能用作变量名、方法名、类名、包名和参数，Java关键字大全：</p>
<table>
<thead>
<tr>
<th style="text-align:center">Java关键字类别</th>
<th style="text-align:center">Java关键字</th>
<th style="text-align:center">关键字含义</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">访问控制</td>
<td style="text-align:center">private</td>
<td style="text-align:center">一种访问控制方式：私用模式，访问控制修饰符，可以应用于类、方法或字段（在类中声明的变量）</td>
</tr>
<tr>
<td style="text-align:center">访问控制</td>
<td style="text-align:center">protected</td>
<td style="text-align:center">一种访问控制方式：保护模式，可以应用于类、方法或字段（在类中声明的变量）的访问控制修饰符</td>
</tr>
<tr>
<td style="text-align:center">访问控制</td>
<td style="text-align:center">public</td>
<td style="text-align:center">一种访问控制方式：共用模式，可以应用于类、方法或字段（在类中声明的变量）的访问控制修饰符。</td>
</tr>
<tr>
<td style="text-align:center">类、方法和变量修饰符</td>
<td style="text-align:center">abstract</td>
<td style="text-align:center">表明类或者成员方法具有抽象属性，用于修改类或方法</td>
</tr>
<tr>
<td style="text-align:center">类、方法和变量修饰符</td>
<td style="text-align:center">class</td>
<td style="text-align:center">声明一个类，用来声明新的Java类</td>
</tr>
<tr>
<td style="text-align:center">类、方法和变量修饰符</td>
<td style="text-align:center">extends</td>
<td style="text-align:center">表明一个类型是另一个类型的子类型。对于类，可以是另一个类或者抽象类；对于接口，可以是另一个接口</td>
</tr>
<tr>
<td style="text-align:center">类、方法和变量修饰符</td>
<td style="text-align:center">final</td>
<td style="text-align:center">用来说明最终属性，表明一个类不能派生出子类，或者成员方法不能被覆盖，或者成员域的值不能被改变，用来定义常量</td>
</tr>
<tr>
<td style="text-align:center">类、方法和变量修饰符</td>
<td style="text-align:center">implements</td>
<td style="text-align:center">表明一个类实现了给定的接口</td>
</tr>
<tr>
<td style="text-align:center">类、方法和变量修饰符</td>
<td style="text-align:center">interface</td>
<td style="text-align:center">接口</td>
</tr>
<tr>
<td style="text-align:center">类、方法和变量修饰符</td>
<td style="text-align:center">native</td>
<td style="text-align:center">用来声明一个方法是由与计算机相关的语言（如C/C++/FORTRAN语言）实现的</td>
</tr>
<tr>
<td style="text-align:center">类、方法和变量修饰符</td>
<td style="text-align:center">new</td>
<td style="text-align:center">用来创建新实例对象</td>
</tr>
<tr>
<td style="text-align:center">类、方法和变量修饰符</td>
<td style="text-align:center">static</td>
<td style="text-align:center">表明具有静态属性</td>
</tr>
<tr>
<td style="text-align:center">类、方法和变量修饰符</td>
<td style="text-align:center">strictfp</td>
<td style="text-align:center">用来声明FP_strict（单精度或双精度浮点数）表达式遵循IEEE 754算术规范</td>
</tr>
<tr>
<td style="text-align:center">类、方法和变量修饰符</td>
<td style="text-align:center">synchronized</td>
<td style="text-align:center">表明一段代码需要同步执行</td>
</tr>
<tr>
<td style="text-align:center">类、方法和变量修饰符</td>
<td style="text-align:center">transient</td>
<td style="text-align:center">声明不用序列化的成员域</td>
</tr>
<tr>
<td style="text-align:center">类、方法和变量修饰符</td>
<td style="text-align:center">volatile</td>
<td style="text-align:center">表明两个或者多个变量必须同步地发生变化</td>
</tr>
<tr>
<td style="text-align:center">程序控制</td>
<td style="text-align:center">break</td>
<td style="text-align:center">提前跳出一个块</td>
</tr>
<tr>
<td style="text-align:center">程序控制</td>
<td style="text-align:center">continue</td>
<td style="text-align:center">回到一个块的开始处</td>
</tr>
<tr>
<td style="text-align:center">程序控制</td>
<td style="text-align:center">return</td>
<td style="text-align:center">从成员方法中返回数据</td>
</tr>
<tr>
<td style="text-align:center">程序控制</td>
<td style="text-align:center">do</td>
<td style="text-align:center">用在do-while循环结构中</td>
</tr>
<tr>
<td style="text-align:center">程序控制</td>
<td style="text-align:center">while</td>
<td style="text-align:center">用在循环结构中</td>
</tr>
<tr>
<td style="text-align:center">程序控制</td>
<td style="text-align:center">if</td>
<td style="text-align:center">条件语句的引导词</td>
</tr>
<tr>
<td style="text-align:center">程序控制</td>
<td style="text-align:center">else</td>
<td style="text-align:center">用在条件语句中，表明当条件不成立时的分支</td>
</tr>
<tr>
<td style="text-align:center">程序控制</td>
<td style="text-align:center">for</td>
<td style="text-align:center">一种循环结构的引导词</td>
</tr>
<tr>
<td style="text-align:center">程序控制</td>
<td style="text-align:center">instanceof</td>
<td style="text-align:center">用来测试一个对象是否是指定类型的实例对象</td>
</tr>
<tr>
<td style="text-align:center">程序控制</td>
<td style="text-align:center">switch</td>
<td style="text-align:center">分支语句结构的引导词</td>
</tr>
<tr>
<td style="text-align:center">程序控制</td>
<td style="text-align:center">case</td>
<td style="text-align:center">用在switch语句之中，表示其中的一个分支</td>
</tr>
<tr>
<td style="text-align:center">程序控制</td>
<td style="text-align:center">default</td>
<td style="text-align:center">默认，例如：用在switch语句中，表明一个默认的分支。Java8 中也作用于声明接口函数的默认实现</td>
</tr>
<tr>
<td style="text-align:center">错误处理</td>
<td style="text-align:center">try</td>
<td style="text-align:center">尝试一个可能抛出异常的程序块</td>
</tr>
<tr>
<td style="text-align:center">错误处理</td>
<td style="text-align:center">catch</td>
<td style="text-align:center">用在异常处理中，用来捕捉异常</td>
</tr>
<tr>
<td style="text-align:center">错误处理</td>
<td style="text-align:center">throw</td>
<td style="text-align:center">抛出一个异常</td>
</tr>
<tr>
<td style="text-align:center">错误处理</td>
<td style="text-align:center">throws</td>
<td style="text-align:center">声明在当前定义的成员方法中所有需要抛出的异常</td>
</tr>
<tr>
<td style="text-align:center">包相关</td>
<td style="text-align:center">import</td>
<td style="text-align:center">表明要访问指定的类或包</td>
</tr>
<tr>
<td style="text-align:center">包相关</td>
<td style="text-align:center">package</td>
<td style="text-align:center">包</td>
</tr>
<tr>
<td style="text-align:center">基本类型</td>
<td style="text-align:center">boolean</td>
<td style="text-align:center">基本数据类型之一，声明布尔类型的关键字</td>
</tr>
<tr>
<td style="text-align:center">基本类型</td>
<td style="text-align:center">byte</td>
<td style="text-align:center">基本数据类型之一，字节类型</td>
</tr>
<tr>
<td style="text-align:center">基本类型</td>
<td style="text-align:center">char</td>
<td style="text-align:center">基本数据类型之一，字符类型</td>
</tr>
<tr>
<td style="text-align:center">基本类型</td>
<td style="text-align:center">double</td>
<td style="text-align:center">基本数据类型之一，双精度浮点数类型</td>
</tr>
<tr>
<td style="text-align:center">基本类型</td>
<td style="text-align:center">float</td>
<td style="text-align:center">基本数据类型之一，单精度浮点数类型</td>
</tr>
<tr>
<td style="text-align:center">基本类型</td>
<td style="text-align:center">int</td>
<td style="text-align:center">基本数据类型之一，整数类型</td>
</tr>
<tr>
<td style="text-align:center">基本类型</td>
<td style="text-align:center">long</td>
<td style="text-align:center">基本数据类型之一，长整数类型</td>
</tr>
<tr>
<td style="text-align:center">基本类型</td>
<td style="text-align:center">short</td>
<td style="text-align:center">基本数据类型之一,短整数类型</td>
</tr>
<tr>
<td style="text-align:center">基本类型</td>
<td style="text-align:center">null</td>
<td style="text-align:center">空，表示无值，不能将null赋给原始类型（byte、short、int、long、char、float、double、boolean）变量</td>
</tr>
<tr>
<td style="text-align:center">基本类型</td>
<td style="text-align:center">true</td>
<td style="text-align:center">真，boolean变量的两个合法值中的一个</td>
</tr>
<tr>
<td style="text-align:center">基本类型</td>
<td style="text-align:center">false</td>
<td style="text-align:center">假，boolean变量的两个合法值之一</td>
</tr>
<tr>
<td style="text-align:center">变量引用</td>
<td style="text-align:center">super</td>
<td style="text-align:center">表明当前对象的父类型的引用或者父类型的构造方法</td>
</tr>
<tr>
<td style="text-align:center">变量引用</td>
<td style="text-align:center">this</td>
<td style="text-align:center">指向当前实例对象的引用，用于引用当前实例</td>
</tr>
<tr>
<td style="text-align:center">变量引用</td>
<td style="text-align:center">void</td>
<td style="text-align:center">声明当前成员方法没有返回值，void可以用作方法的返回类型，以指示该方法不返回值</td>
</tr>
<tr>
<td style="text-align:center">保留字</td>
<td style="text-align:center">goto</td>
<td style="text-align:center">保留关键字，没有具体含义</td>
</tr>
<tr>
<td style="text-align:center">保留字</td>
<td style="text-align:center">const</td>
<td style="text-align:center">保留关键字，没有具体含义，是一个类型修饰符，使用const声明的对象不能更新</td>
</tr>
</tbody>
</table>
<h2 id="标识符命名规则" tabindex="-1"><a class="header-anchor" href="#标识符命名规则" aria-hidden="true">#</a> 标识符命名规则</h2>
<p>标识符只能由数字、字母(包括中文)、下划线_、美元符$组成,不能含有其他符号，标识符不能以数字开头、<strong>关键字</strong>不能做标识符、标识符严格区分大小写。</p>
<p>虽然java中的标识符严格区分大小写，但是对于类名来说，如果一个java源文件中同时出现了A类和a类，那么谁在前就生成谁，类名最好不要“<mark>相同</mark>”。</p>
<p>标识符理论上没有长度限制。</p>
<h2 id="标识符命名规范" tabindex="-1"><a class="header-anchor" href="#标识符命名规范" aria-hidden="true">#</a> 标识符命名规范</h2>
<ol>
<li>
<p>见名知意（标识符在起名的时候，最好一看这个单词就知道啥意思）。</p>
</li>
<li>
<p>遵循驼峰命名法，驼峰有利于单词与单词之间很好的分隔，例如<code v-pre>HelloWorld</code>，<code v-pre>IdentifierTest</code>。</p>
</li>
<li>
<p>类名和接口名的特殊要求：</p>
<p>类名和接口名首字母大写，后面每个单词首字母小写。
<code v-pre>StudentTest</code>，<code v-pre>UserTest</code></p>
</li>
<li>
<p>变量名，方法名的特殊要求：</p>
<p>变量名和方法名首字母小写，后面每个单词首字母大写。
<code v-pre>moveAll</code>
所有常量名:全部大写,单词与单词之间采用下划线衔接。
<code v-pre>USER_AGE</code></p>
</li>
</ol>
<p>更多详情可参考阿里的Java开发手册</p>
<p><a href="https://github.com/alibaba/p3c" target="_blank" rel="noopener noreferrer">alibaba/p3c: Alibaba Java Coding Guidelines pmd implements and IDE plugin (github.com)<ExternalLinkIcon/></a></p>
<h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h2>
<p>与大多数程序设计语言一样，Java中的注释也不会出现在可执行程序中。因此，可以在源程序中根据需要添加任意多的注释，而不必担心可执行代码会膨胀。在Java中，有3种标记注释的方式。最常用的方式是使用<code v-pre>//</code>，其注释内容从<code v-pre>//</code>开始到本行结尾。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloWorld</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> args<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 你好，世界</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Hello World"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当需要长篇的注释时，既可以在每行的注释前面标记<code v-pre>//</code>，也可以使用<code v-pre>/*</code>和<code v-pre>*/</code>将一段比较长的注释括起来。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloWorld</span> <span class="token punctuation">{</span>
    <span class="token comment">/*
    世界很大，我想去看看
    */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> args<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 你好，世界</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Hello World"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，第3种注释可以用来自动地生成文档。这种注释以<code v-pre>/**</code>开始，以<code v-pre>*/</code>结束。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloWorld</span> <span class="token punctuation">{</span>
    <span class="token comment">/*
    世界很大，我想去看看
    */</span>
    
    <span class="token doc-comment comment">/**
    我的第一个Java程序
    @version 1.0
    @author 空~
    */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> args<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 你好，世界</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Hello World"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>在Java中，<code v-pre>/* */</code>注释不能嵌套。也就是说，不能简单地把代码用<code v-pre>/*</code>和<code v-pre>*/</code>括起来作为注释，因为这段代码本身可能也包含一个<code v-pre>*/</code>。</p>
</div>
</div></template>
