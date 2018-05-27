function Jugador(nombre,fichas){
	this.nombre=nombre;
	this.cartas=[]
	this.ficha=new Fichas(fichas);
}
Jugador.prototype.recibirCarta=function(carta){
	
	this.cartas.push(carta)
}
Jugador.prototype.ponerFichas=function(fichas){
	this.ficha.restar(fichas);
	
}
Jugador.prototype.ganarFichas=function(fichas){
	this.ficha.sumar(fichas);
}
Jugador.prototype.irse=function(){
	return true;
}
Jugador.prototype.quedoSinFichas=function(){
	return this.ficha.cantidad<=0;
}

