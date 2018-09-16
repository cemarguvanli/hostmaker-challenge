import React from 'react';
import { shallow } from 'enzyme';

import NotFound from '../index';

describe('<NotFound />', () => {
  it('should render NotFound component', () => {
    const renderedComponent = shallow(<NotFound />);
    expect(renderedComponent).toBeTruthy();
  });
});
