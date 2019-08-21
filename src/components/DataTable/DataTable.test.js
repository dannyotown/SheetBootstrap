import React from 'react';
import { shallow, mount } from 'enzyme';

import { findByTestAttr, checkClass, checkProps } from '../../tests/utils';
import DataTable from './DataTable';

const data = {
  columns: [
    {
      label: 'Name',
      field: 'name',
      sort: 'asc'
    },
    {
      label: 'Position',
      field: 'position',
      sort: 'asc'
    },
    {
      label: 'Office',
      field: 'office',
      sort: 'asc'
    },
    {
      label: 'Age',
      field: 'age',
      sort: 'asc'
    }
  ],
  rows: [
    {
      name: 'Tiger Nixon',
      position: 'System Architect',
      office: 'Edinburgh',
      age: 63
    },
    {
      name: 'Ashton Cox',
      position: 'Junior Technical Author',
      office: 'San Francisco',
      age: 66
    },
    {
      name: 'Garrett Winters',
      position: 'Accountant',
      office: 'Tokyo',
      age: 61
    }
  ]
};

const getAgeValue = (wrapper, position) => {
  return wrapper
    .find('tbody tr')
    .at(position)
    .find('td')
    .at(3)
    .text();
};

const getNameValue = (wrapper, position) => {
  return wrapper
    .find('tbody tr')
    .at(position)
    .find('td')
    .at(0)
    .text();
};

const setup = (props = {}) => shallow(<DataTable data={data} {...props} />);

