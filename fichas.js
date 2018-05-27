function Fichas(cantidad){
	this.cantidad=cantidad;
}
Fichas.prototype.sumar=function(fichas){
	this.cantidad+=fichas;
}
Fichas.prototype.restar=function(fichas){
	this.cantidad-=fichas;
}
