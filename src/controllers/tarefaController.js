const TarefaModel = require('../models/tarefaModel');

exports.listar = (req, res) => {
    TarefaModel.listarTodos((err, rows) => {
        if (err) return res.status(500).json({ erro: 'Erro ao buscar tarefas.' });
        res.json(rows);
    });
};

exports.criar = (req, res) => {
    const { titulo, descricao } = req.body;
    if (!titulo || titulo.trim() === '') return res.status(400).json({ erro: 'O título é obrigatório.' });
    TarefaModel.criar(titulo.trim(), descricao || '', (err, nova) => {
        if (err) return res.status(500).json({ erro: 'Erro ao salvar.' });
        res.status(201).json(nova);
    });
};

exports.concluir = (req, res) => {
    TarefaModel.concluir(req.params.id, (err) => {
        if (err) return res.status(500).json({ erro: 'Erro ao atualizar.' });
        res.json({ mensagem: 'Concluído com sucesso!' });
    });
};

exports.excluir = (req, res) => {
    TarefaModel.excluir(req.params.id, (err) => {
        if (err) return res.status(500).json({ erro: 'Erro ao excluir.' });
        res.json({ mensagem: 'Removido com sucesso!' });
    });
};
