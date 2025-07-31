let amigos = [];
function adicionarAmigo(){
    const input = document.getElementById("amigo");
    const nome = input.value.trim();


if (nome === ""){
    alert("Por favor, insira um nome");
    return;
}
amigos.push(nome);
input.value = "";
atualizarListaAmigos();
}

function atualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const item = document.createElement("li");      
        item.textContent = (`${i + 1} - ${amigos[i]}`);  
        lista.appendChild(item);                        
    }
}
function sortearAmigo(){ 
    if (amigos.length === 0){ 
        alert("A Lista está vazia.");
    return;
}
const indice = Math.floor(Math.random()* amigos.length);
const sorteado = amigos[indice];
const resultado = document.getElementById("resultado");
resultado.innerHTML = (`<li>O amigo sorteado foi: ${sorteado}</li>`);
}
