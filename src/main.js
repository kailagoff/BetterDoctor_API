import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Doctor } from './js/doctor_api.js';


const showSymptoms = function(response) {
  if (response.data.length == 0) {
    $('#errors').text("No doctors match your search.")
  } else {
      for(let i = 0; i < response.data.length; i++) {
        let firstName = response.data[i].profile.first_name;
        let lastName = response.data[i].profile.last_name;
        let street = response.data[i].practices[i].visit_address.street;
        let city = response.data[i].practices[i].visit_address.city;
        let state = response.data[i].practices[i].visit_address.state;
        let zipcode = response.data[i].practices[i].visit_address.zip;
        let newPatient = response.data[i].practices[i].accepts_new_patients;

        $('#results').append(`<h6> ${firstName} ${lastName} ${street} ${city} ${state} ${zipcode} ${newPatient}</h6>`);//this line also doesnt work
      }
    }
  }

const showDoctors = function(response) {
  if (response.data.length == 0) {
    $("#errors").text("No doctors that match your search.")
  } else {
  for(let i = 0; i < response.data.length; i++) {
    let firstName = response.data[i].profile.first_name;
    let lastName = response.data[i].profile.last_name;
    let street = response.data[i].practices[i].visit_address.street;
    let city = response.data[i].practices[i].visit_address.city;
    let state = response.data[i].practices[i].visit_address.state;
    let zipcode = response.data[i].practices[i].visit_address.zip;
    let newPatient = response.data[i].practices[i].accepts_new_patients;
    $('#results').append(`<h6> ${firstName} ${lastName} ${street} ${city} ${state} ${zipcode} ${newPatient}</h6>`);//this line doesnt work
    }
  }
}

$(document).ready(function() {
  $("#doctor-form").submit(function(event) {
    event.preventDefault();

    const medicalIssue = $("#medical-issue").val();
    const name = $("#name").val();
    let newSearch = new Doctor(name);

    newSearch.getDoctors(name, showDoctors);
    newSearch.getSpecialities(medicalIssue, showSymptoms);
  })
})
