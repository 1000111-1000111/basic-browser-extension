document.onkeydown=function(event){
if(event.keyCode==82){
var chk=confirm("确认倒置？")
if(chk){
try{
var m=document.getElementsByClassName('messages')[0]
var messages=m.children
for(let i=messages.length-1;i>=0;i--) m.appendChild(messages[i])
}catch(error){
alert(error)
}
}
}
}
