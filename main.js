// phina.js をグローバル領域に展開
phina.globalize();

var label=[];
    var choice=[];
// MainScene クラスを定義
phina.define('MainScene', {
  superClass: 'CanvasScene',
  init: function() {
    this.superInit();
    var self=this;
    // 背景色を指定
    this.backgroundColor = '#444';


    var queue = group1;
    var select = queue;
    var r= Math.floor(Math.random()*queue.length);
    var ans = queue[r];

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

    var button = Button({
      width:200,
      height:50,
      x:320,
      y:480,
      text:'再生',
    }).addChildTo(this);

    var button2 = Button({
      width:200,
      height:50,
      x:320,
      y:580,
      text:'NEXT',
    }).addChildTo(this);


    MakeButton();
    ButtonText();
    function MakeButton(){

    for(var i=0; i<4; i++){
      choice[i]=Button({
        width:300,
        height:20,
        x:640*3/4,
        y:960-120+30*i,
        text:i,
        fontSize:16,
        fill:'blue',
      }).addChildTo(self);
    }

  }

  function ButtonText(){

  for(var i=0; i<4; i++){
    choice[i].text=queue[i];
  }
  choice[0].onclick=function(){console.log(choice[0].text)}
  choice[1].onclick=function(){console.log(choice[1].text)}
  choice[2].onclick=function(){console.log(choice[2].text)}
  choice[3].onclick=function(){console.log(choice[3].text)}

}

    button.onclick=function(){
      console.log(ans);

      SoundManager.play(ans);
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

    button2.onclick=function(){
      if(!queue.length){this.exit();}
      queue.splice(r,1);
      var r= Math.floor(Math.random()*queue.length);
      ans = queue[r];
      console.log(ans);
    }



  },
});

// メイン処理
phina.main(function() {
  // アプリケーション生成
  var app = GameApp({
    startLabel: 'main', // メインシーンから開始する
    assets: ASSETS
  });
  // アプリケーション実行
  app.run();
});
