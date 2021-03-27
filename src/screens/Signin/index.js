import React from 'react';
import { Text } from 'react-native';
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
    return (
        <Container>
            <BarberLogo width="100%" height="160" />

            <InputArea>
                <SingnInput IconSvg={EmailIcon} />
                <SingnInput IconSvg={LockIcon}/>

                <CustomButton>
                    <CustomButtonText>Login</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SingnMessageButton>
                <SingnMessageButtonText> Ainda não possui uma conta? </SingnMessageButtonText>
                <SingnMessageButtonTextBold>Cadastre-se</SingnMessageButtonTextBold>
            </SingnMessageButton>
            
        </Container>
    );
}
