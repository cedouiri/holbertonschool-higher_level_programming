// a Javascript script that fetches and prints how to say Hello depending of the language
$(document).ready(function () {
  $('INPUT#btn_translate').click(function () {
    const lan_code = $('INPUT#language_code').val();
    const url = 'https://www.fourtonfish.com/hellosalut/?lang=' + lan_code;
    $.getJSON(url, function (data) {
      $('DIV#hello').html('<br />' + data.hello);
    });
  });
});
