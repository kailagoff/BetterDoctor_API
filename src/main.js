import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Doctor } from './js/doctor_api.js';


const showSymptoms = function(response) {
  if (response.data.length == 0) {
    $('#speciality-results').text("No doctors match your search for that medical issue. Try a different term")
  } else {
      for(let i = 0; i < response.data.length; i++) {
        let firstName = response.data[i].profile.first_name;
        let lastName = response.data[i].profile.last_name;
        let street = response.data[i].practices[i].visit_address.street;
        let city = response.data[i].practices[i].visit_address.city;
        let state = response.data[i].practices[i].visit_address.state;
        let zipcode = response.data[i].practices[i].visit_address.zip;
        let newPatient = response.data[i].practices[i].accepts_new_patients;

        $('#results').append(`<h6> ${firstName} ${lastName} ${street} ${city} ${state} ${zipcode} ${newPatient}</h6>`); 
      }
    }
  }

const showDoctors = function(response) {
  if (response.data.length == 0) {
    $("#doctor-results").text("No doctors with that name match your search. Check your spelling and try again");
  } else {
    for(let i = 0; i < response.data.length; i++) {
      let firstName = response.data[i].profile.first_name;
      let lastName = response.data[i].profile.last_name;
      let street = response.data[i].practices[i].visit_address.street;
      let city = response.data[i].practices[i].visit_address.city;
      let state = response.data[i].practices[i].visit_address.state;
      let zipcode = response.data[i].practices[i].visit_address.zip;
      let newPatient = response.data[i].practices[i].accepts_new_patients;
      $('#doctor-results').append(`<h5>${firstName} ${lastName}</h5> <h6>${street} ${city} ${state} ${zipcode}</h6>
      Takes new Patients?:${newPatient}`);
    }
  }
};

$(document).ready(function() {
  $("#doctor-search").submit(function(event) {
    event.preventDefault();

    const name = $("#name").val();
    let newSearch = new Doctor(name);

    newSearch.getDoctors(name, showDoctors);
  });

  $("#speciality-search").submit(function(event) {
    event.preventDefault();

    const medicalIssue = $("#medical-issue").val();
    let symptomSearch = new Doctor(medicalIssue);

    symptomSearch.getSpecialities(medicalIssue, showSymptoms);
  });
});
