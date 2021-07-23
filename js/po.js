const image01src = 'url("img/image001.jpg")';
const image02src = 'url("img/image002.jpg")';
const image03src = 'url("img/image003.jpg")';
const image04src = 'url("img/image004.jpg")';
const image05src = 'url("img/image005.jpg")';
const image06src = 'url("img/image006.jpg")';
const image07src = 'url("img/image007.jpg")';
const image08src = 'url("img/image008.jpg")';
function nextImage() {
  const header = document.getElementById('top');
  const nowBg = header.style.backgroundImage;
  console.log(nowBg);

  if (nowBg == image01src) {
    // 今1枚め
    header.style.backgroundImage = image02src;
  } else if (nowBg == image02src) {
    // 今2枚め
    header.style.backgroundImage = image03src;
  } else if (nowBg == image03src) {
    // 今3枚め
    header.style.backgroundImage = image04src;
  } else if (nowBg == image04src) {
    // 今4枚め
    header.style.backgroundImage = image05src;
  } else if (nowBg == image05src) {
    // 今5枚め
    header.style.backgroundImage = image06src;
  } else if (nowBg == image06src) {
    // 今6枚め
    header.style.backgroundImage = image07src;
  } else if (nowBg == image07src) {
    // 今7枚め
    header.style.backgroundImage = image08src;
  } else {
    // 今8枚め
    header.style.backgroundImage = image01src;
  }
}

function prevImage() {
  const header = document.getElementById('top');
  const nowBg = header.style.backgroundImage;
  console.log(nowBg);

  if (nowBg == image01src) {
    // 今1枚め TODO:
    header.style.backgroundImage = image08src;
  } else if (nowBg == image02src) {
    // 今2枚め TODO:
    header.style.backgroundImage = image01src;
  } else if (nowBg == image03src) {
    // 今3枚め TODO:
    header.style.backgroundImage = image02src;
  } else if (nowBg == image04src) {
    // 今4枚め TODO:
    header.style.backgroundImage = image03src;
  } else if (nowBg == image05src) {
    // 今5枚め TODO:
    header.style.backgroundImage = image04src;
  } else if (nowBg == image06src) {
    // 今6枚め TODO:
    header.style.backgroundImage = image05src;
  } else if (nowBg == image07src) {
    // 今7枚め TODO:
    header.style.backgroundImage = image06src;
  } else {
    // 今8枚め TODO:
    header.style.backgroundImage = image07src;
  }
}

// ページが表示されたタイミングで実行したい処理を書く
document.getElementById('top').style.backgroundImage = image01src;
document.getElementById('sc-to-left').addEventListener('click', prevImage);
document.getElementById('sc-to-right').addEventListener('click', nextImage);

// タイマーセット
setInterval(nextImage, 5000);
$(function() {
 
    //マウスを乗せたら発動
    $('a').hover(function() {
   
      //マウスを乗せたら色が変わる
      $(this).css('background', '#90EE90');
   
    //ここにはマウスを離したときの動作を記述
    }, function() {
   
      //色指定を空欄にすれば元の色に戻る
      $(this).css('background', '');
   
    });
  });
  $(function() {
   
    //マウスを乗せたら発動
    $('b').hover(function() {
   
      //マウスを乗せたら色が変わる
      $(this).css('background', '#FFFF00');
   
    //ここにはマウスを離したときの動作を記述
    }, function() {
   
      //色指定を空欄にすれば元の色に戻る
      $(this).css('background', '');
   
    });
  });
  $(function() {
   
    //マウスを乗せたら発動
    $('img').hover(function() {
   
      //マウスを乗せたら色が変わる
      $(this).css('background', '#FFFF00');
   
    //ここにはマウスを離したときの動作を記述
    }, function() {
   
      //色指定を空欄にすれば元の色に戻る
      $(this).css('background', '');
   
    });
  });