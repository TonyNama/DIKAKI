  $(".add_btn_").on('click',function(e){
                            e.preventDefault();
                            $('#selected').show();
                            $('.div_btn').hide();
                            $('#supprimer').show();

                        });

                        $("#supprimer").on('click',function(e){
                            e.preventDefault();
                            $('.delate').hide();
                            $('#selected').hide();
                            $('.div_btn').show();
                            });


                          $(".chooseDate").click(function(){
                              $("#minicalContainer").toggle();
                            });
