        $(document).ready(function(){
           $("#mtn").on('click',function(){

               // pour Mtn
            if($('input[name=mtn_paiement]').prop('checked'))
            {
                $("#by_mtn").show();
                $("#hide_orange").hide();
                $("#hide_ue").hide();
                $("#hide_yup").hide();
            }
            else
            {
                $("#by_mtn").hide();
                $("#hide_orange").show();
                $("#hide_ue").show();
                $("#hide_yup").show();
            }
           });



            $("#orange").on('click',function(){
                 // pour Orange
                if($('input[name=orange_paiement]').prop('checked'))
                {
                    $("#hide_mtn").hide();
                    $("#by_orange").show();
                    $("#hide_ue").hide();
                    $("#hide_orange").show();
                    $("#hide_yup").hide();
                }
                else
                {
                    $("#hide_mtn").show();
                    $("#by_orange").hide();
                    $("#hide_ue").show();
                    $("#hide_yup").show();
                    $("#hide_orange").show();
                }


           });


            $("#ue").on('click',function(){
            // pour Ue
                if($('input[name=ue_paiement]').prop('checked'))
                {
                    $("#hide_mtn").hide();
                    $("#hide_orange").hide();
                    $("#by_ue").show();
                    $("#hide_ue").show();
                    $("#hide_yup").hide();
                }
                else
                {
                    $("#hide_mtn").show();
                    $("#hide_orange").show();
                    $("#by_ue").hide();
                    $("#hide_ue").show();
                    $("#hide_yup").show();
                }
           });

           $("#yup").on('click',function(){
           // pour yup
               if($('input[name=yup_paiement]').prop('checked'))
               {
                   $("#hide_mtn").hide();
                   $("#hide_ue").hide();
                   $("#by_yup").show();
                   $("#hide_orange").hide();
                   $("#hide_yup").show();
               }
               else
               {
                   $("#hide_mtn").show();
                   $("#hide_orange").show();
                   $("#hide_ue").show();
                   $("#hide_yup").show();
                   $("#by_yup").hide();
               }
          });

        });