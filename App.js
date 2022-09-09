import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View , ScrollView,  FlatList} from 'react-native';

export default function App() {
  const [newtext, setNewtext] = useState('');
  const[displaygoals, setDisplaygoals] = useState([]);
 
function goalInputHandler (keyintext){ 
   setNewtext(keyintext)

}

function addNewHandler(){
setDisplaygoals(allthegoals => [...allthegoals,{ text: newtext, id:Math.random().toString()} ] )
}
  return (
    <View style={styles.container}>

     <View style={styles.inputcontainer}>
    <TextInput  style={styles.textin} placeholder='Your Course Goals' onChangeText={goalInputHandler}/>
    <Button  title='Add GOAL ' onPress={addNewHandler}/>
     </View>

     <View style= {styles.goalsdisplay} >
     <FlatList data={displaygoals} 
     renderItem={(itemData)=> { 
       return(
         <View  style={styles.displaygoals}>
         <Text >{itemData.item.text}</Text>
         </View>
       );
    }} 
  keyExtractor= {(item, index)=> {return item.id;}}
    alwaysBounceVertical= {true}/>
     

    
     </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal:20,
  },
  inputcontainer :
  {
    flex:1,
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom: 24,
    borderBottomColor: "grey",
    borderBottomWidth :1,
  
  },
  textin :{
    backgroundColor:"white",
    borderColor:'grey',
    borderWidth:1,
    marginRight: 8,
    width: "70%",
    padding:8,
   
 },
 goalsdisplay:{
   flex:6,
  
 },
 displaygoals :{
  margin :6,
  borderRadius: 10,
  padding:12,
  borderWidth:1,
  backgroundColor:"white",
 },
});
