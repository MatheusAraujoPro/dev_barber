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
import PersonIcon from '../../assets/person.svg'
import SingnInput from '../../components/SingnInput';

export default () => {

    //Variáveis
    const navigation = useNavigation();

    //Guardando na tela os estados dos botões
    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');


    //Métodos
    const handelSinginClick = () => {

    }


    const handelMessageButtonClick = () => {
        //Navegar para uma tela sem possibilidade de voltar
        navigation.reset({
            routes:[{name:'Signin'}]
        })

    }

    //Layout da tela

    return (
        <Container>
            <BarberLogo width="100%" height="160" />

            <InputArea>
                <SingnInput
                    IconSvg={PersonIcon}
                    Placeholder="Digite o seu nome"
                    value={nameField}
                    onChangeText={t => setNameField(t)}
                />
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
                    <CustomButtonText>Cadastrar</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SingnMessageButton onPress={handelMessageButtonClick}>
                <SingnMessageButtonText> Já possui uma conta? </SingnMessageButtonText>
                <SingnMessageButtonTextBold>Entrar</SingnMessageButtonTextBold>
            </SingnMessageButton>

        </Container>
    );
}
