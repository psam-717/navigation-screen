import { View, Text, StyleSheet } from "react-native";


const UnreadChatsScreen = () => {
    return(
        <View style={styles.container}>

            <Text style={styles.text}>Unread page</Text>

        </View>
    );
}

export default UnreadChatsScreen;

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