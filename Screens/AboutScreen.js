import { View, Text, StyleSheet, Pressable } from "react-native";


const AboutScreen = ({navigation}) => {
    return(
        <View style={styles.container}>

            <Text style={styles.text}>About page</Text>

            <Pressable
                style={({pressed}) => [pressed && styles.pressed]}
                onPress={() => navigation.navigate('Sign In')}
            >

                <Text style={styles.pressableText}>Log out</Text>

            </Pressable>

        </View>
    );
}

export default AboutScreen;

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
    pressed: {
        opacity: 0.5
    },
    pressableText: {
        marginTop: 30
    }
})