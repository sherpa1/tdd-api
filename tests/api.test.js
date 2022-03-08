const axios = require('axios');

const api_url = 'http://localhost:3000';

describe('Read', ()=>{    
    it('should return json tasks in body', async ()=>{
        const response = await axios.get(api_url+'/tasks');
        expect(response.status).toBe(200);
    });
});

describe('Read one task by id', ()=>{
    
    const id = 7;
    
    it('should return a task with id = 1 if id 7 exists', async ()=>{
        const response = await axios.get(api_url+'/tasks/'+id);

        expect(response.data).toEqual(
            expect.objectContaining({id:7})
        );
    });
});

describe('Read task where completed = 1', ()=>{
    
    it('should return all tasks with completed attr = 1', async ()=>{
        const response = await axios.get(api_url+'/tasks?completed=1');

        expect(response.data.length).toBeGreaterThan(0);
    });

    it('should return all tasks with completed attr = true', async ()=>{
        const response = await axios.get(api_url+'/tasks?completed=1');

        expect(response.data.length).toBeGreaterThan(0);
    });

    it('should return all tasks with completed attr = not', async ()=>{
        expect(axios.get(api_url+'/tasks?completed=not')).rejects.toThrow('Request failed with status code 400');
    });

});