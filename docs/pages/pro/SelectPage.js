import React from 'react';
import { Select, SelectInput, SelectOptions, SelectOption } from 'mdbreact';

class SelectPage extends React.Component {
  // build function for your selects, and pass it as getValue property to reed the select's value
  getValueOfSelectOne = (value) => {
    console.log(value);
  }
  getValueOfSelectTwo = (value) => {
    console.log(value);
  }

  render() {
    return(
      <div className="container mt-5 primary-text">
        <h4 className="my-4 indigo-text"><strong>Basic example</strong></h4>
        <div className="row">
          <div className="col-md-6">

            <Select getValue={this.getValueOfSelectOne}>
              <SelectInput selected="Choose your option"></SelectInput>
              <SelectOptions>
                <SelectOption disabled>Choose your option</SelectOption>
                <SelectOption>Option nr 1</SelectOption>
                <SelectOption>Option nr 2</SelectOption>
                <SelectOption>Option nr 3</SelectOption>
                <SelectOption>Option nr 4</SelectOption>
                <SelectOption>Option nr 5</SelectOption>
              </SelectOptions>
            </Select>
            <label>Example label</label>

          </div>
        </div>
        <h4 className="my-4 teal-text"><strong>Multiple select</strong></h4>
        <div className="row">
          <div className="col-md-6">

            <Select multiple getValue={this.getValueOfSelectTwo}>
              <SelectInput selected="Choose your option"></SelectInput>
              <SelectOptions>
                <SelectOption disabled>Choose your option</SelectOption>
                <SelectOption>Option nr 1</SelectOption>
                <SelectOption>Option nr 2</SelectOption>
                <SelectOption>Option nr 3</SelectOption>
                <SelectOption>Option nr 4</SelectOption>
                <SelectOption>Option nr 5</SelectOption>
              </SelectOptions>
            </Select>
            <label>Example label</label>

          </div>
        </div>
        <h4 className="my-4 deep-orange-text"><strong>Colorful select</strong></h4>
        <div className="row">
          <div className="col-md-6">

            <Select color="primary">
              <SelectInput selected="Choose your option"></SelectInput>
              <SelectOptions>
                <SelectOption disabled>Choose your option</SelectOption>
                <SelectOption>Option nr 1</SelectOption>
                <SelectOption>Option nr 2</SelectOption>
                <SelectOption>Option nr 3</SelectOption>
                <SelectOption>Option nr 4</SelectOption>
                <SelectOption>Option nr 5</SelectOption>
              </SelectOptions>
            </Select>
            <label>Blue select</label>

          </div>
        </div>
        <h4 className="my-4 blue-grey-text"><strong>Select with icons</strong></h4>
        <div className="row">
          <div className="col-md-6">

            <Select>
              <SelectInput selected="Choose your option"></SelectInput>
              <SelectOptions>
                <SelectOption disabled>Choose your option</SelectOption>
                <SelectOption icon="https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg">Option nr 1</SelectOption>
                <SelectOption icon="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg">Option nr 2</SelectOption>
                <SelectOption icon="https://mdbootstrap.com/img/Photos/Avatars/avatar-3.jpg">Option nr 3</SelectOption>
              </SelectOptions>
            </Select>
            <label>Example label</label>

          </div>
        </div>
        <h4 className="my-4 deep-purple-text"><strong>Options groups</strong></h4>
        <div className="row">
          <div className="col-md-6">

            <Select>
              <SelectInput selected="Choose your option"></SelectInput>
              <SelectOptions>
                <SelectOption disabled>team 1</SelectOption>
                <SelectOption>Option nr 1</SelectOption>
                <SelectOption>Option nr 2</SelectOption>
                <SelectOption disabled>team 2</SelectOption>
                <SelectOption>Option nr 3</SelectOption>
                <SelectOption>Option nr 4</SelectOption>
              </SelectOptions>
            </Select>
            <label>Example label</label>

          </div>
        </div>
        <br/><br/><br/><br/><br/>
      </div>
    );
  }
}

export default SelectPage;
