function Mesa(){
	this.mazo=new Mazo();
	this.jugadores=[];
	this.bote=0;

}
Mesa.prototype.crearMesa=function(){
	var cantidadJugadores=3;
for(var i=0;i<cantidadJugadores;i++){
	var nombre=prompt('pone tu nombre','')
	this.jugadores.push(new Jugador(nombre,1000))
}
	this.mazo.crearMazo();
for( i=0;i<100;i++){
this.mazo.mezclar();
}
}
Mesa.prototype.repartirCarta=function(){
	this.mazo.repartir(this.jugadores);
}
Mesa.prototype.cambiarTurno=function(){
	this.jugadores.unshift(this.jugadores.pop())

}
Mesa.prototype.apostar=function(){

	for(var i=0;i<this.jugadores.length;i++){
		var fichas=prompt('apostar','');
	var int=parseInt(fichas);
		this.jugadores[i].ponerFichas(int);
		this.bote+=int;
	}

}
Mesa.prototype.perdio=function(jugador){

	for(var i=0;i<this.jugadores.length;i++){
		if(this.jugadores[i].nombre===jugador){
		this.jugadores.splice(i,1)
		}
	}


}
Mesa.prototype.empezarDelPrincipio=function(){
	this.bote=0;

	this.mazo=new Mazo();
	for(var i=0;i<this.jugadores.length;i++){
		this.jugadores[i].cartas.splice(0,2);
	}
		this.mazo.crearMazo();
for( i=0;i<100;i++){
this.mazo.mezclar();

}
	this.cambiarTurno();
	this.repartirCarta();
}
