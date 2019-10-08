$(function(){
	// 为导航添加事件
	$(".navbar-brand").click(function(){
		$("#wrapper").load("./pages/welcome.html");
		$("ul.left_nav > li").removeClass("current");
	})
	$("#wrapper").load("./pages/welcome.html")
	$("ul.left_nav").on("click","li",function(){
		var url = $(this).attr("url");
		$("ul.left_nav > li").removeClass("current");
		$(this).addClass("current");
		$("#wrapper").load(url);
	})

	// 模拟点击第一个li
	// $("ul.left_nav > li:nth-child(1)").trigger("click");
	
});