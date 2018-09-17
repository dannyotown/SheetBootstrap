import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, FormInline, Button, Navbar, NavbarBrand, Collapse, NavbarToggler, NavbarNav, NavItem, NavLink, Select, SelectInput, SelectOptions, SelectOption } from 'mdbreact';
import DocsLink from '../DocsLink';

class SearchPagePro extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      collapsed: false,
      value: 'Choose your option',
      value2: 'Choose your option'
    };
    this.handleTogglerClick = this.handleTogglerClick.bind(this);
    this.handleNavbarClick = this.handleNavbarClick.bind(this);
    this.getValueOfSelectOne = this.getValueOfSelectOne.bind(this);
    this.getValueOfSelectTwo = this.getValueOfSelectTwo.bind(this);
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

  // You can get select values and do whatever you want with them
  getValueOfSelectOne(value) {
    this.setState({ value: value });
  }

  getValueOfSelectTwo(value) {
    this.setState({ value2: value });
  }

  render() {
    return (
      <Router>
        <Container>
          <DocsLink title="Search" href="https://mdbootstrap.com/react/components/search/" />
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
          <Select getValue={this.getValueOfSelectOne}>
            <SelectInput selected="Choose your option"></SelectInput>
            <SelectOptions search>
              <SelectOption disabled>Choose your option</SelectOption>
              <SelectOption>Option nr 1</SelectOption>
              <SelectOption>Option nr 2</SelectOption>
              <SelectOption>Option nr 3</SelectOption>
              <SelectOption>Option nr 4</SelectOption>
              <SelectOption>Option nr 5</SelectOption>
            </SelectOptions>
          </Select>
          <label>Example label</label>
          <h3 className="mt-5">Search within multiselect</h3>
          <Select multiple getValue={this.getValueOfSelectTwo}>
            <SelectInput selected="Choose your option"></SelectInput>
            <SelectOptions search>
              <SelectOption disabled>Choose your option</SelectOption>
              <SelectOption>Option nr 1</SelectOption>
              <SelectOption>Option nr 2</SelectOption>
              <SelectOption>Option nr 3</SelectOption>
              <SelectOption>Option nr 4</SelectOption>
              <SelectOption>Option nr 5</SelectOption>
            </SelectOptions>
          </Select>
          <label>Example label</label>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </Container>
      </Router>
    );
  }
}

export default SearchPagePro;
