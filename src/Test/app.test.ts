import supertest from 'supertest';
import appSec from '../appSec';
import authController from '../controller/authController';
import authService from '../service/authService';
const request = supertest(appSec);

describe('Server', () => {
    it('lllllllllllllll',async () => {
        const res = await request.get('/test');
        expect(res.status).toBe(200);
    })
})

describe('Test Controller', () => {
    it('Should try test controller', async () => {
        const res = await authController.Test("a", "b", "");
        expect(res.statusCode).toBe(200);
        expect(res.body).toBe("success");
    });
})

describe('First', () => {
    it('', ()=> {
        const person = {
            name: 'Lucas',
            age: 22
        }
        const p2 = {...person}

        expect(1+1).toBe(2);
        expect(person).toEqual(p2); 
        expect(person).toHaveProperty('age', 22);
        expect(person.name).toBe('Lucas');
    })
});

