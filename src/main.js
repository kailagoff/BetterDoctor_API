import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Doctor } from './js/doctor_api.js';

const showDoctors = function(response) {
  if (response.data.length == 0) {
    $("#results").text("No doctors that match your search.")
  } else {
  for(let i = 0; i < response.data.length; i++) {
    let firstName = response.data[i].profile.first_name;
    let lastName = response.data[i].profile.last_name;
    $('#results').append(`<li> ${firstName} ${lastName} </li>`);
    }
  }
}

$(document).ready(function() {
  $("#doctor-form").submit(function(event) {
    event.preventDefault();

    const medicalIssue = $("#medical-issue").val();
    const name = $("#name").val();
    console.log(name);
    console.log(medicalIssue);

    let newSearch = new Doctor(name);

    newSearch.getDoctors(name, showDoctors);
  })
})
