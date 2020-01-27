import {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE} from './userTypes';
import axios from 'axios';
export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}
export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}
export const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const FETCH_USERS = () => {
    return (dispatch) => {
        dispatch(FETCH_USERS_REQUEST)
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                dispatch(FETCH_USERS_SUCCESS(response.data))
            })
            .catch(err => dispatch(FETCH_USERS_FAILURE({msg: 'ERROR FETCHING USERS'})))
    }
}


