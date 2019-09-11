var div=document.getElementById("hello");
div.style.backgroundColor="#0045";
div.style.height="100px";
div.style.width="200px";
div.style.padding="50px 50px";
div.style.borderRadius="5px 20000px"
div.style.boxShadow="grey 5px 5px 5px";
var p = document.createElement("p");
p.style.color="red";
p.style.fontStyle.fontsize="italic";
var text = "Java Script is really interesting";
p.innerHTML=text;
div.appendChild(p)
