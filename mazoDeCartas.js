function Mazo(){
	this.mazo=[];
	this.flops=[];
	this.rutas=[];
}
Mazo.prototype.crearMazo=function(){
	var numero=0;
	var numero1=0;
	var numero2=0;
	var numero3=0;
	for(var i=0;i<52;i++){
		numero++;
		if(i<13){
		this.mazo.push(new Carta(numero,'diamante',''));
			
		}
		
		else if (i>=13&&i<26){
			numero1++;
			this.mazo.push(new Carta(numero1,'pica',''));
		}
		
		else if(i>=26&&i<39){
			numero2++;
				this.mazo.push(new Carta(numero2,'trebol',''));
			}	
	
		else if(i>=39&&i<52)	{
			numero3++;
				this.mazo.push(new Carta(numero3,'corazones',''));
			}		   
	}
}
Mazo.prototype.mezclar=function(){
	
	
	
	for(var i=0;i<this.mazo.length;i++){
		for(var j=i+1;j<this.mazo.length;j++){
			var a=Math.round(Math.random()*1)
			if(a==0){
			var aux=this.mazo[j];
			this.mazo[j]=this.mazo[i]
			this.mazo[i]=aux;
			}else{
				continue;
			}
		}
	}
}
Mazo.prototype.darCarta=function(jugadores){
	this.mazo.splice(0,jugadores);
}
Mazo.prototype.repartir=function(jugadores){
	for(var i=0;i<2*jugadores.length;i++){
		
		jugadores[i%jugadores.length].recibirCarta(this.mazo[i]);
		
	}
	this.darCarta(jugadores.length*2);
}
Mazo.prototype.flop=function(){
	
	for(var i=0;i<3;i++){
		this.flops.push(this.mazo[i]);
	
	}
		this.darCarta(3);
	
}
Mazo.prototype.turn=function(){
	this.flops.push(this.mazo[0]);
	this.darCarta(1);
}
Mazo.prototype.river=function(){
	this.flops.push(this.mazo[0])
}
	
		

