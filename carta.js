function Carta(numero,palo,rutas){
	this.vista=document.createElement('div');
	var imagen=document.createElement('img');
	imagen.src=rutas;
	this.vista.appendChild(imagen);
	this.numero=numero;
	this.palo=palo;
}
Carta.prototype.obtenerVista=function(){
	document.body.appendChild(this.vista);
}
