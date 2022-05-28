import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from "react-native";

import React from "react";

const ConnectionsList = () => {

    return (
        <View style={styles.main}>
            <Text> ConnectionsList </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        textAlign: "center",
    },
    main: {
        marginTop: 250,
        display: "flex",
        alignItems: "center",
    }

});


export default ConnectionsList;