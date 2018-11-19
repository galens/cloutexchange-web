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
            "timespan" => '7 days',
            "labels" => array("1/1 0:00", "1/1 6:00", "1/1 12:00", "1/1 18:00"),
            "data" => array(205, 201, 198, 191)
        ];

        $cloutCelebAppProps['celebData'][] = [
            "id" => 2,
            "name" => "Justin Bieber",
            "symbol" => "JBIEB",
            "current_price" => 2070.08,
            "price_diff" => 41.21,
            "percent_diff" => 2,
            "timespan" => '7 days',
            "labels" => array ("1/1 0:00","1/1 6:00","1/1 12:00","1/1 18:00","1/2 0:00","1/1 0:00","1/1 6:00","1/1 12:00","1/1 18:00","1/2 0:00","1/1 0:00","1/1 6:00","1/1 12:00","1/1 18:00","1/2 0:00","1/1 0:00","1/1 6:00","1/1 12:00","1/1 18:00","1/2 0:00","1/2 0:00","1/2 0:00","1/2 0:00","1/2 0:00","1/2 0:00","1/2 0:00","1/2 0:00"),
            "data" => array (2030,2031,2032,2034,2037,2038,2041,2042,2044,2046,2047,2049,2050,2051,2053,2054,2055,2056,2057,2058,2060,2062,2064,2065,2067,2068,2071)
        ];

        $cloutCelebAppProps['celebData'][] = [
            "id" => 3,
            "name" => "Lovely The Band",
            "symbol" => "LVLY",
            "current_price" => 1.83,
            "price_diff" => 0.20,
            "percent_diff" => 11,
            "timespan" => '7 days',
            "labels" => array("1/1 0:00", "1/1 6:00", "1/1 12:00", "1/1 18:00", "1/2 0:00"),
            "data" => array(1.63, 1.68, 1.75, 1.80, 1.83)
        ];

        $cloutCelebAppProps['celebData'][] = [
            "id" => 4,
            "name" => "Ariana Grande",
            "symbol" => "ARIG",
            "current_price" => 580.25,
            "price_diff" => 2.21,
            "percent_diff" => 4,
            "timespan" => '7 days',
            "labels" => array("1/1 0:00", "1/1 6:00", "1/1 12:00", "1/1 18:00", "1/2 0:00", "1/2 6:00"),
            "data" => array(577.75, 578.20, 578.50, 579.20, 579.80, 580)
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
