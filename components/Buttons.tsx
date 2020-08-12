import React from 'react';
import {
    View,
    Button,
    StyleSheet,
    ViewStyle,
    TouchableOpacity,
    Text,
    TextStyle,
} from 'react-native';
import CustomButton from './CustomButton';



const Buttons = () => {
    return (
        <View style={styles.panel}>
            <View style={styles.row}>
                <View style={{ flex: 3, flexDirection: 'row', alignContent: 'space-around' }}>
                    <CustomButton title="2nd" style={styles.blueButton}/>
                    <CustomButton title="(" style={styles.greyButton}/>
                    <CustomButton title=")" style={styles.greyButton}/>
                </View>

                <View style={{ flex: 2 }}>
                    <CustomButton title="⌫" style={styles.greyButton}/>
                </View>
            </View>

            <View style={styles.row}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <CustomButton title="7" style={styles.whiteButton} />
                    <CustomButton title="8" style={styles.whiteButton} />
                    <CustomButton title="9" style={styles.whiteButton} />
                    <CustomButton title="÷" style={styles.orangeButton} />
                    <CustomButton title="X" style={styles.greyButton}/>
                </View>
            </View>

            <View style={styles.row}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <CustomButton title="4" style={styles.whiteButton} />
                    <CustomButton title="5" style={styles.whiteButton} />
                    <CustomButton title="6" style={styles.whiteButton} />
                    <CustomButton title="×" style={styles.orangeButton}/>
                    <CustomButton title="π" style={styles.greyButton}/>
                </View>
            </View>

            <View style={styles.downPanel}>
                <View style={styles.row}>
                    <View style={{ flex: 4, flexDirection: 'column' }}>
                        <View style={{ flex: 0.5, flexDirection: 'row' }}>
                            <CustomButton title="1" style={styles.whiteButton} />
                            <CustomButton title="2" style={styles.whiteButton} />
                            <CustomButton title="3" style={styles.whiteButton} />
                            <CustomButton title="-" style={styles.orangeButton}/>
                        </View>
                        <View style={{ flex: 0.5, flexDirection: 'row' }} >
                            <View style={{ flex: 0.5 }}>
                                <CustomButton title="0" style={styles.whiteButton} />
                            </View>
                            <View style={{ flex: 0.5, flexDirection: 'row' }}>
                                <CustomButton title="," style={styles.whiteButton} />
                                <CustomButton title="+" style={styles.orangeButton}/>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <CustomButton title="=" style={styles.orangeButton}/>
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
});

export default Buttons;