describe('<DataTable />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test(`renders`, () => {
    expect(findByTestAttr(wrapper, 'datatable').length).toBe(1);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      autoWidth: true,
      barReverse: true,
      bordered: true,
      borderless: true,
      btn: true,
      className: 'test',
      children: <div />,
      dark: true,
      data,
      displayEntries: true,
      entries: 5,
      entriesLabel: 'test',
      entriesOptions: [1, 2, 3, 4, 5],
      exportToCSV: true,
      fixed: true,
      hover: true,
      info: true,
      infoLabel: ['test'],
      maxHeight: 'test',
      order: ['desc'],
      pagesAmount: 3,
      paging: true,
      paginationLabel: ['test'],
      responsive: true,
      responsiveSm: true,
      responsiveMd: true,
      responsiveLg: true,
      responsiveXl: true,
      searching: true,
      searchLabel: 'test',
      scrollX: true,
      scrollY: true,
      sortable: true,
      sortRows: ['test'],
      small: true,
      striped: true,
      theadColor: 'test',
      theadTextWhite: true,
      tbodyColor: 'test',
      tbodyTextWhite: true
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  describe('adds custom attributes passed as property ', () => {
    test(`to DataTableTable if (!scrollY || !scrollX)`, () => {
      wrapper = setup({ customAttr: 'custom' });

      const dataTableTable = wrapper.find('DataTableTable');

      expect(dataTableTable.prop('customAttr')).toEqual('custom');
    });

    test(`to DataTableTableScroll if (scrollY || scrollX)`, () => {
      wrapper = setup({ customAttr: 'custom', scrollX: true });

      const dataTableScroll = wrapper.find('DataTableTableScroll');

      expect(dataTableScroll.prop('customAttr')).toEqual('custom');
    });
  });

  describe('should not render', () => {
    test('DataTableScroll if (!scrollY || !scrollX)', () => {
      wrapper = setup({ customAttr: 'custom' });

      const dataTableScroll = wrapper.find('DataTableTableScroll');

      expect(dataTableScroll).toHaveLength(0);
    });

    test('DataTableInfo and DataTablePagination if (!paging)', () => {
      wrapper = setup({ customAttr: 'custom', paging: false });

      const info = wrapper.find('DataTableInfo');
      const pagination = wrapper.find('DataTablePagination');

      expect(info).toHaveLength(0);
      expect(pagination).toHaveLength(0);
    });

    test('ExportToCsvBtn if (!exportToCSV)', () => {
      wrapper = setup({ customAttr: 'custom', exportToCSV: false });

      const exportToCsvBtn = wrapper.find('ExportToCSV');

      expect(exportToCsvBtn).toHaveLength(0);
    });
  });

  describe('should render', () => {
    test('DataTableScroll if (scrollY || scrollX)', () => {
      wrapper = setup({ customAttr: 'custom', scrollX: true });

      const dataTableScroll = wrapper.find('DataTableTableScroll');

      expect(dataTableScroll).toHaveLength(1);
    });

    test('DataTableInfo and DataTablePagination if (paging)', () => {
      wrapper = setup({ customAttr: 'custom', paging: true });

      const info = wrapper.find('DataTableInfo');
      const pagination = wrapper.find('DataTablePagination');

      expect(info).toHaveLength(1);
      expect(pagination).toHaveLength(1);
    });

    test('ExportToCsvBtn if (!exportToCSV)', () => {
      wrapper = setup({ customAttr: 'custom', exportToCSV: true });

      const exportToCsvBtn = wrapper.find('ExportToCSV');

      expect(exportToCsvBtn).toHaveLength(1);
    });
  });

  describe('sorts correctly', () => {
    test('initially sorts numbers correctly - desc', () => {
      wrapper = mount(<DataTable data={data} order={['age', 'desc']} />);

      const first = getAgeValue(wrapper, 0);
      const second = getAgeValue(wrapper, 1);
      const third = getAgeValue(wrapper, 2);

      expect(first > second).toBeTruthy();
      expect(second > third).toBeTruthy();
    });

    test('initially sorts numbers correctly - asc', () => {
      wrapper = mount(<DataTable data={data} order={['age', 'asc']} />);

      const first = getAgeValue(wrapper, 0);
      const second = getAgeValue(wrapper, 1);
      const third = getAgeValue(wrapper, 2);

      expect(first < second).toBeTruthy();
      expect(second < third).toBeTruthy();
    });

    test('initially sorts strings correctly - desc', () => {
      wrapper = mount(<DataTable data={data} order={['name', 'desc']} />);

      const first = getNameValue(wrapper, 0);
      const second = getNameValue(wrapper, 1);
      const third = getNameValue(wrapper, 2);

      expect(first).toEqual('Tiger Nixon');
      expect(second).toEqual('Garrett Winters');
      expect(third).toEqual('Ashton Cox');

      expect(first > second).toBeTruthy();
      expect(second > third).toBeTruthy();
    });

    test('initially sorts strings correctly - asc', () => {
      wrapper = mount(<DataTable data={data} order={['name', 'asc']} />);

      const first = getNameValue(wrapper, 0);
      const second = getNameValue(wrapper, 1);
      const third = getNameValue(wrapper, 2);

      expect(first).toEqual('Ashton Cox');
      expect(second).toEqual('Garrett Winters');
      expect(third).toEqual('Tiger Nixon');

      expect(first < second).toBeTruthy();
      expect(second < third).toBeTruthy();
    });
  });

  test('invokes fetchData when props update if (typeof data===string)', () => {
    const cb = jest.fn();

    wrapper.instance().fetchData = cb;
    wrapper.setProps({ data: 'test' });

    expect(cb).toBeCalled();
  });

  test('invokes setData when props update', () => {
    const cb = jest.fn();

    wrapper.instance().setData = cb;
    wrapper.setProps({ data: {} });

    expect(cb).toBeCalled();
  });

  test('correctly sets unsearchable fields', () => {
    let columns = [
      {
        label: 'Name',
        field: 'name',
        searchable: false
      },
      {
        label: 'Position',
        field: 'position'
      }
    ];

    const rows = [
      {
        name: 'Tiger Nixon',
        position: 'System Architect'
      },
      {
        name: 'Garrett Winters',
        position: 'Accountant'
      }
    ];

    const data = {
      rows,
      columns
    };

    wrapper = setup({ data });

    expect(wrapper.state('unsearchable')[0]).toEqual('name');

    data.columns.map(column => (column.searchable = false));

    wrapper = setup({ data });

    expect(wrapper.state('unsearchable')).toEqual(['name', 'position']);
  });

  test('counts correct amount of pages', () => {
    wrapper = setup({ entries: 1, data: { rows: [] } });
    expect(wrapper.instance().pagesAmount()).toEqual(0);

    wrapper = setup({ entries: 2, data: { rows: [{}, {}, {}, {}] } });
    expect(wrapper.instance().pagesAmount()).toEqual(2);

    wrapper = setup({ entries: 2, data: { rows: [{}, {}, {}, {}, {}] } });
    expect(wrapper.instance().pagesAmount()).toEqual(3);
  });

  test('`handleSearchChange()` invokes `filterRows()` and sets state correctly', done => {
    const cb = jest.fn();

    wrapper.instance().filterRows = cb;

    wrapper.instance().handleSearchChange({ target: { value: 'test' } });
    done();

    expect(wrapper.state('search')).toEqual('test');
    expect(cb).toBeCalled();
  });

  test('return correct fieldValue from `checkFieldValue`', () => {
    expect(wrapper.instance().checkField([{ age: '22', name: 'Test' }], 'age')).toEqual('22');
  });

  describe('sets classes', () => {
    test(`adds 'dataTables_wrapper dt-bootstrap4' class by default`, () => {
      checkClass(wrapper, 'dataTables_wrapper.dt-bootstrap4');
    });

    test(`adds 'row flex-row-reverse' class if (barReverse) property is passed`, () => {
      wrapper = setup({ barReverse: true });

      checkClass(wrapper, 'row.flex-row-reverse');
    });

    test(`adds custom class passed as property`, () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });
  });
});
