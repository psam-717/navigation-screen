import { View, Text, StyleSheet } from "react-native";


const Profile = () => {
    return(
        <View style={styles.container}>

            <Text style={styles.text}>profile page</Text>

        </View>
    );
}

export default Profile;

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