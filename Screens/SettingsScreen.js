import { View, Text, StyleSheet } from "react-native";


const SettingsScreen = () => {
    return(
        <View style={styles.container}>

            <Text style={styles.text}>Settings page</Text>

        </View>
    );
}

export default SettingsScreen;

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