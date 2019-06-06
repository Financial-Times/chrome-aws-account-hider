// filter accounts to those we want to see
(function() {
  const accountFilter = localStorage['accountFilter'] || 'prod';

  insertaccountFilterInput(accountFilter);

  changeVisible(accountFilter);

  function insertaccountFilterInput(accountFilter) {
    const header = document.querySelector('#container > h1');
    const div = document.createElement('div');

    const label = document.createElement('label');
    label.setAttribute('for', accountFilter);
    label.textContent = 'Account Filter: ';

    input = document.createElement('input');
    input.type = 'text';
    input.name = 'accountFilter';
    input.value = accountFilter;
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
    const accountFilter = input.value;
    changeVisible(accountFilter);
    return true;
  }

  function onSave(event) {
    const input = document.querySelector('input[name=accountFilter]');
    const accountFilter = input.value;
    saveaccountFilter(accountFilter);
    const saved = document.createElement('span');
    saved.innerHTML = '&#160;Saved';
    saved.style.color = 'green';
    event.target.insertAdjacentElement('afterend',saved);
    setTimeout(() => {saved.remove()}, 2000);
    return false;
  }

  function saveaccountFilter(accountFilter) {
    if(accountFilter) {
      localStorage['accountFilter'] = accountFilter;
      console.log('saved accountFilter ' + accountFilter);
    }
  }

  function changeVisible(accountFilter) {
    const accounts = document.querySelectorAll('fieldset > div.saml-account');
    accounts.forEach((account) => {
      var name = account.querySelector('.saml-account-name').textContent;
      if(null == name.match(accountFilter)) {
        account.style.display = 'none';
      } else {
        account.style.display = '';
      }
    });
  }

})();
