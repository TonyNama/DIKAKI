<?php

namespace DKK\ProfessionnelBundle\Controller;

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
		return $this->render('DKKProfessionnelBundle:Front:nomTwig.html.twig');
	}

	public function choixAction(){
		return $this->render('DKKProfessionnelBundle:Front:choix.html.twig');
	}

	
}