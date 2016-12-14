// hide accounts we don't want to see
(function() {
  const accountPrefix = localStorage['accountPrefix'] || 'ft-tech-';

  insertAccountPrefixInput(accountPrefix);

  changeVisible(accountPrefix);

  function insertAccountPrefixInput(accountPrefix) {
    const header = document.querySelector('#container > h1');
    const div = document.createElement('div');

    const label = document.createElement('label');
    label.setAttribute('for', accountPrefix);
    label.textContent = 'Account Prefix: ';
    
    input = document.createElement('input');
    input.type = 'text';
    input.name = 'accountPrefix';
    input.value = accountPrefix;
    input.onkeyup = onKeyUpHandler;

    submit = document.createElement('input');
    submit.type = 'submit';
    submit.name = 'save';
    submit.value = 'Save';
    submit.onclick = onSave;

    div.appendChild(label);
    div.appendChild(input);
    div.appendChild(submit);

    header.insertAdjacentElement('afterend', div); 
  }

  function onKeyUpHandler(event) {
    const input = event.target;
//    console.log(event);
    const accountPrefix = input.value;
    changeVisible(accountPrefix);
    return true;
  }

  function onSave(event) {
    const input = document.querySelector('input[name=accountPrefix]');
    const accountPrefix = input.value;
    saveAccountPrefix(accountPrefix);
    const saved = document.createElement('span');
    saved.innerHTML = '&#160;Saved';
    saved.style.color = 'green';
    event.target.insertAdjacentElement('afterend',saved);
    setTimeout(() => {saved.remove()}, 2000);    
    return false;
  }

  function saveAccountPrefix(accountPrefix) {
    if(accountPrefix) {
      localStorage['accountPrefix'] = accountPrefix;
      console.log('saved accountPrefix ' + accountPrefix);
    }
  }

  function changeVisible(accountPrefix) {
    const accounts = document.querySelectorAll('fieldset > div.saml-account');
    accounts.forEach((account) => {
      var name = account.querySelector('.saml-account-name').textContent;
      if(-1 == name.indexOf(accountPrefix)) {
        account.style.display = 'none';
      } else {
        account.style.display = '';
      }
    });
  }

})();
