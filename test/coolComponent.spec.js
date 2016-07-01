import React from 'react'
import expect from 'expect';
import TestUntils from 'react-addons-test-utils';
import CoolComponent from '../component/CoolComponent';

describe('cool component', () => {
    it('should get the cool component', () => {
        var renderer = TestUntils.createRenderer();
        renderer.render(<CoolComponent />);

        var output = renderer.getRenderOutput();

        console.log(output);
    });
});