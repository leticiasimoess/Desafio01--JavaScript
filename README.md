# Desafio01--JavaScript
Desafio 01 - Estrutura de Dados, Funções e Condições

----------------------------------------------------------------ESTRUTURA DE DADOS JAVASCRIPT-------------------------------------------------------------------------------

Estrutura de Dados:
São maneiras de organizar e armazenar informações em JavaScript. 
Alguns tipos comuns incluem arrays (listas), objetos (coleções de pares chave-valor),
strings (cadeias de texto), números e booleanos.

Arrays:
Arrays são estruturas de dados que permitem armazenar múltiplos valores em uma única variável.
Os elementos em um array são indexados numericamente, começando geralmente em 0.

Métodos de Array:
Os métodos de array são funções embutidas em JavaScript que podem ser usadas para executar tarefas
específicas em arrays. Eles ajudam a manipular e transformar os dados contidos nos arrays de várias
maneiras.

push():
O método push() é usado para adicionar um ou mais elementos ao final de um array. Ele retorna o novo
comprimento do array após a adição dos elementos.

pop():
O método pop() remove e retorna o último elemento de um array, diminuindo seu comprimento em 1.

shift():
O método shift() remove e retorna o primeiro elemento de um array, reorganizando os índices dos
outros elementos.

unshift():
O método unshift() adiciona um ou mais elementos ao início de um array, deslocando os outros 
elementos para frente e aumentando seu comprimento.

slice():
O método slice() cria uma cópia superficial (shallow copy) de parte de um array, permitindo que
você extraia um subconjunto dos elementos originais com base em índices de início e fim.

splice():
O método splice() é usado para adicionar, remover ou substituir elementos em um array. Ele permite
uma manipulação mais avançada dos elementos, especificando índices de início, quantidade de remoção 
e elementos a serem inseridos.

sort():
O método sort() classifica os elementos de um array em ordem alfabética (para strings) ou em ordem 
numérica (para números). Por padrão, ele ordena os elementos em ordem lexicográfica, o que pode não
produzir resultados desejados para números. Para ordenar números corretamente, é comum passar uma 
função de comparação como argumento para o método sort().

------------------------------------------------------FUNCTION JAVASCRIPT---------------------------------------------------------------------------------------------------

Funções: 
São blocos de código reutilizáveis que realizam tarefas específicas. Funções podem
receber argumentos, processá-los e retornar um resultado. Elas são fundamentais para
a modularidade e organização do código em JavaScript.

Função com Parâmetro:
Uma função com parâmetro é uma função que aceita um ou mais valores (parâmetros) que podem ser usados dentro do
corpo da função. Os parâmetros são como variáveis locais que armazenam valores passados quando a função é chamada.
Argumentos:
Argumentos são os valores reais passados para a função quando ela é chamada, correspondendo aos parâmetros na ordem.

Função com Return (Retorno):
Uma função pode retornar um valor usando a palavra-chave return. O valor retornado pode ser atribuído a uma variável
ou usado diretamente em uma expressão. 

Chamada da Função:
Para executar uma função, você a chama pelo seu nome, seguido de parênteses, que podem conter argumentos, dependendo
dos parâmetros definidos pela função.

Utilizando Variável Dentro de um Parâmetro:
Você pode usar variáveis dentro dos parâmetros de uma função da mesma forma que faria com qualquer outra variável.


------------------------------------------------------CONDIÇÕES JAVASCRIPT--------------------------------------------------------------------------------------------------

Condições: 
As condições permitem que você execute diferentes blocos de código com base em testes de expressões.

Condicional Simples:
A condicional simples é usada para tomar decisões com base em uma única condição. Se a condição for verdadeira, 
um bloco de código é executado; caso contrário, outro bloco pode ser executado (opcionalmente, usando else).

Condicional Composta:
A condicional composta envolve múltiplas condições. É frequentemente implementada usando a estrutura if, else if, 
else para testar várias condições sequencialmente e executar o bloco de código associado à primeira condição 
verdadeira.

Operadores Lógicos:
Os operadores lógicos (como &&, ||, !) são usados para combinar ou inverter condições. && verifica se ambas as 
condições são verdadeiras, || verifica se pelo menos uma condição é verdadeira, e ! nega uma condição.

Operadores Relacionais:
Os operadores relacionais (como ==, ===, !=, !==, <, >, <=, >=) são usados para comparar valores. == verifica 
igualdade de valor, === verifica igualdade de valor e tipo, != verifica desigualdade de valor, !== verifica 
desigualdade de valor e tipo, < verifica se o valor à esquerda é menor que o da direita, > verifica se o valor
à esquerda é maior, e <= e >= verificam menor ou igual e maior ou igual, respectivamente.

Operadores de Comparação:
Operadores de comparação são usados para comparar valores e retornar um valor booleano true ou false. 
Eles incluem === (igual estrito, verifica valor e tipo) e !== (diferente estrito).

Condições Aninhadas:
Você pode aninhar condicionais dentro de outras condicionais para tomar decisões mais complexas.




