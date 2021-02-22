$(document).ready(function() {
    $(".bg-content").hide();
    $(".bg-content").fadeIn(1500);
    var search = $(".upContacts input")
    search.focusin(function(){
      if(search.val() == 0){
        $(".bg-content h3").css({"filter":"blur(6px)"});
        $(".chip").css({"filter":"blur(6px)"});
      }
    });
    search.focusout(function(){
      $(".bg-content h3").css({"filter":"blur(0px)"});
      $(".chip").css({"filter":"blur(0px)"});
    });
    search.keyup(function() {
      var chips = $(".chip")
      for(i=1;i<chips.length;i++){
        text = chips[i].innerText || chips[i].textContent;
        if(text.toLowerCase().indexOf($(this).val().toLowerCase()) > -1){
          chips[i].style.filter = "blur(0px)";
          chips[i].style.display='';
        }
        else{
          chips[i].style.display='none';
        }
      }
    });
  });
