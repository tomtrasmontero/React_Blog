import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { LandingPage } from '../../components/LandingPage';

Enzyme.configure({ adapter: new Adapter() });

describe('LandingPage', () => {
  it('should have a list of blogs', () => {
    // const wrapper = shallow(<LandingPage />);
    // console.log(wrapper);
  });
});
