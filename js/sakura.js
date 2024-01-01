/* sakura.8351.1.js にコメント入れたバージョン */

(function(){
	var divSakura = document.createElement('div');	/* 大枠になるdivを作る */
	divSakura.id = "sakura";	/* id を追加する */

	/* 以下 div の中に追加する html（style タグと css を追加しています） */
	divSakura.innerHTML = '<style>'+
	'html,body{overflow-x:hidden;}'+
	'.hana{'+
	'position:absolute;height:0;width:0;'+
	'border: 10px solid pink;'+
	'border-radius: 15px;'+
	'border-top-right-radius: 0;'+
	'border-bottom-left-radius: 0;}'+
	'.hana::after{'+
	'content:"";display:block;position:absolute;top:-7px;left:-7px;height:0;width:0;'+
	'border: 10px solid pink;'+
	'border-radius: 15px;'+
	'border-top-right-radius: 0;'+
	'border-bottom-left-radius: 0;'+
	'-webkit-transform: rotate(15deg);-ms-transform: rotate(15deg);transform: rotate(15deg);'+
	'}'+

	'.t1{border-color:#fff3f5;}'+
	'.t2{border-color:#ffe2e7;}'+
	'.t3{border-color:#ffd1d9;}'+
	'.t4{border-color:#ffc0cb;}'+
	'.t5{border-color:#ffafbd;}'+
	'.t6{border-color:#ffafbd;}'+
	'.t1::after{border-color:#fff3f5;}'+
	'.t2::after{border-color:#ffe2e7;}'+
	'.t3::after{border-color:#ffd1d9;}'+
	'.t4::after{border-color:#ffc0cb;}'+
	'.t5::after{border-color:#ffafbd;}'+
	'.t6::after{border-color:#ffafbd;}'+

	'.y1{-webkit-animation:v1 10s infinite;animation:v1 10s infinite;}'+
	'.y2{-webkit-animation:v2 10s infinite;animation:v2 10s infinite;}'+
	'.y3{-webkit-animation:v3 9s infinite;animation:v3 9s infinite;}'+
	'.y4{-webkit-animation:v4 9s infinite;animation:v4 9s infinite;}'+
	'.y5{-webkit-animation:v5 8s infinite;animation:v5 8s infinite;}'+
	'.y6{-webkit-animation:v6 8s infinite;animation:v6 8s infinite;}'+
	'@-webkit-keyframes v1{'+
		'from{-webkit-transform: rotate(0deg) scale(1);}'+
		'50%{-webkit-transform: rotate(270deg) scale(1);}'+
		'to{-webkit-transform: rotate(1deg) scale(1);}'+
	'}'+
	'@-webkit-keyframes v2{'+
		'from{-webkit-transform: rotate(-90deg) scale(.9);}'+
		'50%{-webkit-transform: rotate(-360deg) scale(.9);}'+
		'to{-webkit-transform: rotate(-89deg) scale(.9);}'+
	'}'+
	'@-webkit-keyframes v3{'+
		'from{-webkit-transform: rotate(30deg) scale(.8);}'+
		'50%{-webkit-transform: rotate(300deg) scale(.8);}'+
		'to{-webkit-transform: rotate(29deg) scale(.8);}'+
	'}'+
	'@-webkit-keyframes v4{'+
		'from{-webkit-transform: rotate(-120deg) scale(.7);}'+
		'50%{-webkit-transform: rotate(-390deg) scale(.7);}'+
		'to{-webkit-transform: rotate(-119deg) scale(.7);}'+
	'}'+
	'@-webkit-keyframes v5{'+
		'from{-webkit-transform: rotate(60deg) scale(.6);}'+
		'50%{-webkit-transform: rotate(330deg) scale(.6);}'+
		'to{-webkit-transform: rotate(59deg) scale(.6);}'+
	'}'+
	'@-webkit-keyframes v6{'+
		'from{-webkit-transform: rotate(-150deg) scale(.5);}'+
		'50%{-webkit-transform: rotate(-420deg) scale(.5);}'+
		'to{-webkit-transform: rotate(-149deg) scale(.5);}'+
	'}'+
	'@keyframes v1{'+
		'from{transform: rotate(0deg) scale(1);}'+
		'50%{transform: rotate(270deg) scale(1);}'+
		'to{transform: rotate(1deg) scale(1);}'+
	'}'+
	'@keyframes v2{'+
		'from{transform: rotate(-90deg) scale(.9);}'+
		'50%{transform: rotate(-360deg) scale(.9);}'+
		'to{transform: rotate(-89deg) scale(.9);}'+
	'}'+
	'@keyframes v3{'+
		'from{transform: rotate(30deg) scale(.8);}'+
		'50%{transform: rotate(300deg) scale(.8);}'+
		'to{transform: rotate(29deg) scale(.8);}'+
	'}'+
	'@keyframes v4{'+
		'from{transform: rotate(-120deg) scale(.7);}'+
		'50%{transform: rotate(-390deg) scale(.7);}'+
		'to{transform: rotate(-119deg) scale(.7);}'+
	'}'+
	'@keyframes v5{'+
		'from{transform: rotate(60deg) scale(.6);}'+
		'50%{transform: rotate(330deg) scale(.6);}'+
		'to{transform: rotate(59deg) scale(.6);}'+
	'}'+
	'@keyframes v6{'+
		'from{transform: rotate(-150deg) scale(.5);}'+
		'50%{transform: rotate(-420deg) scale(.5);}'+
		'to{transform: rotate(-149deg) scale(.5);}'+
	'}'+

	'</style>';

	document.body.appendChild(divSakura);	/* body タグに大枠の div を追加します */

	var windowHeight = window.innerHeight;	/* ウィンドウの高さを取得 */
	var scroll = document.documentElement.scrollTop || document.body.scrollTop;	/* スクロールの位置を取得 */
	var styleZindex = 9999;	/* 花びらの z-index （9999から開始） */
	var styleTop = new Array();	/* 花びらの top 位置配列 */
	var styleLeft = new Array();	/* 花びらの left 位置配列 */
	var yuragi = new Array();	/* ゆらぐ幅の配列 */
	var sokudo = new Array();	/* 落下速度の配列 */
	var hanabiraId = new Array();	/* 花びらのIDの配列 */
	var yuragiConut = new Array();	/* 揺らぎのカウンター配列 */
	var kazeCount = 0;	/* 横風のカウンター */

	/* スクロール時のイベント登録（スクロールされても花びらがウィンドウ内に収まる様に） */
	document.addEventListener('scroll', function(){ scroll = document.documentElement.scrollTop || document.body.scrollTop; }, false);

	/* 花びら50枚用意する */
	for(var i = 0; i < 50; i++){
		var divHanabira = document.createElement('div');	/* 花びらの div を作る */
		divHanabira.id = 'hanabira' + i;	/* id を追加する（例：<div id="hanabira0">） */
		styleTop[i] = Math.random() * -1000 + scroll;	/* 初期表示位置（top）をランダムに取得 */
		styleLeft[i] = Math.random() * window.innerWidth;	/* 初期表示位置（left）をウィンドウの幅内でランダムに取得 */
		divHanabira.setAttribute('style', 'z-index:' + (styleZindex + i) + ';top:' + styleTop[i] + 'px;left:' + styleLeft[i] + 'px;');	/* 花びら div に style を追加 */
		var hanabiraClass = 'hana t' + (Math.floor(Math.random() * 6) + 1) + ' y' + (Math.floor(Math.random() * 6) + 1);	/* 花びら div の class を用意 */
		divHanabira.setAttribute('class', hanabiraClass);	/* 花びら div に class を追加 */
		divSakura.appendChild(divHanabira);	/* 大枠の div に花びら div を追加 */
		yuragi[i] = Math.random() * 40 + 5;	/* 揺らぐ幅をランダムに取得 */
		sokudo[i] = Math.random() * 5 + 2;	/* 落下速度をランダムに取得 */
		hanabiraId[i] = document.getElementById('hanabira' + i);	/* あとあと扱いやすい様に花びらに id を配列に格納 */
		yuragiConut[i] = 0;	/* 揺らぎカウンターの初期値は0 */
	}

	/* 花びらを動かす（45ミリ秒毎に繰り返し） */
	setInterval(function(){

		/* 花びらの位置を制御（50枚動かす） */
		for(var i = 0; i < 50; i++){
			if(styleTop[i] < scroll + windowHeight - 40){	/* 花びらの位置（top）がウィンドウ内なら */
				if(yuragi[i] >= yuragiConut[i]){	/* 揺らぐ幅（右へ移動）内なら */
					styleLeft[i] = styleLeft[i] + 0.5 + Math.random() * 0.5;
				}else{	/* 揺らぐ幅（左へ移動）内なら */
					styleLeft[i] = styleLeft[i] - 0.5 - Math.random() * 0.5;
				}
				if((yuragi[i] * 2) <= yuragiConut[i]){	/* ゆらぎの幅の2倍なら */
					yuragiConut[i] = 0;	/* カウンターリセット */
				}
			}else{	/* 花びらがウィンドウの下まできたら */
				styleTop[i] = scroll - 40;	/* 花びらを上に戻す（スクロール位置より-40） */
				styleLeft[i] = Math.random() * window.innerWidth;	/* 花びら表示位置（left）をランダムに */
			}


/* ここから横風 */

			/* 風カウンターの数値により右への移動を加算 */
			if(kazeCount >= 100 && kazeCount <= 110){ styleLeft[i] = styleLeft[i] + 1; }
			else if(kazeCount >= 111 && kazeCount <= 120){ styleLeft[i] = styleLeft[i] + 3; }
			else if(kazeCount >= 121 && kazeCount <= 129){ styleLeft[i] = styleLeft[i] + 5; }
			else if(kazeCount >= 130 && kazeCount <= 137){ styleLeft[i] = styleLeft[i] + 7; }
			else if(kazeCount >= 138 && kazeCount <= 144){ styleLeft[i] = styleLeft[i] + 9; }
			else if(kazeCount >= 145 && kazeCount <= 300){ styleLeft[i] = styleLeft[i] + 11; }
			else if(kazeCount >= 301 && kazeCount <= 311){ styleLeft[i] = styleLeft[i] + 9; }
			else if(kazeCount >= 312 && kazeCount <= 322){ styleLeft[i] = styleLeft[i] + 7; }
			else if(kazeCount >= 323 && kazeCount <= 335){ styleLeft[i] = styleLeft[i] + 5; }
			else if(kazeCount >= 336 && kazeCount <= 349){ styleLeft[i] = styleLeft[i] + 3; }
			else if(kazeCount >= 350 && kazeCount <= 354){ styleLeft[i] = styleLeft[i] + 1; }

			/* 風カウンターの数値により左への移動を加算 */
			else if(kazeCount >= 500 && kazeCount <= 510){ styleLeft[i] = styleLeft[i] - 1; }
			else if(kazeCount >= 511 && kazeCount <= 520){ styleLeft[i] = styleLeft[i] - 3; }
			else if(kazeCount >= 521 && kazeCount <= 529){ styleLeft[i] = styleLeft[i] - 5; }
			else if(kazeCount >= 530 && kazeCount <= 537){ styleLeft[i] = styleLeft[i] - 7; }
			else if(kazeCount >= 538 && kazeCount <= 544){ styleLeft[i] = styleLeft[i] - 9; }
			else if(kazeCount >= 545 && kazeCount <= 700){ styleLeft[i] = styleLeft[i] - 11; }
			else if(kazeCount >= 701 && kazeCount <= 711){ styleLeft[i] = styleLeft[i] - 9; }
			else if(kazeCount >= 712 && kazeCount <= 722){ styleLeft[i] = styleLeft[i] - 7; }
			else if(kazeCount >= 723 && kazeCount <= 735){ styleLeft[i] = styleLeft[i] - 5; }
			else if(kazeCount >= 736 && kazeCount <= 749){ styleLeft[i] = styleLeft[i] - 3; }
			else if(kazeCount >= 750 && kazeCount <= 754){ styleLeft[i] = styleLeft[i] - 1; }

			else if(kazeCount >= 900){ kazeCount = 0; }	/* カウンターリセット */

/* ここまで横風 */

			styleTop[i] = styleTop[i] + sokudo[i];	/* 表示位置（top）に速度分追加 */
			hanabiraId[i].style.top = styleTop[i] + 'px';	/* 実際に top に数値を反映させる */
			hanabiraId[i].style.left = styleLeft[i] + 'px';	/* 実際に left 数値を反映させる */
			yuragiConut[i]++;	/* 揺らぎカウンターに1足す */
		}
		kazeCount++;	/* 風カウンターに1足す */
	}, 45);
})();