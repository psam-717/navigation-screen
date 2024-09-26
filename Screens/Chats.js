import { View, Text, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import UnreadChatsScreen from "./UnreadChats";
import FavouriteChatsScreen from "./FavouriteChats";
import GroupChatsScreen from "./GroupChats";


const UpperTab = createMaterialTopTabNavigator();

const AllChats = () => {
    return(
        <View style={styles.container}>

            <Text style={styles.text}>All chats will be displayed here</Text>

        </View>
    )
}


const Chats = () => {
    return(
        <UpperTab.Navigator initialLayout={'All'} screenOptions={{
            tabBarActiveTintColor: '#17BEBB',
            tabBarInactiveTintColor: 'grey',
            tabBarIndicatorStyle: {
                backgroundColor: '#17BEBB'
            }
        }}>
            <UpperTab.Screen name="All" component={AllChats}/>
            <UpperTab.Screen name="Unread" component={UnreadChatsScreen} />
            <UpperTab.Screen name="Favourites" component={FavouriteChatsScreen} options={{
                title: 'Favs'
            }}/>
            <UpperTab.Screen name="Groups" component={GroupChatsScreen}/>
        </UpperTab.Navigator>
        
    );
}

export default Chats;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'

    },
    text: {
        fontSize: 22
    }
})