import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import Backend from Backend;

class Home extends React.Component {
    state = {
        messages: []
    };
    componentWillMount(){

    }
    render() {
        return(
            <GiftedChat
            messages = {this.state.messages}
            onSend = {(messages)=>{
                Backend.sendMessages(message);
            }}
            user = {{
                _id: Backend.getUid(),
                name: this.props.name,
            }}
            />
        );
    }
    componentDidMount() {
        Backend.loadMessages((message) => {
            this.setState((previousState) => {
                return {
                    messages: GiftedChat.append(previousState.messages, message),
                };
            });
        });
    }
    componentWillUnmount(){
        Backend.closeChat();
    }
}

Chat.defaultProps = {
    name: 'Zorigt',
};

Chat.PropTypes = {
    name: React.PropTypes.string,
};

export default Chat;