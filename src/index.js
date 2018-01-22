window.onload = function () {
  var $form = document.querySelector('form');
  var $fieldset = document.querySelector('fieldset');
  var $input = document.querySelector('input');
  var $label = document.createElement('label');
  var $legend = document.createElement('legend');
  var $submitButton = document.createElement('button');

  $legend.innerHTML = 'User form';
  $label.innerHTML = 'User name';
  $submitButton.innerHTML = 'Submit'
  
  $submitButton.setAttribute('type', 'submit');
  $label.setAttribute('for', 'username');
  $input.setAttribute('id', 'username');
  $input.setAttribute('name', 'username');

  $fieldset.insertBefore($label, $input); 
  $fieldset.insertBefore($legend, $label); 
  $form.appendChild($submitButton);
}
