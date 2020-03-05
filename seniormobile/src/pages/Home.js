/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform, FlatList, Image, SafeAreaView,ScrollView  } from 'react-native';

import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import MenuNav from '../components/MenuNav';


export default class Home extends Component {

    render() {
        
        return (
            <View style={styles.container}>
            <MenuNav/>
      
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
          
    },
    
});