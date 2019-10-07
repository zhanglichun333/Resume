let resume = `# 张丽春 | 前端开发工程师 | 2019应届本科毕业生
微信/电话: 13016042464 | zhanglichun333@qq.com  
在线简历：https://github.com/zhanglichun333/resume.git
Github: https://github.com/zhanglichun333 
博客: https://juejin.im/user/5c96cfb95188252d6d2fb510/posts

## 专业技能

- HTML5, CSS3 & JavaScript
    - 熟悉 HTML5 如header、nav等语义化标签等
    - 熟悉 CSS3 如动画、过渡、弹性盒子布局等
    - 能够使用原生 JavaScript 做页面交互, 如表单验证等, 略懂ES6语法 
- Vue
    - 熟悉 Vue MVVM 设计模式、生命周期函数、模板语法、基本指令、事件绑定、组件及组件传值等
    - vue 开发经验，能够用 vue-cli 脚手架搭建项目、结合 vue-router 路由、vuex 状态管理器等使用
    - 熟悉 Vue 移动端开发, em、rem 以及 Viewport/媒体查询等不同移动端设备适配页面
- 其他
    - 了解小程序云开发原理，开发流程，接口及组件使用、验证授权等
    - 了解 Git 开发命令、 Gitlab、 禅道项目管理工具以及根据后端提供的API发出带参请求等
    - 了解 Scss 的使用，理解嵌套规则、父选择器 & 、变量、混合等的使用
    - 了解 jQuery 常用 API ，会使用$.ajax()异步请求。
    - 了解 http 安全和协议， 比如cookie 和 session。
    - 搭建过linux云服务器， 了解其配置环境。
    - 对代码格式有强迫症，现在一直在养成 Standard Style 的代码风格

## 项目经验
### 饿了么移动端项目
- 关键词：\`vue\`、\`vue-router\`、\`axios\`、\`express\`[源码链接](https://github.com/request/request-promise.git)[预览](http://39.108.170.50:8080)
- 描述：该项目提取“饿了么”外卖APP最核心的商家模块，包括商家介绍、商品列表、商品详情、客户评论等模块，可浏览商及添加至购物车。

### 豆瓣评分小程序
- 关键词：\`云开发\`、\`Vant-Weapp\`、\`WeUI\` [源码链接](https://github.com/zhanglichun333/Douban-Movie.git)
- 描述：该项目使用了微信小程序云开发模式，它是一个仿豆瓣评分小程序，提供了最新的电影介绍及评论，包括上映影片的影讯查询，你可以记录想看或对看过的电影进行评价。

### 美团网全栈PC端项目
- 关键词：\`Nuxt.js\`、\`vue\`、\`SSR渲染\`、\`Koa2\`、\`Element-ui\`、\`MongoDB\`、\`redis\`[源码链接](https://github.com/zhanglichun333/meituan.git)[博客](https://juejin.im/post/5d1b8f8be51d455d6c0ad97c)
- 描述：此项目是一个仿美团网项目，主要完成4个页面：美团首页(城市定位+search搜索+侧边导航栏+产品列表)、注册页面、登录页面、切换城市页面。


## 教育经历
### 嘉应学院
2015/9 - 2019/6
- 专业学历：园林设计    大学本科
- 技能证书：英语四六级证书   计算机二级证书
`

let code_ready = `/*
 * 嗨，我是张丽春。
 * 我想用代码给你展示一下我的个人简历～
 * 灵感来自：http://strml.net
 * 
 * 那么，我要开始啦...
 */

/* 添加一个过渡，使变化看起来更柔和 */
* {
  transition: all 0.3s;
}
/* 加个背景色 */
body {
  background: #455A64;
}
/* 给代码加个边框 */
#code_body {
  width: 100%;
  border: 1px solid #CFD8DC;
  background: #CFD8DC;
  padding: 16px;
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
  animation: breathe 3s ease 0s infinite;
}


/* 现在开始写简历啦！ */

/* 让代码框腾出一些的位置给我的简历框 */

#options {
  width: 23%;
}
/* 准备一个白板 */
#paper {
  flex: 1;
  background: #fdfdfd;
  margin: 16px;
  overflow: auto;
  white-space: pre-wrap;
}

/* 接下来，请看右边 */

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
  padding: 0 32px;
  font-size: 14px;
}
#paper a {
  color: #455A64;
}
#paper ul {
  padding-left: 20px;
}
/* 让每个模块上下间隔明显一点 */
#paper > div {
  margin: 28px 0;
}

/* 接下来是精细的调整 */

/* 首先，调整我的“基础信息”板块 */
#paper h1 {
  font-size: 22px;
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
  width: 100px;
  position: absolute;
  right: 105px;
  top: 10px;
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

var speedCode = 1, duration = 80
$('#speed_btn').click(() => {
  speedCode += 1
  if (speedCode > 3) {
    speedCode = 1
  }
  switch (speedCode) {
    case 1:
      speed_status.innerText = '🚲'
      description.innerText = '开小车车快点吧~'
      duration = 70
      break
    case 2:
      speed_status.innerText = '🚗'
      description.innerText = '太废话了，我要最快！'
      duration = 30
      break
    case 3:
      speed_status.innerText = '🚀'
      description.innerText = '现在是最快的速度拉~'
      duration = 0
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
    }, 1000)
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
      }, 1000)
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
      setTimeout(resolve, 1000)
    })
  })
}
function showDownloadButton() {
  $('#options').css({ 'width': '32%' })
  $('a.downloadResume').addClass('show')
  $('#options').append($('a.downloadResume'))
}

function skipResumeInput() {
  return new Promise(resolve => {
    setTimeout(() => {
      window.clearTimeout(resumeInputTimeoutID)
      paper.innerHTML = resume
      paper.scrollTop = paper.scrollHeight
      resolve()
      $('#skip_inputResume').remove()
    }, 0)
  })
}
function skipAll() {
  return new Promise(resolve => {
    setTimeout(() => {
      window.clearTimeout(codeInputTimeoutID)
      resolve()
      $('.skipper').remove()
    }, 0)
  })
}
function showFinalResult() {
  $('#paper').addClass('breathe')
  $('#code_body').removeClass('breathe')
  $('#information').append($('img.avatar'))
  code_body.innerHTML = Prism.highlight(code_ready + code_marked + code_beautify_resume + code_photo, Prism.languages.css, 'css');
  code_style.innerHTML = code_ready + code_marked + code_beautify_resume + code_photo
  code_body.scrollTop = code_body.scrollHeight
  window.clearTimeout(codeInputTimeoutID)
  $('#options').css({ 'width': '32%' })
  $('a.downloadResume').addClass('show')
  $('#options').append($('a.downloadResume'))
}