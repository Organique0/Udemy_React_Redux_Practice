import { ActionType } from "../action-types";
import { Action } from "../actions";

interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[];
}

const initialState = {
    loading: false,
    data: [],
    error: null,
}

const repositoriesReducer = (state: RepositoriesState = initialState, action: Action): RepositoriesState => {
    switch (action.type) {
        case ActionType.SEARCH_REPOSITORIES:
            return {
                loading: true,
                error: null,
                data: []
            }
        case ActionType.SEARCH_REPOSITORIES_ERROR:
            return {
                loading: false,
                error: action.payload,
                data: []
            }
        case ActionType.SEARCH_REPOSITORIES_SUCCESS:
            return {
                loading: false,
                error: null,
                data: action.payload
            }
        default:
            return state;
    }
}

export default repositoriesReducer;