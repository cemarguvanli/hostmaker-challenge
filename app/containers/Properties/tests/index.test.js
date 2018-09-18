import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Properties from '../Properties';

describe('<Properties />', () => {
  it('should render the properties', () => {
    const wrapper = shallow(<Properties />);
    expect(wrapper).toBeTruthy();
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<Properties />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
