(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{62:function(t,e,i){"use strict";var n=i(1),o=i.n(n),a=i(2),r=i(7),s=i(61),u=i(30),l=i.n(u),c=i(31),m=i.n(c),p=i(32),d=i.n(p),f=i(33),x=i.n(f),v=i(36),g=i.n(v),h=i(34),y=i.n(h),k=i(37),w=i(0),T=i.n(w),b=function(t){function e(){var t;return l()(this,e),(t=d()(this,x()(e).call(this))).typingAnimation=function(){clearTimeout(t.typing_timer),t.typing_timer=-1,t.state.slowText?t.index<t.props.text.length&&t.refs.animatedText&&t.setState({text:t.state.text+t.props.text.charAt(t.index)},(function(){t.index++,t.typing_timer=setTimeout((function(){t.typingAnimation()}),t.props.typingAnimationDuration)})):(t.index=t.props.text.length,t.state.text=t.props.text)},t.index=0,t.typing_timer=-1,t.state={text:"",slowText:!0},t.handleClick=t.handleClick.bind(g()(t)),t}return y()(e,t),m()(e,[{key:"componentDidMount",value:function(){this.typingAnimation()}},{key:"componentWillUnmout",value:function(){clearTimeout(this.typing_timer),this.typing_timer=-1}},{key:"handleClick",value:function(){this.setState((function(t){return{slowText:!t.slowText}}))}},{key:"render",value:function(){return o.a.createElement(r.a,{style:{flexDirection:"row",alignItems:"left",justifyContent:"left"},onClick:this.handleClick},o.a.createElement(k.a,{ref:"animatedText",style:{color:this.props.color,fontFamily:this.props.fontFamily,fontSize:this.props.textSize,textAlign:"left"}},this.state.text))}}]),e}(n.Component);function A(){var t=[{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra tortor vel odio sollicitudin, et vehicula nibh tempor. Donec vitae orci dui. Proin et ex non nisi egestas pulvinar eu at lectus. Proin augue tortor, varius et tempor non, condimentum sit amet dui. Sed sed feugiat mi, vitae rutrum elit. Nam eu lectus ultricies, efficitur purus ac, facilisis elit. Nam et mauris eu quam mollis finibus et ac tellus. Duis fermentum nulla sed elit tincidunt, in volutpat nisl venenatis. Aliquam posuere ligula eu tristique rhoncus. Suspendisse metus arcu, egestas at lectus vel, volutpat ornare nisl. Nunc mollis risus leo, quis vehicula ipsum semper non. Ut metus risus, rutrum a volutpat eget, interdum vel orci. Vestibulum id arcu felis. Quisque mattis fermentum nulla, at dapibus velit pellentesque nec. Donec aliquet nunc sem, eu maximus ex cursus hendrerit. Cras sit amet sodales eros, ac mollis odio. Nullam auctor at enim suscipit tempor. Cras venenatis sollicitudin iaculis. Aliquam consectetur felis sed urna vehicula, quis gravida nibh tincidunt. Proin sollicitudin leo sed dolor eleifend, ut cursus arcu facilisis"}];return o.a.createElement(r.a,{style:C.container},o.a.createElement(s.a,null,o.a.createElement(b,{text:t[0].text}),"//",o.a.createElement(r.a,null,"//  ",o.a.createElement(Selector,{text:[{text:"> testOption0"}][t[0].option0].text}),"//")))}b.propTypes={text:T.a.string,color:T.a.string,textSize:T.a.number,slowText:T.a.bool,typingAnimationDuration:T.a.number},b.defaultProps={text:"Default Typing Animated Text.",color:"#008F11",fontFamily:"monospace",textSize:20,typingAnimationDuration:50},i.d(e,"a",(function(){return A}));var C=a.a.create({container:{flex:1,backgroundColor:"#000000",padding:20}})},63:function(t,e,i){i(64),t.exports=i(87)},64:function(t,e){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/hypertextnar/expo-service-worker.js",{scope:"/hypertextnar/"}).then((function(t){})).catch((function(t){console.info("Failed to register service-worker",t)}))}))}},[[63,1,2]]]);
//# sourceMappingURL=../../dc6926df4eca45f8affa.map