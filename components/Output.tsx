import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const Output = (props: { userOutput: React.ReactNode; }) => {
    return (
        <View style={styles.display}>
            <Text style={styles.number}>
                {props.userOutput}
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
