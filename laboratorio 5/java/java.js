document.write(5+1)

var msg
msg="bienvenido"
window.alert(msg)

var button=document.createElement("button");
button.innerHTML="Pinchar aqui";
var body=document.getElementsByTagName("body")[0];
body.appendChild(button);
button.addEventListener("click",function()
{
    document.write(5+1);
});

console.log(5+1);

var objeto ={
    size:12
}

for (i=0;i<10;i++){
    console.log("texto diferente");
}

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  }