import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const Output = () => {
    return (
        <View style={styles.display}>
            <Text style={styles.number}>
                17
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    display: {
        alignItems: 'flex-end',
        justifyContent: 'center'
    },

    number: {
        color: 'white',
        fontSize: 70
    }
});

export default Output;    
