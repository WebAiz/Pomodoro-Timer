import React from 'react'
import { StyleSheet, Button, Text, View } from 'react-native'
import Counter from './counter'

export default class Main extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showCounter: true,
            counterVal: null,
        }
    }

    toggleCounter = () => this.setState(prevState => ({
        showCounter: !prevState.showCounter,
    }))

    // this is a more concise version with the same functionality
    render() {
        return (
            <View>
                <Button title="toggle" onPress={this.toggleCounter} />
                {this.state.showCounter && <Counter />}
            </View>
        )
    }
}
