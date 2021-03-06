//1. 写一个函数trim(str)，去除字符串两边的空白字符
function trim(str) {
    return str.replace(/^\s+|\s+$/g,"")
}

//2. 使用实现 addClass(el, cls)、hasClass(el, cls)、removeClass(el,cls)，使用正则
function addClass(el,cls) {
    if (!hasClass(el,cls)) {
        el.className+=" "+cls
    }
}


function hasClass(el,cls) {
    var reg = new RegExp("(\\s|^)"+cls+"(\\s|$)")
    return reg.test(el.className)
}


function removeClass(el,cls) {
    var reg = new RegExp("(\\s|^)"+cls+"(\\s|$)","g")
    el.className = el.className.replace(reg,"").trim()
}

//3. 写一个函数isEmail(str)，判断用户输入的是不是邮箱
function isEmail(str) {
    return /^\w+@\w+\.(com|net)$/.test(str)
}

//4. 写一个函数isPhoneNum(str)，判断用户输入的是不是手机号
function isPhoneNum(str) {
    return /^1[1-9]\d{9}$/.test(str)
}

//5. 写一个函数isValidUsername(str)，判断用户输入的是不是合法的用户名
//（长度6-20个字符，只能包括字母、数字、下划线）
function isValidUsername(str) {
    return /^\w{6,20}$/.test(str)
}

//6. 写一个函数isValidPassword(str), 判断用户输入的是不是合法密码
//（长度6-20个字符，包括大写字母、小写字母、数字、下划线至少两种）
function isValidPassword(str) {
    if(/(^\d{6,20}$)|(^[A-Z]{6,20}$)|(^[a-z]{6,20})|(^_{6,20}$)|(^[a-zA-Z0-9_]{0,5}$)/.test(str)) {
        return "长度6-20个字符，包括大写字母、小写字母、数字、下划线至少两种"
    }
    if (/^[a-zA-Z0-9_]{6,20}$/.test(str)) {
        return true
    }
}


//7. 写一个正则表达式，得到如下字符串里所有的颜色（#121212）
var re = /#[a-fA-F0-9]{6}/gi

var subj = "color: #121212; background-color: #AA00ef; width: 12px; bad-colors: f#fddee #fd2 "

alert( subj.match(re) )  // #121212,#AA00ef

//8. 下面代码输出什么? 为什么? 改写代码，让其输出hunger, world.
var str = 'hello  "hunger" , hello "world"';
var pat =  /".*"/g;
str.match(pat);
//输出[""hunger" , hello "world""]，因为.匹配除回车符、换行符和分隔符以外的所有字符，而且默认是贪婪模式，会匹配到不能匹配为止
//改写代码
//贪婪模式
var str = 'hello  "hunger" , hello "world"';
var pat =  /"[^"]+"/g;
str.match(pat);
//非贪婪模式
var str = 'hello  "hunger" , hello "world"';
var pat =  /".+?"/g;
str.match(pat);


//9. 补全如下正则表达式，输出字符串中的注释内容. (可尝试使用贪婪模式和非贪婪模式两种方法)
//贪婪模式
var str = '.. <!-- My -- comment \n test --> ..  <!----> .. '
var re = /<!--[^>]*-->/g
str.match(re) // '<!-- My -- comment \n test -->', '<!---->'
//非贪婪模式
var str = '.. <!-- My -- comment \n test --> ..  <!----> .. '
var re = /<!--[\w\W]*?-->/g
str.match(re) // '<!-- My -- comment \n test -->', '<!---->'

//10. 补全如下正则表达式
//贪婪模式
var re = /<[^>]+>/g
var str = '<> <a href="/"> <input type="radio" checked> <b>'
str.match(re) // '<a href="/">', '<input type="radio" checked>', '<b>'
//非贪婪模式
var re = /<.+?>/g
var str = '<> <a href="/"> <input type="radio" checked> <b>'
str.match(re) // '<a href="/">', '<input type="radio" checked>', '<b>'