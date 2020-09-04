(function() {
  window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("placeholder");
    form.setAttribute('id', 'contact-form')
    function renderForm (formElement){
      formElement.setAttribute('action', 'https://formspree.io/mnqgkyyr')
      formElement.setAttribute('method', 'POST')
      var nameInput = document.createElement("INPUT");
      nameInput.className = "input";
      nameInput.type = "text";
      nameInput.name = "Name";
      nameInput.placeholder = "Name";
      formElement.appendChild(nameInput);
      var emailInput = document.createElement("INPUT");
      emailInput.className = "input";
      emailInput.type = "email";
      emailInput.name = "Email";
      emailInput.placeholder = "Email";
      formElement.appendChild(emailInput);
      var phoneInput = document.createElement("INPUT");
      phoneInput.className = "input";
      phoneInput.type = "tel";
      phoneInput.name = "Phone-Number";
      phoneInput.placeholder = "Phone number";
      formElement.appendChild(phoneInput);
      var btnSubmit = document.createElement("BUTTON");
      btnSubmit.className = "btn-submit";
      btnSubmit.innerHTML = "Request a Demo";
      btnSubmit.id = "contact-form-button";
      formElement.appendChild(btnSubmit);
      var contactFormStatusTxt = document.createElement("p");
      contactFormStatusTxt.id = "contact-form-status";
      formElement.appendChild(contactFormStatusTxt);
    }
    renderForm(form);

    var button = document.getElementById("contact-form-button");
    var status = document.getElementById("contact-form-status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      button.style = "display: none ";
      status.innerHTML = "Thanks!";
    }

    function error() {
      status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
})()