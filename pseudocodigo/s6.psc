Algoritmo numeroMayor
	Definir num1 Como Entero;
	Definir num2 Como Entero;
	Definir num3 Como Entero;
	Mostrar 'Ingese un n�mero:';
	Leer num1;
	Mostrar 'Ingese un n�mero:';
	Leer num2;
	Mostrar 'Ingese un n�mero:';
	Leer num3;
	Si num1 > num2 && num1 > num3 Entonces
		Mostrar 'El n�mero mayor es: ', num1;
	SiNo
		//Si num2 >num1 Entonces  pseint
		Si num2 >num1 && num2 > num3 Entonces
			Mostrar 'El n�mero mayor es: ', num2;
		SiNo
			Mostrar 'El n�mero mayor es: ', num3;
		FinSi
	Fin Si
	
FinAlgoritmo
