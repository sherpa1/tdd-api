const axios = require('axios');

const api_url = 'http://localhost:3000';

describe('Read', ()=>{    
    it('should return json tasks in body', async ()=>{
        const response = await axios.get(api_url+'/tasks');
        expect(response.status).toBe(200);
    });
});