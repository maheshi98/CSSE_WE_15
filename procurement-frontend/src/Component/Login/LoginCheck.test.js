import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Login from './Login';

describe('Login Test Suite', () => {

    it('should render the form', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.exists()).toBeTruthy()

        expect(wrapper.find('form').exists()).toBe(true);
        expect(wrapper.find('#email').length).toEqual(1);
        expect(wrapper.find('#password').length).toEqual(1);
    })
})

describe('Email Test Suite', () => {

    it('should change the state of the Login component', () => {

        const wrapper = shallow(<Login />);
        wrapper.find('#email').simulate('blur',
            {
                target: { name: 'email', value: 'mashi@mail.com' }
            });

        expect(wrapper.state('email')).toEqual('mashi@mail.com');
    })
})

describe('Password Test Suite', () => {

    it('should change the state of the Login component', () => {

        const wrapper = mount(<Login />);
        wrapper.find('#password').simulate('blur',
            {
                target: { name: 'password', value: '123' }
            });

        expect(wrapper.state('password')).toEqual('123');
    })
})