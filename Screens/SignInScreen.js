import { View, StyleSheet, Text,Pressable, TextInput, Image } from "react-native";
 import personIcon from '../assets/person-icon.png'
 import emailIcon from '../assets/email-icon.png'
 import passwordIcon from '../assets/lock-icon.png'


const SignInScreen = ({navigation}) => {
    return(
        <View style={styles.container}>

            <Text style={styles.headerText}>Create your account</Text>


            <View style={styles.inputContainer}>
                
                <View style={styles.sectionContainer}>
                    <Image source={personIcon} style={styles.icon}/>

                    <TextInput style={styles.input} placeholder="username"/>

                </View>

                <View style={styles.sectionContainer}>
                    <Image source={emailIcon} style={styles.icon}/>

                    <TextInput style={styles.input} placeholder="email@gmail.com" keyboardType='email-address'/>

                </View>

                <View style={styles.sectionContainer}>
                    <Image source={passwordIcon} style={styles.icon}/>

                    <TextInput style={styles.input} placeholder="password" secureTextEntry={true}/>

                </View>

                <View style={styles.sectionContainer}>
                    <Image source={passwordIcon} style={styles.icon}/>

                    <TextInput style={styles.input} placeholder=" confirm password" secureTextEntry={true}/>

                </View>

               
                
            </View>

            <Pressable
                style={({pressed}) => [ styles.base ,pressed && styles.pressed]}
                onPress={() => navigation.navigate('Main')}
            >
                <Text style={styles.signInText}>Sign in</Text>
            </Pressable>

            <Text style={{textAlign: 'center', marginVertical: 30}}>Or</Text>


            <Pressable
                style={({pressed}) => [ styles.baseTwo ,pressed && styles.pressed]}
            >
                <Text style={styles.signInWithGoogleText}>Sign in with Google</Text>
            </Pressable>

            

            <View style={{flexDirection: 'row', marginTop: 30}}>

                <Text>Already have an account? </Text>
                <Pressable
                    style={({pressed}) => [pressed && styles.pressed]}
                    onPress={ () => navigation.navigate('Log In')}
                >
                    <Text style={styles.pressableText}> Log in</Text>
                </Pressable>
            </View>
            

        </View>
    )
}

export default SignInScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    headerText: {
        justifyContent: 'center',
        fontSize: 16,
        marginTop: 10,
        color: 'grey'

    },
    input: {
        marginLeft: 40, 
        flex: 1,
         marginLeft: 10
       
    },
    inputContainer: {
        marginTop: 30
    },
    text: {
        fontSize: 22,
    },
    base: {
        backgroundColor: '#17BEBB',
        padding: 10,
        width: 270,
        borderRadius: 25,
        marginTop: 30
    },
    baseTwo: {
        backgroundColor: 'white',
        padding: 10,
        width: 270,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: "#17BEBB"
    },
    pressed: {
        opacity: 0.5
    },
    signInText: {
       textAlign: 'center',
        color: 'white'
    },
    signInWithGoogleText:{
        textAlign: 'center',
        color: '#17BEBB'
    },
    pressableText: {
        color: '#17BEBB'
    }, 
    icon: {
        width: 30,
        height: 30,
        marginRight: 250,
        marginRight: 5
    },
    sectionContainer: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.5,
        backgroundColor: '#ACE8E7',
        height: 60,
        borderRadius: 18,
        padding: 10,
        width: 300
    }
    
})


