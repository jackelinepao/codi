Algoritmo sin_titulo
	Definir num1 Como Entero;
	Definir num2 Como Entero;
	Mostrar 'Ingese un n�mero:';
	Leer num1;
	Mostrar 'Ingese un n�mero:';
	Leer num2;
	Si num1 < num2 Entonces
		Mostrar 'El n�mero mayor es: ', num2;
	SiNo
		Si num1 = num2 Entonces
			Mostrar 'Los numeros son Iguales';
		SiNo
			Mostrar 'El n�mero mayor es: ', num1;
		FinSi
	Fin Si
	
FinAlgoritmo
