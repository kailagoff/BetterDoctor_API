export class Doctor{
  constructor(name) {
    this.name = name;
  }

  getDoctors(name, showDoctors){
  /* eslint-disable */
  const apiKey = `${process.env.exports.apiKey}`;
  /* eslint-enable */

  $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=45.5234%2C-122.676%2C500&skip=0&limit=20&user_key=${apiKey}`).then(function(response)
  {
    showDoctors(response);
    console.log(response);
  })
    .fail(function(error) {
      $('#error').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    });
  }


  getSpecialities(medicalIssue, showSymptoms) {
  /* eslint-disable */
  const apiKey = `${process.env.exports.apiKey}`;
  /* eslint-enable */ $.get(`https://api.betterdoctor.com/2016-03-01/doctors?conditions=${medicalIssue}&location=45.523%2C-122.676%2C500&user_location=45.523%2C-122.676&skip=0&limit=10&user_key=${apiKey}`).then(function(response) {
    showSymptoms(response);
    console.log(response);
  })
   .fail(function(error) {
     $('#error').text(`There was an error processing your request: ${error.responseTest}. Please try again.`)
   });
  }
}
