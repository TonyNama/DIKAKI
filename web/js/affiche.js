  $('.read_more').prev().hide();
        $('.read_more').on("click",function(e){
        e.preventDefault();
        if($(this).prev().is(":hidden"))
        {
            $(this).text("Lire moins").css('color','#28abe2').css('font-weight','700').css('margin-left','30px');
        }
        else
        {
            $(this).text("Lire la suite");
        }
        $(this).prev().toggle("slow"); 
       });