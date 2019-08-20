import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import { findByTestAttr } from '../test/testUtils'
import Congrats from './Congrats'

Enzyme.configure({ adapter: new EnzymeAdapter() })

/**
* factory function to create ShallowWrapper for the congrats component.
* @function setup
* @param {object} props - component props specific to this setup.
* @returns {ShallowWrapper}
*/

const setup = (props={}) => {
  return shallow(<Congrats {...props} />)
}

test('renders without error', () => {

})
test('renders no text when `success` prop is false', () => {

})
test('renders non-empty congrats message when success prop is true', () => {

})
