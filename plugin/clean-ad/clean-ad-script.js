;
$(function() {

var cleanAd = {
  clear: function() {
      var ad_ids = ['google_image_div','google_image_div'];
      for (var i = 0; i < ad_ids.length; i++) {
            $('#' + ad_ids[i]).remove();
      }
  },
  init: function() {
    this.clear();
  }
}

  $(document).ready(function() {
        clearAd.init();

        //为防止ajax异步延时加载的广告隔4s再清除一次
        setTimeout(function() {
            clearAd.init();
        }, 4000)
    });

});
