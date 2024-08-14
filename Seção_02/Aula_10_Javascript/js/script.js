function gritar() {
  alert ("Ahhhhhh!");
}

function perguntar() {
  var nome;
  nome = prompt("Qual é o seu nome?")
  alert ("Olá "+ nome);
}

function mudar_texto() {
  var h1 = document.getElementsByTagName("h1");

  //alert(h1[0].innerText);

  if(h1[0].innerText == "Aula 10 javascript"){
    h1[0].innerText = "Evolua seu lado geek!";
  } else {
    h1[0].innerText = "Aula 10 javascript";
  }
}

function incrementar() {
  let p1 = document.getElementById("p1");
  p1.innerText = parseInt(p1.innerText) +1;
}
