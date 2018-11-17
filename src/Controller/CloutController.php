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

        $cloutCelebAppProps['celebData'][] = [
            "id" => 3,
            "name" => "Lovely The Band",
            "symbol" => "LVLY",
            "current_price" => 1.83,
            "price_diff" => 0.20,
            "percent_diff" => 11,
            "timespan" => '7 days'
        ];

        $cloutCelebAppProps['celebData'][] = [
            "id" => 4,
            "name" => "Ariana Grande",
            "symbol" => "ARIG",
            "current_price" => 580.25,
            "price_diff" => 2.21,
            "percent_diff" => 4,
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
