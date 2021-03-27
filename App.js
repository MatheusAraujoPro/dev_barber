import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MainStack from './src/stacks/MainStack'
import UserContextProvider from './src/contexts/UserContext';  

{/* Navigation Container é obrigatório para quem usa Navigation Stack*/}
export default () =>{
  return(
    <UserContextProvider>
      <NavigationContainer>
        {/* Stack fica aqui dentro */}
        
        <MainStack/>
      </NavigationContainer>
    </UserContextProvider>
  );
}