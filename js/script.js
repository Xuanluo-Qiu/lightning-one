// 当网页向下滑动 20px 出现"返回顶部" 按钮
window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {console.log(121);
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("back-top").style.display = "block";
    } else {
        document.getElementById("back-top").style.display = "none";
    }
}

//暗色模式
var options = {
	bottom: "32px", // 定位底部距离 - 默认: '32px'
	right: "99px", // 定位右边距离 - 默认: '32px'
	left: "unset", // 定位左边距离 - 默认: 'unset'
	time: "0.5s", // 默认动画时间: '0.3s'
	mixColor: "#fff", // 需要改变的颜色 - 默认: '#fff'
	backgroundColor: "#fff", // 背景颜色 - 默认: '#fff'
	buttonColorDark: "#262728", // 黑暗模式下按钮颜色 - 默认: '#100f2c'
	buttonColorLight: "#fff", // 日间模式下按钮颜色 - 默认: '#fff'
	saveInCookies: true, // 是否在cookie保存当前模式 - 默认: true
	label: "🌓", // 切换模式按钮图标 - 默认: ''
	autoMatchOsTheme: true // 是否自动根据系统适应模式 - 默认: true
};

let darkmode = new Darkmode(options);
darkmode.showWidget();
