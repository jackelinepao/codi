Algoritmo sin_titulo
	Definir num1 Como Entero;
	Definir num2 Como Entero;
	Mostrar 'Ingese un número:';
	Leer num1;
	Mostrar 'Ingese un número:';
	Leer num2;
	Si num1 < num2 Entonces
		Mostrar 'El número mayor es: ', num2;
	SiNo
		Si num1 = num2 Entonces
			Mostrar 'Los numeros son Iguales';
		SiNo
			Mostrar 'El número mayor es: ', num1;
		FinSi
	Fin Si
	
FinAlgoritmo
