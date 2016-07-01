import React from 'react'
import classnames from 'classnames';

class CoolComponent extends React.Component {
    render() {
        return (
            <div className={classnames({ 'cool-component': true,'cool-component-active': this.props.isActive})}>
                <h1>hello</h1>
                <p>this is coolComponent!</p>
            </div>
        );
    }
}

export default CoolComponent