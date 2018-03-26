export class Doctor{
  constructor(name) {
    this.name = name;
  }

  getDoctors(name, showDoctors){
  /* eslint-disable */
  const apiKey = process.env.exports.apiKey;
  /* eslint-enable */

  $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=45.5234%2C-122.676%2C500&skip=0&limit=20&user_key=e1f4cc75bbdbc6675ccec5b505b8b1aa`).then(function(response)
  {
    showDoctors(response);
    console.log(response);
  })
    .fail(function(error) {
      $('#error').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
  });
  }
}
