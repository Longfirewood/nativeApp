import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from "react-native";

import React from "react";

const Connect = (navigation) => {
    const handleConnectPress = () => {
        navigation.navigate('Main');
    }

    return (
        <View style={styles.main}>
            <TouchableOpacity onPress={handleConnectPress} style={styles.connect}>
                <Text style={styles.text}>
                    Scan
                </Text>
            </TouchableOpacity>

        </View>

    )
}


const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        textAlign: "center",
    },
    connect: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: 'silver',
        borderTopLeftRadius: '25%',
        borderTopRightRadius: '10%',
        borderBottomLeftRadius: '10%',
        borderBottomRightRadius: '25%',
        height: 120,
        width: 150,
    },
    main: {
        marginTop: 250,
        display: "flex",
        alignItems: "center",
        flex: 1
    }

});


export default Connect;