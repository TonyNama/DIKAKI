  $(document).ready(function(){
                   var speed = 400;

                    // Question handler
                    $("li.q2").on("click", function(){
                        // Get next element
                        $(this).next()
                            // Toggle answer
                            .slideToggle(speed)
                                // Select all other answers
                                .siblings("li.a2")
                                    // Close other answers
                                    .slideUp();

                        // Get image for active question
                        var img = $(this).children("img");
                        // Remove the 'rotate' class for all images except the active
                        $("img").not(img).removeClass("rotate2");

                        // Toggle Rotate Class
                        img.toggleClass("rotate2");

    });

                   });