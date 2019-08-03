Algoritmo valorAbsoluto
	Definir num Como Entero;
	Definir numabs Como Entero;
	Mostrar 'Ingrese un número + o -';
	Leer num;
	Si num mod 2 < 0 Entonces
		numabs<-num * (-1);
		Mostrar 'El número absoluto es: ', numabs;
	SiNo
		Mostrar 'El número absoluto es: ', num;
	Fin Si
FinAlgoritmo