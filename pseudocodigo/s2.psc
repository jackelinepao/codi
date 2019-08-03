Algoritmo sin_titulo
	Definir soles Como Real;
	Definir euros Como Real;
	Definir opc Como Entero;
	Mostrar 'Opcion 1 de euros a soles';
	Mostrar 'Opcion 2 de soles a euros';
	Mostrar '********************';
	Leer opc;
	Si opc = 1 Entonces
		Mostrar 'Ingrese el monto en euros';
		Leer euros;
		soles<-euros * 3.76;
		Mostrar soles, 'soles';
	SiNo
		Mostrar 'Ingrese el monto en soles';
		Leer soles;
		euros<-soles / 3.76;
		Mostrar euros, 'euros';
	Fin Si
	
FinAlgoritmo
