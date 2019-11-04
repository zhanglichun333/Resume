let resume = `# 张丽春 | 前端开发工程师
深圳 | 2019应届本科毕业生
微信/电话: 13016042464
QQ邮箱: zhanglichun333@qq.com | [在线简历](https://github.com/zhanglichun333/resume.git)
Github: https://github.com/zhanglichun333 
博客: https://juejin.im/user/5c96cfb95188252d6d2fb510/posts

## 专业技能

- HTML5, CSS3 & JavaScript
    - 熟悉 HTML5 新语义化标签等， 熟悉 CSS3 如动画、过渡、弹性盒子布局等以及Scss/Less写法
    - 熟悉 JavaScript 写数据处理，表单交互等业务代码，常用 ES6 语法写箭头函数，解构赋值等
- Vue
    - 熟悉 Vue MVVM 设计模式、生命周期函数、模板语法、基本指令、事件绑定、组件及组件传值等
    - vue 开发经验，能够用 vue-cli 脚手架搭建项目、结合 vue-router 路由、vuex 状态管理器等使用
    - 熟悉 Vue 移动端开发, em、rem 以及 Viewport/媒体查询等不同移动端设备适配页面
- 其他
    - 了解小程序云开发原理，开发流程，接口及组件使用、验证授权、flex布局、屏幕适配等
    - 了解 Git 开发命令、 Gitlab、 禅道项目管理工具以及根据后端提供的API发出带参请求等
    - 了解 http 安全和协议， 比如cookie、 session、localStorage 
    - 搭建过 linux 云服务器以及安装各种工具 nginx/node.js 来搭建后端交互和代码，常用 linux 命令
- 自我描述
    - 对代码格式有强迫症，追求简洁高效的代码，现在一直以 Standard Style 的代码风格编写代码
    - 拥抱新技术的出现和学习，现正学习 react + antd-pro 与 react-native

## 项目经验
### 饿了么移动端项目
- 关键词：\`vue\`、\`vue-router\`、\`axios\`、\`express\`[源码链接](https://github.com/request/request-promise.git)[预览](http://39.108.170.50:8080)
- 职责: 用 Vue 写总体框架，vue-router 搭建路由，axios 来封装请求，把请求的数据保存到状态管理 vuex 中，后端 linux 服务器用 node.js + express 搭建, 用 nginx 做反向代理，已部署上线。

### 豆瓣评分小程序
- 关键词：\`云开发\`、\`Vant-Weapp\`、\`WeUI\` [源码链接](https://github.com/zhanglichun333/Douban-Movie.git)
- 职责: 用原生小程序结合 Vant-Weapp UI组件搭建总体框架，小细节用WeUI补充，后端用云服务器负责接收请求，在生命周期中进行相应的业务请求代码，主要用移动端类的 flex 布局写界面样式。

### 美团网全栈PC端项目
- 关键词：\`Nuxt.js\`、\`vue\`、\`SSR渲染\`、\`Koa2\`、\`Element-ui\`、\`MongoDB\`、\`redis\`[源码链接](https://github.com/zhanglichun333/meituan.git)[博客](https://juejin.im/post/5d1b8f8be51d455d6c0ad97c)
- 职责: SSR 渲染来进行首页 SEO 优化，Vue+Element-UI 为主，后端用 koa2搭建并操作 MongoDB 数据库，用 passport 和 redis 进行账号注册登录验证等，还有用高德 API 做定位和数据内容。

## 教育经历
### 嘉应学院
2015/9 - 2019/6
- 专业学历：园林设计    大学本科
- 技能证书：英语四六级证书   计算机二级证书
`

