window.onload = function() {
    const registerBtn = document.querySelector("#btn-enviar");
registerBtn.addEventListener("click", addContact);

    function addContact(e) {
    e.preventDefault();
    const nome = document.querySelector("#nome").value;
    const telefone = document.querySelector("#telefone").value;
    const endereço = document.querySelector("#endereço").value;
    
    const contactList = document.querySelector("#contact-list");
    const row = document.createElement("tr");
    const nomeCol = document.createElement("td");
    const telefoneCol = document.createElement("td");
    const endereçoCol = document.createElement("td");
    
    nomeCol.innerHTML = nome;
    telefoneCol.innerHTML = telefone;
    endereçoCol.innerHTML = endereço;
    
    row.appendChild(nomeCol);
    row.appendChild(telefoneCol);
    row.appendChild(endereçoCol);
    
    contactList.appendChild(row);
    
    document.querySelector("#nome").value = "";
    document.querySelector("#telefone").value = "";
    document.querySelector("#endereço").value = "";
        }    
};
 