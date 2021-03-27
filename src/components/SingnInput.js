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

export default  ({IconSvg}) => {
  return(
    <InputArea>
        <IconSvg width="24" heigth="24" fill="#268596"/>
    </InputArea>
  );
}

