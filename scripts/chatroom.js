$(document).ready(function(){
  var url = new URL(window.location.href);
  $(".userDes h5").text(url.searchParams.get("username"));
});
function sendMessage(){
      var send = document.getElementById("send");
      if(send.value != ""){
        var chatBox = document.getElementById("chatScreen");
        var chatDiv = document.createElement("DIV");
        var small = document.createElement("SMALL");
        var para = document.createElement("P");
        $(".startConvo").hide();
        small.innerHTML = "<i>You:<i>";
        chatDiv.className = "chat";
        para.innerText = send.value;
        chatDiv.appendChild(small);
        chatDiv.appendChild(para);
        chatBox.appendChild(chatDiv);
        send.value = "";
      }
    }
