var links = document.getElementsByTagName("a");
for(var i=0;i<links.length;i++){
if(links[i].href.includes("/out/")){
links[i].href = atob(links[i].href.split("?")[1]);
}
}




