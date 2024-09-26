import { View, Text, StyleSheet } from "react-native";


const FavouriteChatsScreen = () => {
    return(
        <View style={styles.container}>

            <Text style={styles.text}>Favorite page</Text>

        </View>
    );
}

export default FavouriteChatsScreen;

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