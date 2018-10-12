import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    login,
    logout
} from '../../actions/auth';

const createMockStore = configureMockStore([thunk]);

test('should generate login action object', ()=> {
    const action = login('123');
    expect(action).toEqual({
        type: 'LOGIN',
        uid: '123'
    });
});

test('should generate logout action object', ()=> {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});