let code_ready = `/*
 * 嗨，你好~我是张丽春。
 * 我想用代码给你展示一下我的个人简历～
 * 灵感来自：http://strml.net
 * 
 * 那么，我要开始啦...
 */

/* 添加一个过渡，使变化看起来更柔和 */
* {
  transition: all 0.1s;
}
/* 加个背景色 */
body {
  background: #455A64;
}
/* 给代码加个边框 */
#code_body {
  width: 100%;
  border: 0.1rem solid #CFD8DC;
  background: #CFD8DC;
  padding: 1rem;
  overflow: auto;
}

/* 让代码高亮起来 */
.token.comment, .token.punctuation {
  color: #757575;
}
.token.selector {
  color: #007400;
}
.token.property {
  color: #cf1f1f;
}

/* 
 * 给它们来个特效吧！
 * 让它们在被编辑的时候产生“呼吸”的效果
 */
.breathe {
  animation: breathe 1s ease 0s infinite;
}


/* 现在开始写简历啦！ */

/* 让代码框腾出一些的位置给我的简历框 */

#options {
  height: 10rem;
}

/* 准备一个白板 */
#paper {
  flex: 1;
  background: #fdfdfd;
  margin: 1rem auto;
  overflow: auto;
  white-space: pre-wrap;
}

/* 接下来，请看下面 */

`

let code_marked = `
/* 
 * 接下来我要使用一个优秀的库 marked.js
 * 使我的简历Markdown格式转为html
 * (https://github.com/markedjs/marked)
 */
`

let code_beautify_resume = `
/* 调整我的简历，让它变得再好看一点 */
#paper {
  white-space: unset;
  padding: 1rem;
  font-size: 0.6em;
}
#paper a {
  color: #455A64;
}
#paper ul {
  padding-left: 1rem;
}
/* 让每个模块上下间隔明显一点 */
#paper > div {
  margin: 1rem 0;
}

/* 接下来是精细的调整 */

/* 首先，调整我的“基础信息”板块 */
#paper h1 {
  font-size: 20px;
  margin-bottom: 10px;
}
#information {
  text-align: left;
}
#information p {
  line-height: 24px;
  white-space: pre-wrap;
}

/* 然后是详细介绍模块 */
#paper h2 {
  font-size: 16px;
  border-bottom: 1px solid #455A64;
  padding-bottom: 6px;
  margin-bottom: 6px;
}
#paper h3 {
  display: inline-block;
  font-size: 14px;
  margin: 6px 0;
}
#skills > ul ul {
  margin: 4px 0;
}
#skills li, #works li, #education li {
  margin-bottom: 4px;
}
#jobs > .experience {
  margin-bottom: 6px;
}
#works {
  position: relative;
}
#works > ul {
  position: relative;
}
#works > ul > li:nth-child(1) a {
  float: right;
  margin-left: 5px;
}

/* 调整“教育经历”中时间的位置 */
#jobs > .experience, #education {
  position: relative;
}
#jobs p, #education p {
  position: absolute;
  right: 0px;
}
#jobs p {
  top: 6px;
}
#education p {
  top: 40px;
}

/* 接下来添加个头像吧！ */
`

let code_photo = `
/* 把我的头像放在个人信息里 */
#information {
  position: relative;
}
#information .avatar {
  width: 85px;
  position: absolute;
  right: 0px;
  top: 5px;
}
/* 让多余的照片隐藏吧~ */
#information {
  overflow: hidden;
}

/* 
 * OK，我的头像出来了--
 * 期待这张面孔会出现在您的面试中
 * 
 *            —— 张丽春 2019/07 
 */
`

var resumeInputTimeoutID, codeInputTimeoutID
writeCode(code_ready, '').then(() => {
  createResume().then(() => {
    adjustResume().then(() => {
      addAndAdjustAvatar().then(showDownloadButton)
    }, () => {
      showFinalResult()
    })
  })
})

var speedCode = 1, duration = 0
$('#speed_btn').click(() => {
  speedCode += 1
  if (speedCode > 3) {
    speedCode = 1
  }
  switch (speedCode) {
    case 1:
      speed_status.innerText = '🚀'
      description.innerText = '慢点'
      duration = 0
      break
    case 2:
      speed_status.innerText = '🚗'
      description.innerText = '再慢点'
      duration = 30
      break
    case 3:
      speed_status.innerText = '🚲'
      description.innerText = '更慢点'
      duration = 70
      break
    default:
      return 0
  }
})

