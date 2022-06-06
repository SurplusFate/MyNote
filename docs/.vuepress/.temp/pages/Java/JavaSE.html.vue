<template><div><h2 id="java-语言概述与开发环境" tabindex="-1"><a class="header-anchor" href="#java-语言概述与开发环境" aria-hidden="true">#</a> Java 语言概述与开发环境</h2>
<h3 id="java-语言发展简史" tabindex="-1"><a class="header-anchor" href="#java-语言发展简史" aria-hidden="true">#</a> Java 语言发展简史</h3>
<p>1990 年 Sun 公司成立了一个由 James Gosling 领导的“Green 计划”，准备为智能家电设计一套通用控制系统。Green 团队最初打算采用 C++语言进行编写，但发现 C++存在许多问题，于是便创造了一个种全新的语言:Oak（橡树）。</p>
<p>1992 年，Green 计划被转化成了“FirstPerson 有限公司”，一个 Sun 公司的全资子公司。FirstPerson 团队对建造一种高度交互的设备感兴趣，当时代华纳公司发布了一个关于电视机顶盒的征求提议书时（Request for proposal），FirstPerson 改变了他们的目标，作为对征求意见书的响应，提出了一个机顶盒平台的提议。但是有线电视业界觉得 FirstPerson 的平台给予用户过多的控制权，因此 FirstPerson 的投标败给了 SGI。与 3DO 公司的另外一笔关于机顶盒的交易也没有成功，由于他们的平台不能在电视工业产生任何效益，公司被并回 Sun 公司。</p>
<p>1994 年，互联网和浏览器的出现给 Oak 语言带来了生机，Gosling 对 Oak 进行了小规模调整，并用该语言写了一个小型的网页浏览器：WebRunner（后改名为 HotJava）。Sun 公司高层看了浏览器的效果并给予了高度的评价。当时 Oak 这个商标已经被别人注册，于是便将 Oak 改名为 Java。</p>
<p>1995 年 Sun 公司开源了 Java 语言，几个月后，Java 大火，有 10 多万人访问 Sun 公司的网页。</p>
<p>2009 年 Oracle 宣布将以每股 9.5 美元的价格收购 Sun，该交易的总价值约为 74 亿美元。 而 Oracle 通过收购 Sun 公司获得了两项软件资产 : Java 和 Solaris 。</p>
<h3 id="java-程序运行机制" tabindex="-1"><a class="header-anchor" href="#java-程序运行机制" aria-hidden="true">#</a> Java 程序运行机制</h3>
<p>Java 语言是一种特殊的高级语言，它既有解释型语言的特征，又有编译型语言的特征。Java 程序要先经过编译，后解释两个步骤。</p>
<h4 id="高级语言的运行机制" tabindex="-1"><a class="header-anchor" href="#高级语言的运行机制" aria-hidden="true">#</a> 高级语言的运行机制</h4>
<p>计算机语言按程序的执行方式可以分为编译型和解释型。</p>
<p><strong>编译型</strong></p>
<p>编译型语言是指使用专门的编译器，针对特定平台(操作系统)将某种高级语言源代码一次性&quot;翻译&quot;成可被该平台硬件执行的机器码(包括机器指令和操作数)，并包装成该平台所能识别的可执行性程序的格式，这个转换过程称为编译 (Compile) 。 编译生成的可执行性程序可以脱离开发环境，在特定的平台上独立运行。</p>
<p>因为编译型语言是一次性地编译成机器码，所以可以脱离开发环境独立运行，而且通常运行效率较高 ; 但因为编译型语言的程序被编译成特定平台上的机器码，因此编译生成的可执行性程序通常无法移植到其他平台上运行;如果需要移植，则必须将源代码复制到特定平台上，针对特定平台进行修改，至少也需要采用特定平台上的编译器重新编译。</p>
<p>现有的 C 、 C++、 Objective-C 、 Swift、 Kotlin 等高级语言都属于编译型语言。</p>
<p><strong>解释型</strong></p>
<p>解释型语言是指使用专门的解释器对源程序逐行解释成特定平台的机器码并立即执行的语言。解释型语言通常不会进行整体性的编译和链接处理，解释型语言相当于把编译型语言中的编译和解释过程混合到一起同时完成。可以认为: 每次执行解释型语言的程序都需要进行一次编译。</p>
<p>因此解释型语言的程序运行效率通常较低，而且不能脱离解释器独立运行。但解释型语言有一个优势 : 跨平台比较容易，只需提供特定平台的解释器即可，每个特定平台上的解释器负责将源程序解释成特定平台的机器指令即可。 解释型语言可以方便地实现源程序级的移植，但这是以牺牲程序执行效率为代价的 。</p>
<p>现有的 JavaScript、 Ruby 、 Python 等语言都属于解释型语言。</p>
<blockquote>
<p>编译型语言通常运行效率较高，但无法跨平台</p>
<p>解释型语言跨平台容易，但程序执行效率通常不如编译型语言</p>
</blockquote>
<h4 id="java-程序的运行机制和-jvm" tabindex="-1"><a class="header-anchor" href="#java-程序的运行机制和-jvm" aria-hidden="true">#</a> Java 程序的运行机制和 JVM</h4>
<p>Java 语言比较特殊，由 Java 语言编写的程序需要经过编译步骤，但这个编译步骤并不会生成特定平台的机器码，而是生成一种与平台无关的字节码(也就是*.class 文件) 。</p>
<p>当然，这种字节码不是可执行的，必须使用 Java 解释器来解释执行。 因此可以认为: Java 语言既是编译型语言，也是解释型语言。 或者说， Java 语言既不是纯粹的编译型语言，也不是纯粹的解释型语言 。 Java 程序的执行过程必须经过先编译、后解释两个步骤，如图所示 。</p>
<p><img src="https://fastly.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202205162119939.png" alt="java程序运行机制" loading="lazy"></p>
<p>Java 语言里负责解释执行字节码文件的是 Java 虚拟机，即 JVM (Java Virtual Machine) JVM 是可运行 Java 字节码文件的虚拟计算机。所有平台上的 JVM 向编译器提供相同的编程接口 ， 而编译器只需要面向虚拟机，生成虚拟机能理解的代码， 然后由虚拟机来解释执行。</p>
<p>在一些虚拟机的实现中，还会将虚拟机代码转换成特定系统的机器码执行，从而提高执行效率。</p>
<p>当使用 Java 编译器编译 Java 程序时，生成的是与平台无关的字节码，这些字节码不面向任何具体平台，只面向 JVM。</p>
<p>不同平台上的 JVM 都是不同的，但它们都提供了相同的接口 。 JVM 是 Java 程序跨平台的关键部分，只要为不同平台实现了相应的虚拟机，编译后的 Java 字节码就可以在该平台上运行。</p>
<p>显然，相同的宇节码程序需要在不同的平台上运行，这几乎是&quot;不可能的&quot;，只有通过中间的转换器才可以实现， JVM 就是这个转换器。 JVM 是一个抽象的计算机，和实际的计算机一样，它具有指令集并使用不同的存储区域。 它负责执行指令，还要管理数据、内存和寄存器。</p>
<blockquote>
<p>生活中常见的数据线接口有 type-c 的、USB 的、lightning 8pin 的（iPhone）等等。这些数据线向下的接口五花八门，用来适应不同的设备，但向上的接口就只有一种，可以使用同一个充电头充电或者连接同一台电脑。</p>
<p>将不同的设备比作不同的操作系统（Window、Mac、Linux），数据线就是一个 Java 的字节码程序，数据线向下的那些五花八门的接口就是转换器。</p>
<p>可以认为 JVM 分为向上和向下两个部分，所有平台上的 JVM 向上提供给 Java 字节码程序的接口完全相同，但向下适应不同平台的接口则互不相同 。</p>
</blockquote>
<p>Oracle 公司制定的 Java 虚拟机规范在技术上规定了 JVM 的统一标准，具体定义了 JVM 的如下细节:</p>
<ol>
<li>
<p>指令集</p>
</li>
<li>
<p>寄存器</p>
</li>
<li>
<p>类文件的格式</p>
</li>
<li>
<p>栈</p>
</li>
<li>
<p>垃圾回收堆</p>
</li>
<li>
<p>存储区</p>
</li>
</ol>
<p>Oracle 公司制定这些规范的目的是为了提供统一的标准，最终实现 Java 程序的平台无关性。</p>
<h3 id="开发-java-的准备" tabindex="-1"><a class="header-anchor" href="#开发-java-的准备" aria-hidden="true">#</a> 开发 Java 的准备</h3>
<p>在开发 Java 程序之前，必须先完成一些准备工作，也就是在计算机上安装并配置 Java 开发环境， 开发 Java 程序需要安装和配置 JDK。</p>
<h4 id="下载和安装-java-的-jdk" tabindex="-1"><a class="header-anchor" href="#下载和安装-java-的-jdk" aria-hidden="true">#</a> 下载和安装 Java 的 JDK</h4>
<p>JDK 的全称是 Java SE Development Kit，即 Java 标准版开发包，是 Oracle 提供的一套用于开发 Java 应用程序的开发包，它提供了编译、运行 Java 程序所需的各种工具和资源，包括 Java 编译器、 Java 运行时环境，以及常用的 Java 类库等。</p>
<p>这里又涉及一个概念: Java 运行时环境，它的全称是 Java Runtime Environment，因此也被称为 JRE ，它是运行 Java 程序的必需条件。</p>
<p>一些相关术语。</p>
<p><img src="https://fastly.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202205162133391.png" alt="image-20220516213345296" loading="lazy"></p>
<p>JRE 包令 JVM 。 JVM 是运 行 Java 程序的核心虚拟机，而运行 Java 程序不仅要核心虚拟机，还需要其他的类加载器、字节码校验器以及大量的基础类库。JRE 除了包含 JVM 之外，还包含运行 java 程序的其他环境支持。</p>
<p>一般而言，如果只是运行 Java 程序，可以只安装 JRE，无须安装 JDK。</p>
<blockquote>
<p>开发 Java 程序应该选择安装 JDK; JDK 包含了 JRE ，也可以运行 Java 程序 。</p>
<p>Oracle 网站上提供的就是 JRE 的下载，并不提供单独 JVM 的下载。</p>
</blockquote>
<p>Oracle 把 Java 分为 Java SE、 Java EE 和 Java ME 三个部分，当前只需要 Java SE ，因此下载标准的 JDK 即可。</p>
<p>JDK 8 官网链接：<a href="https://www.oracle.com/java/technologies/downloads/#java8-windows" target="_blank" rel="noopener noreferrer">Java Downloads | Oracle<ExternalLinkIcon/></a></p>
<p>阿里云盘分享「jdk-8u241-windows-x64.exe」<a href="https://www.aliyundrive.com/s/x6fkFiDsY2p" target="_blank" rel="noopener noreferrer">https://www.aliyundrive.com/s/x6fkFiDsY2p<ExternalLinkIcon/></a></p>
<blockquote>
<p>JDK 版本并不追求新，而是追求稳，如今的 JDK 更新非常快，高版本可能会出现适配性的问题。</p>
<p>JDK 8 是一个成熟稳定的版本。</p>
</blockquote>
<p><img src="https://fastly.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202205162135675.png" alt="image-20220516213514572" loading="lazy"></p>
<p>64 位 Windows 系统的 JDK 下载成功后，得到一个 jdk-8* windows-x64 * bin.exe 文件，这是一个 标准的 EXE 文件，可以通过双击该文件来运行安装程序。</p>
<p>开始安装后，第一个对话框询问用户是否准备开始安装 JDK，单击&quot;下一步&quot;按钮，进入如图所示的组件选择窗口 。</p>
<p><img src="https://fastly.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202205162136011.png" alt="image-20220516213606964" loading="lazy"></p>
<p>开发工具：这是 JDK 的核心， 包括编译 Java 程序必需的命令工具。实际上，这个选项里己经包含了运行 Java 程序的 JRE，这个 JRE 会安装在 JDK 安装目录的子目录里，这也是无须安装公共 JRE 的原因 。</p>
<p>源代码：安装这个选项将会安装 Java 所有核心类库的源代码。</p>
<blockquote>
<p>公共 JRE 是一个独立的 JRE 系统，会单独安装在系统的其他路径下，公共 JRE 会向 IE 等浏览器和系统中注册 Java 运行时环境。通过这种方式。系统中任何应用程序都可以使用公共 JRE。由于现在的网页上执行 Applet 的机会越来越少，而且完全可以使用 JDK 目录下的 JRE 来运行 Java 程序，因此没有必要安装公共 JRE。</p>
<p>较高版本的 JDK 安装程序已经没有公共 JRE 这个组件了。</p>
</blockquote>
<p>系统默认安装在 C:\Program Files\Java 路径下 ， 但不推荐安装在有空格的路径下，这样可能导致一些未知的问题。</p>
<p>安装完成后，可以在 JDK 安装路径下看到如下的文件路径。</p>
<ol>
<li>bin: 该路径下存放了 JDK 的各种工具命令，常用的 Javac 、 Java 等命令就放在该路径下。</li>
<li>conf: 该路径下存放了 JDK 的相关配置文件。</li>
<li>include: 存放一些平台特定的头文件。</li>
<li>jre：该路径下安装的就是运行Java程序所必需的JRE环境。</li>
<li>lib: 该路径下存放的是 JDK 工具的一些补充 JAR 包。 比如 SRC . ZIP 文件中保存了 Java 的源代码。</li>
<li>README 和 COPYRIGHT 等说明性文档。</li>
</ol>
<p>用于编译Java程序所使用的javac.exe命令同样也是使用Java编写的，这个类就是lib路径下tools.jar文件中sun\tools\javac路径下的Main类，JDK的bin路径下的javac.exe命令实际上仅仅是包装了这个Java类。不仅如此，bin路径下的绝大部分命令都是包装了tools.jar文件里的工具类。</p>
<blockquote>
<p>用于编译Java程序所使用的javac.exe命令同样也是使用Java编写的，这个类就是lib路径下tools.jar文件中sun\tools\javac路径下的Main类，JDK的bin路径下的javac.exe命令实际上仅仅是包装了这个Java类。不仅如此，bin路径下的绝大部分命令都是包装了tools.jar文件里的工具类。</p>
<p>不同版本安装完成后的文件数量会有差异。</p>
</blockquote>
<h4 id="设置-path-环境变量" tabindex="-1"><a class="header-anchor" href="#设置-path-环境变量" aria-hidden="true">#</a> 设置 PATH 环境变量</h4>
<p>编译和运行 Java 程序必须经过两个步骤</p>
<ol>
<li>将源文件编译成字节码</li>
<li>解释执行平台无关的字节码程序</li>
</ol>
<p>上面这两个步骤分别需要使用 java 和 javac 两个命令 启动 Windows 操作系统的命令行窗口(在&quot;开始&quot;菜单里运行 cmd 命令即可) ，在命令行窗口里依次输入 java 和 javac 命令，将看到如下输出:</p>
<p><img src="https://fastly.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202205162136062.png" alt="image-20220516213631017" loading="lazy"></p>
<p>这意味着还不能使用 java 和 javac 两个命令。这是因为：虽然我们已经在计算机里安装了JDK，而JDK的安装路径下也包含了java和javac两个命令，但计算机不知道到哪里去找这两个命令。</p>
<p>Windows操作系统根据Path环境变量来查找命令。Path环境变量的值是一系列路径，Windows操作系统将在这一系列的路径中依次查找命令，如果能找到这个命令，则该命令是可执行的；否则将出现“'xxx'不是内部或外部命令，也不是可运行的程序或批处理文件”的提示。</p>
<p>因为Windows操作系统不区分大小写，设置Path和PATH并没有区别。</p>
<p>右击桌面上“我的电脑”图标，出现右键菜单；单击“属性”菜单项，出现“系统属性”对话框；单击该对话框的“高级”Tab页。</p>
<p><img src="https://fastly.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202205162136324.png" alt="image-20220516213650274" loading="lazy"></p>
<p>单击“环境变量”按钮，将看到“环境变量”对话框，通过该对话框可以修改或添加环境变量。</p>
<p><img src="https://fastly.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202205162137007.png" alt="image-20220516213714941" loading="lazy"></p>
<p>“用户变量”部分用于设置当前用户的环境变量，下面的“系统变量”部分用于设置整个系统的环境变量。对于Windows系统而言，名为Path的系统环境变量已经存在。</p>
<p>在系统变量中新建一个环境变量，变量名为“JAVA_HOME”，变量值为 JDK 的安装路径。该变量的作用可以理解为：为 JDK 的安装路径取了个别名，这里名字不能乱取。</p>
<p><img src="https://fastly.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202205162137870.png" alt="image-20220516213735833" loading="lazy"></p>
<p>编辑path变量，在变量中将刚刚新建的变量添加进去。</p>
<p><img src="https://fastly.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202205162137415.png" alt="image-20220516213755354" loading="lazy"></p>
<p>也可以选择直接将“D:\jdk\bin”直接加入到path变量，但是不推荐，会为以后的学习造成麻烦（Maven）。</p>
<blockquote>
<p>用户变量和系统变量并没有太大的差别，只是用户变量只对当前用户有效，而系统变量对所有用户有效。</p>
<p>为了减少自己所做的修改对其他人的影响，故设置用户变量避免影响其他人。</p>
<p>对于当前用户而言，设置用户变量和系统变量的效果大致相同，只是系统变量的路径排在用户变量的路径之前。</p>
<p>这可能出现一种情况：如果Path系统变量的路径里包含了java命令，而PATH用户变量的路径里也包含了java命令，则优先执行Path系统变量路径里包含的java命令。</p>
</blockquote>
<p>保存所做的设置，之后新打开的所有控制台窗口都会有正确的路径。可以如下测试设置是否正确：打开一个终端窗口，键入：</p>
<p><img src="https://fastly.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202205162138590.png" alt="image-20220516213815552" loading="lazy"></p>
<p>然后按回车键。应该能看到显示以下信息：</p>
<p>然后按回车键。应该能看到显示以下信息：</p>
<p><img src="https://fastly.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202205162138668.png" alt="image-20220516213837442" loading="lazy"></p>
<p>如果直接在命令行窗口里输入javac，不跟任何选项和参数，系统将会输出大量提示信息，用以提示javac命令的用法，可以参考该提示信息来使用javac命令。</p>
<p>如果直接在命令行窗口里输入javac，不跟任何选项和参数，系统将会输出大量提示信息，用以提示javac命令的用法，可以参考该提示信息来使用javac命令。</p>
<h4 id="关于classpath" tabindex="-1"><a class="header-anchor" href="#关于classpath" aria-hidden="true">#</a> 关于CLASSPATH</h4>
<p>很多地方在设置java环境变量的时候都会介绍对CLASSPATH环境变量的设置，但都没有说明为什么。</p>
<p>实际上，如果使用1.5以上版本的JDK，完全可以不用设置CLASSPATH环境变量——正如上面编译、运行Java程序所见到的，即使不设置CLASSPATH环境变量，完全可以正常编译和运行Java程序。</p>
<p>当使用“java Java类名”命令来运行Java程序时， JRE到当前路径下去搜索Java类。但1.4以前版本的JDK都没有设计这个功能，这意味着即使当前路径已经包含了HelloWorld.class，并在当前路径下执行“java HelloWorld”，系统将一样提示找不到HelloWorld类。</p>
<p>如果使用1.4以前版本的JDK，则需要在CLASSPATH环境变量中添加一点（.），用以告诉JRE需要在当前路径下搜索Java类。除此之外，编译和运行Java程序还需要JDK的lib路径下dt.jar和tools.jar文件中的Java类，因此还需要把这两个文件添加到CLASSPATH环境变量里。</p>
<h2 id="第一个java程序" tabindex="-1"><a class="header-anchor" href="#第一个java程序" aria-hidden="true">#</a> 第一个java程序</h2>
<h3 id="编写" tabindex="-1"><a class="header-anchor" href="#编写" aria-hidden="true">#</a> 编写</h3>
<p>编辑Java源代码可以使用任何无格式的文本编辑器，在Windows操作系统上可使用记事本（NotePad）、EditPlus等程序。</p>
<blockquote>
<p>编写Java程序不要使用写字板，更不可使用Word等文档编辑器。因为写字板、Word等工具是有格式的编辑器，当使用它们编辑一份文档时，这个文档中会包含一些隐藏的格式化字符，这些隐藏字符会导致程序无法正常编译、运行。</p>
</blockquote>
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
<p><img src="https://fastly.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202206022025715.png" alt="image-20220602202526556" loading="lazy"></p>
<p>将上面文本文件保存为HelloWorld.java（必须是这个名字），该文件就是Java程序的源程序。</p>
<p>编写好Java程序的源代码后，接下来就应该编译该Java源文件来生成字节码了。</p>
<h3 id="编译" tabindex="-1"><a class="header-anchor" href="#编译" aria-hidden="true">#</a> 编译</h3>
<p>先进入源代码存放路径，然后在路径内输入<code v-pre>cmd</code>后回车直接定位到本路径，免去了频繁切换路径的麻烦。</p>
<p><img src="https://fastly.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202205162139161.png" alt="image-20220516213908114" loading="lazy"></p>
<p>在cmd中键入<code v-pre>javac HelloWorld.java</code>开始编译源码。</p>
<p>编译成功后<code v-pre>cmd</code>不会有任何提示。</p>
<p><img src="https://fastly.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202205162139014.png" alt="image-20220516213926925" loading="lazy"></p>
<p>在文件夹中会出现编译完成后的class文件。</p>
<p><img src="https://fastly.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202205162140836.png" alt="image-20220516214015803" loading="lazy"></p>
<h3 id="运行" tabindex="-1"><a class="header-anchor" href="#运行" aria-hidden="true">#</a> 运行</h3>
<p>接着在<code v-pre>cmd</code>中键入<code v-pre>java HelloWorld</code>回车运行class文件，将会得到我们的第一个java程序，只有一句话。</p>
<p><img src="https://fastly.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202205162140633.png" alt="image-20220516214036533" loading="lazy"></p>
<blockquote>
<p>新手常见错误：</p>
<ol>
<li>没有区分大小写，Java严格区分大小写。</li>
<li>单词拼错。</li>
<li>源码里面有错误的中文符号，java程序中的中文符号只允许出现在<code v-pre>String</code>类型中。</li>
<li>源代码文件名与公共类名字不同。</li>
<li>拓展名不对。</li>
</ol>
</blockquote>
<p>运行已编译的程序时，Java虚拟机将从指定类中的main方法开始执行，因此为了代码能够执行，在类的源文件中必须包含一个main方法。当然，也可以将用户自定义的方法添加到类中，并且在main方法中调用它们。</p>
<blockquote>
<p>根据Java语言规范，main方法必须声明为public（Java语言规范是描述Java语言的官方文档。可以从网站<a href="http://docs.oracle.com/javase/specs%E4%B8%8A%E9%98%85%E8%AF%BB%E6%88%96%E4%B8%8B%E8%BD%BD%EF%BC%89%E3%80%82" target="_blank" rel="noopener noreferrer">http://docs.oracle.com/javase/specs上阅读或下载）。<ExternalLinkIcon/></a></p>
<p>不过，当main方法不是public时，有些版本的Java解释器也可以执行Java应用程序。有个程序员报告了这个bug。如果感兴趣的话，可以在网站<a href="http://bugs.java.com/bugdatabase/index.jsp%E4%B8%8A%E8%BE%93%E5%85%A5bug%E5%8F%B7%E7%A0%814252539%E6%9F%A5%E7%9C%8B%E3%80%82%E8%BF%99%E4%B8%AAbug%E8%A2%AB%E6%A0%87%E6%98%8E%E2%80%9C%E5%85%B3%E9%97%AD%EF%BC%8C%E4%B8%8D%E4%BA%88%E4%BF%AE%E5%A4%8D%E3%80%82%E2%80%9DSun%E5%85%AC%E5%8F%B8%E7%9A%84%E5%B7%A5%E7%A8%8B%E5%B8%88%E8%A7%A3%E9%87%8A%E8%AF%B4%EF%BC%9AJava%E8%99%9A%E6%8B%9F%E6%9C%BA%E8%A7%84%E8%8C%83%EF%BC%88%E5%9C%A8http://docs.oracle.com/javase/specs/jvms/se8/html%EF%BC%89%E5%B9%B6%E6%B2%A1%E6%9C%89%E8%A6%81%E6%B1%82main%E6%96%B9%E6%B3%95%E4%B8%80%E5%AE%9A%E6%98%AFpublic%EF%BC%8C%E5%B9%B6%E4%B8%94%E2%80%9C%E4%BF%AE%E5%A4%8D%E8%BF%99%E4%B8%AAbug%E6%9C%89%E5%8F%AF%E8%83%BD%E5%B8%A6%E6%9D%A5%E5%85%B6%E4%BB%96%E7%9A%84%E9%9A%90%E6%82%A3%E2%80%9D%E3%80%82%E5%A5%BD%E5%9C%A8%EF%BC%8C%E8%BF%99%E4%B8%AA%E9%97%AE%E9%A2%98%E6%9C%80%E7%BB%88%E5%BE%97%E5%88%B0%E4%BA%86%E8%A7%A3%E5%86%B3%E3%80%82%E5%9C%A8Java" target="_blank" rel="noopener noreferrer">http://bugs.java.com/bugdatabase/index.jsp上输入bug号码4252539查看。这个bug被标明“关闭，不予修复。”Sun公司的工程师解释说：Java虚拟机规范（在http://docs.oracle.com/javase/specs/jvms/se8/html）并没有要求main方法一定是public，并且“修复这个bug有可能带来其他的隐患”。好在，这个问题最终得到了解决。在Java<ExternalLinkIcon/></a> SE 1.4及以后的版本中强制main方法是public的。</p>
</blockquote>
<h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h3>
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
<p><img src="https://fastly.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202205162140732.png" alt="image-20220516214052669" loading="lazy"></p>
<p>上面的错误提示仅仅表明：这个类不能被java命令解释执行，并不表示这个类是错误的。</p>
<p>Java解释器规定：如需某个类能被解释器直接解释执行，则这个类里必须包含main方法，而且main方法必须使用<code v-pre>public static void</code>来修饰，且main方法的形参必须是字符串数组类型（String[]args是字符串数组的形式）。</p>
<p>也就是说，main方法的写法几乎是固定的。Java解释器就从这个main方法开始解释执行，因此，main方法是Java程序的入口。至于main方法为何要采用这么“复杂”的写法，后面会有更详细的解释，现在只要把这个方法死记下来。</p>
<p>对于那些不包含main方法的类，也是有用的类。对于一个大型的Java程序而言，往往只需要一个入口，也就是只有一个类包含main方法，而其他类都是用于被main方法直接或间接调用的。</p>
<h2 id="java程序的基本规则" tabindex="-1"><a class="header-anchor" href="#java程序的基本规则" aria-hidden="true">#</a> Java程序的基本规则</h2>
<p>Java类名、方法名、变量名统称为“标识符”，凡是程序员自己有权利命名的单词都是标识符。
主方法的<code v-pre>main</code>也属于标识符,但这个标识符不能被修改,因为这个<code v-pre>main</code>是SUN固定死的。</p>
<h3 id="main方法的问题" tabindex="-1"><a class="header-anchor" href="#main方法的问题" aria-hidden="true">#</a> main方法的问题</h3>
<p>如果需要用Java解释器直接运行一个Java类，则这个Java类必须包含main方法，这个main方法必须使用public和static来修饰，必须使用void声明该方法的返回值，而且该方法的参数类型只能是一个字符串数组，而不能是其他形式的参数。</p>
<p>对于这个main方法而言，前面的public和static修饰符的位置可以互换，但其他部分则是固定的。定义main方法时，不要写成Main方法，如果不小心把方法名的首字母写成了大写，编译时不会出现任何问题，但运行该程序时将给出如下错误提示：</p>
<p><img src="https://fastly.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202205162234697.png" alt="image-20220516223404651" loading="lazy"></p>
<p>这个错误提示，提示Java解释器找不到main方法，因为Java解释器只会选择从main方法开始执行；对于Main方法，Java解释器会把该方法当成一个普通方法，而不是程序的入口。</p>
<h3 id="java关键字" tabindex="-1"><a class="header-anchor" href="#java关键字" aria-hidden="true">#</a> Java关键字</h3>
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
<h3 id="标识符命名规则" tabindex="-1"><a class="header-anchor" href="#标识符命名规则" aria-hidden="true">#</a> 标识符命名规则</h3>
<p>标识符只能由数字、字母(包括中文)、下划线_、美元符$组成,不能含有其他符号，标识符不能以数字开头、<strong>关键字</strong>不能做标识符、标识符严格区分大小写。</p>
<p>虽然java中的标识符严格区分大小写，但是对于类名来说，如果一个java源文件中同时出现了A类和a类，那么谁在前就生成谁，类名最好不要“相同”。</p>
<p>标识符理论上没有长度限制。</p>
<h3 id="标识符命名规范" tabindex="-1"><a class="header-anchor" href="#标识符命名规范" aria-hidden="true">#</a> 标识符命名规范</h3>
<p>见名知意(标识符在起名的时候，最好一看这个单词就知道啥意思)。</p>
<p>遵循驼峰命名法，驼峰有利于单词与单词之间很好的分隔，例如<code v-pre>HelloWorld</code>，<code v-pre>IdentifierTest</code>。</p>
<p>类名和接口名的特殊要求：</p>
<p>类名和接口名首字母大写,后面每个单词首字母小写。
<code v-pre>StudentTest</code>，<code v-pre>UserTest</code></p>
<p>变量名，方法名的特殊要求：</p>
<p>变量名和方法名首字母小写，后面每个单词首字母大写。
<code v-pre>moveAll</code>
所有常量名:全部大写,单词与单词之间采用下划线衔接。
<code v-pre>USER_AGE</code></p>
<p>更多详情可参考阿里的Java开发手册</p>
<p><a href="https://github.com/alibaba/p3c" target="_blank" rel="noopener noreferrer">alibaba/p3c: Alibaba Java Coding Guidelines pmd implements and IDE plugin (github.com)<ExternalLinkIcon/></a></p>
<h3 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h3>
<p>与大多数程序设计语言一样，Java中的注释也不会出现在可执行程序中。因此，可以在源程序中根据需要添加任意多的注释，而不必担心可执行代码会膨胀。在Java中，有3种标记注释的方式。最常用的方式是使用<code v-pre>//</code>，其注释内容从<code v-pre>//</code>开始到本行结尾。</p>
<p><img src="https://fastly.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202205162242654.png" alt="image-20220516224232617" loading="lazy"></p>
<p>当需要长篇的注释时，既可以在每行的注释前面标记<code v-pre>//</code>，也可以使用<code v-pre>/*</code>和<code v-pre>*/</code>将一段比较长的注释括起来。</p>
<p><img src="https://fastly.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202205162243619.png" alt="image-20220516224358585" loading="lazy"></p>
<p>最后，第3种注释可以用来自动地生成文档。这种注释以<code v-pre>/**</code>开始，以<code v-pre>*/</code>结束。</p>
<p><img src="https://fastly.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202205162247839.png" alt="image-20220516224708800" loading="lazy"></p>
<blockquote>
<p>在Java中，<code v-pre>/* */</code>注释不能嵌套。也就是说，不能简单地把代码用<code v-pre>/*</code>和<code v-pre>*/</code>括起来作为注释，因为这段代码本身可能也包含一个<code v-pre>*/</code>。</p>
</blockquote>
<h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2>
<p>Java是一种强类型语言。这就意味着必须为每一个变量声明一种类型。在Java中，一共有8种基本类型（primitive type），其中有4种整型、2种浮点类型、1种用于表示Unicode编码的字符单元的字符类型char（请参见论述char类型的章节）和1种用于表示真值的boolean类型。</p>
<h3 id="分类" tabindex="-1"><a class="header-anchor" href="#分类" aria-hidden="true">#</a> 分类</h3>
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
<blockquote>
<p>空引用（null）只能被转换成引用类型，不能转换成基本类型，因此不要把一个null值赋给基本数据类型的变量。</p>
</blockquote>
<p>前期最常见的引用类型：字符串类型：String</p>
</li>
</ol>
<h3 id="基本数据类型" tabindex="-1"><a class="header-anchor" href="#基本数据类型" aria-hidden="true">#</a> 基本数据类型</h3>
<h4 id="整数型" tabindex="-1"><a class="header-anchor" href="#整数型" aria-hidden="true">#</a> 整数型</h4>
<p>int是最常用的整数类型，因此在通常情况下，一个<strong>Java整数常量默认就是int类型</strong>。除此之外，有如下两种情形必须指出。</p>
<ol>
<li>
<p>如果直接将一个较小的整数常量（在byte或short类型的表数范围内）赋给一个byte或short变量，系统会自动把这个整数常量当成byte或者short类型来处理。</p>
<p><img src="https://fastly.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202206022122729.png" alt="image-20220602212207681" loading="lazy"></p>
</li>
<li>
<p>如果使用一个巨大的整数常量（超出了int类型的表数范围）时，Java不会自动把这个整数常量当成long类型来处理。如果希望系统把一个整数常量当成long类型来处理，应在这个整数常量后增加l或者L作为后缀。通常推荐使用L，因为字母l很容易跟数字1搞混。</p>
<p><img src="https://fastly.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202206022117748.png" alt="image-20220602211756700" loading="lazy"></p>
</li>
</ol>
<p>从Java 7开始，加上前缀0b或0B就可以写二进制数。例如，0b1001就是9。另外，同样是从Java 7开始，还可以为数字字面量加下划线，如用1_000_000（或0b1111_0100_0010_0100_0000）表示一百万。这些下划线只是为了让人更易读。Java编译器会去除这些下划线。</p>
<p><img src="https://fastly.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202206022120282.png" alt="image-20220602212022231" loading="lazy"></p>
<blockquote>
<p>在C和C++中，int和long等类型的大小与目标平台相关。在8086这样的16位处理器上整型数值占2字节；不过，在32位处理器（比如Pentium或SPARC）上，整型数值则为4字节。类似地，在32位处理器上long值为4字节，在64位处理器上则为8字节。由于存在这些差别，这对编写跨平台程序带来了很大难度。在Java中，所有的数值类型所占据的字节数量与平台无关。</p>
<p>注意，Java没有任何无符号（unsigned）形式的int、long、short或byte类型。</p>
</blockquote>
<h4 id="浮点型" tabindex="-1"><a class="header-anchor" href="#浮点型" aria-hidden="true">#</a> 浮点型</h4>
<p>double表示这种类型的数值精度是float类型的两倍（有人称之为双精度数值）。绝大部分应用程序都采用double类型。在很多情况下，float类型的精度很难满足需求。实际上，只有很少的情况适合使用float类型，例如，需要单精度数据的库，或者需要存储大量数据。</p>
<p>float类型的数值有一个后缀F或f（例如，3.14F）。没有后缀F的浮点数值（如3.14）默认为double类型。当然，也可以在浮点数值后面添加后缀D或d（例如，3.14D）。</p>
<blockquote>
<p>可以使用十六进制表示浮点数值。例如，0.125=2⁻³可以表示成0x1.0p-3。在十六进制表示法中，使用p表示指数，而不是e。注意，尾数采用十六进制，指数采用十进制。指数的基数是2，而不是10。</p>
</blockquote>
<p>所有的浮点数值计算都遵循IEEE 754规范。具体来说，下面是用于表示溢出和出错情况的三个特殊的浮点数值：</p>
<p>● 正无穷大</p>
<p>● 负无穷大</p>
<p>● NaN（不是一个数字）</p>
<p>例如，一个正整数除以0的结果为正无穷大。计算0/0或者负数的平方根结果为NaN。</p>
<blockquote>
<p>常量Double.POSITIVE_INFINITY、Double.NEGATIVE_INFINITY和Double.NaN（以及相应的Float类型的常量）分别表示这三个特殊的值，但在实际应用中很少遇到。特别要说明的是，不能这样检测一个特定值是否等于Double.NaN：</p>
<p><img src="https://fastly.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202206011201132.png" alt="image-20220601120133047" loading="lazy"></p>
<p>所有“非数值”的值都认为是不相同的。然而，可以使用Double.isNaN方法：</p>
</blockquote>
<h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3>
<p><strong>变量三要素</strong></p>
<ol>
<li>数据类型</li>
<li>变量名</li>
<li>值</li>
</ol>
<p>数据类型决定空间大小，变量名方便访问，值是变量保存的数据。</p>
<p><strong>变量的分类</strong></p>
<ol>
<li>局部变量
在方法体中声明的变量，局部变量没有默认值。</li>
<li>成员变量
在方法体外,类体内声明的变量，成员变量有默认值。</li>
<li>静态变量
有static关键字修饰的为静态变量</li>
</ol>
<blockquote>
<p>变量的有效范围：作用域，出了大括号就不认识了。</p>
</blockquote>
<p><strong>值</strong></p>
<p>在java语言中“数据”被称为字面量，如：10、1.23、true、false、'a'、&quot;abc&quot;。</p>
<p>“值”的分类：
整数型：1、2、3
浮点型：1.2、3、5
布尔型：true、false
字符型：'a'、'人'
字符串型：&quot;abc&quot;、中国&quot;</p>
<p><strong>声明与赋值</strong></p>
<p>声明变量的语法非常简单，只要指定变量的类型和变量名即可，如下所示：</p>
<p><code v-pre>type varName</code></p>
<p>例如：<code v-pre>int i</code>；</p>
<blockquote>
<p>同一个作用域中变量名不能重名。</p>
</blockquote>
<p>变量还可能使用其他修饰符。但不管是哪种变量，定义变量至少需要指定变量类型和变量名两个部分。定义变量时的变量类型可以是Java语言支持的所有类型。</p>
<p>可以先声明后赋值，也可以在声明的同时进行赋值：</p>
<p><img src="https://fastly.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202206022113187.png" alt="image-20220602211355119" loading="lazy"></p>
<ol>
<li>
<p>注意事项</p>
<p>在任何情况下，整数型的“字面量”默认被当做int处理。</p>
<p>当这个整数型字面量没有超出byte、short、char取值范围，那么这个整数型字面量可以直接赋值给byte、short、char类型的变量。</p>
<p>整数可以直接赋值给char，会自动转换成char字符类型</p>
<p>byte、short、char混合运算
byte、short、char做混合运算的时候,各自先转换成int再运算</p>
</li>
</ol>
<p>多种数据类型做混合运算</p>
<p>​		多种数据在做混合运算的时候，最终的结果是类型“最大容量”对应的类型，byte+short+char 例外</p>
<p>基本数据类型转换规则</p>
<p>​		boolean不能参与类型转换,其它都行</p>
<p>​		没有超出byte、short、char 的范围，整数可以直接赋值</p>
<p>自动转换类型
小转大
byte&lt;short(char)&lt;int&lt;long&lt;float&lt;double
强制转换类型
大转小 需要加强制类型转换符</p>
<p>byte,short,char做混合运算的时候,各自先转换成int再运算</p>
<p>多种数据在做混合运算的时候,最终的结果是类型&quot;最大容量&quot;对应的类型</p>
<p>运算符
算术运算符
算术运算符用在数学表达式中，它们的作用和在数学中的作用一样。下表列出了所有的算术运算符。假设整数变量A的值为10，变量B的值为20：
+	加法 - 相加运算符两侧的值	A + B等于30
-	减法 - 左操作数减去右操作数	A – B等于-10
*	乘法 - 相乘操作符两侧的值	A * B等于200
/	除法 - 左操作数除以右操作数	B / A等于2
％	取模 - 左操作数除以右操作数的余数	B%A等于0
++	自增 - 操作数的值增加1	B++ 或 ++B 等于 21
--	自减 - 操作数的值减少1	B-- 或 --B 等于 19
“+”
加法运算
字符串连接运算
自增自减运算符
++出现在变量后，先赋值再自加
++出现在变量前，先自加再赋值
关系运算符
假设整数变量A的值为10，变量B的值为20：
==	检查如果两个操作数的值是否相等，如果相等则条件为真。	（A == B）为假(非真)。
!=	检查如果两个操作数的值是否相等，如果值不相等则条件为真。	(A != B) 为真。
&gt; ​	检查左操作数的值是否大于右操作数的值，如果是那么条件为真。	（A&gt; B）非真。
&lt; 	检查左操作数的值是否小于右操作数的值，如果是那么条件为真。	（A &lt;B）为真。
&gt; =	检查左操作数的值是否大于或等于右操作数的值，如果是那么条件为真。	（A&gt; = B）为假。
&lt;=	检查左操作数的值是否小于或等于右操作数的值，如果是那么条件为真。	（A &lt;= B）为真。
位运算符
位运算符作用在所有的位上，并且按位运算。
假设整数变量 A 的值为 60 和变量 B 的值为 13：
＆	如果相对应位都是1，则结果为1，否则为0	（A＆B），得到12，即0000 1100
|	如果相对应位都是 0，则结果为 0，否则为 1	（A | B）得到61，即 0011 1101
^	如果相对应位值相同，则结果为0，否则为1	（A ^ B）得到49，即 0011 0001
〜	按位取反运算符翻转操作数的每一位，即0变成1，1变成0。	（〜A）得到-61，即1100 0011
&lt;&lt; 	按位左移运算符。左操作数按位左移右操作数指定的位数。	A &lt;&lt; 2得到240，即 1111 0000
&gt;
&gt;&gt; ​	按位右移运算符。左操作数按位右移右操作数指定的位数。	A &gt;&gt; 2得到15即 1111
&gt;&gt; ​	按位右移补零操作符。左操作数的值按右操作数指定的位数右移，移动得到的空位以零填充。	A&gt;&gt;&gt;2得到15即0000 1111
Java定义了位运算符，应用于整数类型(int)，长整型(long)，短整型(short)，字符型(char)，和字节型(byte)等类型。
实例代码
Test.java
逻辑运算符
逻辑运算符要求两边的算子都是布尔类型，并且逻辑运算符最终的运算结果也是一个布尔类型
短路逻辑判断运算符
假设布尔变量A为真，变量B为假
&amp;&amp;	称为逻辑与运算符。当且仅当两个操作数都为真，条件才为真。	（A &amp;&amp; B）为假。
| |	称为逻辑或操作符。如果任何两个操作数任何一个为真，条件为真。	（A | | B）为真。
！	称为逻辑非运算符。用来反转操作数的逻辑状态。如果条件为true，则逻辑非运算符将得到false。	！（A &amp;&amp; B）为真。
逻辑判断运算符
&amp;	逻辑与<br>
|  	逻辑或
！	逻辑非
短路判断与逻辑判断的区别
逻辑判断全部走一遍
短路判断有结果就停
第一个表达式执行结果为true，会发生短路或
第一个表达式执行结果为false，会发生短路与
实例代码
Test02.java
赋值运算符
不会改变运算结果类型
例如: x += 1等同于x=(x的数据类型)(x + 1)
=	简单的赋值运算符，将右操作数的值赋给左侧操作数	C = A + B将把A + B得到的值赋给C
+ =	加和赋值操作符，它把左操作数和右操作数相加赋值给左操作数	C + = A等价于C = C(C的数据类型) + A
- =	减和赋值操作符，它把左操作数和右操作数相减赋值给左操作数	C - = A等价于C = C(C的数据类型) - A
* =	乘和赋值操作符，它把左操作数和右操作数相乘赋值给左操作数	C * = A等价于C = C(C的数据类型) * A
/ =	除和赋值操作符，它把左操作数和右操作数相除赋值给左操作数	C / = A，C 与 A 同类型时等价于 C = C(C的数据类型) / A
(％)=	取模和赋值操作符，它把左操作数和右操作数取模后赋值给左操作数	C％= A等价于C = C(C的数据类型) ％ A
&gt;&lt;&lt; =	左移位赋值运算符	C &lt;&lt; = 2等价于C = C &lt;&lt; 2
&gt; =	右移位赋值运算符	C &gt;&gt; = 2等价于C = C &gt;&gt; 2
＆=	按位与赋值运算符	C＆= 2等价于C = C(C的数据类型)＆2
^ =	按位异或赋值操作符	C ^ = 2等价于C = C(C的数据类型) ^ 2
| =	按位或赋值操作符	C | = 2等价于C = C(C的数据类型) | 2
三目运算符
语法格式:
布尔表达式 ? 表达式1 : 表达式2
执行原理:
如果布尔表达式结果为true,则执行表达式1
如果布尔表达式结果为false,则执行表达式2
boolean sex = false;
char c = sex ？'男':'女';
System.out.println(sex);
输出结果为女
instanceof 运算符
该运算符用于操作对象实例，检查该对象是否是一个特定类型（类类型或接口类型）。
instanceof运算符使用格式：
(引用 instanceof 类型)
instanceof运算符的2运算结果只能是:true/false
instanceof可以在运行阶段动态判断引用指向的对象的类型
c是一个引用,c变量保存了内存地址指向堆中的对象
假设:(c instanceof Cat)为true表示:
c引用指向的堆内存中的java对象是一个Cat
假设(c instanceof Cat)为false表示:
c引用指向的堆内存中的java对象不是一个Cat
在任何时候对类型进行向下转型时都使用instanceof进行判断(java规范)
实例
Test03.java</p>
<p>控制语句
选择语句:
也叫分支语句
if语句
在任何情况下只能有一个分支执行,不可能存在2个或者多个分支执行,if语句中只要有1个分支执行,整个if语句就结束了
else必须跟if
switch语句
switch语句执行原理：
switch后面的小括号当中的“数据”和case后面的“数据”进行一一匹配，匹配成功分支执行。按照顺序结构依次匹配
匹配成功的分支执行，分支当中最后有“break”语句的话，整个switch语句中止。
如果没有“break”语句，直接进入下一个分支执行，不进行匹配（case穿透）
当所有分支都匹配失败，此时如果有default,则执行default语句
switch和case后面只能是int或者String类型的数据,不能是变量,可以是枚举类型
byte，short，char写进去会自动转换成int
一个比较完整的switch语句编写
switch（int或String类型的字面值或变量）{
case int或String类型的字面值或变量：
java语句；
······
break；
case int或String类型的字面值或变量：
java语句；
······
break；
······
default：
java语句；
······
}
case合并
int i = 1；
switch（i）{
case 1：case 2：case 3；
System.out.println(???);
}
i可以等于1/2/3
无break会出现case穿透现象
循环语句:
for循环
for语句语法结构
for（初始化表达式；布尔表达式；更新表达式）{
循环体
}
循环体内定义的变量在main方法中是无法访问的，出了循环体就释放内存
main方法中定义的&quot;i&quot;变量只要main方法没有结束就可以用
for循环执行原理
初始化表达式、布尔表达式、更新表达式都不是必须的！两个分号是必须的
初始化表达式最先执行，且只执行一次
判断布尔表达式结果是true还是false
true:
执行循环体
执行更新表达式
false:
结束for循环
while循环
while（布尔表达式）{
循环体：
}
while循环执行原理
判断布尔表达式
true:
执行循环体</p>
<p>判断布尔表达式
false:
循环结束
do...while...循环
do…while循环和while循环相似
不同的是,即使不满足条件,do…while循环至少会执行一次。
转向语句
break语句
break是java语言中的关键字，被翻译为“中断/折断”
break语句可以使用在switch语句中用来终止switch语句
也可以使用在循环语句中终止循环的执行
break默认情况下中断最近的循环
小插曲，给for循环起名,break不通常的情况
for1:for()
for2:for()
break for1;
continue语句
continue表示：继续/go on/下一个
主要出现在循环语句中控制循环的执行
break表示循环不执行，continue表示跳过本次循环,下一次循环继续执行
return语句
带有return关键字的java语句只要执行，当前方法立即终止
在“同一个作用域”当中，return语句下面不能编写任何代码，因为这些代码永远都执行不到，编译报错。
所有控制语句都可以互相嵌套</p>
<p>方法
什么是方法？
方法就是一段代码片段，并且这段代码片段可以完成某个特定的功能，可以被重复使用
方法定义在类体当中，一个类当中可以定义多个方法，方法编写的位置没有先后顺序，可以随意。
方法体中不能再定义方法！
方法体当中的代码遵守自上而下的顺序依次执行
方法的定义
语法结构：
[修饰符列表] 返回值类型 方法名(形式参数列表){
方法体;
}
修饰符列表：可选项，不必须。
返回值类型
什么是返回值
一个方法是可以完成某个特定功能的，这个功能结束之后大多数都是需要返回最终执行结果的，执行结果可能是一个具体存在的数据，而这个具体存在的数据就是返回值。
返回值是一个具体存在的数据，数据都是有类型的，此处需要指定的是返回值的具体类型
返回值类型都可以指定哪些类型呢？
java任意一种类型都可以，包括基本数据类型和所有的引用数据类型
也可能这个方法执行结束后不返回任何数据，java中规定，当一个方法执行结束后不返回任何数据的话，返回值类型位置必须编写void关键字
返回值类型若不是void，表示这个方法执行结束后必须返回一个具体的数值，当方法执行结束后没有返回任何数据则编译器报错，如何返回数值？--&gt;“return 值”，并要求“值”的数据类型必须和“方法的返回值类型”一致。不然编译器报错。
返回值类型是void的时候，在方法体当中不能编写“return 值；”但可以编写“return”
只要带有return关键字的语句执行，return语句所在的方法就结束
返回值类型不是void的时候
要求方法必须百分百执行“return 值；”这样的语句来完成值的返回。没有这个语句编译器会报错。
一个方法有返回值的时候，当我们调用这个方法的时候，方法返回了一个值，大部分情况下我们都是选择接收的。
深入return语句
带有return关键字的java语句只要执行，当前方法立即终止
在“同一个作用域”当中，return语句下面不能编写任何代码，因为这些代码永远都执行不到，编译报错。
方法名
合法标识符
最好见名知意
最好是动词
首字母小写，后面每个单词首字母大写
参数
形式参数列表：形参
形参是局部变量
个数可以是0~n个
多个形参之间用“，”隔开
形参起决定性作用的是形参的数据类型，形参的名字就是局部变量的名字。
方法在调用的时候，实际给这个方法传递的真实数据为实际参数，简称实参
实参列表和形参列表必须满足：
数量相同
类型对应相同
方法体
方法体必须由大括号括起来，方法体当中的代码有顺序，遵循自上而下·的顺序依次执行，并且方法体由java语句构成，每一个java语句以“；”结尾
方法怎么调用？
方法只定义不去调用时不会执行
语法规则：【方法的修饰符列表当中有static】
类名.方法名（实参列表）；这是一条java语句
有时候“类名”可以省略不写，“类名”省略之后，默认从当前类中找“类名”方法
JVM内存结构
方法在执行过程当中，在JVM中的内存是如何分配的？内存如何变化？
方法只定义不调用，不会执行，并且在JVM中也不会给该方法分配“运行所属”的内存空间。只有在调用这个方法的时候，才会动态的给这个方法分配所属的内存空间。
在JVM内存划分上有这样三块主要的内存空间：
方法区内存
堆内存
栈内存</p>
<pre><code>					▪ 关于“栈”数据结构：
</code></pre>
<p>▪ 栈：stack，是一种数据结构
▪ 数据结构反应的是数据的储存形态
▪ 数据结构是独立的学科，不属于任何编程语言的范畴，但在大多数编程语言当中要使
用数据结构。
▪ 常见的数据结构：</p>
<ul>
<li>
<p>数组</p>
</li>
<li>
<p>队列</p>
</li>
<li>
<p>栈</p>
</li>
<li>
<p>链表</p>
</li>
<li>
<p>二叉树</p>
</li>
<li>
<p>哈希表/散列表</p>
</li>
<li>
<p>······</p>
<pre><code>  		▪ 方法代码片段存在哪里？方法执行的时候执行过程的内存在哪里分配？
</code></pre>
</li>
<li>
<p>方法代码片段属于.class字节码文件的一部分，字节码文件在加载的时候，将其放到了方法区当中。所以JVM中的三块主要当前内存空间中方法区内存最先有数据。存放了代码片段。</p>
</li>
<li>
<p>代码片段虽然在方法区内存当中只有一份，但是可以被重复调用。每一次调用这个方法的时候，需要给该方法分配独立的活动场所,在栈内存中分配。【栈内存中分配方法运行的所属内存空间】</p>
</li>
<li>
<p>方法在调用的时候，会给该方法分配独立的内存空间，在栈中分配，此时发生压栈动作，方法结束后，给该方法分配的内存空间全部释放，此时发生弹栈动作。</p>
<pre><code>  		重点：方法调用的时候，在参数传递的时候，实际上传递的是变量中保存的那个“值”传过去了。
</code></pre>
<p>方法重载
方法重载又被称为：overload
什么时候考虑使用方法重载?</p>
</li>
<li>
<p>功能相似的时候</p>
<pre><code>   什么条件满足之后构成了方法重载？
</code></pre>
</li>
<li>
<p>在同一个类当中</p>
</li>
<li>
<p>方法名相同
参数列表不同：</p>
</li>
<li>
<p>数量不同</p>
</li>
<li>
<p>顺序不同</p>
</li>
<li>
<p>类型不同</p>
<pre><code>  方法重载和什么有关系？
</code></pre>
</li>
</ul>
<p>与方法名+参数列表有关
与返回值类型无关
与修饰符列表无关
方法递归
什么是递归？
方法自身调用自身
递归非常的消耗内存，能不用就别用
递归必须有结束条件，没有结束条件一定会发生栈内存溢出错误
如果递归太深了，即使有结束条件，也可能发生栈内存溢出</p>
<pre><code>	RecursionTest02.java
		递归实例
</code></pre>
</div></template>
