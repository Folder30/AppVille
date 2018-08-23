import React from 'react';
import { Text, View } from 'react-native';
import styles from './../styles/Styles'

export default class Feed extends React.Component {
    render () {
        return (
            <View style={styles.container}>
                <Text>Feed!</Text>
            </View>
        )
    }
}