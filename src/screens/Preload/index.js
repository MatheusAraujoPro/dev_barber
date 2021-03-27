import React, {useEffect} from 'react';
import { Container, LoadingIcon } from './styles';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import BarberLogo from '../../assets/barber.svg';


export default () => {

    const navigation = useNavigation();

    //Hook que vai executar uma função sempre que chegar nesta tela
    useEffect(()=>{
        const checkToken =  async() => {
            const token = await AsyncStorage.getItem('token');
            if(token){
                //Validar Token
            }else{
                //Navegue para a tela de login
                navigation.navigate('Signin');
            }
        }
        checkToken();

    }, []);

    return (
        <Container>
           <BarberLogo width="100%" height="160"/>
           <LoadingIcon size="large" color="#FFFFFF"/>
        </Container>
    );
}
