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
var input = document.getElementsByTagName("input")[0];
// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementsByTagName("button")[1].click();
  }
});
