require(['mSwiper'], function(mSwiper) {
  var options = {
    selector: "#selector",  // 节点选择
    isAutoPlay: true,       // 是否自动播放
    autoPlayTime: 3000,     // 设置自动播放时间
  }
  var mSwiper = new mSwiper(options);
})