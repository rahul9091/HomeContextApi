import React, { Component } from 'react'
import { Text, View, TouchableOpacity,  StyleSheet,TextInput } from 'react-native';

import Context from '../Context/Context';

export default class Footer extends Component {
    constructor(props){
        super(props);
        this.state={
            input:''
        }
    }

    static contextType = Context;


    render() {
        return (
            <View style={styles.view}>
             <TextInput
             value={this.state.input}
             onChangeText={(x)=> this.setState({input:x})}
             placeholder="Add New Task"
             />
             <TouchableOpacity style={styles.add} onPress={()=> this.context.addNewTask(this.state.input)}>
             <Text>Add Task</Text>
             </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
     flex: 1,
     flexDirection:'column',
    },
    view: {
     flex: 1,
     width: '100%',
     bottom: 0,
     position: 'absolute',
     flexDirection: 'row'
    },
    title: {
     marginTop:20,
     marginLeft: 20,
     fontSize: 30,
    },
    input: {
     width:'75%',
     borderRadius: 30,
     borderWidth:1,
     padding: 5,
     marginLeft: 10,
     fontSize: 18
    },
    add: {
     fontSize: 20,
     padding: 5,
     position: 'absolute',
     right: '10%'
    }
   });