import { combineReducers } from 'redux';
import Authentication from './Authentication';
import ChatScreenInput from './ChatScreenInput';

export default combineReducers({
    Auth: Authentication,
    csInput: ChatScreenInput
});
