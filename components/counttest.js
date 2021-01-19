import React from 'react';
import { StyleSheet, Text, View, Vibration } from 'react-native';
import moment from "moment"
// import PropTypes from 'prop-types';

export default class Counter extends React.Component {
    // static propTypes = {
    //     time: PropTypes.number.isRequired,
    // }
    constructor(props) {
        super(props)
        this.state = {
            setTime: moment.duration().add({ minutes: 0, seconds: 5 }),
            zeroTime: moment.duration().add({ minutes: 0, seconds: 0 }),
            mins: 0,
            secs: 0,
            studyMode: true,
            startMode: false,
        }
    }
    static getDerivedStateFromProps(props, state) {
        if (props.time !== state.setTime || props.start !== state.startMode || props.reset !== state.resetMode || props.study !== state.studyMode) {
            return {
                setTime: props.time,
                startMode: props.start,
                studyMode: props.study,
                resetMode: props.reset,
            };
        }
        return null;
    }
    componentDidMount() {
        this.interval = setInterval(this.updateTimer, 1000)

    }
    componentWillUnmount() {
        console.log('clearinterval')
        clearInterval(this.interval)
    }
    updateTimer = () => {
        let { setTime } = this.state
        const mins = setTime.minutes()
        const secs = setTime.seconds()
        if (this.state.startMode === true) {
            console.log('UpdateTimer!')
            if (setTime <= 0) {
                console.log("setTime is 0")
                this.setState({
                    mins,
                    secs,
                })
                Vibration.vibrate([500, 500, 500])
            }
            if (setTime > 0) {
                //countdown for all count mode
                setTime = setTime.subtract(1, "s")
                this.setState({
                    mins,
                    secs,
                    setTime
                })
            }
        }
        else {
            this.setState({
                mins,
                secs,
            })
        }
    }
    render() {
        const { mins, secs } = this.state
        return (
            <View style={styles.count} >
                <Text style={{ fontWeight: "bold", fontSize: 20, color: "#50010C" }}>Pomodoro Timer by Aizada</Text>
                <Text style={{ fontWeight: "bold", fontSize: 70, color: "#50010C" }} >{`${mins} : ${secs}`}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    count: {
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: "bold", fontSize: 50, marginBottom: 50
    },
});