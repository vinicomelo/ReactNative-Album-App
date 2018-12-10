import React from 'react';
import {Text} from 'react-native';

// Make component
const Header = () => {
    const {textStyle} = styles;
    return (
        <Text style={textStyle}>Albums!</Text>
    )
};

const styles = {
    textStyle: {
        fontSize: 20
    }
};

// Make component available everywhere
export default Header;