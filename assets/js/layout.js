'use strict';

import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss'; 
import 'font-awesome/scss/font-awesome.scss';
import 'simple-line-icons/scss/simple-line-icons.scss';
import '../scss/main.scss';
import '../scss/Chart.scss';
import '../scss/DataTable.scss';
import '../scss/Card.scss';
import 'whatwg-fetch';
import 'promise-polyfill/src/polyfill';

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
