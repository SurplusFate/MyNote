<template><div><h1 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h1>
<p>Java是一种强类型语言。这就意味着必须为每一个变量声明一种类型。在Java中，一共有8种基本类型（primitive type），其中有4种整型、2种浮点类型、1种用于表示Unicode编码的字符单元的字符类型char（请参见论述char类型的章节）和1种用于表示真值的boolean类型。</p>
<h2 id="分类" tabindex="-1"><a class="header-anchor" href="#分类" aria-hidden="true">#</a> 分类</h2>
<p>Java语言支持的类型分为两类：基本类型（Primitive Type）和引用类型（Reference Type）。</p>
<ol>
<li>
<p>基本类型，四大类八小种：</p>
<p>整数型：整型用于表示没有小数部分的数值，它允许是负数。Java提供了4种整型：byte、short、int、long</p>
<p>浮点型：浮点类型用于表示有小数部分的数值。在Java中有两种浮点类型：float、double</p>
<p>布尔型：boolean（布尔）类型有两个值：false和true，用来判定逻辑条件。整型值和布尔值之间不能进行相互转换。</p>
<p>字符型（char型）：char类型原本用于表示单个字符。不过，现在情况已经有所变化。如今，有些Unicode字符可以用一个char值描述，另外一些Unicode字符则需要两个char值。</p>
</li>
</ol>
<table>
<thead>
<tr>
<th>类型名称</th>
<th>关键字</th>
<th>占用内存</th>
<th>取值范围</th>
<th>缺省默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>字节型</td>
<td>byte</td>
<td>1  字节</td>
<td>-128~127</td>
<td>0</td>
</tr>
<tr>
<td>短整型</td>
<td>short</td>
<td>2  字节</td>
<td>-32768~32767</td>
<td>0</td>
</tr>
<tr>
<td>整型</td>
<td>int</td>
<td>4  字节</td>
<td>-2147483648~2147483647</td>
<td>0</td>
</tr>
<tr>
<td>长整型</td>
<td>long</td>
<td>8  字节</td>
<td>-9223372036854775808L~9223372036854775807L</td>
<td>0L</td>
</tr>
<tr>
<td>单精度浮点型</td>
<td>float</td>
<td>4  字节</td>
<td>+/-3.4E+38F（6~7 个有效位）</td>
<td>0.0f</td>
</tr>
<tr>
<td>双精度浮点型</td>
<td>double</td>
<td>8  字节</td>
<td>+/-1.8E+308  (15 个有效位）</td>
<td>0.0</td>
</tr>
<tr>
<td>字符型</td>
<td>char</td>
<td>2  字节</td>
<td>ISO  单一字符集</td>
<td>'\u0000'</td>
</tr>
<tr>
<td>布尔型</td>
<td>boolean</td>
<td>1  字节</td>
<td>true  或 false</td>
<td>false</td>
</tr>
</tbody>
</table>
<ol start="2">
<li>
<p>引用类型：
引用类型包括类、接口和数组类型，还有一种特殊的null类型。所谓引用数据类型就是对一个对象的引用，对象包括实例和数组两种。</p>
<p>空类型（null type）就是null值的类型，这种类型没有名称。因为null类型没有名称，所以不可能声明一个null类型的变量或者转换到null类型。空引用（null）是null类型变量唯一的值。空引用（null）可以转换为任何引用类型。</p>
<p>在实际开发中，程序员可以忽略null类型，假定null只是引用类型的一个特殊直接量。</p>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>空引用（null）只能被转换成引用类型，不能转换成基本类型，因此不要把一个null值赋给基本数据类型的变量。</p>
</div>
<p>前期最常见的引用类型：字符串类型：String</p>
</li>
</ol>
<h2 id="基本数据类型" tabindex="-1"><a class="header-anchor" href="#基本数据类型" aria-hidden="true">#</a> 基本数据类型</h2>
<h3 id="整数型" tabindex="-1"><a class="header-anchor" href="#整数型" aria-hidden="true">#</a> 整数型</h3>
<p>int是最常用的整数类型，因此在通常情况下，一个<strong>Java整数常量默认就是int类型</strong>。除此之外，有如下两种情形必须指出。</p>
<ol>
<li>
<p>如果直接将一个较小的整数常量（在byte或short类型的表数范围内）赋给一个byte或short变量，系统会自动把这个整数常量当成byte或者short类型来处理。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">byte</span> b <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>如果使用一个巨大的整数常量（超出了int类型的表数范围）时，Java不会自动把这个整数常量当成long类型来处理。如果希望系统把一个整数常量当成long类型来处理，应在这个整数常量后增加l或者L作为后缀。通常推荐使用L，因为字母l很容易跟数字1搞混。</p>
</li>
</ol>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 系统会自动把5转成byte类型</span>
        <span class="token keyword">byte</span> b <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
        <span class="token comment">// 系统不会自动把999999999999999999转成long类型</span>
        <span class="token comment">// 整数过大</span>
        <span class="token keyword">long</span> errorValue <span class="token operator">=</span> <span class="token number">999999999999999999</span><span class="token punctuation">;</span> 
        <span class="token comment">// 强制转换为long类型</span>
        <span class="token keyword">long</span> trueValue <span class="token operator">=</span> <span class="token number">99999999999999999L</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Java中整数常量有4种表示方式：二进制、八进制和十六进制，其中八进制的整数常量以0开头，十六进制的整数常量以0x或者0X开头，其中10-15分别以a-f（此处的a~f不区分大小写）来表示。</p>
<p>从Java 7开始，加上前缀0b或0B就可以写二进制数。例如，0b1001就是9。另外，同样是从Java 7开始，还可以为数字字面量加下划线，如用1_000_000（或0b1111_0100_0010_0100_0000）表示一百万。这些下划线只是为了让人更易读。Java编译器会去除这些下划线。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0b1001</span><span class="token punctuation">;</span>
<span class="token keyword">long</span> l <span class="token operator">=</span> <span class="token number">1_000_000</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>一个Java整数常量默认就是int类型，因此使用二进制形式定义整数时，二进制整数默认占32位，其中第32位是符号位；如果在二进制整数后添加l或L后缀，那么这个二进制整数默认占64位，其中第64位是符号位。</p>
<p>当定义32位的二进制整数时，最高位其实是符号位，当符号位是1时，表明它是一个负数，负数在计算机里是以补码的形式存在的，因此还需要换算成原码。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 8位的二进制数 105</span>
        <span class="token keyword">byte</span> b <span class="token operator">=</span> <span class="token number">0b01101001</span><span class="token punctuation">;</span>
        <span class="token comment">// 32位的二进制数 -2147483645</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0b10000000_00000000_00000000_00000011</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>所有数字在计算机底层都是以二进制形式存在的，原码是直接将一个数值换算成二进制数。但计算机以补码的形式保存所有的整数。补码的计算规则：正数的补码和原码完全相同，负数的补码是其反码加1；反码是对原码按位取反，只是最高位（符号位）保持不变。</p>
<p><a href="https://www.bilibili.com/video/BV1Cb411s7hT?share_source=copy_web" target="_blank" rel="noopener noreferrer">了解二进制<ExternalLinkIcon/></a></p>
<p><a href="https://www.bilibili.com/video/BV1As411673Q?share_source=copy_web" target="_blank" rel="noopener noreferrer">二进制、八进制、十六进制转换<ExternalLinkIcon/></a></p>
<p><a href="https://www.bilibili.com/video/BV1Y7411t7Fj?share_source=copy_web" target="_blank" rel="noopener noreferrer">反码、补码、原码<ExternalLinkIcon/></a></p>
</div>
<div class="custom-container info"><p class="custom-container-title">相关信息</p>
<p>在C和C++中，int和long等类型的大小与目标平台相关。在8086这样的16位处理器上整型数值占2字节；不过，在32位处理器（比如Pentium或SPARC）上，整型数值则为4字节。类似地，在32位处理器上long值为4字节，在64位处理器上则为8字节。由于存在这些差别，这对编写跨平台程序带来了很大难度。在Java中，所有的数值类型所占据的字节数量与平台无关。</p>
<p>注意，Java没有任何无符号（unsigned）形式的int、long、short或byte类型。</p>
</div>
<h3 id="字符型" tabindex="-1"><a class="header-anchor" href="#字符型" aria-hidden="true">#</a> 字符型</h3>
<p>字符型通常用于表示单个的字符，字符常量必须使用单引号（'）括起来。Java语言使用16位的Unicode字符集作为编码方式，而Unicode被设计成支持世界上所有书面语言的字符，包括中文字符，因此Java程序支持各种语言的字符。</p>
<p>字符型常量有如下3种表示形式。</p>
<ol>
<li>直接通过单个字符来指定字符型常量，例如'A'、'9'和'0'等。</li>
<li>通过转义字符表示特殊字符型常量，例如'\n'、'\t'等。</li>
<li>直接使用Unicode值来表示字符型常量，格式是'\uXXXX'，其中XXXX代表一个十六进制的整数。</li>
</ol>
<h3 id="浮点型" tabindex="-1"><a class="header-anchor" href="#浮点型" aria-hidden="true">#</a> 浮点型</h3>
<p>double表示这种类型的数值精度是float类型的两倍（有人称之为双精度数值）。绝大部分应用程序都采用double类型。在很多情况下，float类型的精度很难满足需求。实际上，只有很少的情况适合使用float类型，例如，需要单精度数据的库，或者需要存储大量数据。</p>
<p>float类型的数值有一个后缀F或f（例如，3.14F）。没有后缀F的浮点数值（如3.14）默认为double类型。当然，也可以在浮点数值后面添加后缀D或d（例如，3.14D）。</p>
<div class="custom-container info"><p class="custom-container-title">相关信息</p>
<p>可以使用十六进制表示浮点数值。例如，0.125=2⁻³可以表示成0x1.0p-3。在十六进制表示法中，使用p表示指数，而不是e。注意，尾数采用十六进制，指数采用十进制。指数的基数是2，而不是10。</p>
</div>
<p>所有的浮点数值计算都遵循IEEE 754规范。具体来说，下面是用于表示溢出和出错情况的三个特殊的浮点数值：</p>
<p>● 正无穷大</p>
<p>● 负无穷大</p>
<p>● NaN（不是一个数字）</p>
<p>例如，一个正整数除以0的结果为正无穷大。计算0/0或者负数的平方根结果为NaN。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>常量Double.POSITIVE_INFINITY、Double.NEGATIVE_INFINITY和Double.NaN（以及相应的Float类型的常量）分别表示这三个特殊的值，但在实际应用中很少遇到。特别要说明的是，不能这样检测一个特定值是否等于Double.NaN：</p>
<p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202206011201132.png" alt="image-20220601120133047" loading="lazy"></p>
<p>所有“非数值”的值都认为是不相同的。然而，可以使用Double.isNaN方法：</p>
<p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202206081910122.png" alt="image-20220608191044077" loading="lazy"></p>
</div>
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2>
<h3 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h3>
<p><strong>变量三要素</strong></p>
<ol>
<li>数据类型</li>
<li>变量名</li>
<li>直接量</li>
</ol>
<p>数据类型决定空间大小，变量名方便访问，值是变量保存的数据。</p>
<p><strong>变量的分类</strong></p>
<ol>
<li>
<p>局部变量</p>
<p>在方法体中声明的变量，局部变量没有默认值。</p>
</li>
<li>
<p>成员变量</p>
<p>在方法体外,类体内声明的变量，成员变量有默认值。</p>
</li>
<li>
<p>静态变量</p>
<p>有static关键字修饰的为静态变量</p>
</li>
</ol>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>变量的有效范围：作用域，出了大括号就不认识了。</p>
</div>
<p><strong>直接量</strong></p>
<p>在java语言中“数据”被称为字面量，如：10、1.23、true、false、'a'、&quot;abc&quot;。</p>
<p>“直接量”的分类：</p>
<p>int类型的直接量：在程序中直接给出的整型数值，可分为二进制、十进制、八进制和十六进制4种，其中二进制需要以0B或0b开头，八进制需要以0开头，十六进制需要以0x或0X开头。例如123、012（对应十进制的10）、0x12（对应十进制的18）等。</p>
<p>long类型的直接量：在整型数值后添加l或L后就变成了long类型的直接量。例如3L、0x12L （对应十进制的18L）。</p>
<p>float类型的直接量：在一个浮点数后添加f或F就变成了float类型的直接量，这个浮点数可以是标准小数形式，也可以是科学计数法形式。例如5.34F、3.14E5f。</p>
<p>double类型的直接量：直接给出一个标准小数形式或者科学计数法形式的浮点数就是double类型的直接量。例如5.34、3.14E5。</p>
<p>boolean类型的直接量：这个类型的直接量只有true和false。</p>
<p>char类型的直接量：char类型的直接量有3种形式，分别是用单引号括起来的字符、转义字符和Unicode值表示的字符。例如'a'、'\n'和'\u0061'。</p>
<p>String类型的直接量：一个用双引号括起来的字符序列就是String类型的直接量。</p>
<p>null类型的直接量：这个类型的直接量只有一个值，即null。</p>
<p>在上面的8种类型的直接量中，null类型是一种特殊类型，它只有一个值：null，而且这个直接量可以赋给任何引用类型的变量，用以表示这个引用类型变量中保存的地址为空，即还未指向任何有效对象。</p>
<p><strong>声明与赋值</strong></p>
<p>声明变量的语法非常简单，只要指定变量的类型和变量名即可，如下所示：</p>
<p><code v-pre>type varName</code></p>
<p>例如：<code v-pre>int i</code>；</p>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>同一个作用域中变量名不能重名。</p>
</div>
<p>变量还可能使用其他修饰符。但不管是哪种变量，定义变量至少需要指定变量类型和变量名两个部分。</p>
<p>定义变量时的变量类型可以是Java语言支持的所有类型。</p>
<p>可以先声明后赋值，也可以在声明的同时进行赋值：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">int</span> i<span class="token punctuation">;</span>
i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">long</span> l <span class="token operator">=</span> <span class="token number">40000000L</span><span class="token punctuation">;</span>
<span class="token keyword">short</span> s1<span class="token punctuation">,</span> s2<span class="token punctuation">,</span> s3<span class="token punctuation">;</span>
<span class="token keyword">byte</span> b1 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> b2 <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container info"><p class="custom-container-title">相关信息</p>
<ol>
<li>
<p>在任何情况下，整数型的“字面量”默认被当做int处理。</p>
</li>
<li>
<p>当这个整数型字面量没有超出byte、short、char取值范围，那么这个整数型字面量可以直接赋值给byte、short、char类型的变量。</p>
</li>
<li>
<p>整数可以直接赋值给char，会自动转换成char字符类型</p>
</li>
</ol>
</div>
<h3 id="基本数据类型转换规则" tabindex="-1"><a class="header-anchor" href="#基本数据类型转换规则" aria-hidden="true">#</a> 基本数据类型转换规则</h3>
<ol>
<li>
<p><code v-pre>boolean</code>不能参与类型转换,其它都行。</p>
</li>
<li>
<p>没有超出<code v-pre>byte、short、char</code>的范围，整数可以直接赋值。</p>
</li>
</ol>
<p><strong>自动转换类型</strong></p>
<p>当把一个表数范围小的数值或变量直接赋给另一个表数范围大的变量时，系统将可以进行自动类型转换。</p>
<p>就如同有两瓶水，当把小瓶里的水倒入大瓶中时不会有任何问题。</p>
<p><code v-pre>byte</code>&lt;<code v-pre>short(char)</code>&lt;<code v-pre>int</code>&lt;<code v-pre>long</code>&lt;<code v-pre>float</code>&lt;<code v-pre>double</code></p>
<p>当把任何基本类型的值和字符串值进行连接运算时，基本类型的值将自动类型转换为字符串类型。</p>
<p>如果希望把基本类型的值转换为对应的字符串时，可以把基本类型的值和一个空字符串进行连接。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 代码错误，5是一个整数，不能直接赋值给字符串</span>
        <span class="token comment">// String str1 = 5;</span>
        <span class="token comment">// 一个基本数据类型和字符串连接时，基本数据类型自动转换为字符串</span>
        <span class="token class-name">String</span> str2 <span class="token operator">=</span> <span class="token number">3.5f</span> <span class="token operator">+</span> <span class="token string">""</span><span class="token punctuation">;</span>
        <span class="token comment">// 结果：7Hello</span>
        <span class="token class-name">String</span> str3 <span class="token operator">=</span> <span class="token number">3</span> <span class="token operator">+</span> <span class="token number">4</span> <span class="token operator">+</span> <span class="token string">"Hello"</span><span class="token punctuation">;</span>
        <span class="token comment">// 结果：Hello34</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Hello"</span> <span class="token operator">+</span> <span class="token number">3</span> <span class="token operator">+</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面程序中有一个“3+4+&quot;Hello&quot;”表达式，这个表达式先执行“3+4”运算，这是执行两个整数之间的加法，得到7，然后进行“7+&quot;Hello&quot;”运算，此时会把7当成字符串进行处理，从而得到7Hello!。反之，对于“&quot;Hello&quot;+3+4”表达式，先进行“&quot;Hello&quot;+3”运算，得到一个Hello3字符串，再和4进行连接运算，4也被转换成字符串进行处理。</p>
<p><strong>强制转换类型</strong></p>
<p>当进行强制类型转换时，类似于把一个大瓶子里的水倒入一个小瓶子，如果大瓶子里的水不多还好，但如果大瓶子里的水很多，将会引起溢出，从而造成数据丢失。这种转换也被称为“缩小转换（Narrow Conversion）”。</p>
<p>需要加强制类型转换符。</p>
<p><code v-pre>byte</code>、<code v-pre>short</code>、<code v-pre>char</code>做混合运算的时候，各自先转换成int再运算。</p>
<p>多种数据在做混合运算的时候，最终的结果是类型&quot;最大容量&quot;对应的类型。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> iValue <span class="token operator">=</span> <span class="token number">233</span><span class="token punctuation">;</span>
        <span class="token comment">// 强制转换</span>
        <span class="token keyword">byte</span> bValue <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">)</span>iValue<span class="token punctuation">;</span>
        <span class="token comment">// 输出：-23</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">double</span> dValue <span class="token operator">=</span> <span class="token number">3.98</span><span class="token punctuation">;</span>
        <span class="token comment">// 强制转换</span>
        <span class="token keyword">int</span> tol <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>dValue<span class="token punctuation">;</span>
        <span class="token comment">// 输出：3</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>tol<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面程序中，把一个浮点数强制类型转换为整数时，Java将直接截断浮点数的小数部分。除此之外，上面程序还把233强制类型转换为byte类型整数，从而变成了-23，这就是典型的溢出。</p>
<p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202207061418751.jpeg" alt="img" loading="lazy"></p>
<p>32位int类型的233在内存中如图所示，强制类型转换为8位的byte类型，则需要截断前面的24位，只保留右边8位，最左边的1是一个符号位，此处表明这是一个负数，负数在计算机里是以补码形式存在的，因此还需要换算成原码。将补码减1得到反码形式，再将反码取反就可以得到原码。最后的二进制原码为10010111，这个byte类型的值为-(16+4+2+1)，也就是-23。</p>
</div></template>
