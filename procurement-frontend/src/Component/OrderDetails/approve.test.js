import React from 'react';
import { mount } from 'enzyme';
import orderDetails from './Details';


it('renders submit button with custom text', () => {

  const wrapper = mount(<orderDetails>Approve</orderDetails>);
  const button = wrapper.find('button');
  expect(button).toHaveLength(1);
  expect(button.prop('type')).toEqual('submit');
  expect(button.text()).toEqual('Approve');
  
});