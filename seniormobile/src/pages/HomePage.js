/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform, FlatList, Image, SafeAreaView, ScrollView } from 'react-native';
import Slide from '../components/Slider';




export default class HomePage extends Component {

    render() {

        return (
            <View style={styles.container}>
                <Slide />
                <ScrollView>
                    <View style={styles.tBox}>
                        <Text style={styles.textOne}>
                            Lorem Ipsums
                             </Text>


                    </View>
                </ScrollView>

            </View>




        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    tBox: {

        marginTop: '1%',

        width: '100%',
        minHeight: '10%',
        backgroundColor: 'transparent',

    },
    textOne: {

    }

});