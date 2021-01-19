import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import moment from "moment"


export default class Counter extends React.Component {
    static propTypes = {
        count: PropTypes.number.isRequired,
    }

    constructor() {
        super()
        this.state = {
            time: moment().format("mm,ss"),
            count: 60,
            minutes
        }
    }

    componentDidMount() {
        this.interval = setInterval(this.inc, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    inc = () => {
        console.log('increment!')
        this.setState(prevState => ({
            count: prevState.count - 1,
        }))
    }

    render() {
        return (
            <Text style={styles.count}>{this.state.count} </Text>
        )
    }
}


const styles = StyleSheet.create({

    count: {
        fontSize: 48,
    }
})