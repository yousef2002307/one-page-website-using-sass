$(document).ready(function(){
$(".testmonials .slick-dots li").eq(0).find("button").addClass("active");
$(".testmonials .slick-dots li").click(function(){
$(this).find("button").addClass("active");
$(this).siblings("li").find("button").removeClass("active");
});
});