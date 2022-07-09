<template><div><h1 id="第一个java程序" tabindex="-1"><a class="header-anchor" href="#第一个java程序" aria-hidden="true">#</a> 第一个java程序</h1>
<h2 id="编写" tabindex="-1"><a class="header-anchor" href="#编写" aria-hidden="true">#</a> 编写</h2>
<p>编辑Java源代码可以使用任何无格式的文本编辑器，在Windows操作系统上可使用记事本（NotePad）、EditPlus等程序。</p>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>编写Java程序不要使用写字板，更不可使用Word等文档编辑器。因为写字板、Word等工具是有格式的编辑器，当使用它们编辑一份文档时，这个文档中会包含一些隐藏的格式化字符，这些隐藏字符会导致程序无法正常编译、运行。</p>
</div>
<p>在记事本中新建一个文本文件，并在该文件中输入如下代码：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloWorld</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> args<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Hello World"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>必须注意的几个问题：</p>
<ol>
<li>Java程序严格区分大小写。</li>
<li>程序格式的标点符号必须是英文。</li>
<li>拼写不能有任何错误。</li>
<li>文件名必须和类名一致。</li>
<li>文件后缀必须是java</li>
</ol>
<p>win11显示文件后缀名方法：打开资源管理器、点击查看、显示、文件拓展名。</p>
<p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202206071628292.png" alt="image-20220602202526556" loading="lazy"></p>
<p>将上面文本文件保存为HelloWorld.java（必须是这个名字），该文件就是Java程序的源程序。</p>
<p>编写好Java程序的源代码后，接下来就应该编译该Java源文件来生成字节码了。</p>
<h2 id="编译" tabindex="-1"><a class="header-anchor" href="#编译" aria-hidden="true">#</a> 编译</h2>
<p>先进入源代码存放路径，然后在路径内输入<code v-pre>cmd</code>后回车直接定位到本路径，免去了频繁切换路径的麻烦。</p>
<p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202205162139161.png" alt="image-20220516213908114" loading="lazy"></p>
<p>在cmd中键入<code v-pre>javac HelloWorld.java</code>开始编译源码。</p>
<p>编译成功后<code v-pre>cmd</code>不会有任何提示。</p>
<p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202206071628252.png" alt="image-20220516213926925" loading="lazy"></p>
<p>在文件夹中会出现编译完成后的class文件。</p>
<p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202206071628843.png" alt="image-20220516214015803" loading="lazy"></p>
<h2 id="运行" tabindex="-1"><a class="header-anchor" href="#运行" aria-hidden="true">#</a> 运行</h2>
<p>接着在<code v-pre>cmd</code>中键入<code v-pre>java HelloWorld</code>回车运行class文件，将会得到我们的第一个java程序，只有一句话。</p>
<p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202205162140633.png" alt="image-20220516214036533" loading="lazy"></p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>新手常见错误：</p>
<ol>
<li>没有区分大小写，Java严格区分大小写。</li>
<li>单词拼错。</li>
<li>源码里面有错误的中文符号，java程序中的中文符号只允许出现在<code v-pre>String</code>类型中。</li>
<li>源代码文件名与公共类名字不同。</li>
<li>拓展名不对。</li>
</ol>
</div>
<p>运行已编译的程序时，Java虚拟机将从指定类中的main方法开始执行，因此为了代码能够执行，在类的源文件中必须包含一个main方法。当然，也可以将用户自定义的方法添加到类中，并且在main方法中调用它们。</p>
<div class="custom-container info"><p class="custom-container-title">相关信息</p>
<p>根据Java语言规范，main方法必须声明为public（Java语言规范是描述Java语言的官方文档。可以从网站：<a href="http://docs.oracle.com/javase/specs" target="_blank" rel="noopener noreferrer">http://docs.oracle.com/javase/specs<ExternalLinkIcon/></a> 上阅读或下载）。</p>
<p>不过，当main方法不是public时，有些版本的Java解释器也可以执行Java应用程序。有个程序员报告了这个bug。如果感兴趣的话，可以在网站：<a href="http://bugs.java.com/bugdatabase/index.jsp" target="_blank" rel="noopener noreferrer">http://bugs.java.com/bugdatabase/index.jsp<ExternalLinkIcon/></a> 上输入bug号码4252539查看。</p>
<p>这个bug被标明“关闭，不予修复。”Sun公司的工程师解释说：Java虚拟机规范（在 <a href="http://docs.oracle.com/javase/specs/jvms/se8/html" target="_blank" rel="noopener noreferrer">http://docs.oracle.com/javase/specs/jvms/se8/html<ExternalLinkIcon/></a> ）并没有要求main方法一定是public，并且“修复这个bug有可能带来其他的隐患”。</p>
<p>好在，这个问题最终得到了解决。在Java SE 1.4及以后的版本中强制main方法是public的。</p>
</div>
<h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h2>
<p>需要注意源代码中的括号<code v-pre>{ }</code>。在Java中，用大括号划分程序的各个部分（通常称为块），每个代码块都是一个单独的作用域。Java中任何方法的代码都用<code v-pre>{</code>开始，用<code v-pre>}</code>结束。</p>
<p>我们暂且不去理睬关键字static void，而仅把它们当作编译Java应用程序必要的部分就行了。现在需要记住：每个Java应用程序都必须有一个main方法，其声明格式如下所示：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ClassName</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> args<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// program statements</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Java程序是一种纯粹的面向对象的程序设计语言，因此Java程序必须以类（class）的形式存在，类（class）是Java程序的最小程序单位。</p>
<p>Java程序不允许可执行性语句、方法等成分独立存在，所有的程序部分都必须放在类定义里。上面的HelloWorld.java程序是一个简单的程序，但还不是最简单的Java程序，最简单的Java程序是只包含一个空类定义的程序。下面将编写一个最简单的Java程序。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是一个最简单的Java程序，这个程序定义了一个Test类，这个类里没有任何的类成分，是一个空类，但这个Java程序是绝对正确的，如果使用javac命令来编译这个程序，就知道这个程序可以通过编译，没有任何问题。</p>
<p>但如果使用java命令来运行上面的Test类，则会得到如下错误提示：</p>
<p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202206071628227.png" alt="image-20220516214052669" loading="lazy"></p>
<p>上面的错误提示仅仅表明：这个类不能被java命令解释执行，并不表示这个类是错误的。</p>
<p>Java解释器规定：如需某个类能被解释器直接解释执行，则这个类里必须包含main方法，而且main方法必须使用<code v-pre>public static void</code>来修饰，且main方法的形参必须是字符串数组类型（String[]args是字符串数组的形式）。</p>
<p>也就是说，main方法的写法几乎是固定的。Java解释器就从这个main方法开始解释执行，因此，main方法是Java程序的入口。至于main方法为何要采用这么“复杂”的写法，后面会有更详细的解释，现在只要把这个方法死记下来。</p>
<p>对于那些不包含main方法的类，也是有用的类。对于一个大型的Java程序而言，往往只需要一个入口，也就是只有一个类包含main方法，而其他类都是用于被main方法直接或间接调用的。</p>
</div></template>
