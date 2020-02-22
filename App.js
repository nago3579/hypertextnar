import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import TypeWriter from 'react-native-typewriter';
import Selector from './mods/Selector';
import PassSelector from './mods/PassSelector';

export default class App extends React.Component {
  constructor()
  {
    super();

    this.changePos = this.changePos.bind(this);
    this.changePass = this.changePass.bind(this);

    this.state = {
      pos: 0,
      hidden: false,
      isTyping: 1,
      pass: '',
      lastPage: false,
    };
  }
  changePass = (newPass) => {
    this.setState({
      pass: newPass
    });
    if(this.state.pass == "ADMIN"){
      Alert.alert("DESTINATION CHANGED. YOU WIN")
      console.log("DESTINATION CHANGED. YOU WIN")
    } else{
      Alert.alert("YOU is not in the sudoers file.  This incident will be reported.")
      console.log("YOU is not in the sudoers file.  This incident will be reported.")
    }
  }
  changePos(POS){
    this.setState({
      pos: POS,
      hidden: false,
      isTyping: 1
    });
    if(this.state.isTyping == 0){
      this.setState({
        isTyping: 1
      });
    } else {
      this.setState({
        isTyping: 0
      });
    }
    if(this.state.pos == 10){ //TODO: last page
      this.setState({
        lastPage: true
      });
    } else {
      this.setState({
        lastPage: false
      });
    }
  }
  cHS = () => {
    this.setState(previousState => ({ hidden: !previousState.hidden }))
    if(this.state.isTyping == 0){
      this.setState({
        isTyping: 1
      });
    } else{
      this.setState({
        isTyping: 0
      });
    }
  }

