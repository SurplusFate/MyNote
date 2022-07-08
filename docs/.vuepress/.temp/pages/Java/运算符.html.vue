<template><div><h1 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h1>
<p>运算符是一种特殊的符号，用以表示数据的运算、赋值和比较等。Java语言使用运算符将一个或多个操作数连缀成执行性语句，用以实现特定功能。</p>
<h2 id="算术运算符" tabindex="-1"><a class="header-anchor" href="#算术运算符" aria-hidden="true">#</a> 算术运算符</h2>
<p>算术运算符用在数学表达式中，它们的作用和在数学中的作用一样。</p>
<p>下表列出了所有的算术运算符。假设整数变量A的值为10，变量B的值为20：</p>
<table>
<thead>
<tr>
<th style="text-align:center">符号</th>
<th style="text-align:center">描述</th>
<th style="text-align:center">示例</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">+</td>
<td style="text-align:center">加法 - 相加运算符两侧的值</td>
<td style="text-align:center">A + B = 30</td>
</tr>
<tr>
<td style="text-align:center">-</td>
<td style="text-align:center">减法 -  左操作数减去右操作数</td>
<td style="text-align:center">A – B  = 10</td>
</tr>
<tr>
<td style="text-align:center">*</td>
<td style="text-align:center">乘法 -  相乘操作符两侧的值</td>
<td style="text-align:center">A * B  = 200</td>
</tr>
<tr>
<td style="text-align:center">/</td>
<td style="text-align:center">除法 -  左操作数除以右操作数</td>
<td style="text-align:center">B / A  = 2</td>
</tr>
<tr>
<td style="text-align:center">％</td>
<td style="text-align:center">取模 -  左操作数除以右操作数的余数</td>
<td style="text-align:center">B % A  = 0</td>
</tr>
<tr>
<td style="text-align:center">++</td>
<td style="text-align:center">自增 -  操作数的值增加1</td>
<td style="text-align:center">B++ 或  ++B = 21</td>
</tr>
<tr>
<td style="text-align:center">--</td>
<td style="text-align:center">自减 -  操作数的值减少1</td>
<td style="text-align:center">B-- 或  --B = 19</td>
</tr>
</tbody>
</table>
<p><strong>加法运算符</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">double</span> a <span class="token operator">=</span> <span class="token number">5.2</span><span class="token punctuation">;</span>
<span class="token keyword">double</span> b <span class="token operator">=</span> <span class="token number">3.1</span><span class="token punctuation">;</span>
<span class="token keyword">double</span> sum <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token comment">// 8.3</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除此之外，+还可以作为字符串的连接运算符。</p>
<p><strong>减法运算符</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">double</span> a <span class="token operator">=</span> <span class="token number">5.2</span><span class="token punctuation">;</span>
<span class="token keyword">double</span> b <span class="token operator">=</span> <span class="token number">3.1</span><span class="token punctuation">;</span>
<span class="token keyword">double</span> sub <span class="token operator">=</span> a <span class="token operator">-</span> b<span class="token punctuation">;</span>
<span class="token comment">// 2.1</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sub<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>乘法运算符</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">double</span> a <span class="token operator">=</span> <span class="token number">5.2</span><span class="token punctuation">;</span>
<span class="token keyword">double</span> b <span class="token operator">=</span> <span class="token number">3.1</span><span class="token punctuation">;</span>
<span class="token keyword">double</span> mul <span class="token operator">=</span> a <span class="token operator">*</span> b<span class="token punctuation">;</span>
<span class="token comment">// 16.12</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>mul<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>除法运算符</strong></p>
<p>除法运算符有些特殊，如果除法运算符的两个操作数都是整数类型，则计算结果也是整数，就是将自然除法的结果截断取整，例如19/4的结果是4，而不是5。如果除法运算符的两个运算数都是整数类型，则除数不可以是0，否则将引发除以零异常。</p>
<p>但如果除法运算符的两个操作数有1个是浮点数，或者2个都是浮点数，则计算结果也是浮点数，这个结果就是自然除法的结果。而且此时允许除数是0，或者0.0，得到结果是正无穷大或负无穷大。看下面代码。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DivTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">double</span> a <span class="token operator">=</span> <span class="token number">5.2</span><span class="token punctuation">;</span>
        <span class="token keyword">double</span> b <span class="token operator">=</span> <span class="token number">3.1</span><span class="token punctuation">;</span>
        <span class="token keyword">double</span> div <span class="token operator">=</span> a <span class="token operator">/</span> b<span class="token punctuation">;</span>
        <span class="token comment">//div的值将是1.6774193548387097System.out.printIn(div);</span>
        <span class="token comment">//输出正无穷大:Infinity</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"5除以0.0的结果是:"</span> <span class="token operator">+</span> <span class="token number">5</span> <span class="token operator">/</span> <span class="token number">0.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//输出负无穷大:-Infinity</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"-5除以0.0的结果是:"</span> <span class="token operator">+</span> <span class="token operator">-</span><span class="token number">5</span> <span class="token operator">/</span> <span class="token number">0.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//下面代码将出现异常</span>
        <span class="token comment">//java.lang.ArithmeticException: / by zero</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"-5除以0的结果是:"</span> <span class="token operator">+</span> <span class="token operator">-</span><span class="token number">5</span> <span class="token operator">/</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>求余运算符</strong></p>
