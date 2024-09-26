import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './Screens/SignInScreen';
import LogInScreen from './Screens/LogInScreen';
import MainScreen from './Screens/MainScreen';
import { StatusBar } from 'react-native';


export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'grey'}  barStyle={'dark-content'}/>
      <Stack.Navigator initialRouteName='Sign In'>
        <Stack.Screen name='Sign In' component={SignInScreen} options={{
          title: 'Sign Up Page',
          headerTitleAlign: 'center'
        }}/>
        <Stack.Screen name='Log In' component={LogInScreen} options={{
          title: 'Welcome Back',
          headerTitleAlign: 'center',
          headerLeft: null // removes the back button
        }}/>

        <Stack.Screen name='Main' component={MainScreen} options={{
          title: 'Main',
          headerTitleAlign: 'center',
          headerShown: false
          
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

