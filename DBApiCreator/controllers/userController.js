const User = require('../models/userModel');
const { handleError } = require('../utils/errorHandler');

exports.getAllUsers = (req, res) => {
    User.getAll((err, results) => {
        if (err) {
            return handleError(res, err, 'Erro ao buscar usu�rios');
        }
        res.json(results);
    });
};

exports.getUserById = (req, res) => {
    const id = req.params.id;
    User.getById(id, (err, results) => {
        if (err) {
            return handleError(res, err, 'Erro ao buscar usu�rio');
        }
        res.json(results[0]);
    });
};

exports.createUser = (req, res) => {
    const user = req.body;
    User.create(user, (err, results) => {
        if (err) {
            return handleError(res, err, 'Erro ao adicionar usu�rio');
        }
        res.status(201).send('Usu�rio adicionado com sucesso');
    });
};

exports.updateUser = (req, res) => {
    const id = req.params.id;
    const user = req.body;
    User.update(id, user, (err, results) => {
        if (err) {
            return handleError(res, err, 'Erro ao atualizar usu�rio');
        }
        res.send('Usu�rio atualizado com sucesso');
    });
};

exports.deleteUser = (req, res) => {
    const id = req.params.id;
    User.delete(id, (err, results) => {
        if (err) {
            return handleError(res, err, 'Erro ao deletar usu�rio');
        }
        res.send('Usu�rio deletado com sucesso');
    });
};
