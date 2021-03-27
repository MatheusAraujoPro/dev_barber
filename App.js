import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MainStack from './src/stacks/MainStack'

{/* Navigation Container é obrigatório para quem usa Navigation Stack*/}
export default () =>{
  return(
    <NavigationContainer>
      {/* Stack fica aqui dentro */}
      
      <MainStack/>
    </NavigationContainer>
  );
}