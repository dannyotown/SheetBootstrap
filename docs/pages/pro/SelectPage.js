import React, { Component } from "react";
import {
  MDBBtn,
  MDBSelect,
  MDBSelectInput,
  MDBSelectOptions,
  MDBSelectOption,
  MDBContainer,
  MDBRow,
  MDBCol
} from "mdbreact";
import DocsLink from "../../components/docsLink";
import SectionContainer from "../../components/sectionContainer";

class SelectPage extends Component {
  state = {
    basicOptions: [],
    basicOutlineOptions: [],
    searchOptions: [],
    searchOutlineOptions: [],
    multipleOptions: [],
    multipleOutlineOptions: [],
    colorfulOptions: [],
    colorfulOutlineOptions: [],
    selectAllOptions: [],
    selectAllOutlineOptions: [],
    withoutLabelOptions: [],
    withoutLabelOutlineOptions: [],
    requiredOptions: [],
    requiredOutlineOptions: [],
    dynamicOptions: [],
    submitBtnColor: "primary",
    submitBtnColor2: "primary",
    disabled: true
  };

  componentDidMount() {
    this.setState({
      basicOptions: this.createOptions(),
      basicOutlineOptions: this.createOptions(),
      searchOptions: this.createOptions(),
      searchOutlineOptions: this.createOptions(),
      multipleOptions: this.createOptions(),
      multipleOutlineOptions: this.createOptions(),
      colorfulOptions: this.createOptions(),
      colorfulOutlineOptions: this.createOptions(),
      selectAllOptions: this.createOptions(),
      selectAllOutlineOptions: this.createOptions(),
      withoutLabelOptions: this.createOptions(),
      withoutLabelOutlineOptions: this.createOptions(),
      requiredOptions: this.createOptions(),
      requiredOutlineOptions: this.createOptions()
    });
  }

  createOptions = () => [
    {
      checked: false,
      disabled: false,
      text: "Option One",
      value: "1"
    },
    {
      checked: false,
      disabled: false,
      text: "Option Two",
      value: "2"
    },
    {
      checked: false,
      disabled: false,
      text: "Option Three",
      value: "3"
    },
    {
      checked: false,
      disabled: false,
      text: "Option Four",
      value: "4"
    }
  ];

  // build function for your selects, and pass it as getValue property to reed the select's value
  getValueOfSelect = value => {
    console.log(value);
  };

  removeOption = () => {
    this.setState({
      dynamicOptions: this.state.dynamicOptions.slice(0, -1)
    });
  };

  addOption = () => {
    const dynamicOptions = [...this.state.dynamicOptions];
    const newOption = {
      checked: true,
      text: `Option ${this.state.dynamicOptions.length + 1}`,
      value: `${this.state.dynamicOptions.length + 1}`
    };

    this.setState({
      dynamicOptions: [...dynamicOptions, newOption]
    });
  };

  handleSubmitBtnColor = value => {
    this.setState({ submitBtnColor: value.length ? "success" : "primary" });
  };

  handleSubmitBtnColor2 = value => {
    this.setState({ submitBtnColor2: value.length ? "success" : "primary" });
  };

  handleDisabled = () => {
    this.setState({
      disabled: this.state.dynamicOptions.length ? false : true
    });
  };

