$(document).ready(function() {
	$(".button_send").click(function(e){

		var resultat = true;
		var newsletter = $("input[name='newsletter']").val();
		var newsletter_regex 	= /^[\w%_\-.\d]+@[\w.\-]+.[A-Za-z]{2,6}$/; // reg ex email check

		if(newsletter == "") {
			$("span.val_email_").html("Veuillez renseigner votre email.").addClass('validate').css("color","red");
			resultat = false;
		} else {
			if(!newsletter_regex.test(newsletter)){ // if invalid email
				$("span.val_email_").html("votre email est invalide.").addClass('validate').css("color","red");
				resultat = false;
			} 

			/*else {
				alert("Bravo inscription à la newsletter réuissie");
				$(newsletter).text("Votresse adresse email");
				$("span.val_email_").html("Bravo inscription réuissi");
			}*/
		}
		return resultat;
	});
});
