import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { TouchSequence } from 'selenium-webdriver';
import {
    Actions,
} from 'react-native-router-flux';
class Home extends React.Component {
    state = {
        name: '',
    };
    render() {
        return(
            <View>
                <Text>
                    Enter your name:
                </Text>
                <TextInput
                    style = {styles.nameInput}
                    placeholde = 'Gantumur Zorigt'
                    onChangeText = {(text)=>{
                        this.setState ({
                            name: text,
                        });
                    }}
                    value = {this.state.name}
                />
                <TouchableOpacity
                    onPress = { () => {
                        // alert(this.state.name)
                        Actions.chat({
                            name: this.state.name,
                        });
                        }
                    }
                >
                    <Text style = {styles.buttonText}>
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
var styles = StyleSheet.create({
    title: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 20,
    },
    nameInput: {
        padding: 5,
        height: 40,
        borderWidth: 2,
        borderColor: 'black',
        margin: 20,
    },
    buttonText: {
        marginLeft: 20,
        fontSize: 20,
    }
});


export default Home;