// hide accounts we don't want to see
const accountPrefix = 'ft-tech-infra-';

var accounts = document.querySelectorAll('fieldset > div.saml-account');
accounts.forEach((account) => {
  var name = account.querySelector('.saml-account-name').textContent;
  if(-1 == name.indexOf(accountPrefix)) {
    account.style.display = 'none';
  };
});


