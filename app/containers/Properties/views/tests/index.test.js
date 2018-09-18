import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import data from '../../../../data.json';
import PropertyTable from '../PropertyTable';

describe('<PropertyTable />', () => {
  it('should render the properties table', () => {
    const wrapper = shallow(<PropertyTable properties={[]} />);
    expect(wrapper).toBeTruthy();
  });

  it('should render the properties table with 3 rows', () => {
    const wrapper = shallow(<PropertyTable properties={data} />);
    const rows = wrapper.find('tbody > tr');
    expect(rows.length).toEqual(3);
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<PropertyTable properties={data} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
