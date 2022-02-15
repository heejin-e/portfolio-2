/* 메뉴 버튼 클릭 > 메뉴 슬라이드되면서 열림*/
$(".gnb-btn i").on("click", function () {
	$(".gnb").css("display", "block");
	$(".gnb").animate({ left: "0px" }, 500);
});

/* 메뉴 x 버튼 클릭 > 메뉴 슬라이드되면서 닫힘 */
$(".close-btn").on("click", function () {
	$(".gnb").animate({ left: "-500px" }, 500, function () {
		$(this).css("display", "none");
	});
});

/* 메뉴 속 메뉴 열고 닫기 */
$(".gnb-item span").on("click", function () {
	if ($(this).children("i").hasClass("fa-chevron-down")) {
		$(this).next().slideDown();
		$(this).children("i").attr("class", "fas fa-chevron-up");
	} else {
		$(this).next().slideUp();
		$(this).children("i").attr("class", "fas fa-chevron-down");
	}
});

/* 폭이 768px 일 때, 메뉴 슬라이드 */
$(".min-gnb-btn").on("click", function () {
	if ($(".min-gnb").hasClass("open")) {
		/* 메뉴 버튼에 "open" 클래스 명이 있으면 */
		$(this).css({
			/* 버튼을 */
			transform: "rotate(90deg)" /* 90도 회전시키기 */,
			transition: "rotate 0.5s",
		});
		$(".min-gnb").slideDown(); /* 메뉴는 아래로 슬라이드 되기 */
		$(".min-gnb").attr("class", "gnb min-gnb close fs-4");
	} else {
		$(this).css({ transform: " rotate(0deg)", transition: "rotate 0.5s" });
		$(".min-gnb").slideUp();
		$(".min-gnb").attr("class", "gnb min-gnb open fs-4");
	}
});
