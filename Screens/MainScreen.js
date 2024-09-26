import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Chats from './Chats';
import Profile from './Profile';
import HomeScreen from './HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();


const MainScreen = () => {
    return(
        <Tab.Navigator screenOptions={{
            headerShown: true,
            headerTitleAlign: 'center',
            tabBarActiveTintColor: '#17BEBB' // this changes the color of the active icons when active
        }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({color}) => <Ionicons name='home-outline' size={25} color={color}/>,
                headerShown: false
            }}/>
            <Tab.Screen name="Chats" component={Chats}  options={{
                tabBarIcon: ({color}) => <Ionicons name='chatbubble-ellipses-outline' size={25} color={color}/>,
                tabBarLabel: 'My chats', // this is for text displayed in the tabbar
                headerShown: false
            }}/>
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({color}) => <Ionicons name='person-outline' size={25} color={color}/>
            }}/>
        </Tab.Navigator>
    );
}

export default MainScreen;