<p>求余运算的结果不一定总是整数，它的计算结果是使用第一个操作数除以第二个操作数，得到一个整除的结果后剩下的值就是余数。</p>
<p>由于求余运算也需要进行除法运算，因此如果求余运算的两个操作数都是整数类型，则求余运算的第二个运算数不能是0，否则将引发除以零异常。</p>
<p>如果求余运算的两个操作数中有1个或者2个都是浮点数，则允许第二个操作数是0或0.0，只是求余运算的结果是非数：<mark>NaN</mark>。</p>
<p>0或0.0对零以外的任何数求余都将得到0或0.0。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ModTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">double</span> a <span class="token operator">=</span> <span class="token number">5.2</span><span class="token punctuation">;</span>
        <span class="token keyword">double</span> b <span class="token operator">=</span> <span class="token number">3.1</span><span class="token punctuation">;</span>
        <span class="token keyword">double</span> mod <span class="token operator">=</span> a <span class="token operator">%</span> b<span class="token punctuation">;</span>
        <span class="token comment">//mod的值为2.1</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>mod<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//输出非数︰NaN</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"5对0.0求余的结果是:"</span> <span class="token operator">+</span> <span class="token number">5</span> <span class="token operator">%</span> <span class="token number">0.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//输出非数︰NaN</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"-5.0对0求余的结果是:"</span> <span class="token operator">+</span> <span class="token operator">-</span><span class="token number">5.0</span> <span class="token operator">%</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//输出0</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"O对5.0求余的结果是:"</span> <span class="token operator">+</span> <span class="token number">0</span> <span class="token operator">%</span> <span class="token number">5.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//输出非数:NaN</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"O对0.0求余的结果是:"</span> <span class="token operator">+</span> <span class="token number">0</span> <span class="token operator">%</span> <span class="token number">0.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//下面代码将出现异常</span>
        <span class="token comment">//java.lang.ArithmeticException: / by zero</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"-5对0求余的结果是:"</span> <span class="token operator">+</span> <span class="token operator">-</span><span class="token number">5</span> <span class="token operator">%</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>自加</strong></p>
