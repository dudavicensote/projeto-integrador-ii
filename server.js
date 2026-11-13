const express = require('express');
const path = require('path');
const tarefaController = require('./src/controllers/tarefaController');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'src/views')));

app.get('/api/tarefas', tarefaController.listar);
app.post('/api/tarefas', tarefaController.criar);
app.put('/api/tarefas/:id', tarefaController.concluir);
app.delete('/api/tarefas/:id', tarefaController.excluir);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
