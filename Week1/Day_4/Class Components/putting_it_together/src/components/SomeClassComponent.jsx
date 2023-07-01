import React, { Component } from 'react';
    
    
class SomeClassComponent extends Component {
    render() {
        return (
        <div>
            {this.props.text}
        </div>);
    }
}
    
export default SomeClassComponent;
