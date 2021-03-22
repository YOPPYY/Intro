// phina.js をグローバル領域に展開
phina.globalize();

var ASSETS = 'list.js'
var i=0;

// MainScene クラスを定義
phina.define('MainScene', {
  superClass: 'CanvasScene',
  init: function() {
    this.superInit();
    // アセットローダー
    var loader = phina.asset.AssetLoader();
    // 背景色を指定
    this.backgroundColor = '#444';
    // ラベルを生成
    this.label = Label('TITLE').addChildTo(this);
    this.label.x = this.gridX.center(); // x 座標
    this.label.y = this.gridY.center()/2; // y 座標
    this.label.fill = 'white'; // 塗りつぶし色

    var queue=list;
    console.log(queue)
    var button = Button({
      width:200,
      heght:50,
      x:320,
      y:480,
    }).addChildTo(this);
    button.onclick=function(){

      var r= Math.floor(Math.random()*queue.length);
      console.log(r)


      var music = new Audio('sound/'+list[r].title+'.mp3');
      music.play();  // 再生
      queue.splice(r,1);
      console.log(queue);

    };

  },
});

// メイン処理
phina.main(function() {
  // アプリケーション生成
  var app = GameApp({
    startLabel: 'main', // メインシーンから開始する
  });
  // アプリケーション実行
  app.run();
});
