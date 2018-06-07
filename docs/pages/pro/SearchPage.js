import React from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';
import { Container, FormInline, Button, Navbar, NavbarBrand, Collapse, NavbarToggler, NavbarNav, NavItem, NavLink, Fa, Select, SelectInput, SelectOptions, SelectOption, Input  } from 'mdbreact';

class SearchPagePro extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      collapsed: false,
      value: "Choose your option",
      searchValue: ''
    };
    this.handleTogglerClick = this.handleTogglerClick.bind(this);
    this.handleNavbarClick = this.handleNavbarClick.bind(this);
    this.optionClick = this.optionClick.bind(this);
    this.onClick = this.onClick.bind(this);
    this.otherDropdownsClose = this.otherDropdownsClose.bind(this);
    this.autocomplete = this.autocomplete.bind(this);
  }

  handleTogglerClick(){
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  handleNavbarClick(){
    this.setState({
      collapsed: false
    });
  }

  optionClick(value) {
    if (value.constructor === Array) {
      value = value.join(', ');
    }
    this.setState({value: value});
  }

  onClick(e) {
    // check if select is multiple
    if (e.target.dataset.multiple === 'true') {
      return;
    }
    if (e.target.classList.contains('form-control')) {
      return;
    }

    if (e.target.classList.contains('select-dropdown')) {
      this.otherDropdownsClose();
      if (e.target.nextElementSibling) {
        e.target.nextElementSibling.classList.add('fadeIn');
      }
    } else {
      this.otherDropdownsClose();
    }
  }

  otherDropdownsClose() {
    let dropdowns = document.querySelectorAll('.dropdown-content');
    for (let i = 0; i < dropdowns.length; i++) {
      if (dropdowns[i].classList.contains('fadeIn')) {
        dropdowns[i].classList.remove('fadeIn');
      }
    }
  }

  autocomplete = (e) => {
    this.setState({searchValue: e.target.value});
  }

  componentDidMount() {
    document.addEventListener('click', this.onClick);
  }
  
  componentWillUnmount() {
    document.removeEventListener('click', this.onClick);
  }

  render() {
    return (
      <Container>
        <h3 className="mt-5">Search with buttons</h3>
        <FormInline className="md-form mr-auto mb-4">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
          <Button gradient="aqua" rounded size="sm" type="submit" className="mr-auto">Search</Button>
          <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
          <Button outline color="warning" rounded size="sm" type="submit" className="mr-auto">Search</Button>
          <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
          <Button color="unique" rounded size="sm" type="submit" className="mr-auto">Search</Button>
        </FormInline>
        <FormInline className="mr-auto mb-4">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
          <Button gradient="aqua" rounded size="sm" type="submit" className="mr-auto">Search</Button>
          <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
          <Button outline color="warning" rounded size="sm" type="submit" className="mr-auto">Search</Button>
          <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
          <Button color="unique" rounded size="sm" type="submit" className="mr-auto">Search</Button>
        </FormInline>
        <h3 className="mt-5">Search within navbar</h3>
        <Navbar color="deep-purple" className="text-white darken-3" dark expand="md">
          <NavbarBrand>
            Navbar
          </NavbarBrand>
          <NavbarToggler onClick={this.handleTogglerClick}/>
          <Collapse isOpen={this.state.collapsed} navbar>
            <NavbarNav right onClick={this.handleNavbarClick}>
              <FormInline className="md-form mr-auto m-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                <Button outline color="white" size="sm" type="submit" className="mr-auto">Search</Button>
              </FormInline>
            </NavbarNav>
          </Collapse>
        </Navbar>
        <br/>
        <Navbar color="blue-grey" light className="lighten-5" expand="md">
          <NavbarBrand>
            Navbar
          </NavbarBrand>
          <NavbarToggler onClick={this.handleTogglerClick}/>
          <Collapse isOpen={this.state.collapsed} navbar>
            <NavbarNav left onClick={this.handleNavbarClick}>
              <NavItem active>
                <NavLink to="#!">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#!">Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#!">Pricing</NavLink>
              </NavItem>
            </NavbarNav>
            <NavbarNav right onClick={this.handleNavbarClick}>
              <FormInline className="mr-auto m-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
              </FormInline>
            </NavbarNav>
          </Collapse>
        </Navbar>
        <h3 className="mt-5">Search within select</h3>
        <Select>
          <SelectInput value={this.state.value}></SelectInput>
          <SelectOptions>
            <Input hint="Search" className="search" containerClass="search-wrap" type="text" onChange={e => this.autocomplete(e)} />
            <SelectOption disabled>Choose your option</SelectOption>
            {this.state.searchValue.includes('Option nr 1') && <SelectOption triggerOptionClick={this.optionClick}>Option nr 1</SelectOption>}
            <SelectOption triggerOptionClick={this.optionClick}>Option nr 2</SelectOption>
            <SelectOption triggerOptionClick={this.optionClick}>Option nr 3</SelectOption>
            <SelectOption triggerOptionClick={this.optionClick}>Option nr 4</SelectOption>
            <SelectOption triggerOptionClick={this.optionClick}>Option nr 5</SelectOption>
          </SelectOptions>
        </Select>
        <label>Example label</label>
      </Container>
    );
  }
}

export default SearchPagePro;
