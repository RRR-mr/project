function leavemessage() //声明标识符

{
	var popBox = document.getElementById("popbox");
	popBox.style.display = "block";

}

/*点击关闭按钮*/
function closeBox() {
	var popBox = document.getElementById("popbox");
	popBox.style.display = "none";
}

/*works页面加载函数*/
function onPageLoaded() {
   
 //第一个轮播图
	var s1 = document.getElementById("s1");
	var banner1 = document.getElementById("banner-1");
	var li1 = document.querySelectorAll("#banner-1 li");
	var spanNode1 = document.querySelectorAll("#buttons-1 span");
	var img1 = document.getElementsByClassName("picture-1")[0];

	//前后按钮
	var prev1 = document.getElementById('prev-1');
	var next1 = document.getElementById('next-1');

	//索引
	var index = 1;

	var timer = 0;

	//给 s1 设置宽，高	
	s1.style.width = img1.offsetWidth + "px";
	s1.style.height = img1.offsetHeight + "px";
	console.log(s1.style.width)

	//给banner 设置宽高
	banner1.style.height = img1.offsetHeight + "px";
	banner1.style.width = img1.offsetWidth * li1.length + "px";
	banner1.style.left = "-600px";


	//轮播图

	function animate(offset) {
		banner1.style.transition = "0.5s";
		banner1.style.left = -parseInt(offset) * index + "px";
	}

	next1.onclick = function() {
		//点击下一页：移动
		if (index == spanNode1.length) {
			index = 0;

		}
		index++;
		console.log("索引index:" + index);

		animate(img1.offsetWidth)
		showButton()
	}

	prev1.onclick = function() {
		if (index == 1) {
			index = li1.length - 1;
		}
		index--;
		animate(img1.offsetWidth)
		showButton()

	}

	function showButton() {

		for (var i = 0; i < spanNode1.length; i++) {

			spanNode1[i].className = '';

		}
		console.log("小圆点的index值：" + index);
		spanNode1[index - 1].className = "on";

	}

	//自动轮播
	function play() {
		timer = setInterval(function() {
			banner1.style.transition = "none";
			setTimeout(function() {
				next1.onclick();
			}, 200)
		}, 1500);
	}

	//当鼠标移动上去的时候:点击事件与轮播事件冲突
	s1.onmouseover = function() {
		//清除定时器
		clearInterval(timer);
	}
	s1.onmouseout = function() {
		play()
	}

	//鼠标点击对应小圆点：自动切换
	function ButtonImage() {
		for (var i = 0; i < spanNode1.length; i++) {
			spanNode1[i].onclick = function() {
				var myIndex = parseInt(this.getAttribute('index'));
				index = myIndex;
				animate(img1.offsetWidth);
				showButton();
			}

		}

	}
	ButtonImage()

//第二个轮播图
	var s2 = document.getElementById("s2");
	var banner2 = document.getElementById("banner-2");
	var li2 = document.querySelectorAll("#banner-2 li");
	var spanNode2 = document.querySelectorAll("#buttons-2 span");
	var img2 = document.getElementsByClassName("picture-2")[0];

	//前后按钮
	var prev2 = document.getElementById('prev-2');
	var next2 = document.getElementById('next-2');

	//索引
	var index2 = 1;

	var timer2 = 0;

	//给 s2 设置宽，高	
	s2.style.width = img2.offsetWidth + "px";
	s2.style.height = img2.offsetHeight + "px";
	console.log(s2.style.width)

	//给banner-2 设置宽高
	banner2.style.height = img2.offsetHeight + "px";
	banner2.style.width = img2.offsetWidth * li2.length + "px";
	banner2.style.left = "-500px";


	//轮播图

	function animate2(offset) {
		banner2.style.transition = "0.5s";
		banner2.style.left = -parseInt(offset) * index2 + "px";
	}

	next2.onclick = function() {
		//点击下一页：移动
		if (index2 == spanNode2.length) {
			index2 = 0;

		}
		index2++;
		console.log("索引index:" + index2);

		animate2(img2.offsetWidth)
		showButton2()
	}

	prev2.onclick = function() {
		if (index2 == 1) {
			index2 = li2.length - 1;
		}
		index2--;
		animate2(img2.offsetWidth)
		showButton2()

	}

	function showButton2() {

		for (var i = 0; i < spanNode2.length; i++) {

			spanNode2[i].className = '';

		}
		console.log("小圆点的index值：" + index2);
		spanNode2[index2 - 1].className = "on";

	}

	//自动轮播
	function play2() {
		timer2 = setInterval(function() {
			banner2.style.transition = "none";
			setTimeout(function() {
				next2.onclick();
			}, 200)
		}, 1500);
	}

	//当鼠标移动上去的时候:点击事件与轮播事件冲突
	s2.onmouseover = function() {
		//清除定时器
		clearInterval(timer2);
	}
	s2.onmouseout = function() {
		play2()
	}

	//鼠标点击对应小圆点：自动切换
	function ButtonImage2() {
		for (var i = 0; i < spanNode2.length; i++) {
			spanNode2[i].onclick = function() {
				var myIndex = parseInt(this.getAttribute('index'));
				index2 = myIndex;
				animate2(img2.offsetWidth);
				showButton2();
			}

		}

	}
	ButtonImage2()

}
