const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.sqlite');

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS tarefas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo VARCHAR(100) NOT NULL,
        descricao TEXT,
        status VARCHAR(20) DEFAULT 'Pendente',
        data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);
});

class TarefaModel {
    static listarTodos(callback) { db.all('SELECT * FROM tarefas ORDER BY id DESC', [], callback); }
    static criar(titulo, descricao, callback) {
        db.run('INSERT INTO tarefas (titulo, descricao) VALUES (?, ?)', [titulo, descricao], function (err) {
            callback(err, { id: this?.lastID, titulo, descricao, status: 'Pendente' });
        });
    }
    static concluir(id, callback) { db.run("UPDATE tarefas SET status = 'Concluída' WHERE id = ?", [id], callback); }
    static excluir(id, callback) { db.run('DELETE FROM tarefas WHERE id = ?', [id], callback); }
}
module.exports = TarefaModel;
