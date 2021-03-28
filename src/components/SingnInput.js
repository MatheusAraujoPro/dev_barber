import React from 'react';
import Styled from 'styled-components/native';

const InputArea = Styled.View `
    width: 100%; 
    height: 60px;
    background-color: #83D6E3;
    flex-direction: row;
    border-radius: 30px
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;

`;

const InputText = Styled.TextInput `
  flex:1;
  font-size: 10px;
  color: #268596;
  margin-left: 10px;
`;

export default  ({IconSvg, Placeholder, value, onChangeText, password}) => {
  return(
    <InputArea>
        <IconSvg width="24" heigth="24" fill="#268596"/>
        <InputText
          placeholder={Placeholder}
          placeholderTextColor="#268596"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={password}
        />
    </InputArea>
  );
}

