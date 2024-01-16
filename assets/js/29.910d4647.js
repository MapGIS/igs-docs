(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{322:function(t,a,r){"use strict";r.r(a);var e=r(3),s=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"运维"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运维"}},[t._v("#")]),t._v(" 运维")]),t._v(" "),a("h3",{attrs:{id:"日志跟踪"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志跟踪"}},[t._v("#")]),t._v(" 日志跟踪")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("系统出现问题时，首先查看日志，"),a("code",[t._v("igserver_for_java/logs")]),t._v("文件夹下")])]),t._v(" "),a("li",[a("p",[t._v("修改日志配置方法")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("访问日志，添加配置项"),a("code",[t._v("server.undertow.accesslog.enabled=true")])])]),t._v(" "),a("li",[a("p",[t._v("调试日志，添加配置项"),a("code",[t._v("logging.level.DEBUG_LOG=debug")])])]),t._v(" "),a("li",[a("p",[t._v("全局文件日志，修改配置"),a("code",[t._v("logging.level.root=info|warn|error")])])])])])]),t._v(" "),a("h3",{attrs:{id:"jvm命令行跟踪"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jvm命令行跟踪"}},[t._v("#")]),t._v(" JVM命令行跟踪")]),t._v(" "),a("p",[t._v("使用jstack、jmap、jstat等JDK自带的工具跟踪JVM的进程状态，参考 "),a("a",{attrs:{href:"https://www.jianshu.com/p/8d5782bc596e",target:"_blank",rel:"noopener noreferrer"}},[t._v("jstack命令解析 - 简书"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"利用springboot的actuator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#利用springboot的actuator"}},[t._v("#")]),t._v(" 利用SpringBoot的actuator")]),t._v(" "),a("p",[t._v("使用springboot提供的actuator接口 http://127.0.0.1:8089/igs/rest/actuator")]),t._v(" "),a("h4",{attrs:{id:"线程快照"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程快照"}},[t._v("#")]),t._v(" 线程快照")]),t._v(" "),a("p",[t._v("通过接口"),a("code",[t._v("igs/rest/actuator/threaddump")]),t._v("获取线程快照，浏览器中获取到是json，可通用curl命令获取text")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-o")]),t._v(" igs.txt "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--header")]),t._v(" accept:text/plain http://127.0.0.1:8089/igs/rest/actuator/threaddump\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("10.6.0.10及以上，可通过接口"),a("code",[t._v("http://127.0.0.1:8089/manager/api/monitor/threadDump")]),t._v("获取igs和所有dcs进程的线程快照")]),t._v(" "),a("h4",{attrs:{id:"堆快照"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#堆快照"}},[t._v("#")]),t._v(" 堆快照")]),t._v(" "),a("p",[t._v("通过接口"),a("code",[t._v("igs/rest/actuator/headdump")]),t._v("获取线程快照")])])}),[],!1,null,null,null);a.default=s.exports}}]);