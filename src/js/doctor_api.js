export class Doctor{
  constructor(name) {
    this.name = name;
  }

  getDoctors(name, showDoctors){
  /* eslint-disable */
  const apiKey = process.env.exports.apiKey;
  /* eslint-enable */

  $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}location=45.52313%2C-122.6765%2C100&user_location=45.5231%2C-122.6765&skip=0&limit=10&user_key=e1f4cc75bbdbc6675ccec5b505b8b1aa`).then(function(response){
    showDoctors(response);
  }).fail(function(error) {
    $('#error').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
  });
  }
}
