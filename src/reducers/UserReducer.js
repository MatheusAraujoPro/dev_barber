//Informações inicias do usuário
export const initialState = {
    avatar: '',
    favorites: [],
    appointements:[] 

};

//Ações que o Usuário poderá realizar
export const UserReducer = (state, action) => {
    switch (action.type) {
        case 'setAvatar':
            return {...state, avatar: action.payload.avatar};
        break;
    
        default:
            return state;
    }
};
