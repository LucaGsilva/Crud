
# **Desafio Nubank - Software Engineer**

## Decisões Técnicas

- ### Descrição
A aplicação foi implementada visando a clareza da estrutura e divisão de responsabilidades. As regras de negócio são providas através dos services que, por sua vez, implementam somente regras pertencentes ao contexto da classe que representa.

- ### Arquitetura Utilizada
 A aplicação utiliza a arquitetura **[MVC]** visando a organizacionação estrutural e a divisão de responsabilidades.

- ### Padroes de Projetos
A aplicação utiliza o padrão criacional **[Singleton]** para trabalhar com informações que serão reutilizadas no processo de compra e venda de ações.

## Bibliotecas

A aplicação utiliza bibliotecas para manipulação de arquivo Json e realização de teste

| Biblioteca | Utilização |
| ------ | ------ |
| [Jackson] | Manipulação de Json |
| [Junit 5] | Teste para os casos proposto no desafio |





## Executar o Projeto
-  [Importe o Projeto] para o tipo archive file e selecione a pasta onde o projeto foi descompactado
- Ao executar o projeto insira o JSON que corresponde a operação, após inserir tecle enter para a aplicação processar os dados inseridos.

- ##### Exemplo: 
[{"operation":"buy", "unit-cost":10.00, "quantity": 10000},
{"operation":"sell", "unit-cost":5.00, "quantity": 5000},
{"operation":"sell", "unit-cost":20.00, "quantity": 3000}]


### IDEs que suporta java
- [Eclipse] - _Recomendado_
- [NetBeans]
- [Spring Tools]

## Liguangem de Programação Utilizada
- ##### Java
- ##### Version 1.8


 [MVC]: <https://pt.wikipedia.org/wiki/MVC>
 [Singleton]: <https://pt.wikipedia.org/wiki/Singleton>
 [Jackson]: <https://mvnrepository.com/artifact/com.fasterxml.jackson.core/jackson-databind/2.13.3>
 [Junit 5]: <https://mvnrepository.com/artifact/junit/junit>
 [Spring Tools]: <https://spring.io/tools>
 [NetBeans]: <https://netbeans.apache.org/download/nb14/nb14.html>
 [Eclipse]: <https://www.eclipse.org/downloads/>
 [Importe o Projeto]: <https://www.ibm.com/docs/pt-br/rational-clearcase/9.0.0?topic=eclipse-importing-existing-project>