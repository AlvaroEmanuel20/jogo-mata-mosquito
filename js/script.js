let largura = 0;
let altura = 0;
let vidas = 1;
let tempo = 20;
let tempoCronometro = 1500;
let nivel = window.location.search;
nivel = nivel.replace("?", "");

if (nivel === "normal") {
	tempoCronometro = 1500;
} else if (nivel === "profissional") {
	tempoCronometro = 1000;
} else if (nivel === "modo-maluco") {
	tempoCronometro = 850;
}

function ajustarTamanho() {
	largura = window.innerWidth;
	altura = window.innerHeight;
}

ajustarTamanho();

let cronometro = setInterval(function () {
	if (tempo < 0) {
		clearInterval(cronometro);
		clearInterval(criaMosquito);
		window.location.href = "voce_venceu.html";
	} else {
		document.getElementById("cronometro").innerHTML = tempo;
	}
	tempo -= 1;
}, 1000);

let criaMosquito = setInterval(function posicaoRandomica() {
	if (document.getElementById("mosquito")) {
		document.getElementById("mosquito").remove();
		if (vidas > 3) {
			window.location.href = "game_over.html";
		} else {
			document.getElementById("vida" + vidas).src =
				"imagens/coracao_vazio.png";
			vidas++;
		}
	}

	let eixoX = Math.floor(Math.random() * largura) - 100;
	let eixoY = Math.floor(Math.random() * altura) - 100;

	eixoX = eixoX < 0 ? 0 : eixoX;
	eixoY = eixoY < 0 ? 0 : eixoY;

	let mosquito = document.createElement("img");
	mosquito.src = "imagens/mosquito.png";
	mosquito.className = tamanhoRandomico() + " " + ladoAleatorio();
	mosquito.style.position = "absolute";
	mosquito.style.left = eixoX + "px";
	mosquito.style.top = eixoY + "px";
	mosquito.id = "mosquito";
	mosquito.onclick = function () {
		this.remove();
	};

	document.body.appendChild(mosquito);
}, tempoCronometro);

function tamanhoRandomico() {
	let classe = Math.floor(Math.random() * 3);

	switch (classe) {
		case 0:
			return "mosquito1";
		case 1:
			return "mosquito2";
		case 2:
			return "mosquito3";
		default:
			return "mosquito1";
	}
}

function ladoAleatorio() {
	let lado = Math.floor(Math.random() * 2);

	if (lado == 0) {
		return "ladoB";
	} else {
		return null;
	}
}
