var word = function(pigWord) {
  if (pigWord !== NaN) {
    return false;
};
// console.log(word);



////User Interface////
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var input = $("input").val();
    var result = word(pigWord);
    // $("#result").text(result);
  });
});
