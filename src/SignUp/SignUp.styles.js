/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signupImage: {
        width: 300,
        height: 300,
        flexDirection: 'row',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black',
    },
    input: {
        borderWidth: 1,
        padding: 10,
        width: 300,
        margin: 10,
        borderRadius: 5,
    },
    txtforgot: {
        color: 'blue',
    },
    btn: {
        backgroundColor: 'blue',
        height: 50,
        width: 300,
        fontSize: 20,
        padding: 10,
        color: 'white',
        textAlign: 'center',
        borderRadius: 10,
    },
    logoIcon: {
        height: 15,
        width: 15,
        flexDirection: 'row',
    },
    newTo: {
        flexDirection: 'row',
    },
});

export default styles;
