import React from 'react';
import Counter from './components/counttest'
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, ImageBackground } from 'react-native'
import Constants from 'expo-constants'; // old version was 'expo'
import moment from "moment"
import { Button } from 'react-native-elements'

const { width } = Dimensions.get('window');
const frameWidth = width;
const columnWidth = frameWidth / 3;
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      setTime: moment.duration().add({ minutes: 0, seconds: 0 }),
      zeroTime: moment.duration().add({ minutes: 0, seconds: 0 }),
      studyMode: true,
      startMode: false,
    }
  }
  toggleSwitch() {
    console.log('switch val is:' + this.state.studyMode)
    if (this.state.studyMode === true) {
      this.setState(prevState => ({
        studyMode: !prevState.studyMode,
      }))
      let time1 = moment.duration().add({ minutes: 5, seconds: 0 })
      this.setState({
        setTime: time1,
      })
      return true
    }
    if (this.state.studyMode === false) {
      this.setState(prevState => ({
        studyMode: !prevState.studyMode,
      }))
      let time2 = moment.duration().add({ minutes: 25, seconds: 0 })
      this.setState({
        setTime: time2,
      })
      return true
    }
  }
  toggleStartStop = () => this.setState(prevState => ({
    startMode: !prevState.startMode,
  }))
  toggleReset = () => {
    if (this.state.studyMode === true) {
      let reset1 = moment.duration().add({ minutes: 25, seconds: 0 })
      this.setState({
        setTime: reset1,
        startMode: false,
      })
    }
    else if (this.state.studyMode === false) {
      let reset2 = moment.duration().add({ minutes: 5, seconds: 0 })
      this.setState({
        setTime: reset2,
        startMode: false,
      })
    }
  }
  render() {
    console.log("setTime in render is :" + this.state.setTime)
    return (
      <ImageBackground style={styles.backgroundImage} source={require("./assets/bg.jpeg")}  >
        <View style={styles.appContainer}>
          <View style={styles.frame}>
            <TouchableOpacity style={styles.button} onPress={() => this.toggleSwitch()}>
              <Text style={styles.font}> Switch </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={this.toggleStartStop}>
              <Text style={styles.font}> Start/Stop </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={this.toggleReset}>
              <Text style={styles.font}> RESET </Text>
            </TouchableOpacity>
          </View>
          <View>
            {<Counter mins={this.state.mins} secs={this.state.secs} study={this.state.studyMode} start={this.state.startMode} time={this.state.setTime} />}
          </View>
        </View>
      </ImageBackground >
    )
  }
}
const styles = StyleSheet.create({
  appContainer: {
    paddingTop: Constants.statusBarHeight,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  frame: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 25,
    padding: 20,
    margin: 2,
  },
  button: {
    color: '#450920',
    alignItems: 'center',
    backgroundColor: '#A53860',
    padding: 10,
    borderWidth: 5,
    borderRadius: 10,
    borderColor: '#450920',
    margin: 10,

  },
  font: {
    fontWeight: "bold", fontSize: 20,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0
  },
})
