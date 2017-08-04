// strip URLs for google's analytics
var as = document.getElementsByTagName("a");
for (var i = 0; i < as.length; i ++) {
  if (as[i].hasAttribute("onmousedown")) {
    as[i].setAttribute("onmousedown", "");
  }
}
