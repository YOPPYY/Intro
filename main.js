// phina.js をグローバル領域に展開
phina.globalize();

var label=[];
// MainScene クラスを定義
phina.define('MainScene', {
  superClass: 'CanvasScene',
  init: function() {
    this.superInit();
    var self=this;
    // 背景色を指定
    this.backgroundColor = '#444';

    /*
    // ラベルを生成
    this.label = Label('TITLE').addChildTo(this);
    this.label.x = this.gridX.center(); // x 座標
    this.label.y = this.gridY.center()/2; // y 座標
    this.label.fill = 'white'; // 塗りつぶし色
*/

    var queue=group1;

    label=Label({
      x:640,
      y:25,
      text:'answer',
      fill:'white',
      fontSize:25,
      align:"right",
    }).addChildTo(self);

    for(var i=0; i<queue.length; i++){
      var t=queue[i];
      label[i]=Label({
        x:0,
        y:26+26*i,
        text:t,
        fill:'white',
        fontSize:25,
        align:"left",
      }).addChildTo(self);
    }

    //console.log(queue)
    var button = Button({
      width:200,
      heght:50,
      x:320,
      y:480,
      text:'再生',
    }).addChildTo(this);

    button.onclick=function(){
      if(!queue.length){this.exit();}
      var r= Math.floor(Math.random()*queue.length);
      //console.log(r)

      var ans = queue.splice(r,1);
      //var music = new Audio('sound/'+ ans +'.mp3');
      //music.play();  // 再生

      console.log(ans);
      label.text=ans;
      for(var i=0; i<queue.length+1; i++){
        if(label[i]){label[i].remove();}
      }

      for(var i=0; i<queue.length; i++){
        var t=queue[i];

        label[i]=Label({
          x:0,
          y:26+26*i,
          text:t,
          fill:'white',
          fontSize:25,
          align:"left",
        }).addChildTo(self);
      }

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
