<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class CloutController extends BaseController
{
    /**
     * @Route("/clout", name="clout")
     */
    public function indexAction()
    {
        return $this->render('clout/index.html.twig');
    }
}