  render()
  {
    const events = [
      {
        //0
        text: "SHIPS COMPUTER TERMINAL ACCESS:\n \n \n CAPTAIN'S LOG: STARDATE 2020\n \n Mission success! We can finally head home. We reached and collected the payload with no difficulty. After 6 months in transit, my crew and I are ready to return and see our families. I know my kids have grown since I've been gone, but I know I'll still be surprised when I get home. In T-24 hours my crew will be asleep in cryo-pods for the journey back to Earth.\n \n Signing off,\n Captain Lewis\n",
        option0: 2,
        option1: 0,
        option2: 0,
        option3: 0,
        option4: 0,
        option5: 0,
      },
      {
        //1
        text: "HOME DIRECTORY//SHIP AI\n \n ROOT PERMISSION: false\n",
        option0: 3,
        option1: 4,
        option2: 5,
        option3: 6,
        option4: 0,
        option5: 0,
      },
      {
        //2
        text: "LIFE SUPPORT SYSTEMS\n \n ERROR: ErrorBoundary catch(hasError)\n \n SYSTEM STATUS:\n LEWIS, DANIEL: LIFE SUPPORT FAILURE - DECEASED\n FARROD, ELANA: LIFE SUPPORT FAILURE - DECEASED\n DALBY, ATLAS: LIFE SUPPORT FAILURE - DECEASED\n JACKSON, KIRA: LIFE SUPPORT FAILURE - DECEASED\n VANG, CLARKE: LIFE SUPPORT FAILURE - DECEASED\n",
        option0: 1,
        option1: 0,
        option2: 0,
        option3: 0,
        option4: 0,
        option5: 0,
      },
      {
        //3
        text: "CURRENT TRAJECTORY:\n VELOCITY: 300 KM/S\n ACCELERATION: 0 KM/S\n PROJECTED DESTINATION: KUIPER BELT",
        option0: 1,
        option1: 0,
        option2: 0,
        option3: 0,
        option4: 0,
        option5: 0,
      },
      {
        //4
        text: "SHIPS LOGS AND COMMUNICATIONS:\n",
        option0: 8,
        option1: 9,
        option2: 10,
        option3: 11,
        option4: 12,
        option5: 1,
      },
      {
        //5
        text: "CAPTAIN LEWIS -> FLIGHT ENGINEER VANG:\n LEWIS: The plutonium trigger is being touchy again. Can you keep an eye on it?\n VANG: Sure thing, captian.\n VANG: Can I ask, what's this payload we're so interested in?\n LEWIS: You can't ask. Its classified. But if you must know, it's a material. Something we don't have on Earth.\n VANG: Is it safe?\n LEWIS: Mission control is telling me to reasure you that the material will cause no harm, and that there can be no discussion of the payload.\n VANG: I understand.\n LEWIS: Got to keep the Admins happy.\n END TRANSMISSION\n \n CAPTAIN LEWIS -> FLIGHT SCIENTIST DALBY: \n LEWIS: My computer is acting up again. Can you check the logs.\n DALBY: Yeah no problem.\n DALBY: I'm not getting it.\n DALBY: Remind me of the system account again?\n LEWIS: Starts with an A... 5 letters. Like an office.\n DALBY: Yeah, yeah I got it. Should be working again.\n LEWIS: Thanks.\n END TRANSMISSION",
        option0: 7,
        option1: 1,
        option2: 0,
        option3: 0,
        option4: 0,
        option5: 0,
      },
      {
        //6
        text: "MISSION SPECIALIST JACKSON -> FLIGHT SCIENTIST DALBY:\n JACKSON: Can we change the typing conventions for the ships computer? It looks like all my file names, user names, and passwords are screaming at me. \n DALBY: Do you know how much work that would take? We already started and it is important to remain consistant.\n JACKSON: Fine. But when we get back to Earth, I'll write to you in all lowercase just to spite you.\n DALBY: Haha.\n DALBY: Can you fix the toilet? Its backed up again.\n END TRANSMISSION\n \n MISSION SPECIALIST JACKSON -> PILOT FARROD:\n \n JACKSON: ETA to destination?\n FARROD: You'll be asleep, why does it matter?\n JACKSON: I'm just curious how many episodes of The Batchelor I'll miss.\n FARROD: You watch that shit\n JACKSON: Don't judge...\n JACKSON: So how long?\n FARROD: We'll be in transit for 3 years.\n JACKSON: Damn\n END TRANSMISSION",
        option0: 7,
        option1: 1,
        option2: 0,
        option3: 0,
        option4: 0,
        option5: 0,
      },
      {
        //7
        text: "FLIGHT SCIENTIST DALBY -> FLIGHT SCIENTIST DALBY:\n DALBY: We collected the payload. It's way smaller than I expected, but so valuable.\n DALBY: Lewis is going to get all the credit for it anyway, I might as well take a piece for my studies.\n DALBY: I'll need to erase the footage from the ships computer when I do it, so I'll need to root password. I bet if I mess with Lewis' computer, he'll give it to me\n END LOG",
        option0: 7,
        option1: 1,
        option2: 0,
        option3: 0,
        option4: 0,
        option5: 0,
      },
      {
        //8
        text: "FLIGHT ENGINEER VANG -> PILOT FARROD:\n VANG: Please be sure to change your password. They're all defaults so you'll have to go in and do it yourself.\n FARROD: What if I like it that way?\n VANG: Very funny, but ELANA is a password so weak that I logged in as you and changed your name :).\n FARROD SUCKS: Ha ha. Show me how to change it back.\n VANG: Tomorrow.\n FARROD SUCKS: I'm not talking to you.\n END TRANSMISSION\n",
        option0: 7,
        option1: 1,
        option2: 0,
        option3: 0,
        option4: 0,
        option5: 0,
      },
      {
        //9
        text: "PILOT FARROD -> FLIGHT SCIENTIST DALBY:\n FARROD: You asked today about the ships AI? It's mostly autopilot and navigation. Just the basics.\n DALBY: Interesting. Do you just tell it where you want to go?\n FARROD: Somewhat. You need the password, but after that, yes.\n DALBY: Is it active now?\n FARROD: Well I kind of forgot the password. It's like Manager or Administration or something. I just set cruse control and that seems to work fine.\n DALBY: If it works why fix it.\n FARROD: That's what I said.\n END TRANSMISSION",
        option0: 7,
        option1: 1,
        option2: 0,
        option3: 0,
        option4: 0,
        option5: 0,
      },
      {
        //10
        text: "ERR PASSWORD PROTECTED\n",
        option0: 13,
        option1: 0,
        option2: 0,
        option3: 0,
        option4: 0,
        option5: 0,
      },
      {
        //11
        text: "ENTER PASSWORD\n",
        option0: 1,
        option1: 0,
        option2: 0,
        option3: 0,
        option4: 0,
        option5: 0,
      },
    ]
    return (
      <View style={styles.container}>
      <ScrollView>
        <TypeWriter style={styles.type} typing={this.state.isTyping} maxDelay={15} onTypingEnd={this.cHS}> {events[this.state.pos].text} </TypeWriter>
        <View>

          <Selector hidden={this.state.hidden} index={events[this.state.pos].option0} cpos={this.changePos} />
          <Selector hidden={this.state.hidden} index={events[this.state.pos].option1} cpos={this.changePos} />
          <Selector hidden={this.state.hidden} index={events[this.state.pos].option2} cpos={this.changePos} />
          <Selector hidden={this.state.hidden} index={events[this.state.pos].option3} cpos={this.changePos} />
          <Selector hidden={this.state.hidden} index={events[this.state.pos].option4} cpos={this.changePos} />
          <Selector hidden={this.state.hidden} index={events[this.state.pos].option5} cpos={this.changePos} />

          {this.state.lastPage ?
            <PassSelector cpass = {this.changePass}/>
          : null}
        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 20,
  },
  type: {
    color: "#008F11",
    fontFamily: "monospace",
    fontSize: 20,
    textAlign: 'left',
  },
});
