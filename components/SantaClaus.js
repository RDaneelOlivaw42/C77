import React from 'react';
import LottieView from 'lottie-react-native'; 

export default class SantaAnimation extends React.Component {

    render(){
        return(
            <LottieView 
            source = {require('../assets/santa-taxi.json')}
            style = {{width: '60%', height: '100'}}
            autoPlay loop/>
        )
    }

}