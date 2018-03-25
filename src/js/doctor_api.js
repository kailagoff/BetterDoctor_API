
export function getDoctors(){
  /* eslint-disable */
  const apiKey = process.env.exports.apiKey;
  /* eslint-enable */

  $.get(`https://api.betterdoctor.com/2016-03-01/doctors?location=45.52313%2C-122.6765%2C100&user_location=45.5231%2C-122.6765&skip=0&limit=10&user_key=${apiKey}`).then(function(response){
    $('#results').text(` ${response}.`);
  }).fail(function(error) {
    $('#error').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
  });
}
