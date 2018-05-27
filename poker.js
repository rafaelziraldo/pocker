function comenzar(){

	var mesa=new Mesa();
	mesa.crearMesa();
	mesa.repartirCarta();
	while(mesa.jugadores.length!=0){
		alert('flop')
		mesa.mazo.flop();
		mesa.apostar();
		alert('turn')
		mesa.mazo.turn();
		mesa.apostar();
		alert('river')
		mesa.mazo.river();
		mesa.apostar();
		alert('se termino ronda')

		for(var i=0;i<mesa.jugadores.length;i++){
			alert('jugador '+i+' '+mesa.jugadores[i].ficha.cantidad+' fichas')
		if(mesa.jugadores[i].quedoSinFichas()){
			mesa.perdio(mesa.jugadores[i].nombre);

		}
	}
		mesa.empezarDelPrincipio();
}
	alert('Partido finalizado')
}
window.addEventListener('load',comenzar,true);