function writeCode(code, origin) {
  let n = 1
  return new Promise(resolve => {
    codeInputTimeoutID = setTimeout(write, duration)
    function write() {
      code_body.innerHTML = Prism.highlight(origin + code.substr(0, n), Prism.languages.css, 'css');
      code_style.innerHTML = origin + code.substr(0, n)
      code_body.scrollTop = code_body.scrollHeight
      n++
      if (n === code.length) {
        window.clearTimeout(codeInputTimeoutID)
        resolve.call(undefined)
      } else {
        window.clearTimeout(codeInputTimeoutID)
        codeInputTimeoutID = setTimeout(write, duration)
      }
    }
  })
}
function writeResume() {
  let n = 1
  return new Promise(resolve => {
    resumeInputTimeoutID = setTimeout(write, duration)
    function write () {
      paper.innerHTML = resume.substr(0, n)
      paper.scrollTop = paper.scrollHeight
      n++
      if (n === resume.length) {
        window.clearTimeout(resumeInputTimeoutID)
        resolve.call(undefined)
      } else {
        window.clearTimeout(resumeInputTimeoutID)
        resumeInputTimeoutID = setTimeout(write, duration)
      }
    }
  })
}

function createResume() {
  return new Promise(resolve => {
    $('#paper').addClass('breathe')
    $('#code_body').removeClass('breathe')
    writeResume().then(resolve)
    setTimeout(() => {
      $('#skip_inputResume').show()
      $('#skip_inputResume').click(() => {
        skipResumeInput().then(resolve)
      })
    }, 0)
  })
}
function adjustResume() {
  return new Promise((resolve, reject) => {
    $('#code_body').addClass('breathe')
    $('#paper').removeClass('breathe')
    writeCode(code_marked, code_ready).then(() => {
      structureResume()
      $('#paper')[0].scrollTop = 0
      writeCode(code_beautify_resume, code_ready + code_marked).then(resolve)
      setTimeout(() => {
        $('#skip_all').show()
        $('#skip_all').click(() => {
          skipAll().then(reject)
        })
      }, 0)
    })
  })
}
function structureResume() {
  $('#paper')[0].innerHTML = marked(resume)
  $('#paper').prepend('<div id="information"></div>', '<div id="skills"></div>', '<div id="jobs"></div>', '<div id="works"></div>', '<div id="education"></div>')
  $('#information').append($('h1'), $('p').first())
  $('#skills').append($('h2:contains("技能")'), $('ul').first())
  $('#education').append($('h2:contains("教育")'), $('h3:contains("学院")'), $('p').last(), $('ul').last())
  $('#jobs').append($('h2:contains("工作")'))
  $('h3:contains("公司")').each((index, element) => {
    $('<div class="experience"></div>').append($(element), $('#paper > p').first(), $('#paper > ul').first()).appendTo($('#jobs'))
  })
  $('#works').append($('h2:contains("项目")'), $('#paper').children().not($('div')))
  $('a[href="./images/qrcode.png"]').addClass('qrcode-trigger').append($('img.qrcode'))
}
function addAndAdjustAvatar() {
  return new Promise(resolve => {
    $('#information').append($('img.avatar'))
    writeCode(code_photo, code_ready + code_marked + code_beautify_resume).then(() => {
      $('#paper').addClass('breathe')
      $('#code_body').removeClass('breathe')
      $('.skipper').remove()
      setTimeout(resolve, 0)
    })
  })
}
function showDownloadButton() {
  // $('#options').css({ 'width': '100%' })
  $('.downloadResume').addClass('show')
  // $('#options').append($('a.downloadResume'))
}

// function skipResumeInput() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       window.clearTimeout(resumeInputTimeoutID)
//       paper.innerHTML = resume
//       paper.scrollTop = paper.scrollHeight
//       resolve()
//       $('#skip_inputResume').remove()
//     }, 0)
//   })
// }
// function skipAll() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       window.clearTimeout(codeInputTimeoutID)
//       resolve()
//       $('.skipper').remove()
//     }, 0)
//   })
// }
function showFinalResult() {
  $('#paper').addClass('breathe')
  $('#code_body').removeClass('breathe')
  $('#information').append($('img.avatar'))
  code_body.innerHTML = Prism.highlight(code_ready + code_marked + code_beautify_resume + code_photo, Prism.languages.css, 'css');
  code_style.innerHTML = code_ready + code_marked + code_beautify_resume + code_photo
  code_body.scrollTop = code_body.scrollHeight
  window.clearTimeout(codeInputTimeoutID)
  // $('#options').css({ 'height': '10rem' })
  $('.downloadResume').addClass('show')
  // $('#options').append($('a.downloadResume'))
}