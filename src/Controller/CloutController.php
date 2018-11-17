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
        // todo retrieve data model from db
        // todo serialize model into json format

        $cloutCelebAppProps = [
            'celebData' => [],
        ];

        $cloutCelebAppProps['celebData'][] = [
            "id" => 1,
            "name" => "Tyga",
            "symbol" => "TYGA",
            "current_price" => 191.76,
            "price_diff" => -13.42,
            "percent_diff" => 7,
            "timespan" => '7 days'
        ];

        $cloutCelebAppProps['celebData'][] = [
            "id" => 2,
            "name" => "Justin Bieber",
            "symbol" => "JBIEB",
            "current_price" => 2070.08,
            "price_diff" => 41.21,
            "percent_diff" => 2,
            "timespan" => '7 days'
        ];

        return $this->render('clout/index.html.twig', array (
            'cloutCelebAppProps' => $cloutCelebAppProps,
        ));
    }

    /**
     * @Route("/about", name="about")
     */
    public function getAboutPage()
    {
        return $this->render('clout/about.html.twig');
    }
}
