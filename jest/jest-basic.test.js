

let temp;

describe('simple test', () => {
    //test가 실행할 때마다 실행하는 전처리기
    beforeEach(() => {
        temp = 1;
    });

    //test가 실행할 때마다 실행되는 후처리기 
    afterEach(() => {
        temp =0;
    });

    //toBe는 단순비교
    test('1 is 1', () => {
        expect(1).toBe(1);
    });
    
    //toEqual은 배열이나 객체 내부 깊은 비교 수행
    test('[1,2,3] is [1,2,3]', ()=>{
        expect([1,2,3]).toEqual([1,2,3]);
    })

    //true, false 판별
    test('truthy', ()=>{
        expect(0).toBeFalsy();
        expect(1).toBeTruthy();
    })

    /*
    ## toMatch()
    toBe로 문자열이 같은지 확인할 수 있지만 정규 표현식 기반의 테스트가 필요할 때는 toMatch()를 사용한다.
    */
    test('match', () => {
        expect(getUser(1).email).toBe("user1@test.com");
        expect(getUser(2).email).toMatch(/.*test.com$/);
    })

    /**
     *  toThrow()
     * 예외 발생 여부를 테스트해야 할 때는 toThrow()함수를 사용한다. 
     * 
     * *expect()에 함수를 너길 때는 검증 대상을 함수로 한번 더 함수를 감싸야 한다. 그렇지 않으면 예외 발생 중 정말 예외가 샐생해서 테스트가 항상 실패하게 된다. 
     *  */

    function getUser(id) {
        if(id <= 0) throw new Error('Invalid ID');
        return {
            id, 
            email: `user${id}@test.com`,
        }
    }
    
    test('throw when id is non negative', () => {
        expect(()=>getUser(-1).toThrow());
        expect(() => getUser(-1).toThrow('Invalid ID'))
    })

})