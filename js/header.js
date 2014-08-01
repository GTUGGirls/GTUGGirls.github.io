var output = document.querySelector('core-scroll-header-panel');
document.addEventListener('core-media-change', function(e) {
  if(e.detail.matches) {
    output.setAttribute("condensedHeaderHeight", "120px");
    output.setAttribute("keepCondensedHeader", "false");
  }
  else {
    output.setAttribute("condensedHeaderHeight", "64px");
    output.setAttribute("keepCondensedHeader", "true");
  }
});

// custom transformation: scale header's title
var titleStyle = document.querySelector('.logo').style;
addEventListener('core-header-transform', function(e) {
  var d = e.detail;
  var m = d.height - d.condensedHeight;
  var scale = Math.max(0.6, (m - d.y) / (m / 0.4) + 0.6);
  titleStyle.paddingBottom = 18 + 72 * (scale - 0.6) / 0.4 + "px";
  titleStyle.fontSize = 3 + 2 * (scale - 0.6) / 0.4 + "em";
  titleStyle.paddingLeft = 10 + 15 * (scale - 0.6) / 0.4 + "px";
});
