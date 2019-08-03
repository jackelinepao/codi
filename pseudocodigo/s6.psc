Algoritmo numeroMayor
	Definir num1 Como Entero;
	Definir num2 Como Entero;
	Definir num3 Como Entero;
	Mostrar 'Ingese un número:';
	Leer num1;
	Mostrar 'Ingese un número:';
	Leer num2;
	Mostrar 'Ingese un número:';
	Leer num3;
	Si num1 > num2 && num1 > num3 Entonces
		Mostrar 'El número mayor es: ', num1;
	SiNo
		//Si num2 >num1 Entonces  pseint
		Si num2 >num1 && num2 > num3 Entonces
			Mostrar 'El número mayor es: ', num2;
		SiNo
			Mostrar 'El número mayor es: ', num3;
		FinSi
	Fin Si
	
FinAlgoritmo
