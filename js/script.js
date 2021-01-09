function escribir(op){
	document.getElementById('eleccion').innerHTML = op;

	var maq = Math.floor(Math.random(2-0+1)*3);
	if(maq==0){
		maq = 'Piedra';
	}else if(maq == 1){
		maq ='Papel';
	}else if(maq == 2){
		maq= 'Tijera';
	}

	document.getElementById('maq_eleccion').innerHTML = maq;

	function res(resultado){
		document.getElementById('res').innerHTML = resultado;
	}

	if(maq == 'Piedra'){
		if(op == 'Papel'){
			res('Ganaste!');
		}else if(op == 'Tijera'){
			res('Perdiste!');
		}else if(op == 'Piedra'){
			res('Empataste');
		}
	}

	if(maq == 'Papel'){
		if(op == 'Piedra'){
			res('Perdiste!');
		}else if(op == 'Tijera'){
			res('Ganaste!');
		}else if(op == 'Papel'){
			res('Empataste');
		}
	}

	if(maq == 'Tijera'){
		if(op == 'Papel'){
			res('Perdiste!');
		}else if(op == 'Piedra'){
			res('Ganaste!');
		}else if (op == 'Tijera'){
			res('Empataste');
		}
	}
}