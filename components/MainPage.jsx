import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

import React from "react";

const MainPage = () => {
    const handler = (event) => {
        if (event == 'f') {
            console.log('f pressed')
        } else if (event == 'b') {
            console.log('b pressed')
        } else if (event == 'l') {
            console.log('l pressed')
        } else if (event == 'r') {
            console.log('r pressed')
        }

    }

    return (

        <View style={styles.parent}>
            <View style={styles.child}>
                <TouchableOpacity style={styles.item} onPress={() => handler('f')}>
                    <Text style={styles.text}>
                        Forward
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.middle}>
                <TouchableOpacity style={styles.item} onPress={() => handler('l')}>
                    <Text style={styles.text}>
                        Left
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item} onPress={() => handler('r')}>
                    <Text style={styles.text}>
                        Right
                    </Text>
                </TouchableOpacity>

            </View>

            <View style={styles.child}>
                <TouchableOpacity style={styles.item} onPress={() => handler('b')}>
                    <Text style={styles.text}>
                        Backward
                    </Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default MainPage;

const styles = StyleSheet.create({
    parent: {
        display: "flex",
        flexDirection: "colomn",
        marginTop: 200,
        flex: 1,

    },
    child: {
        justifyContent: "center",
        display: "flex",
        flexDirection: "row",
    },
    middle: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    item: {
        width: 100,
        borderWidth: 1,
        margin: 25,
        backgroundColor: "#DDDDDD",
        borderColor: "#fff",
        padding: 15,
        borderRadius: 15,

    },
    text: {
        textAlign: "center",
    }
});
