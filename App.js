// import stuff 
import React from 'react';
import{View, Text, TextInput, Button, TouchableOpacity} from 'react-native';

// create stuff
class App extends React.Component{
  state = {
    text: "",
    todo: []
  }
  addTodo = () =>{
    var newTodo = this.state.text;
    var arr = this.state.todo;
    arr.push(newTodo);
    this.setState({todo: arr, text: ""});
  }
  deleteTodo = (t) =>{
    var arr = this.state.todo;
    var pos = arr.indexOf(t);
    arr.splice(pos,1);
    this.setState({todo: arr}); 
  }
  renderTodos = () => {
    return this.state.todo.map(t=>{
      return (
        <TouchableOpacity key ={t}>
        <Text
        style={styles.todo}
          onPress={()=>{this.deleteTodo(t)}}
          >{t}</Text>
          </TouchableOpacity>
      )
    })
  }
  render(){
    return(
      <View style={styles.wholeStyle}>
          <View style={styles.viewStyle}>
          <Text style={styles.header}>Notes</Text>
          <TextInput 
          style={styles.inputStyle}
          onChangeText={(text)=> this.setState({text})}
          value={this.state.text}
          />
          <Button
          title="Add Todo"
          color = "#E0F2F1"
          onPress={this.addTodo}
          />
          <View style={{marginTop:100}}/>
          {this.renderTodos()}
        </View>
      </View>
      
    )
  }
}



const styles = {
  wholeStyle: {
    backgroundColor: "#004D40",
    flex: 1
  },
  viewStyle: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    magin: 10,
   
  },
    inputStyle:{
      height : 40,
      borderColor: '#E0F2F1',
      borderWidth: 1
    },
    header:{
      fontSize: 30,
      color: "#E0F2F1",
      fontWeight: "bold"
    },
    todo:{
      fontsize : 25,
      color : "black"
    }
}

//export stuff
export default App;