import React from 'react';
import {
    Text,
    StyleSheet,
    ViewStyle,
    TextStyle,
    TouchableOpacity
} from 'react-native';

interface CustomButtomProps {
    title: string;
    action: () => void;
    style: ViewStyle;
    textStyle: TextStyle;
}

const CustomButton = ({ style, action, title, textStyle }: CustomButtomProps) => {
    return <TouchableOpacity style={[styles.button, style]} onPress={() => action()} activeOpacity={0.8}>
        <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>

}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        alignSelf: 'stretch',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    } as ViewStyle,
});

export default CustomButton;