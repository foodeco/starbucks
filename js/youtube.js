let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  // 'player'는 
  // <div id="player"></div>를 찾으므로
  // #player와 같이 앞에 무언가를 붙일 필요 없음
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8',
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: 'An6LvWQuj_8',
    },
    events: {
      onReady: function (e) {
        e.target.mute()
      }
    },
  });
}