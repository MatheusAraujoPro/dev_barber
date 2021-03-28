import React, { useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SingnMessageButton,
    SingnMessageButtonText,
    SingnMessageButtonTextBold

} from './styles';
import BarberLogo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import SingnInput from '../../components/SingnInput';

export default () => {

    //Variáveis
    const navigation = useNavigation();

    //Guardando na tela os estados dos botões
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');


    //Métodos
    const handelSinginClick = () => {

    }


    const handelMessageButtonClick = () => {
        //Navegar para uma tela sem possibilidade de voltar
        navigation.reset({
            routes:[{name:'Signup'}]
        })

    }

    //Layout da tela

    return (
        <Container>
            <BarberLogo width="100%" height="160" />

            <InputArea>
                <SingnInput
                    IconSvg={EmailIcon}
                    Placeholder="Digite o seu E-mail"
                    value={emailField}
                    onChangeText={t => setEmailField(t)}
                />
                <SingnInput
                    IconSvg={LockIcon}
                    Placeholder="Digite a sua Senha"
                    value={passwordField}
                    onChangeText={t => setPasswordField(t)}
                    password={true}
                />

                <CustomButton onPress={handelSinginClick}>
                    <CustomButtonText>Login</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SingnMessageButton onPress={handelMessageButtonClick}>
                <SingnMessageButtonText> Ainda não possui uma conta? </SingnMessageButtonText>
                <SingnMessageButtonTextBold>Cadastre-se</SingnMessageButtonTextBold>
            </SingnMessageButton>

        </Container>
    );
}
