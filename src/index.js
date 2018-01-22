window.onload = function () {
  var $fieldset = document.querySelector('fieldset');
  var $input = document.querySelector('input');
  var $legend = document.createElement('legend');
  var $label = document.createElement('label');

  $legend.innerHTML = "User fieldset";
  $label.innerHTML = "User name";
  $label.setAttribute('for', 'username');
  $input.setAttribute('id', 'username');

  $fieldset.appendChild($legend);
  $fieldset.appendChild($label);

  $input.setAttribute('name', 'username');
}
