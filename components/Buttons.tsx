import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    ViewStyle,
    TextStyle,
} from 'react-native';
import CustomButton from './CustomButton';



const Buttons = (props: { onUserInput: (arg0: string) => void; }) => {

    return (
        <View style={styles.panel}>
            <View style={styles.row}>
                <View style={{ flex: 3, flexDirection: 'row', alignContent: 'space-around' }}>
                    <CustomButton title="2nd" style={styles.blueButton} textStyle={styles.textWhite} action={() => { }} />
                    <CustomButton title="(" style={styles.greyButton} textStyle={styles.textWhite} action={() => props.onUserInput("(")} />
                    <CustomButton title=")" style={styles.greyButton} textStyle={styles.textWhite} action={() => props.onUserInput(")")} />
                </View>

                <View style={{ flex: 2 }}>
                    <CustomButton title="⌫" style={styles.greyButton} textStyle={styles.textWhite} action={() => props.onUserInput("⌫")} />
                </View>
            </View>

            <View style={styles.row}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <CustomButton title="7" style={styles.whiteButton} textStyle={styles.textBlack} action={() => props.onUserInput("7")} />
                    <CustomButton title="8" style={styles.whiteButton} textStyle={styles.textBlack} action={() => props.onUserInput("8")} />
                    <CustomButton title="9" style={styles.whiteButton} textStyle={styles.textBlack} action={() => props.onUserInput("9")} />
                    <CustomButton title="÷" style={styles.orangeButton} textStyle={styles.textWhite} action={() => props.onUserInput("/")} />
                    <CustomButton title="X" style={styles.greyButton} textStyle={styles.textWhite} action={() => { }} />
                </View>
            </View>

            <View style={styles.row}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <CustomButton title="4" style={styles.whiteButton} textStyle={styles.textBlack} action={() => props.onUserInput("4")} />
                    <CustomButton title="5" style={styles.whiteButton} textStyle={styles.textBlack} action={() => props.onUserInput("5")} />
                    <CustomButton title="6" style={styles.whiteButton} textStyle={styles.textBlack} action={() => props.onUserInput("6")} />
                    <CustomButton title="×" style={styles.orangeButton} textStyle={styles.textWhite} action={() => props.onUserInput("*")} />
                    <CustomButton title="π" style={styles.greyButton} textStyle={styles.textWhite} action={() => props.onUserInput("3.14")} />
                </View>
            </View>

            <View style={styles.downPanel}>
                <View style={styles.row}>
                    <View style={{ flex: 4, flexDirection: 'column' }}>
                        <View style={{ flex: 0.5, flexDirection: 'row' }}>
                            <CustomButton title="1" style={styles.whiteButton} textStyle={styles.textBlack} action={() => props.onUserInput("1")} />
                            <CustomButton title="2" style={styles.whiteButton} textStyle={styles.textBlack} action={() => props.onUserInput("2")} />
                            <CustomButton title="3" style={styles.whiteButton} textStyle={styles.textBlack} action={() => props.onUserInput("3")} />
                            <CustomButton title="-" style={styles.orangeButton} textStyle={styles.textWhite} action={() => props.onUserInput("-")} />
                        </View>
                        <View style={{ flex: 0.5, flexDirection: 'row' }} >
                            <View style={{ flex: 0.5 }}>
                                <CustomButton title="0" style={styles.whiteButton} textStyle={styles.textBlack} action={() => props.onUserInput("0")} />
                            </View>
                            <View style={{ flex: 0.5, flexDirection: 'row' }}>
                                <CustomButton title="," style={styles.whiteButton} textStyle={styles.textBlack} action={() => props.onUserInput(".")} />
                                <CustomButton title="+" style={styles.orangeButton} textStyle={styles.textWhite} action={() => props.onUserInput("+")} />
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <CustomButton title="=" style={styles.orangeButton} textStyle={styles.textWhite} action={() => props.onUserInput("=")} />
                    </View>
                </View>

            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    panel: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    } as ViewStyle,

    row: {
        flex: 1,
        flexDirection: 'row',
    } as ViewStyle,

    downPanel: {
        flex: 2,
        flexDirection: 'column'
    } as ViewStyle,

    whiteButton: {
        backgroundColor: 'white',
        alignSelf: 'stretch',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    } as ViewStyle,

    orangeButton: {
        backgroundColor: 'orange',
        alignSelf: 'stretch',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    } as ViewStyle,

    blueButton: {
        backgroundColor: 'blue',
        alignSelf: 'stretch',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    } as ViewStyle,

    greyButton: {
        backgroundColor: 'grey',
        alignSelf: 'stretch',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    } as ViewStyle,

    textWhite: {
        fontWeight: 'bold',
        color: 'white'
    } as TextStyle,

    textBlack: {
        fontWeight: 'bold'
    } as TextStyle,
});

export default Buttons;
