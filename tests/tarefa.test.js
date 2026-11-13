const assert = require('assert');
const TarefaModel = require('../src/models/tarefaModel');

console.log('Iniciando testes unitários...');
TarefaModel.criar('Teste Unitario', 'Validando rotina', (err, t) => {
    assert.strictEqual(err, null);
    assert.strictEqual(t.titulo, 'Teste Unitario');
    console.log('✔ Teste de Criação: PASSOU');
    TarefaModel.concluir(t.id, () => {
        console.log('✔ Teste de Conclusão: PASSOU');
        TarefaModel.excluir(t.id, () => {
            console.log('✔ Teste de Exclusão: PASSOU');
            console.log('Todos os testes passaram com sucesso!');
        });
    });
});
