import { View, Text, StyleSheet } from "react-native";


const GroupChatsScreen = () => {
    return(
        <View style={styles.container}>

            <Text style={styles.text}>Group Chats </Text>

        </View>
    );
}

export default GroupChatsScreen;

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