  render() {
    return (
      <MDBContainer>
        <DocsLink
          title="Select"
          href="https://mdbootstrap.com/docs/react/forms/select/"
        />

        <SectionContainer title="Controlled Select">
          <MDBRow>
            <MDBCol md="6">
              <SectionContainer
                header="Basic material example"
                noBorder
                noBottom
              >
                <MDBSelect
                  color="primary"
                  getValue={this.getValueOfSelect}
                  getTextContent={this.getValueOfSelect}
                  options={this.state.basicOptions}
                  label="Basic example"
                  labelClass="labelBg"
                />
              </SectionContainer>
            </MDBCol>
            <MDBCol md="6">
              <SectionContainer
                header="Basic outline example"
                noBorder
                noBottom
              >
                <MDBSelect
                  outline
                  color="primary"
                  getValue={this.getValueOfSelect}
                  getTextContent={this.getValueOfSelect}
                  options={this.state.basicOutlineOptions}
                  label="Basic outline example"
                  labelClass="labelBg"
                />
              </SectionContainer>
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <SectionContainer header="Search enabled">
          <MDBRow>
            <MDBCol md="6">
              <MDBSelect
                color="primary"
                getValue={this.getValueOfSelect}
                getTextContent={this.getValueOfSelect}
                options={this.state.searchOptions}
                label="Basic example"
                labelClass="labelBg"
              />
            </MDBCol>
            <MDBCol md="6">
              <MDBSelect
                outline
                color="primary"
                getValue={this.getValueOfSelect}
                getTextContent={this.getValueOfSelect}
                options={this.state.searchOutlineOptions}
                label="Basic outline example"
                labelClass="labelBg"
              />
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <SectionContainer header="Multiple select">
          <MDBRow>
            <MDBCol md="6">
              <MDBSelect
                search
                multiple
                color="primary"
                getValue={this.getValueOfSelect}
                getTextContent={this.getValueOfSelect}
                options={this.state.multipleOptions}
                label="Multiple select"
                labelClass="labelBg"
              />
            </MDBCol>
            <MDBCol md="6">
              <MDBSelect
                search
                multiple
                outline
                color="primary"
                getValue={this.getValueOfSelect}
                getTextContent={this.getValueOfSelect}
                options={this.state.multipleOutlineOptions}
                label="Multiple select"
                labelClass="labelBg"
              />
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <SectionContainer header="Colorful select">
          <MDBRow>
            <MDBCol md="6">
              <MDBSelect
                search
                multiple
                color="secondary"
                getValue={this.getValueOfSelect}
                getTextContent={this.getValueOfSelect}
                options={this.state.colorfulOptions}
                label="Colorful select"
                labelClass="labelBg"
              />
            </MDBCol>
            <MDBCol md="6">
              <MDBSelect
                search
                multiple
                outline
                color="secondary"
                getValue={this.getValueOfSelect}
                getTextContent={this.getValueOfSelect}
                options={this.state.colorfulOutlineOptions}
                label="Colorful select"
                labelClass="labelBg"
              />
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <SectionContainer header="Select All option">
          <MDBRow>
            <MDBCol md="6">
              <MDBSelect
                search
                multiple
                selectAll
                color="secondary"
                getValue={this.getValueOfSelect}
                getTextContent={this.getValueOfSelect}
                options={this.state.selectAllOptions}
                label="Colorful select"
                labelClass="labelBg"
              />
            </MDBCol>
            <MDBCol md="6">
              <MDBSelect
                search
                multiple
                outline
                selectAll
                color="secondary"
                getValue={this.getValueOfSelect}
                getTextContent={this.getValueOfSelect}
                options={this.state.selectAllOutlineOptions}
                label="Colorful select"
                labelClass="labelBg"
              />
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <SectionContainer header="Without label">
          <MDBRow>
            <MDBCol md="6">
              <MDBSelect
                search
                multiple
                color="secondary"
                getValue={this.getValueOfSelect}
                getTextContent={this.getValueOfSelect}
                options={this.state.withoutLabelOptions}
                selected="Choose your option"
              />
            </MDBCol>
            <MDBCol md="6">
              <MDBSelect
                outline
                search
                multiple
                color="secondary"
                getValue={this.getValueOfSelect}
                getTextContent={this.getValueOfSelect}
                options={this.state.withoutLabelOutlineOptions}
                selected="Choose your option"
              />
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <SectionContainer header="Without color">
          <MDBRow>
            <MDBCol md="6">
              <MDBSelect
                selectAll
                multiple
                getValue={this.getValueOfSelect}
                getTextContent={this.getValueOfSelect}
                options={this.state.withoutLabelOptions}
                label="Without color"
                selected="Choose your option"
              />
            </MDBCol>
            <MDBCol md="6">
              <MDBSelect
                selectAll
                multiple
                outline
                getValue={this.getValueOfSelect}
                getTextContent={this.getValueOfSelect}
                options={this.state.withoutLabelOutlineOptions}
                label="Without color"
                selected="Choose your option"
              />
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <SectionContainer header="With required property">
          <MDBRow>
            <MDBCol md="6" tag="form" onSubmit={e => e.preventDefault()}>
              <MDBSelect
                selectAll
                search
                multiple
                color="primary"
                getValue={this.handleSubmitBtnColor}
                getTextContent={this.getValueOfSelect}
                options={this.state.requiredOptions}
                label="With required property"
                required
              />
              <MDBBtn type="submit" color={this.state.submitBtnColor}>
                Submit
              </MDBBtn>
            </MDBCol>
            <MDBCol md="6" tag="form" onSubmit={e => e.preventDefault()}>
              <MDBSelect
                selectAll
                search
                multiple
                outline
                color="primary"
                getValue={this.handleSubmitBtnColor2}
                getTextContent={this.getValueOfSelect}
                options={this.state.requiredOutlineOptions}
                label="With required property"
                required
              />
              <MDBBtn type="submit" color={this.state.submitBtnColor2}>
                Submit
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <SectionContainer header="Dynamically change state">
          <MDBRow>
            <MDBCol md="6">
              <MDBSelect
                selectAll
                search
                multiple
                color="secondary"
                getValue={this.handleDisabled}
                getTextContent={this.getValueOfSelect}
                options={this.state.dynamicOptions}
                selected="Choose your option"
                label="Dynamically change state"
                labelClass="labelBg"
              />
              <MDBBtn onClick={this.addOption} color="success">
                Add option
              </MDBBtn>
              <MDBBtn
                onClick={this.removeOption}
                color="danger"
                disabled={this.state.disabled}
              >
                Remove option
              </MDBBtn>
            </MDBCol>
            <MDBCol md="6">
              <MDBSelect
                selectAll
                outline
                search
                multiple
                color="secondary"
                getValue={this.handleDisabled}
                getTextContent={this.getValueOfSelect}
                options={this.state.dynamicOptions}
                selected="Choose your option"
                label="Dynamically change state"
                labelClass="labelBg"
              />
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <hr className="my-5" />

        <h2 className="text-center my-5 text-primary">Uncontrolled Select</h2>

        <h4 className="mt-4 indigo-text">Basic example</h4>
        <MDBRow>
          <MDBCol md="6">
            <MDBSelect
              getValue={this.getValueOfSelect}
              getTextContent={this.getValueOfSelect}
              label="Example label"
            >
              <MDBSelectInput selected="Choose your option" />
              <MDBSelectOptions>
                <MDBSelectOption disabled>Choose your option</MDBSelectOption>
                <MDBSelectOption>Option nr 1</MDBSelectOption>
                <MDBSelectOption>Option nr 2</MDBSelectOption>
                <MDBSelectOption>Option nr 3</MDBSelectOption>
                <MDBSelectOption>Option nr 4</MDBSelectOption>
                <MDBSelectOption selected>Option nr 5</MDBSelectOption>
              </MDBSelectOptions>
            </MDBSelect>
          </MDBCol>
        </MDBRow>

        <h4 className="mt-4 indigo-text">Basic outline example</h4>
        <MDBRow>
          <MDBCol md="6">
            <MDBSelect
              getValue={this.getValueOfSelect}
              getTextContent={this.getValueOfSelect}
              label="Example label"
              outline
              labelClass="labelBg"
            >
              <MDBSelectInput />
              <MDBSelectOptions>
                <MDBSelectOption disabled>Choose your option</MDBSelectOption>
                <MDBSelectOption>Option nr 1</MDBSelectOption>
                <MDBSelectOption>Option nr 2</MDBSelectOption>
                <MDBSelectOption>Option nr 3</MDBSelectOption>
                <MDBSelectOption>Option nr 4</MDBSelectOption>
                <MDBSelectOption>Option nr 5</MDBSelectOption>
              </MDBSelectOptions>
            </MDBSelect>
          </MDBCol>
        </MDBRow>

        <h4 className="mt-4 teal-text">Multiple select</h4>
        <MDBRow>
          <MDBCol md="6">
            <MDBSelect
              getValue={this.getValueOfSelect}
              getTextContent={this.getValueOfSelect}
              label="Example label"
              multiple
            >
              <MDBSelectInput selected="Choose your option" />
              <MDBSelectOptions search>
                <MDBSelectOption disabled>Choose your option</MDBSelectOption>
                <MDBSelectOption value="value nr 1">
                  Option nr 1
                </MDBSelectOption>
                <MDBSelectOption selected value="value nr 2">
                  Option nr 2
                </MDBSelectOption>
                <MDBSelectOption value="value nr 3">
                  Option nr 3
                </MDBSelectOption>
                <MDBSelectOption value="value nr 4">
                  Option nr 4
                </MDBSelectOption>
                <MDBSelectOption value="value nr 5">
                  Option nr 5
                </MDBSelectOption>
              </MDBSelectOptions>
            </MDBSelect>
          </MDBCol>
        </MDBRow>

        <h4 className="mt-4 deep-orange-text">Colorful select</h4>
        <MDBRow>
          <MDBCol md="6">
            <MDBSelect
              getValue={this.getValueOfSelect}
              color="primary"
              label="Blue select"
            >
              <MDBSelectInput selected="Choose your option" />
              <MDBSelectOptions>
                <MDBSelectOption disabled>Choose your option</MDBSelectOption>
                <MDBSelectOption value="value nr 1">
                  Option nr 1
                </MDBSelectOption>
                <MDBSelectOption value="value nr 2">
                  Option nr 2
                </MDBSelectOption>
                <MDBSelectOption value="value nr 3">
                  Option nr 3
                </MDBSelectOption>
                <MDBSelectOption value="value nr 4">
                  Option nr 4
                </MDBSelectOption>
                <MDBSelectOption value="value nr 5">
                  Option nr 5
                </MDBSelectOption>
              </MDBSelectOptions>
            </MDBSelect>
          </MDBCol>
        </MDBRow>

        <h4 className="mt-4 blue-grey-text">MDBSelect with icons</h4>
        <MDBRow>
          <MDBCol md="6">
            <MDBSelect getValue={this.getValueOfSelect} label="Example label">
              <MDBSelectInput selected="Choose your option" />
              <MDBSelectOptions search>
                <MDBSelectOption disabled>Choose your option</MDBSelectOption>
                <MDBSelectOption
                  value="User nr 1"
                  icon="https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg"
                >
                  Option nr 1
                </MDBSelectOption>
                <MDBSelectOption
                  value="User nr 2"
                  icon="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg"
                >
                  Option nr 2
                </MDBSelectOption>
                <MDBSelectOption
                  value="User nr 3"
                  icon="https://mdbootstrap.com/img/Photos/Avatars/avatar-3.jpg"
                >
                  Option nr 3
                </MDBSelectOption>
              </MDBSelectOptions>
            </MDBSelect>
          </MDBCol>
        </MDBRow>

        <h4 className="mt-4 deep-purple-text">Options groups</h4>
        <MDBRow>
          <MDBCol md="6">
            <MDBSelect getValue={this.getValueOfSelect} label="Example label">
              <MDBSelectInput selected="Choose your option" />
              <MDBSelectOptions>
                <MDBSelectOption disabled>team 1</MDBSelectOption>
                <MDBSelectOption>Option nr 1</MDBSelectOption>
                <MDBSelectOption>Option nr 2</MDBSelectOption>
                <MDBSelectOption separator>team 2</MDBSelectOption>
                <MDBSelectOption>Option nr 3</MDBSelectOption>
                <MDBSelectOption>Option nr 4</MDBSelectOption>
              </MDBSelectOptions>
            </MDBSelect>
          </MDBCol>
        </MDBRow>

        <div style={{ marginTop: "250px" }} />
      </MDBContainer>
    );
  }
}

export default SelectPage;
