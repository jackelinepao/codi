Algoritmo valorAbsoluto
	Definir num Como Entero;
	Definir numabs Como Entero;
	Mostrar 'Ingrese un n�mero + o -';
	Leer num;
	Si num mod 2 < 0 Entonces
		numabs<-num * (-1);
		Mostrar 'El n�mero absoluto es: ', numabs;
	SiNo
		Mostrar 'El n�mero absoluto es: ', num;
	Fin Si
FinAlgoritmo