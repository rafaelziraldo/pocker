function Juegos(cartasMesa,cartasJugador){
	this.cartasJuego=cartasMesa.concat(cartasJugador);


Juegos.prototype.verificarJuegos=function(){
	if(this.poker()){
		return 'poker';
	}else if(this.full()){
		return 'full';
	}else if(this.color()){
		return 'color';
	}else if(this.pierna()){
		return 'pierna';
	}else if(this.parDoble()){
		return 'parDoble';
	}else if(this.parSimple()){
		return 'parSimple'
	}else{
		return 'no hay juegos';
	}

	}
Juegos.prototype.parSimple=function(){
	for(var i=0;i<this.cartasJuego.length;i++){
		for(var j=i+1;j<this.cartasJuego.length;j++){
		if(this.cartasJuego[i].numero===this.cartasJuego[j].numero){
			return true;
		}


	}
	}
	return false;
}
Juegos.prototype.parDoble=function(){
	return parSimple()&& parSimple();
}
Juegos.prototype.pierna=function(){
	for(var i=0;i<this.cartasJuego.length;i++){
		for(var j=i+1;j<this.cartasJuego.length;j++){
				for(var k=i+2;k<this.cartasJuego.length;k++){
		if(this.cartasJuego[i].numero===this.cartasJuego[j].numero && this.cartasJuego[j].numero===this.cartasJuego[k].numero ){
			return true;
		}
	}
	}
}
	return false;
}
Juegos.prototype.full=function(){
	return this.parSimple() && this.pierna();
}
Juegos.prototype.poker=function(){
	for(var i=0;i<this.cartasJuego.length;i++){
		for(var j=i+1;j<this.cartasJuego.length;j++){
				for(var k=i+2;k<this.cartasJuego.length;k++){
					for(var l=i+3;l<this.cartasJuego.length;l++){
					if(this.cartasJuego[i].numero===this.cartasJuego[j].numero && this.cartasJuego[j].numero===this.cartasJuego[k].numero && this.cartasJuego[k].numero===this.cartasJuego[l].numero ){
			return true;
		}
				}
				}
		}
	}
	return false
}
Juegos.prototype.color=function(){
	for(var i=0;i<this.cartasJuego.length;i++){
		for(var j=i+1;j<this.cartasJuego.length;j++){
				for(var k=i+2;k<this.cartasJuego.length;k++){
					for(var l=i+3;l<this.cartasJuego.length;l++){
						for(var m=i+4;m<this.cartasJuego.length;m++){
					if(this.cartasJuego[i].palo===this.cartasJuego[j].palo && this.cartasJuego[j].palo===this.cartasJuego[k].palo && this.cartasJuego[k].palo===this.cartasJuego[l].palo && this.cartasJuego[l].palo===this.cartasJuego[m].palo){
			return true;
		}
				}
				}
		}
	}
}
	return false
}
}
