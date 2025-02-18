//matchers.test.js
//import user from './test1';
const { getUser } = require('./test1');


    test("user 객체 가져온 결과", () =>{
        expect(getUser(1)).toEqual({
            gunchim:"ssak"
        })
    });
