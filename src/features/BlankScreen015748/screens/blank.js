import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { Switch_22: true, TextInput_31: "" }

  render = () => (
    <View>
      <Switch
        disabled={false}
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        style={styles.Switch_22}
        value={this.state.Switch_22}
        onValueChange={nextChecked => this.setState({ Switch_22: nextChecked })}
      />
      <Text>Sample text content</Text>
      <View style={styles.View_24}>
        <View>
          <Text>Sample text content</Text>
        </View>
        <View>
          <TextInput
            placeholder="Sample text input placeholder"
            value={this.state.TextInput_31}
            onChangeText={nextValue =>
              this.setState({ TextInput_31: nextValue })
            }
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  Switch_22: { alignSelf: "flex-start" },
  Text_23: {},
  View_24: {
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    color: "#8f2828",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignContent: "stretch",
    borderWidth: 5,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderTopWidth: 5,
    borderBottomWidth: 5,
    backgroundSize: "auto"
  },
  View_25: {},
  Text_29: {},
  View_26: {},
  TextInput_31: {}
})
