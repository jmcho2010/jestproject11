//matchers.test.js
import getUser from './test1';

describe('그냥 jest 써볼거임', () =>{
    const { getUser } = require('user');

    test("user 객체 가져온 결과", () =>{
        expect(getUser(1)).toEqual({
            gunchim:"ssak"
        })
    });
});