import React from 'react';
import Select from '../../../src/components/pro/Select';
import SelectInput from '../../../src/components/pro/SelectInput';
import Options from '../../../src/components/pro/Options';
import Option from '../../../src/components/pro/Option';

class SelectPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownMenuOpen: false,
      value: "Choose your option",
      option1: "Option nr 1",
      option2: "Option nr 2",
      option3: "Option nr 3",
      option4: "Option nr 4",
      option5: "Option nr 5",
    }
    this.toggleSelect = this.toggleSelect.bind(this);
    this.optionClick1 = this.optionClick1.bind(this);
    this.optionClick2 = this.optionClick2.bind(this);
    this.optionClick3 = this.optionClick3.bind(this);
    this.optionClick4 = this.optionClick4.bind(this);
    this.optionClick5 = this.optionClick5.bind(this);
  }

  toggleSelect() {
    this.setState({dropdownMenuOpen: !this.state.dropdownMenuOpen});
  }

  optionClick1() {
    this.setState({value: this.state.option1});
    this.toggleSelect();
  }
  optionClick2() {
    this.setState({value: this.state.option2});
    this.toggleSelect();
  }
  optionClick3() {
    this.setState({value: this.state.option3});
    this.toggleSelect();
  }
  optionClick4() {
    this.setState({value: this.state.option4});
    this.toggleSelect();
  }
  optionClick5() {
    this.setState({value: this.state.option5});
    this.toggleSelect();
  }

  render() {
    return(
      <div className="container mt-5">
        <h2 className="mb-5"><strong>Basic example</strong></h2>
        <div className="row">
          <div className="col-md-6">

            <Select>
              <SelectInput ref="selectInput" value={this.state.value} triggerSelectClick={this.toggleSelect}></SelectInput>
              <Options toggleMenu={this.state.dropdownMenuOpen}>
                <Option value="" disabled selected>Choose your option</Option>
                <Option triggerOptionClick={this.optionClick1}>{this.state.option1}</Option>
                <Option triggerOptionClick={this.optionClick2}>{this.state.option2}</Option>
                <Option triggerOptionClick={this.optionClick3}>{this.state.option3}</Option>
                <Option triggerOptionClick={this.optionClick4}>{this.state.option4}</Option>
                <Option triggerOptionClick={this.optionClick5}>{this.state.option5}</Option>
              </Options>
            </Select>
            <label>Example label</label>

          </div>
        </div>
      </div>
    );
  }
};

export default SelectPage;