<p>这是个单目运算符，运算符既可以出现在操作数的左边，也可以出现在操作数的右边。但出现在左边和右边的效果是不一样的。如果把++放在左边，则先把操作数加1，然后才把操作数放入表达式中运算；如果把++放在右边，则先把操作数放入表达式中运算，然后才把操作数加1。看如下代码：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token comment">//让a先执行算术运算，然后自加</span>
<span class="token keyword">int</span> b <span class="token operator">=</span> a<span class="token operator">++</span> <span class="token operator">+</span> <span class="token number">6</span><span class="token punctuation">;</span>
<span class="token comment">//输出a的值为6，b的值为11</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">+</span> <span class="token string">"\n"</span> <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行完后，a的值为6，而b的值为11。当++在操作数右边时，先执行a+6的运算（此时a的值为5），然后对a加1。对比下面代码：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token comment">//让a先自加，然后执行算术运算</span>
<span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token operator">++</span>a <span class="token operator">+</span> <span class="token number">6</span><span class="token punctuation">;</span>
<span class="token comment">//输出a的值为6，b的值为12</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">+</span> <span class="token string">"\n"</span> <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>自减</strong></p>
<p>也是个单目运算符，用法与++基本相似，只是将操作数的值减1。</p>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>加和自减只能用于操作变量，不能用于操作数值直接量或常量。例如，5++、6--等写法都是错误的。</p>
</div>
<p>Java并没有提供其他更复杂的运算符，如果需要完成乘方、开方等运算，则可借助于<code v-pre>java.lang.Math</code>类的工具方法完成复杂的数学运算，见如下代码。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MathTest</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span>args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//定义变量a为3.2double a=3.2;</span>
        <span class="token comment">//求a的5次方，并将计算结果赋给b</span>
        <span class="token keyword">double</span> b<span class="token operator">=</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>a <span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//输出b的值</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//求a的平方根，并将结果赋给c</span>
        <span class="token keyword">double</span> c<span class="token operator">=</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//输出c的值</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//计算随机数，返回一个0~1之间的伪随机数</span>
        <span class="token keyword">double</span> d<span class="token operator">=</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//输出随机数d的值</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//求1.57的sin函数值:1.57被当成弧度数</span>
        <span class="token keyword">double</span> e<span class="token operator">=</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">sin</span><span class="token punctuation">(</span><span class="token number">1.57</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//输出接近1</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Math类下包含了丰富的静态方法，用于完成各种复杂的数学运算。</p>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>+除了可以作为数学的加法运算符之外，还可以作为字符串的连接运算符。-除了可以作为减法运算符之外，还可以作为求负的运算符。</p>
</div>
<p>-作为求负运算符的例子请看如下代码：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//定义double变量x，其值为-5.0</span>
<span class="token keyword">double</span> x<span class="token operator">=</span><span class="token operator">-</span><span class="token number">5.0</span><span class="token punctuation">;</span>
<span class="token comment">//将x求负，其值变成5.0</span>
× <span class="token operator">=</span> <span class="token operator">-</span>x<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关系运算符" tabindex="-1"><a class="header-anchor" href="#关系运算符" aria-hidden="true">#</a> 关系运算符</h2>
<p>比较运算符用于判断两个变量或常量的大小，比较运算的结果是一个布尔值（true或false）。</p>
<p>Java支持的比较运算符如下。</p>
<p>假设整数变量A的值为10，变量B的值为20：</p>
<p>==：检查如果两个操作数的值是否相等，如果相等则条件为真。（A == B）为假(非真)</p>
<p>!=：检查如果两个操作数的值是否相等，如果值不相等则条件为真。	(A != B) 为真</p>
<p>&gt;：检查左操作数的值是否大于右操作数的值，如果是那么条件为真。	（A&gt; B）非真</p>
<p>&lt;：检查左操作数的值是否小于右操作数的值，如果是那么条件为真。	（A &lt;B）为真</p>
<p>=：检查左操作数的值是否大于或等于右操作数的值，如果是那么条件为真。	（A&gt; = B）为假</p>
<p>&lt;=：检查左操作数的值是否小于或等于右操作数的值，如果是那么条件为真。	（A &lt;= B）为真</p>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>基本类型的变量、值不能和引用类型的变量、值使用<code v-pre>==</code>进行比较；<code v-pre>boolean</code>类型的变量、值不能与其他任意类型的变量、值使用<code v-pre>==</code>进行比较；如果两个引用类型之间没有父子继承关系，那么它们的变量也不能使用<code v-pre>==</code>进行比较。</p>
<p>!=：如果两个操作数都是引用类型，只有当两个引用变量引用的相同类的实例时才可以比较，只要两个引用指向的不是同一个对象就会返回true。</p>
</div>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ComparableOperatorTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//输出true</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"5是否大于4.0:"</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">></span> <span class="token number">4.0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//输出true</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"5和5.0是否相等: "</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">==</span> <span class="token number">5.0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//输出true</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"97和'a'是否相等:"</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">97</span> <span class="token operator">==</span> <span class="token char">'a'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//输出false</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"true和false是否相等:"</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token boolean">true</span> <span class="token operator">==</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//创建2个ComparableOperatorTest对象，分别赋给t1和t2两个引用</span>
        <span class="token class-name">ComparableOperatorTest</span> t1<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ComparableOperatorTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ComparableOperatorTest</span> t2<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ComparableOperatorTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//t1和t2是同一个类的两个实例的引用，所以可以比较</span>
        <span class="token comment">//但t1和t2引用不同的对象，所以返回false</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printIn</span><span class="token punctuation">(</span><span class="token string">"t1是否等于t2:"</span> <span class="token operator">+</span> <span class="token punctuation">(</span>t1 <span class="token operator">==</span> t2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//直接将t1的值赋给t3，即让t3指向t1指向的对象ComparableOperatorTest t3=t1;</span>
        <span class="token comment">//t1和t3指向同一个对象，所以返回true</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printIn</span><span class="token punctuation">(</span><span class="token string">"t1是否等于t3: "</span> <span class="token operator">+</span> <span class="token punctuation">(</span>t1 <span class="token operator">==</span> t3<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="位运算符" tabindex="-1"><a class="header-anchor" href="#位运算符" aria-hidden="true">#</a> 位运算符</h2>
