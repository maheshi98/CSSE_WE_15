import React from 'react';
import { mount } from 'enzyme';
import Quotation from './createQuotation'

it('renders text input with label (default type)', () => {
    const wrapper = mount(<Quotation name="quotationId" label="Quotation ID" />);
    const label = wrapper.find('label');
    expect(label).toHaveLength(1);
    expect(label.prop('htmlFor')).toEqual('quotationId');
    expect(label.text()).toEqual('Quotation ID');
    const input = wrapper.find('input');
    expect(input).toHaveLength(1);
    expect(input.prop('type')).toEqual('text');
    expect(input.prop('name')).toEqual('quotationId');
    expect(input.prop('id')).toEqual('quotationId');
  });
  it('renders email input with label given the type', () => {
    const wrapper = mount(<Quotation type="text" name="estimatedAmount" label="Estimated Amount" />);
    const label = wrapper.find('label');
    expect(label).toHaveLength(1);
    expect(label.prop('htmlFor')).toEqual('estimatedAmount');
    expect(label.text()).toEqual('Estimated Amount');
    const input = wrapper.find('input');
    expect(input).toHaveLength(1);
    expect(input.prop('type')).toEqual('text');
    expect(input.prop('name')).toEqual('estimatedAmount');
    expect(input.prop('id')).toEqual('estimatedAmount');
  });