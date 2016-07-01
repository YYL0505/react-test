import React from 'react'

class CoolComponent extends React.Component {
    render() {
        return (
            <div className={this.props.name}>
                <h1>hello</h1>
                <p>this is coolComponent!</p>
            </div>
        );
    }
}

export default CoolComponent