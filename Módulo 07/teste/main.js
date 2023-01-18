window.onload = function() {
    const registerBtn = document.querySelector("#register-btn");
registerBtn.addEventListener("click", addContact);

function addContact(e) {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const telephone = document.querySelector("#telephone").value;
  const address = document.querySelector("#address").value;
  
  const contactList = document.querySelector("#contact-list");
  const row = document.createElement("tr");
  const nameCol = document.createElement("td");
  const telephoneCol = document.createElement("td");
  const addressCol = document.createElement("td");
  
  nameCol.innerHTML = name;
  telephoneCol.innerHTML = telephone;
  addressCol.innerHTML = address;
  
  row.appendChild(nameCol);
  row.appendChild(telephoneCol);
  row.appendChild(addressCol);
  
  contactList.appendChild(row);
  
  document.querySelector("#name").value = "";
  document.querySelector("#telephone").value = "";
  document.querySelector("#address").value = "";
    }    
};
 