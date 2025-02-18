
function getUser(id){
    return{
        id,
        email: `user${id}@gunchim.com`
    };
}
// 위의 함수는 컴포넌트가 아닌 모듈함수임을 선언.
module.exports = { getUser };