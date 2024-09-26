import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text, StyleSheet, Pressable } from "react-native";
import SettingsScreen from "./SettingsScreen";
import AboutScreen from "./AboutScreen";
import Ionicons from 'react-native-vector-icons/Ionicons'


const Drawer = createDrawerNavigator();

const HomeScreenContent = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>welcome to the home screen</Text>

            <Pressable
                style={({pressed}) => [pressed && styles.pressed]}
                onPress={() => navigation.openDrawer()}
            >   
                <Text style={styles.pressableText}>Open Drawer</Text>

            </Pressable>
        </View>

        
    )
}


const HomeScreen = () => {
    return(
        <Drawer.Navigator initialRouteName="Home Content">
            <Drawer.Screen name="Home Content" component={HomeScreenContent} options={{
                title: 'Welcome Home',
                drawerLabel: 'Home', // this is for the text in the drawer
                drawerIcon: ({color}) => (<Ionicons name='home-outline' size={25} color={color} />)
            }}/>
            <Drawer.Screen name="Settings Screen" component={SettingsScreen} options={{
                drawerIcon: ({color}) => (<Ionicons name='settings-outline' size={25} color={color} />),
                title: 'Settings'
            }}/>
            
            <Drawer.Screen name="About screen" component={AboutScreen} options={{
                title: 'About',
                drawerIcon: ({color}) => (<Ionicons name='information-circle-outline' size={25} color={color} />)
            }}/>
        </Drawer.Navigator>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'

    },
    text: {
        fontSize: 22
    },
    pressableText: {
        marginTop: 25
    },
    pressed: {
        opacity: 0.5
    }
})