



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

