const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;

const User = require('../models/userModel');
const userController = require('../controllers/userController');

describe('User Controller', () => {
    let mockDb;

    beforeEach(() => {
        mockDb = {
            query: sinon.stub()
        };
        User.setDb(mockDb);
    });

    it('should get all users', (done) => {
        const mockUsers = [{ id: 1, name: 'John Doe', email: 'john@example.com' }];
        mockDb.query.yields(null, mockUsers);

        const req = {};
        const res = {
            json: sinon.spy()
        };

        userController.getAllUsers(req, res);

        setImmediate(() => {
            expect(res.json.calledWith(mockUsers)).to.be.true;
            done();
        });
    });

    it('should handle error when getting all users', (done) => {
        const error = new Error('Database error');
        mockDb.query.yields(error, null);

        const req = {};
        const res = {
            status: sinon.stub().returnsThis(),
            send: sinon.spy()
        };

        userController.getAllUsers(req, res);

        setImmediate(() => {
            expect(res.status.calledWith(500)).to.be.true;
            expect(res.send.calledWith('Erro ao buscar usuários')).to.be.true;
            done();
        });
    });

    // Adicione mais testes para os outros métodos...
});
