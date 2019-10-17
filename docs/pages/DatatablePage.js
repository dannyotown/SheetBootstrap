import React from 'react';
import { MDBDataTable } from 'mdbreact';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleUserChange = this.handleUserChange.bind(this);

    this.state = {
      userList: [],
      selectedUsers: []
    };
  }

  componentDidMount() {
    const userList = [
      'Tiger Nixon',
      'Charde Marshall',
      'Jena Gaines',
      'Quinn Flynn',
      'Rhona Davidson',
      'Sonya Frost',
      'Colleen Hurst',
      'Herrod Chandler',
      'Garrett Winters',
      'Brielle Williamson',
      'Ashton Cox',
      'Cedric Kelly',
      'Airi Satou'
    ];
    this.setState(() => ({ userList }));
  }

  handleUserChange(e) {
    /* If the nodeValue ('ADD' or 'REMOVE') we add or remove the selected user to the selectedUsers array and update state */
    const {
      value,
      attributes: {
        action: { nodeValue }
      }
    } = e.currentTarget;

    this.setState(prevState => {
      let selectedUsers = [];
      if (nodeValue === 'ADD') {
        selectedUsers = [...prevState.selectedUsers, value];
      } else {
        selectedUsers = prevState.selectedUsers.filter(user => value !== user);
      }
      return { selectedUsers };
    });
  }

  buildRowData(userList) {
    /*
        Build up the data needed for the table.
        In order to have a component inside the datatable, this pattern with the 'searchValue' needs to be used.
          ref: https://mdbootstrap.com/support/react/mdbdatatable-search-not-returning-results-if-rendered-by-another-component/
     */
    const { selectedUsers } = this.state,
      MyButton = ({ searchValue, btnClass, meta, label, handler }) => {
        return (
          <button
            className={`btn btn-block btn-sm ${btnClass}`}
            value={'actions'}
            type='button'
            {...meta}
            onClick={e => handler(e)}
          >
            {label}
          </button>
        );
      };
    let data = {
      rows: [],
      columns: [
        { label: 'Name', field: 'Name' },
        { label: 'Actions', field: 'Actions' }
      ]
    };

    userList.forEach(user => {
      /* Populate both columns, and depending on the current state, the My_Button component will display either 'Remove' or 'Add' */
      const added = selectedUsers.includes(user),
        label = added ? 'Remove' : 'Add',
        btnClass = added ? 'btn-danger' : 'btn-default',
        meta = { action: added ? 'REMOVE' : 'ADD', value: user },
        rowObj = {
          Name: user,
          Actions: (
            <MyButton
              btnClass={btnClass}
              searchValue={'actions'}
              meta={meta}
              label={label}
              handler={this.handleUserChange}
            />
          )
        };

      data['rows'].push(rowObj);
    });

    return data;
  }

  render() {
    const { userList, selectedUsers } = this.state;
    return (
      <div className='container' style={{ marginTop: '3rem' }}>
        <div className='row'>
          <h4>
            <a href='https://mdbootstrap.com/support/react/mdbdatatable-search-filter-is-not-honored-after-state-change/'>
              https://mdbootstrap.com/support/react/mdbdatatable-search-filter-is-not-honored-after-state-change/
            </a>
          </h4>
          <div className='row'>
            <div className='col-lg-6'>
              <h5>Expected behavior:</h5>
              <p>
                The datatable is listens to the search term, and the rows are
                filtered. State updates, which causes the datatable to
                re-render, but the search term in the filter should be honored.
              </p>
            </div>
            <div className='col-lg-6'>
              <h5>Actual behavior:</h5>
              <p>
                After a state change, the datatable re-renders, and the search
                term is ignored until the next onChange event.
              </p>
            </div>
          </div>
          <h5>
            Screen recording of it happening on a live application:{' '}
            <a href='https://www.youtube.com/watch?v=AS5STv01Es4'>
              https://www.youtube.com/watch?v=AS5STv01Es4
            </a>
          </h5>
        </div>
        <br />
        <div className='row'>
          <div className='col-lg-6'>
            <MDBDataTable
              data={this.buildRowData(userList)}
              entries={3}
              entriesOptions={[3, 5, 10, 15]}
            />
          </div>
          <div className='col-lg-5 col-lg-offset-1'>
            <h3>Selected Users:</h3>
            <ul>
              {selectedUsers.map((user, idx) => {
                return <li key={idx}>{user}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
