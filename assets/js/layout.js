'use strict';

import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss'; 
import 'font-awesome/scss/font-awesome.scss';
import 'simple-line-icons/scss/simple-line-icons.scss';
import '../scss/main.scss';
import "./components/Chart.css"//dont like this at all
import "./components/DataTable.css"//dont like this at all
import "./components/Card.css"//dont like this at all
import 'whatwg-fetch';
import 'promise-polyfill/src/polyfill';

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
