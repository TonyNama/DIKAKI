  // au clic sur un lien
                $('.a').on('click', function(evt){
                   // bloquer le comportement par défaut: on ne rechargera pas la page
                   evt.preventDefault();
                   // enregistre la valeur de l'attribut  href dans la variable target
                var target = $(this).attr('href');
                   /* le sélecteur $(html, body) permet de corriger un bug sur chrome
                   et safari (webkit) */
                $('html, body')
                   // on arrête toutes les animations en cours
                   .stop()
                   /* on fait maintenant l'animation vers le haut (scrollTop) vers
                    notre ancre target */
                   .animate({scrollTop: $(target).offset().top}, 1000 );
                });
                
                //un autrecode 
                
                $("#shom_textarea").on('click',function(e){
            e.preventDefault();
              $(".message_send").toggle();
          });
                
                //encore un aure code 
                
                 $('#me').on('click',function(){
                $("#affiche_btn").show().css('margin-bottom','40px');
                $(".margin_other_personn").hide();
            });
            $('#other').on('click',function(){
                $(".margin_other_personn").show();
                $("#affiche_btn").hide();
            });

    //pour les paiement 

