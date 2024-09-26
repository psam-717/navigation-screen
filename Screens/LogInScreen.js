import { View, Text, StyleSheet, Pressable, TextInput, Image } from "react-native";
import passwordIcon from '../assets/lock-icon.png'
import personIcon from '../assets/person-icon.png'

const LogInScreen = ({navigation}) => {
    return(
        <View style={styles.container}>

            <Text style={styles.text}>Enter your credential to log in </Text>

            <View style={styles.inputContainer}>

                <View style={styles.sectionContainer}>
                    <Image source={personIcon} style={styles.icon}/>

                    <TextInput style={styles.input} placeholder="username"/>

                </View>

                <View style={styles.sectionContainer}>
                    <Image source={passwordIcon} style={styles.icon}/>

                    <TextInput style={styles.input} placeholder="password" secureTextEntry={true}/>

                </View>

            </View>



            <Pressable
                style={({pressed}) => [styles.base, pressed && styles.pressed]}
                onPress={() => navigation.navigate('Main')}
            >
                <Text style={styles.loginText}>Login</Text>
            </Pressable>


            <Text style={styles.forgotPasswordText}>Forgot Password</Text>

            <View style={{flexDirection: 'row', marginTop: 70}}>
                <Text>Don't have an account?</Text>

                <Pressable
                    style={({pressed}) => [pressed && styles.pressed]}
                    onPress={() => navigation.navigate('Sign In')}
                >
                    <Text style={{color: '#17BEBB', marginLeft: 8}}>Sign Up</Text>
                </Pressable>

            </View>

            

        </View>
    );
}

export default LogInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        color: 'grey'
    },
    pressableText: {
        marginTop: 30
    },
    inputContainer: {
        marginTop: 40
    },
    sectionContainer: {
        flexDirection: 'row',
        borderWidth: 0.5,
        backgroundColor: '#ACE8E7',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        width: 300,
        height: 60,
        borderRadius: 18,
        marginTop: 20
    },
    input : {
        flex: 1,
        marginLeft: 10
        
    },
    icon: {
        width: 30,
        height: 30,
        marginRight: 5
    },
    base: {
        backgroundColor: '#17BEBB',
        padding: 10,
        width: 250,
        borderRadius: 25,
        marginTop: 40
    },
    pressed: {
        opacity: 0.5
    },
    loginText: {
        textAlign: 'center',
        color:"white"
    },
    forgotPasswordText: {
        marginTop: 80,
        color: '#17BEBB'
    }

})