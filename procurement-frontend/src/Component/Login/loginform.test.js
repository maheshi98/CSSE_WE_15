import React from 'react';
import { mount } from 'enzyme';
import Login from './Login'

it('renders text input with label (default type)', () => {
    const wrapper = mount(<Login name="email" label="Email address" />);
    const label = wrapper.find('label');
    expect(label).toHaveLength(1);
    expect(label.prop('htmlFor')).toEqual('email');
    expect(label.text()).toEqual('Email address');
    const input = wrapper.find('input');
    expect(input).toHaveLength(1);
    expect(input.prop('type')).toEqual('text');
    expect(input.prop('name')).toEqual('email');
    expect(input.prop('id')).toEqual('email');
  });
  it('renders email input with label given the type', () => {
    const wrapper = mount(<Login type="text" name="password" label="Password" />);
    const label = wrapper.find('label');
    expect(label).toHaveLength(1);
    expect(label.prop('htmlFor')).toEqual('estimatedAmount');
    expect(label.text()).toEqual('Password');
    const input = wrapper.find('input');
    expect(input).toHaveLength(1);
    expect(input.prop('type')).toEqual('password');
    expect(input.prop('name')).toEqual('password');
    expect(input.prop('id')).toEqual('password');
  });