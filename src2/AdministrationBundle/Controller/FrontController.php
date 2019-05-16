<?php

namespace DKK\AdministrationBundle\Controller;

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
		return $this->render('DKKAdministrationBundle:Front:nomTwig.html.twig');
	}

	public function indexAction(){
		return $this->render('DKKAdministrationBundle:Front:index.html.twig');
	} 
	public function receptionAction(){ 
		return $this->render('DKKAdministrationBundle:Front:reception.html.twig');
	}
	public function corbeilleAction(){ 
		return $this->render('DKKAdministrationBundle:Front:corbeille.html.twig');
	} 
	public function email_sendAction(){ 
		return $this->render('DKKAdministrationBundle:Front:email_send.html.twig');
	}

	public function email_send_viewAction(){ 
		return $this->render('DKKAdministrationBundle:Front:email_send_view.html.twig');
	}


	public function email_composAction(){ 
		return $this->render('DKKAdministrationBundle:Front:email_compose.html.twig');
	}
 
	public function read_emailAction(){ 
		return $this->render('DKKAdministrationBundle:Front:read_email.html.twig');
	}
	
	public function calandrierAction(){ 
		return $this->render('DKKAdministrationBundle:Front:calandrier.html.twig');
	} 

	
	public function periodiciteAction(){ 
		return $this->render('DKKAdministrationBundle:Front:periodicite.html.twig');
	} 

	public function modifier_heure_rdvAction(){ 
		return $this->render('DKKAdministrationBundle:Front:modifier_heure_rdv.html.twig');
	}

	public function autorisationAction(){ 
		return $this->render('DKKAdministrationBundle:Front:autorisation.html.twig');
	}

	public function modifier_autorisationAction(){ 
		return $this->render('DKKAdministrationBundle:Front:modifier_autorisation.html.twig');
	}
	public function restrictionAction(){ 
		return $this->render('DKKAdministrationBundle:Front:restriction.html.twig');
	}
	public function notification_emailAction(){ 
		return $this->render('DKKAdministrationBundle:Front:notification_email.html.twig');
	}
	public function notification_smsAction(){ 
		return $this->render('DKKAdministrationBundle:Front:notification_sms.html.twig');
	} 
	public function regarder_notification_emailAction(){ 
		return $this->render('DKKAdministrationBundle:Front:regarder_notification_email.html.twig');
	} 
	public function regarder_notification_smsAction(){ 
		return $this->render('DKKAdministrationBundle:Front:regarder_notification_sms.html.twig');
	}
	public function prestataireAction(){ 
		return $this->render('DKKAdministrationBundle:Front:prestataire.html.twig');
	} 

	public function ressourceAction(){ 
		return $this->render('DKKAdministrationBundle:Front:ressource.html.twig');
	}
	
	public function modification_du_prestataireAction(){ 
		return $this->render('DKKAdministrationBundle:Front:modification_prestataire.html.twig');
	}

	public function modifier_prestation_uniqueAction(){ 
		return $this->render('DKKAdministrationBundle:Front:modifier_prestation_unique.html.twig');
	}

	
	public function prestationAction(){ 
		return $this->render('DKKAdministrationBundle:Front:prestation.html.twig');
	}

	public function prestation_groupeAction(){ 
		return $this->render('DKKAdministrationBundle:Front:prestation_groupe.html.twig');
	} 

	public function modifier_prestation_groupeAction(){ 
		return $this->render('DKKAdministrationBundle:Front:modifier_prestation_groupe.html.twig');
	} 

	public function serviceAction(){ 
		return $this->render('DKKAdministrationBundle:Front:service.html.twig');
	}

	public function e_serviceAction(){ 
		return $this->render('DKKAdministrationBundle:Front:e_service.html.twig');
	}

	public function accesAction(){ 
		return $this->render('DKKAdministrationBundle:Front:acces.html.twig');
	}

	public function modifier_accesAction(){ 
		return $this->render('DKKAdministrationBundle:Front:modifier-acces.html.twig');
	}

	public function paiementAction(){ 
		return $this->render('DKKAdministrationBundle:Front:paiement.html.twig');
	}

	public function modifier_prestation_serviceAction(){ 
		return $this->render('DKKAdministrationBundle:Front:modifier_prestation_service.html.twig');
	}

	public function clientAction(){ 
		return $this->render('DKKAdministrationBundle:Front:client.html.twig');
	}

	public function view_clientAction(){ 
		return $this->render('DKKAdministrationBundle:Front:view_client.html.twig');
	}

	public function paiement_en_ligneAction(){ 
		return $this->render('DKKAdministrationBundle:Front:paiement_en_ligne.html.twig');
	}

	public function paiement_virementAction(){ 
		return $this->render('DKKAdministrationBundle:Front:paiement_virement.html.twig');
	}

	public function paiement_chequeAction(){ 
		return $this->render('DKKAdministrationBundle:Front:paiement_cheque.html.twig');
	} 
	public function historiqueAction(){ 
		return $this->render('DKKAdministrationBundle:Front:historique.html.twig');
	}

	public function diagrammeAction(){ 
		return $this->render('DKKAdministrationBundle:Front:diagramme.html.twig');
	}

	public function compteAction(){ 
		return $this->render('DKKAdministrationBundle:Front:compte.html.twig');
	}

	public function agendaAction(){ 
		return $this->render('DKKAdministrationBundle:Front:agenda.html.twig');
	}

	public function agenda_tab_prestataireAction(){ 
		return $this->render('DKKAdministrationBundle:Front:agenda_tab_prestataire.html.twig');
	}
	public function agenda_tab_prestationAction(){ 
		return $this->render('DKKAdministrationBundle:Front:agenda_tab_prestation.html.twig');
	} 
	
	public function agenda_tab_tacheAction(){ 
		return $this->render('DKKAdministrationBundle:Front:agenda_tab_tache.html.twig');
	}

	public function agenda_tab_planningAction(){ 
		return $this->render('DKKAdministrationBundle:Front:agenda_tab_planning.html.twig');
	}

	public function agenda_tab_liste_clientAction(){ 
		return $this->render('DKKAdministrationBundle:Front:agenda_tab_liste_client.html.twig');
	}

	public function agenda_tab_actionAction(){ 
		return $this->render('DKKAdministrationBundle:Front:agenda_tab_action.html.twig');
	}

	public function agenda_creer_clientAction(){ 
		return $this->render('DKKAdministrationBundle:Front:agenda_creer_client.html.twig');
	}
	
	public function agenda_creer_planningAction(){ 
		return $this->render('DKKAdministrationBundle:Front:agenda_creer_planning.html.twig');
	}

	public function agenda_prendre_rdvAction(){ 
		return $this->render('DKKAdministrationBundle:Front:agenda_prendre_rdv.html.twig');
	}

	public function agenda_modifier_rdvAction(){ 
		return $this->render('DKKAdministrationBundle:Front:agenda_modifier_rdv.html.twig');
	}

	public function agenda_presenceAction(){ 
		return $this->render('DKKAdministrationBundle:Front:agenda_presence.html.twig');
	}
	

}