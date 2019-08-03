Algoritmo reloj
	Definir horaActual Como Entero;
	Definir hora Como Entero;
	Definir horaFutura Como Entero;
	Mostrar 'Ingresar la hora Actual';
	Leer horaActual;
	Mostrar 'Ingresar las horas';
	Leer hora;
	horaFutura<-(horaActual + hora) mod 12;
	Si horaFutura = 0 Entonces
		horaFutura<-12;
		Mostrar horaFutura;
	SiNo
		Mostrar horaFutura;
	Fin Si
	
FinAlgoritmo
