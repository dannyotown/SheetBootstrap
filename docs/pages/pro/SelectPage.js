import React from "react";
import {
  Select,
  SelectInput,
  MDBSelectInput,
  SelectOptions,
  SelectOption,
  Container
} from "mdbreact";
import DocsLink from "../DocsLink";

class SelectPage extends React.Component {
  // build function for your selects, and pass it as getValue property to reed the select's value
  getValueOfSelect = value => {
    console.log(value);
  };

  render() {
    return (
      <Container>
        <DocsLink
          title="Select"
          href="https://mdbootstrap.com/react/advanced/select/"
        />
        <h4 className="my-4 indigo-text">
          <strong>Basic example</strong>
        </h4>
        <div className="row">
          <div className="col-md-6">
            <Select
              getValue={this.getValueOfSelect}
              getTextContent={this.getValueOfSelect}
            >
              <SelectInput selected="Choose your option" />
              <SelectOptions>
                <SelectOption disabled>Choose your option</SelectOption>
                <SelectOption>Option nr 1</SelectOption>
                <SelectOption>Option nr 2</SelectOption>
                <SelectOption>Option nr 3</SelectOption>
                <SelectOption>Option nr 4</SelectOption>
                <SelectOption selected>Option nr 5</SelectOption>
              </SelectOptions>
            </Select>
            <label>Example label</label>
          </div>
        </div>
        <h4 className="my-4 teal-text">
          <strong>Multiple select</strong>
        </h4>
        <div className="row">
          <div className="col-md-6">
            <Select
              getValue={this.getValueOfSelect}
              getTextContent={this.getValueOfSelect}
              multiple
            >
              <MDBSelectInput selected="Choose your option" />
              <SelectOptions>
                <SelectOption disabled>Choose your option</SelectOption>
                <SelectOption value="value nr 1">Option nr 1</SelectOption>
                <SelectOption selected value="value nr 2">
                  Option nr 2
                </SelectOption>
                <SelectOption value="value nr 3">Option nr 3</SelectOption>
                <SelectOption selected value="value nr 4">
                  Option nr 4
                </SelectOption>
                <SelectOption value="value nr 5">Option nr 5</SelectOption>
              </SelectOptions>
            </Select>
            <label>Example label</label>
          </div>
        </div>
        <h4 className="my-4 deep-orange-text">
          <strong>Colorful select</strong>
        </h4>
        <div className="row">
          <div className="col-md-6">
            <Select getValue={this.getValueOfSelect} color="primary">
              <SelectInput selected="Choose your option" />
              <SelectOptions>
                <SelectOption disabled>Choose your option</SelectOption>
                <SelectOption value="value nr 1">Option nr 1</SelectOption>
                <SelectOption value="value nr 2">Option nr 2</SelectOption>
                <SelectOption value="value nr 3">Option nr 3</SelectOption>
                <SelectOption value="value nr 4">Option nr 4</SelectOption>
                <SelectOption value="value nr 5">Option nr 5</SelectOption>
              </SelectOptions>
            </Select>
            <label>Blue select</label>
          </div>
        </div>
        <h4 className="my-4 blue-grey-text">
          <strong>Select with icons</strong>
        </h4>
        <div className="row">
          <div className="col-md-6">
            <Select getValue={this.getValueOfSelect}>
              <SelectInput selected="Choose your option" />
              <SelectOptions>
                <SelectOption disabled>Choose your option</SelectOption>
                <SelectOption
                  value="User nr 1"
                  icon="https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg"
                >
                  Option nr 1
                </SelectOption>
                <SelectOption
                  value="User nr 2"
                  icon="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg"
                >
                  Option nr 2
                </SelectOption>
                <SelectOption
                  value="User nr 3"
                  icon="https://mdbootstrap.com/img/Photos/Avatars/avatar-3.jpg"
                >
                  Option nr 3
                </SelectOption>
              </SelectOptions>
            </Select>
            <label>Example label</label>
          </div>
        </div>
        <h4 className="my-4 deep-purple-text">
          <strong>Options groups</strong>
        </h4>
        <div className="row">
          <div className="col-md-6">
            <Select getValue={this.getValueOfSelect}>
              <SelectInput selected="Choose your option" />
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
        <br />
        <br />
        <br />
        <br />
        <br />
      </Container>
    );
  }
}

export default SelectPage;