<p>Java定义了位运算符，应用于整数类型<code v-pre>int</code>、长整型<code v-pre>long</code>、短整型<code v-pre>short</code>、字符型<code v-pre>char</code>和字节型<code v-pre>byte</code>等类型。</p>
<p>位运算符作用在所有的位上，并且按位运算。</p>
<p>假设整数变量 A 的值为 60 和变量 B 的值为 13：</p>
<p>＆：如果相对应位都是1，则结果为1，否则为0（A＆B）得到12，即0000 1100</p>
<p>|：如果相对应位都是 0，则结果为 0，否则为 1（A | B）得到61，即 0011 1101</p>
<p>^：如果相对应位值相同，则结果为0，否则为1（A ^ B）得到49，即 0011 0001</p>
<p>〜：按位取反运算符翻转操作数的每一位，即0变成1，1变成0。（〜A）得到-61，即1100 0011</p>
<p>&lt;&lt;：按位左移运算符。左操作数按位左移右操作数指定的位数。（A &lt;&lt; 2）得到240，即 1111 0000</p>
<p>&gt;&gt;：位右移运算符。左操作数按位右移右操作数指定的位数。（A &gt;&gt; 2）得到15，即 1111</p>
<p>&gt;&gt;&gt;：按位右移补零操作符。左操作数的值按右操作数指定的位数右移，移动得到的空位以零填充。（A&gt;&gt;&gt;2）得到15，即0000 1111</p>
<div class="language-JAVA ext-JAVA line-numbers-mode"><pre v-pre class="language-JAVA"><code>//将输出1
System.out.println(5 &amp; 9);
//将输出13
System.out.println(5 | 9);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5的二进制码是00000101（省略了前面的24个0），而9的二进制码是00001001（省略了前面的24个0）。运算过程如图所示。</p>
<p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202207061625483.jpeg" alt="img" loading="lazy"></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//将输出4</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token operator">~</span> <span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//将输出12</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printIn</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">^</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>程序执行~-5的结果是4，执行5 ^ 9的结果是12。</p>
<p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202207061629872.jpeg" alt="img" loading="lazy"></p>
<p>而5 ^ 9是00000101和00001001进行异或运算，运算过程如图所示。</p>
<p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202207061633886.jpeg" alt="img" loading="lazy"></p>
<p>左移运算符是将运算数的二进制码整体左移指定位数，左移后右边空出来的位以0填充。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//输出20</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">&lt;&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//输出-20</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">5</span> <span class="token operator">&lt;&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202207061634699.jpeg" alt="img" loading="lazy"></p>
<p>上面的32位数是-5的补码，左移两位后得到一个二进制补码，这个二进制补码的最高位是1，表明是一个负数，换算成十进制数就是-20。</p>
<p>Java的右移运算符有两个：&gt;&gt;和&gt;&gt;&gt;，对于&gt;&gt;运算符而言，把第一个操作数的二进制码右移指定位数后，左边空出来的位以原来的符号位填充，即如果第一个操作数原来是正数，则左边补0；如果第一个操作数是负数，则左边补1。&gt;&gt;&gt;是无符号右移运算符，它把第一个操作数的二进制码右移指定位数后，左边空出来的位总是以0填充。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//输出-2</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">5</span> <span class="token operator">>></span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//输出1073741822</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">5</span> <span class="token operator">>>></span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>-5右移2位后左边空出2位，空出来的2位以符号位补充。从图中可以看出，右移运算后得到的结果的正负与第一个操作数的正负相同。右移后的结果依然是一个负数，这是一个二进制补码，换算成十进制数就是-2。</p>
<p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202207061637679.jpeg" alt="img" loading="lazy"></p>
<p>-5无符号右移2位后左边空出2位，空出来的2位以0补充。从图中可以看出，无符号右移运算后的结果总是得到一个正数。图中下面的正数是1073741822（230-2）</p>
<p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202207061638713.jpeg" alt="img" loading="lazy"></p>
<p>必须指出的是，&gt;&gt;、&gt;&gt;&gt;和&lt;&lt;3个移位运算符并不适合所有的数值类型，它们只适合对byte、short、char、int和long等整数类型进行运算。除此之外，进行移位运算时还要遵循如下规则。</p>
<ol>
<li>
<p>对于低于int类型（如byte、short和char）的操作数总是先自动类型转换为int类型后再移位。</p>
</li>
<li>
<p>对于int类型的整数移位a&gt;&gt;b，当b&gt;32时，系统先用b对32求余（因为int类型只有32位），得到的结果才是真正移位的位数。例如，a&gt;&gt;33和a&gt;&gt;1的结果完全一样，而a&gt;&gt;32的结果和a相同。</p>
</li>
<li>
<p>对于long类型的整数移位a&gt;&gt;b，当b&gt;64时，总是先用b对64求余（因为long类型是64位），得到的结果才是真正移位的位数。</p>
</li>
</ol>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>当进行移位运算时，只要被移位的二进制码没有发生有效位的数字丢失（对于正数而言，通常指被移出的位全部都是0），不难发现左移n位就相当于乘以2的n次方，右移n位则是除以2的n次方。这里存在一个问题：左移时左边舍弃的位中数字通常是无效的，但右移时右边舍弃的位常常是有效的，因此左移和右移更容易看出这种运行效果。不仅如此，进行移位运算不会改变操作数本身，只是得到了一个新的运算结果，而原来的操作数本身是不会改变的。</p>
</div>
<h2 id="逻辑运算符" tabindex="-1"><a class="header-anchor" href="#逻辑运算符" aria-hidden="true">#</a> 逻辑运算符</h2>
<p>逻辑运算符用于操作两个布尔型的变量或常量。</p>
<p>假设布尔变量A为真，变量B为假</p>
<p>&amp;&amp;：短路与。当且仅当两个操作数都为真，条件才为真。	（A &amp;&amp; B）为假。</p>
<p>||：短路或。如果任何两个操作数任何一个为真，条件为真。	（A || B）为真。</p>
<p>!：非。用来反转操作数的逻辑状态。如果条件为true，则逻辑非运算符将得到false。	!(A &amp;&amp; B)为真。</p>
<p>&amp;：逻辑与。作用与&amp;&amp;相同，但不会短路。</p>
<p>|：逻辑或。作用与||相同，但不会短路。</p>
<p>^：异或，当两个操作数不同时才返回true，如果两个操作数相同则返回false。</p>
<p><strong>短路判断与逻辑判断的区别</strong></p>
<p>逻辑判断全部走一遍</p>
<p>短路判断有结果就停</p>
<p>第一个表达式执行结果为true，会发生短路或</p>
<p>第一个表达式执行结果为false，会发生短路与</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//直接对false求非运算，将返回true</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//5>3返回true，'6'转换为整数54，'6'>10返回true，求与后返回true</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">></span> <span class="token number">3</span> <span class="token operator">&amp;&amp;</span> <span class="token char">'6'</span> <span class="token operator">></span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//4>=5返回false，'c'>'a'返回true。求或后返回true</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">4</span> <span class="token operator">>=</span> <span class="token number">5</span> <span class="token operator">||</span> <span class="token char">'c'</span> <span class="token operator">></span> <span class="token char">'a'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//4>=5返回false，'c'>'a'返回true。两个不同的操作数求异或返回true</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">4</span> <span class="token operator">>=</span> <span class="token number">5</span> <span class="token operator">^</span> <span class="token char">'C'</span> <span class="token operator">></span> <span class="token char">'a'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于|与||的区别，参见如下代码</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//定义变量a,b，并为两个变量赋值int a=5;</span>
<span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token comment">//对a > 4和b++ >10求或运算</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">></span> <span class="token number">4</span> <span class="token operator">|</span> b<span class="token operator">++</span> <span class="token operator">></span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//输出a的值是5，b的值是11</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"a的值是:"</span> <span class="token operator">+</span>a<span class="token operator">+</span> <span class="token string">"b的值是:"</span> <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行上面程序，看到输出a的值为5，b的值为11，这表明b++&gt; 10表达式得到了计算，但实际上没有计算的必要，因为a &gt; 4已经返回了true，则整个表达式一定返回true。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//定义变量c,d，并为两个变量赋值int c=5;</span>
<span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> d <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token comment">//c >4 || d++ >10求或运算</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>c <span class="token operator">></span> <span class="token number">4</span> <span class="token operator">||</span> d<span class="token operator">++</span> <span class="token operator">></span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//输出c的值是5，d的值是10</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printIn</span><span class="token punctuation">(</span><span class="token string">"c的值是:"</span><span class="token operator">+</span>c<span class="token operator">+</span> <span class="token string">" d的值是:"</span><span class="token operator">+</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码执行的结果是：c的值为5，而d的值为10。</p>
<p>对于短路逻辑或||而言，如果第一个操作数返回true，|| 将不再对第二个操作数求值，直接返回true。</p>
<h2 id="赋值运算符" tabindex="-1"><a class="header-anchor" href="#赋值运算符" aria-hidden="true">#</a> 赋值运算符</h2>
<p>赋值运算符用于为变量指定变量值，与C类似，Java也使用=作为赋值运算符。通常，使用赋值运算符将一个常量值赋给变量。</p>
<p>=	简单的赋值运算符，将右操作数的值赋给左侧操作数	C = A + B将把A + B得到的值赋给C</p>
<p>+=	加和赋值操作符，它把左操作数和右操作数相加赋值给左操作数	C + = A等价于C = C(C的数据类型) + A</p>
<p>-=	减和赋值操作符，它把左操作数和右操作数相减赋值给左操作数	C - = A等价于C = C(C的数据类型) - A</p>
<p>*=	乘和赋值操作符，它把左操作数和右操作数相乘赋值给左操作数	C * = A等价于C = C(C的数据类型) * A</p>
<p>/=	除和赋值操作符，它把左操作数和右操作数相除赋值给左操作数	C / = A，C 与 A 同类型时等价于 C = C(C的数据类型) / A</p>
<p>％=	取模和赋值操作符，它把左操作数和右操作数取模后赋值给左操作数	C％= A等价于C = C(C的数据类型) ％ A</p>
<p>&lt;&lt;=	左移位赋值运算符	C &lt;&lt; = 2等价于C = C &lt;&lt; 2</p>
<p>&gt;&gt;=	右移位赋值运算符	C &gt;&gt; = 2等价于C = C &gt;&gt; 2</p>
<p>＆=	按位与赋值运算符	C＆= 2等价于C = C(C的数据类型)＆2</p>
<p>^=	按位异或赋值操作符	C ^ = 2等价于C = C(C的数据类型) ^ 2</p>
<p>|=	按位或赋值操作符	C | = 2等价于C = C(C的数据类型) | 2</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//为变量str赋值Java</span>
<span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token string">"Java"</span><span class="token punctuation">;</span>
<span class="token comment">//为变量pi赋值3.14</span>
<span class="token keyword">double</span> pi <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span>
<span class="token comment">//为变量visited赋值true</span>
<span class="token keyword">boolean</span> visited <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除此之外，也可使用赋值运算符将一个变量的值赋给另一个变量。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//将变量str的值赋给str2</span>
<span class="token class-name">String</span> str2<span class="token operator">=</span>str<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>赋值表达式是有值的，赋值表达式的值就是右边被赋的值。例如String str2=str表达式的值就是str。因此，赋值运算符支持连续赋值，通过使用多个赋值运算符，可以一次为多个变量赋值。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">int</span> a<span class="token punctuation">;</span> <span class="token keyword">int</span> b<span class="token punctuation">;</span> <span class="token keyword">int</span> c<span class="token punctuation">;</span>
<span class="token comment">//通过为a, b , c赋值，3个变量的值都是7</span>
a<span class="token operator">=</span>b<span class="token operator">=</span>c<span class="token operator">=</span><span class="token number">7</span><span class="token punctuation">;</span>
<span class="token comment">//输出3个变量的值</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printIn</span><span class="token punctuation">(</span>a <span class="token operator">+</span> <span class="token string">"\n"</span> <span class="token operator">+</span> b <span class="token operator">+</span> <span class="token string">"\n"</span> <span class="token operator">+</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>虽然Java支持这种一次为多个变量赋值的写法，但这种写法导致程序的可读性降低，因此不推荐这样写。</p>
</div>
<p>赋值运算符还可用于将表达式的值赋给变量。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">double</span> d1 <span class="token operator">=</span> <span class="token number">12.34</span><span class="token punctuation">;</span>
<span class="token comment">//将表达式的值赋给d2</span>
<span class="token keyword">double</span> d2 <span class="token operator">=</span> d1 <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token comment">//输出d2的值</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三目运算符" tabindex="-1"><a class="header-anchor" href="#三目运算符" aria-hidden="true">#</a> 三目运算符</h2>
<ol>
<li>
<p>语法格式:</p>
<p>布尔表达式 ? 表达式1 : 表达式2</p>
</li>
<li>
<p>执行原理:</p>
<p>如果布尔表达式结果为true，则执行表达式1</p>
<p>如果布尔表达式结果为false，则执行表达式2</p>
</li>
</ol>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">boolean</span> sex <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token keyword">char</span> c <span class="token operator">=</span> sex ？<span class="token char">'男'</span><span class="token operator">:</span><span class="token char">'女'</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sex<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 输出结果为女</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="instanceof-运算符" tabindex="-1"><a class="header-anchor" href="#instanceof-运算符" aria-hidden="true">#</a> <code v-pre>instanceof</code> 运算符</h2>
<p>该运算符用于操作对象实例，检查该对象是否是一个特定类型（类类型或接口类型）。</p>
<p><code v-pre>instanceof</code>运算符使用格式：</p>
<p>对象引用 <code v-pre>instanceof</code> 对象类型</p>
<p><code v-pre>instanceof</code>运算符的运算结果只能是：true或false。</p>
<p><code v-pre>instanceof</code>可以在运行阶段动态判断引用指向的对象的类型。</p>
<p>假如c是一个引用，c变量保存了内存地址指向堆中的对象。</p>
<p>假设：（c <code v-pre>instanceof</code> Cat）为true则表示：</p>
<p>c引用指向的堆内存中的java对象是一个Cat。</p>
<p>假设（c <code v-pre>instanceof</code>Cat）为false表示：</p>
<p>c引用指向的堆内存中的java对象不是一个Cat。</p>
<p>在任何时候对类型进行向下转型时都应该使用<code v-pre>instanceof</code>进行判断(java规范)。</p>
<h2 id="运算符的结合性和优先级" tabindex="-1"><a class="header-anchor" href="#运算符的结合性和优先级" aria-hidden="true">#</a> 运算符的结合性和优先级</h2>
<p>运算符有不同的优先级，所谓优先级就是在表达式运算中的运算顺序。</p>
<p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202207062105016.jpeg" alt="img" loading="lazy"></p>
<p>因为Java运算符存在这种优先级的关系，有时候能看到这种代码：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">int</span> a<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">;</span> <span class="token keyword">int</span> b<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">;</span> <span class="token keyword">int</span>
c <span class="token operator">=</span> a<span class="token operator">++</span> <span class="token operator">-</span> <span class="token operator">--</span>b <span class="token operator">*</span> <span class="token operator">++</span>a <span class="token operator">/</span> b<span class="token operator">--</span> <span class="token operator">>></span><span class="token number">2</span> <span class="token operator">%</span> a<span class="token operator">--</span><span class="token punctuation">;</span>
<span class="token comment">// c的值是多少？</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样的代码只能在考试中出现，源代码的可读性比代码运行效率更重要。</p>
<ol>
<li>不要把一个表达式写得过于复杂，如果一个表达式过于复杂，则把它分成几步来完成；</li>
<li>不要过多地依赖运算符的优先级来控制表达式的执行顺序，这样可读性太差，尽量使用()来控制表达式的执行顺序。</li>
</ol>
</div></template>
