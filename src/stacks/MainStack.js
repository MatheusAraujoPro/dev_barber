import React from 'react';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';

import Preload from '../screens/Preload';
import Signin from '../screens/Signin';
import Signup from '../screens/Signup';

const stack = createStackNavigator();

{/* Dentro desse componente ficaram as todas as telas dessa stack */};
export default () =>(    
    <stack.Navigator
        initialRouteName="Preload"
        screenOptions={{         
            headerShown:false,
        }}
    >
        <stack.Screen name="Preload" component={Preload} />
        <stack.Screen name="Signin" component={Signin}/>
        <stack.Screen name="Signup" component={Signup}/>
    </stack.Navigator>
);