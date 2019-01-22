$(document).ready(function () {
  $("form").submit(function(event) {
    event.preventDefault();

    var input = $("#sentence").val();
    var splitInput = input.split(' ');
    var three = [];

    splitInput.forEach(function (word){
      if(word.length >= 3) {
        three.push(word);
      }
    });
    
    three.reverse();

    // console.log(three);
    $(".output").text(three.join(' '));
  });
});
