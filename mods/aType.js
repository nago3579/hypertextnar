import React, { Component } from 'react';
import { Text, View, Platform, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class AText extends Component
{
    constructor()
    {
        super();
        this.index = 0;
        this.typing_timer = -1;
        this.state = { text: '', slowText: true};
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount()
    {
        this.typingAnimation();
    }
    componentWillUnmout()
    {
        clearTimeout( this.typing_timer );
        this.typing_timer = -1;
    }
    handleClick() {
    this.setState(state => ({
      slowText: !state.slowText
    }));
  }
    typingAnimation = () =>
    {
        clearTimeout( this.typing_timer );
        this.typing_timer  = -1;
        if(!this.state.slowText){
          this.index = this.props.text.length;
          this.state.text = this.props.text;
        }
        else if( this.index < this.props.text.length )
        {
            if( this.refs.animatedText )
            {
                this.setState({ text: this.state.text + this.props.text.charAt( this.index ) }, () =>
                {
                    this.index++;
                    this.typing_timer = setTimeout(() =>
                    {
                        this.typingAnimation();
                    }, this.props.typingAnimationDuration);
                });
            }
        }
    }
    render()
    {
        return(
            <View style = {{ flexDirection: 'row', alignItems: 'left', justifyContent: 'left' }} onClick={this.handleClick}>
                <Text ref = "animatedText" style = {{ color: this.props.color, fontFamily: this.props.fontFamily, fontSize: this.props.textSize, textAlign: 'left' }}>{ this.state.text }
                </Text>
            </View>
        );
    }
}

AText.propTypes =
{
  text: PropTypes.string,
  color: PropTypes.string,
  textSize: PropTypes.number,
  slowText: PropTypes.bool,
  typingAnimationDuration: PropTypes.number,
}

AText.defaultProps =
{
  text: "Default Typing Animated Text.",
  color: "#008F11",
  fontFamily: "monospace",
  textSize: 20,
  typingAnimationDuration: 50,
}
