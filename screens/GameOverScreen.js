import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText> The Game is Over</TitleText>
            <View style={styles.imageContainer}>
                {/* <Image 
                source={require('../assets/success.png')} 
                style={styles.image}
                resizeMode='cover'
                /> */}
                <Image 
                source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT39RCTYAerd2mtIXNGV3y2KPZfMuTSZ1tV3Q&usqp=CAU'}} 
                style={styles.image}
                resizeMode='cover'
                />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>
                Your phone needed{' '}
                <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
                guess the number{' '}
                <Text style={styles.highlight}>{props.userNumber}</Text>.
                </BodyText>
            </View>

            <MainButton 
            onPress={props.onRestart}>
                New Game
            </MainButton>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        width: 300,
        height: 300,
        overflow: 'hidden',
        marginVertical: 30
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: 15
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',
    }
});

export default GameOverScreen;