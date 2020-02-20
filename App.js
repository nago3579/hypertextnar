import React , {useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import AType from './mods/aType';
//import Selector from './mods/Selector';



export default function App() {
  var pos = 0;
  // constructor()
  // {
  //   this.super();
  //   this.handler = this.handler.bind(this);
  //   this.state = {
  //     pos: 0
  //   };
  // }
  // handl(retPos)
  // {
  //   this.setState({
  //     pos: retPos
  // });
  // }
  const events = [
    {'text': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra tortor vel odio sollicitudin, et vehicula nibh tempor. Donec vitae orci dui. Proin et ex non nisi egestas pulvinar eu at lectus. Proin augue tortor, varius et tempor non, condimentum sit amet dui. Sed sed feugiat mi, vitae rutrum elit. Nam eu lectus ultricies, efficitur purus ac, facilisis elit. Nam et mauris eu quam mollis finibus et ac tellus. Duis fermentum nulla sed elit tincidunt, in volutpat nisl venenatis. Aliquam posuere ligula eu tristique rhoncus. Suspendisse metus arcu, egestas at lectus vel, volutpat ornare nisl. Nunc mollis risus leo, quis vehicula ipsum semper non. Ut metus risus, rutrum a volutpat eget, interdum vel orci. Vestibulum id arcu felis. Quisque mattis fermentum nulla, at dapibus velit pellentesque nec. Donec aliquet nunc sem, eu maximus ex cursus hendrerit. Cras sit amet sodales eros, ac mollis odio. Nullam auctor at enim suscipit tempor. Cras venenatis sollicitudin iaculis. Aliquam consectetur felis sed urna vehicula, quis gravida nibh tincidunt. Proin sollicitudin leo sed dolor eleifend, ut cursus arcu facilisis"
    // option0: 0,
    // option1: 1,
    // option2: 2,
    // option3: 3,
    // option4: 4,
    // option5: 5,
    }
  ];
  const options = [
    //{id: 'option0', 'text': "> testOption0", Pos: 2, hidden: 0},
    {'text': "> testOption0"},
  //     {id: 'option1', 'text': "> testOptpom1", Pos: 3, hidden: False},
  ];
  return (
    <View style={styles.container}>
    <ScrollView>
       <AType text = {events[pos].text}/>
       //<View>
      //  <Selector text={options[events[pos].option0].text}/>
      //</View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    //alignItems: 'left',
    //justifyContent: 'left',
    //textAlign: 'left',
    padding: 20,
  },
});
