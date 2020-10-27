$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    function shortcut() {
      const vowels = ["a", "e", "i", "o", "u"];
      let inputString = $("input.form-control").val();
      vowels.forEach(function(element) {
        inputString = inputString.split(element).join("-");
      });
      console.log(inputString);
    }
    shortcut();
    event.preventDefault();
  });
});