import React from 'react';
import { Input, FormInline, Button } from 'mdbreact';


class InputPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Textarea value: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="container-fluid" style={{textAlign: 'initial'}}>
        <div>
          <Input label="Example label"/>

          <Input label="Example label" size="sm" />
          <Input label="Example label" size="sm" icon="envelope"/>

          <Input label="Example label" icon="envelope"/>
          <Input label="Example label" icon="user"/>

          <Input hint="placeholder" label="Example label" />

          <Input defaultValue="John Doe" label="Example label" />

          <Input label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
          <Input label="Type your password" icon="lock" group type="password" validate/>

          <Input label="Example label" disabled/>

          <FormInline>
            <Input label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
            <Input label="Type your password" icon="lock" group type="password" validate/>
            <Button>Login</Button>
          </FormInline>

          <Input type="textarea" label="Icon Prefix" rows="2" icon="pencil"/>
          <Input type="textarea" label="Basic textarea" rows="2" value={this.state.value} onChange={this.handleChange} />
          <Button onClick={this.handleSubmit}>Submit</Button>
        </div>
      </div>
    );
  }
}

export default InputPage;
