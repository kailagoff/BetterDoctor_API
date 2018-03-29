export class Doctor{
  constructor(name, medicalIssue) {
    this.name = name;
    this.medicalIssue = medicalIssue;
  }

  getDoctors(name, showDoctors){
  /* eslint-disable */
  const apiKey = `${process.env.exports.apiKey}`;
  /* eslint-enable */

    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=45.5230%2C-122.413%2C25&user_location=45.5230%2C-122.413&skip=0&limit=5&user_key=${apiKey}`).then(function(response)
    {
      showDoctors(response);
    })
      .fail(function(error) {
        $('#error').text(`There was an error processing your request: ${error.responseTest}. Please try again.`);
      });
  }


  getSpecialities(medicalIssue, showSymptoms) {
  /* eslint-disable */
  const apiKey = `${process.env.exports.apiKey}`;
  /* eslint-enable */
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${medicalIssue}&location=45.5230%2C-122.413%2C25&user_location=45.5230%2C-122.413&skip=0&limit=5&user_key=${apiKey}`).then(function(response) {
      showSymptoms(response);
    })
      .fail(function(error) {
        $('#error').text(`There was an error processing your request: ${error.responseTest}. Please try again.`);
      });
  }
}
