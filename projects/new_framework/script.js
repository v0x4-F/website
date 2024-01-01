const mediaQueryList = window.matchMedia("(max-width:959px)");

/**
 * イベントリスナー
 */
const listener = (event) => {
  // リサイズ時に行う処理
  // 複数の条件で分岐させたい
  if (event.matches) {
    // 960px以上
    console.log('Windowsize Breakpoint(<=960px)');
  } else {
    // 960px未満
	// ゆくゆくは#col2の中身を全部#col1へ持って行ってソートしたい
    console.log('Windowsize Breakpoint(>960px)');

	var src = document.getElementById("src");
	var dest = document.getElementById("dest");

	var df = document.createDocumentFragment();
	var e;
	while (e = src.firstChild) {
		df.appendChild(e);
	}
	dest.appendChild(df);
  }
};

// リスナー登録
// mediaQueryList.addListener(listener); // @deprecated
mediaQueryList.addEventListener("change", listener);

// 初期化処理
listener(mediaQueryList);