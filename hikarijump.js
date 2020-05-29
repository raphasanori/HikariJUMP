var links = document.getElementsByTagName("a");
for(var i=0;i<links.length;i++){
if(links[i].href.includes("/out/")){
links[i].href = atob(links[i].href.split("?")[1]);
}
}

var all = document.styleSheets;
for(var i=0;i<all.length;i++){
if(all[i].href == null){
var b = all[i].rules[0].cssText;
if(b.includes("selection")){
all[i].disabled = true;
}
}
}
