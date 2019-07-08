<?php

namespace DKK\AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Description of AppController
 *
 * @author Anthony NAMA 
 */
class FrontController extends Controller {

    public function erreurAction() {
        return $this->render('DKKAppBundle:Front:404.html.twig');
    }

    public function fonctionnaliteAction() {
        return $this->render('DKKAppBundle:Front:fonctionnalite.html.twig');
    }

    public function devisAction() {
        return $this->render('DKKAppBundle:Front:devis.html.twig');
    }

    public function demonstrationAction() {
        return $this->render('DKKAppBundle:Front:demonstration.html.twig');
    }

    public function choixAction() {
        return $this->render('DKKAppBundle:Front:choix-rdv.html.twig');
    }

    public function coordonneAction() {
        return $this->render('DKKAppBundle:Front:coordonne.html.twig');
    }

    public function reservationAction() {
        return $this->render('DKKAppBundle:Front:reservation.html.twig');
    }

    public function confirmationAction() {
        return $this->render('DKKAppBundle:Front:confirmation.html.twig');
    }

    public function paiementAction() {
        return $this->render('DKKAppBundle:Front:paiement.html.twig');
    }

    public function validationAction() {
        return $this->render('DKKAppBundle:Front:validation.html.twig');
    }

    public function voirAction() {
        return $this->render('DKKAppBundle:Front:voir.html.twig');
    }

    public function searchAction() {
        return $this->render('DKKAppBundle:Front:search.html.twig');
    }

    public function prendreAction() {
        return $this->render('DKKAppBundle:Front:prendre.html.twig');
    }

    public function tab_coordonneeAction() {
        return $this->render('DKKAppBundle:Front:tab_coordonnee.html.twig');
    }

    public function powerAction() {
        return $this->render('DKKAppBundle:Front:power.html.twig');
    }

    public function a_qui_s_adresse_dikakiAction() {
        return $this->render('DKKAppBundle:Front:a_qui_s_adresse_dikaki.html.twig');
    }

    public function metion_legaleAction() {
        return $this->render('DKKAppBundle:Front:metion_legale.html.twig');
    }

    public function blogAction() {
        return $this->render('DKKAppBundle:Front:blog.html.twig');
    }

    public function aproposAction() {
        return $this->render('DKKAppBundle:Front:apropos.html.twig');
    }

    public function nouvellesAction() {
        return $this->render('DKKAppBundle:Front:nouvelles.html.twig');
    }

    public function aideAction() {
        return $this->render('DKKAppBundle:Front:aide.html.twig');
    }

    public function rejoindreAction() {
        return $this->render('DKKAppBundle:Front:rejoindre.html.twig');
    }

    public function cguAction() {
        return $this->render('DKKAppBundle:Front:cgu.html.twig');
    }

    public function demander_devisAction() {
        return $this->render('DKKAppBundle:Front:demander_devis.html.twig');
    }

    public function demander_demoAction() {
        return $this->render('DKKAppBundle:Front:demander_demo.html.twig');
    }
}
