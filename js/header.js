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

