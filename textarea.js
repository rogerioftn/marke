<!DOCTYPE html>
<html>
<body>

Address:<br>
<textarea id="myTextarea">
342 Alvin Road
Ducksburg</textarea>

<p>Click the button to select the contents of the text area.</p>

<button type="button" onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  document.getElementById("myTextarea").select();
}
</script>

</body>
</html>


$('#go').click(function() {
  var lines = $('#input').val().split(/\n/);
  var output = [];
  var outputText = [];
  for (var i = 0; i < lines.length; i++) {
    // only push this line if it contains a non whitespace character.
    if (/\S/.test(lines[i])) {
      outputText.push('"' + $.trim(lines[i]) + '"');
      output.push($.trim(lines[i]));
    }
  }
  //alert(output);
  $('#input').val( outputText);
  $('.alert').removeClass('alert-info').addClass('alert-success').text('Done!')
})
