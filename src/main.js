import './styles.css';
// import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getDoctors } from './js/doctor_api.js';

getDoctors();

$(document).ready(function() {
  $("#doctor-form").submit(function(event) {
    event.preventDefault();

    const medicalIssue = $("#medical-issue").val();
    console.log(medicalIssue);
  })
})
