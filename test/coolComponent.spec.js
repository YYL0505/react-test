import React from 'react'
import expect from 'expect';
import expectJSX from 'expect-jsx';
import TestUntils from 'react-addons-test-utils';
import CoolComponent from '../component/CoolComponent';
expect.extend(expectJSX);

describe('cool component', () => {
    it('should get the cool component', () => {
        var renderer = TestUntils.createRenderer();
        renderer.render(<CoolComponent />);

        var output = renderer.getRenderOutput();
        const expected =<p>this is coolComponent!</p>;

        expect(output).toIncludeJSX(expected);

        expect(output.props.children).toEqual([
            <h1>hello</h1>,
            <p>this is coolComponent!</p>
        ]);
    });
});