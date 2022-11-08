var resultado = document.getElementById("resultado");

function calcularMedia(){
  var primeiraNota = parseFloat(document.getElementById("nota1").value);
  var segundaNota = parseFloat(document.getElementById("nota2").value);
  var terceiraNota = parseFloat(document.getElementById("nota3").value);
  var quartaNota = parseFloat(document.getElementById("nota4").value);
  var media = (primeiraNota+segundaNota+terceiraNota+quartaNota)/4;
  var mediaFinal = media.toFixed(2)
  console.log(mediaFinal);


if (mediaFinal >=7 && mediaFinal <=10){
  resultado.style.color="#5CBF84"
  resultado.innerHTML = `Sua média é ${mediaFinal}<br> Parabéns, você foi aprovado(a)!`;
  }else if (mediaFinal >10){
    resultado.style.color="#FFFC5C"
    resultado.innerHTML = `Tem algo errado com as notas inseridas<br> Nota/Média não pode ser maior que 10.`;
    }else if (mediaFinal >=0 && mediaFinal <7){
      resultado.style.color="#FF5C5C"
      resultado.innerHTML = `Sua média é ${mediaFinal}<br> Infelizmente, você foi reprovado(a).`;
      }else{
        resultado.style.color="#FF5C5C"
        resultado.innerHTML = `Ops! Algo deu errado.<br>A nota das médias não pode ser um valor negativo.`;
        }
}

function typeWriter(elemento) {
	const textoArray=elemento.innerHTML.split('');
	elemento.innerHTML='';
	textoArray.forEach((letra,i) => {
		setTimeout(() => elemento.innerHTML += letra ,75*i)
	});
}

function onlynumber(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /^[0-9.]+$/;
  if( !regex.test(key) ) {
     theEvent.returnValue = false;
     if(theEvent.preventDefault) theEvent.preventDefault();
  }
}

const titulo=document.querySelector('p');
typeWriter(titulo);