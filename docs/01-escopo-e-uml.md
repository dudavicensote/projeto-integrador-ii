# Documentação de Escopo, IHC e UML (Situação 1)

## 1. Escopo Revisado
O sistema **TaskFlow** é uma aplicação web minimalista para gerenciamento de tarefas, permitindo cadastrar, listar, concluir e excluir registros com persistência em banco de dados relacional.

## 2. Diagrama de Classes (UML)
+-----------------------------------+
|              Tarefa               |
+-----------------------------------+
| - id: Integer (PK)                |
| - titulo: String                  |
| - descricao: String               |
| - status: String                  |
+-----------------------------------+
| + listarTodas()                   |
| + criar()                         |
| + concluir()                      |
| + excluir()                       |
+-----------------------------------+
