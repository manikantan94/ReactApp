import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Index from './index';

configure({adapter:new Adapter()})

describe('<Blogger />', () => {
  it('should be one <Blogger /> component', () =>{
    let wrapper= shallow(<Index />);
    expect(wrapper.find('div')).toHaveLength(1);
  })
})