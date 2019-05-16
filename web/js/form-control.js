 $("#signupForm").validate({
        rules: {
          secteur: "required",
          jour: "required",
          mois: "required",
          annee: "required",
          sexe: "required",
          activiter: "required",
          objet: "required",
          pays: "required",
          ville: "required",
          firstname: {
            required: true,
            minlength: 2
          },
          comment: {
            required: true,
            minlength: 20
          },
          lastname: {
            required: false,
            minlength: 2
          },
          entreprise: {
            required: true,
            minlength: 2
          },
          phone: {
            required: true,
            number: true,
            minlength: 9,
            maxlength: 9
          },
            
        password: {
            required: true,
            minlength: 6
          },
          confirm_password: {
            required: true,
            minlength: 6,
            equalTo:"#password"
          },

            naisssance: {
            required: true,
            minlength: 3
          },

          email: {
            required: true,
            email: true
          }

        },
        messages: {
          firstname: {
            required: "<span style='color:#dd4f43'>Nom réquis</span>",
            minlength: "<span style='color:#dd4f43'> 2 caractères minimum</span>"
          },
          lastname: {
            required: "<span style='color:#dd4f43'>Prenom réquis</span>",
            minlength: "<span style='color:#dd4f43'>2 caractères minimum</span>"
          },
          entreprise: {
            required: "<span style='color:#dd4f43'>champs réquis</span>",
            minlength: "<span style='color:#dd4f43'>2 caractères minimum</span>"
          },
          phone: {
            required: "<span style='color:#dd4f43'>Champs réquis",
            minlength: "<span style='color:#dd4f43'>9 caractères minimum</span>",
            maxlength: "<span style='color:#dd4f43'>Pas plus de 9 caractères</span>",
            number:"<span style='color:#dd4f43'>Numéro invalide</span>"
          },
            
            password: {
            required: "<span style='color:#dd4f43'>Champs réquis",
            minlength: "<span style='color:#dd4f43'>6 caractères minimum</span>",
          },
            
          fixe: {
            minlength: "<span style='color:#dd4f43'>9 caractères minimum</span>",
            number:"<span style='color:#dd4f43'>Numéro invalide</span>"
          },
          comment: {
            required: "<span style='color:#dd4f43'>Champs réquis</span>",
            minlength: "<span style='color:#dd4f43'>20 caractères minimum</span>",
          },
         
            
            naisssance: {
            required: "<span style='color:#dd4f43'>champs réquis</span>",
            minlength: "<span style='color:#dd4f43'>3 caractères minimum</span>"
          },
            
          confirm_password: {
            required: "<span style='color:#dd4f43'>Mot de passe de confirmation</span>",
            minlength: "<span style='color:#dd4f43'>6 caractères minimum</span>",
            equalTo: "<span style='color:#dd4f43'>Mot de passe sont differents</span>"
          },
            
          email: "<span style='color:#dd4f43'>Email invalide</span>",
          secteur: "<span style='color:#dd4f43'>Secteur d'activité réquis</span>",
          agree: "<span style='color:#dd4f43'>Accepter les conditions d'utilisation</span>",
          jour: "<span style='color:#dd4f43'>Jour</span>",
          mois: "<span style='color:#dd4f43'>Mois</span>",
          annee: "<span style='color:#dd4f43'>Annee</span>",
          sexe: "<span style='color:#dd4f43'>Sexe</span>",
          activiter: "<span style='color:#dd4f43'>Activité réquis</span>",
          objet: "<span style='color:#dd4f43'>Objet réquis</span>",
          pays: "<span style='color:#dd4f43'>Pays réquis</span>",
          ville: "<span style='color:#dd4f43'>Ville réquise</span>",
            
        }
      });

//lire la suite 
    
   