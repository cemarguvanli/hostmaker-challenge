import React from 'react';
import { render } from 'enzyme';
import renderer from 'react-test-renderer';

import LoadingIndicator from '../index';

describe('<LoadingIndicator />', () => {
  it('should render 8 divs', () => {
    const renderedComponent = render(<LoadingIndicator />);
    const divs = renderedComponent.find('div');
    expect(divs.length).toEqual(8);
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<LoadingIndicator />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
