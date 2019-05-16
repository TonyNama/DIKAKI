<?php

namespace DKK\UtilisateurBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Description of AppController
 *
 * @author Anthony NAMA
 */
class FrontController extends Controller {
	
	public function nomAction(){
		return $this->render('DKKUtilisateurBundle:Front:nomTwig.html.twig');
	}

	public function modifierAction(){
		return $this->render('DKKAppBundle:Front:modifier.html.twig');
	}
    
    public function historiqueAction(){
		return $this->render('DKKAppBundle:Front:historique.html.twig');
	} 
    
    

	public function profileAction(){
		return $this->render('DKKUtilisateurBundle:Front:profile.html.twig');
	}

	public function inscriptionAction(){
		return $this->render('DKKUtilisateurBundle:Front:inscription.html.twig');
	}
	public function connexionAction(){
		return $this->render('DKKUtilisateurBundle:Front:connexion.html.twig');
	}

	

}