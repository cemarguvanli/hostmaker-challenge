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

  // const rows = wrapper.find('.add-budget-table-row')
  //     expect(rows.length).to.eql(2)

  //     const firstRowColumns = rows.first().find('td').map(column => column.text())
  //     expect(firstRowColumns.length).to.eql(4)// since you have 4 td
  //     expect(firstRowColumns[0]).to.eql('BudgetCategoryName')
  //     expect(firstRowColumns[1]).to.eql(20)
  //     expect(firstRowColumns[2]).to.eql(someDate1)

// const SecondRowColumns = rows.last().find('td').map(column => column.text())
//       expect(firstRowColumns.length).to.eql(4)// since you have 4 td
//       expect(firstRowColumns[0]).to.eql('BudgetCategoryName2')
//       expect(firstRowColumns[1]).to.eql(30)
//       expect(firstRowColumns[2]).to.eql(someDate2)
});
