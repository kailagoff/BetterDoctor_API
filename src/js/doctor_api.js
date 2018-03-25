/* eslint-disable */
const apiKey = process.env.exports.apiKey;
/* eslint-enable */

export function getDoctors(){

  $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=`+ '&location=or-portland&user_location=45.512794%2C-122.679565&skip=0&limit=15&user_key=' + apiKey).then(function(response) {
    $('#results').text(` ${response}.`);
  }).fail(function(error) {
    $('#error').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
  });
}
