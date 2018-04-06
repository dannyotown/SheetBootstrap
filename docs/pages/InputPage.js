import React from 'react';
import { Input, FormInline, Button, Container, Row, Col } from 'mdbreact';


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
      <Container fluid style={{textAlign: 'initial'}}>
        <div>
          <h2 className="mt-5"><strong>Default Bootstrap Inputs</strong></h2>
          <label for="exampleForm2">Basic example</label>
          <input type="text" id="exampleForm2" class="form-control" />
          <h4 className="mt-4"><strong>Input fields</strong></h4>
          <input class="form-control form-control-lg" type="text" placeholder="Large input" />
          <input class="form-control" type="text" placeholder="Medium input" />
          <input class="form-control form-control-sm" type="text" placeholder="Small input" />
          <br/>
          <label for="inputDisabledEx2" class="disabled">Disabled input</label>
          <input type="text" id="inputDisabledEx2" class="form-control" disabled />
          <h4 className="mt-4"><strong>Form groups</strong></h4>
          <form>
            <div class="form-group">
              <label for="formGroupExampleInput">Example label</label>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">Another label</label>
              <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input" />
            </div>
          </form>
          <h4 className="mt-4"><strong>Form grid</strong></h4>
          <form>
            <Row>
              <Col>
                <input type="text" class="form-control" placeholder="First name" />
              </Col>
              <Col>
                <input type="text" class="form-control" placeholder="Last name" />
              </Col>
            </Row>
          </form>
          <h4 className="mt-4"><strong>Form row</strong></h4>
          <form>
            <div class="form-row">
              <Col>
                <input type="text" class="form-control" placeholder="First name" />
              </Col>
              <Col>
                <input type="text" class="form-control" placeholder="Last name" />
              </Col>
            </div>
          </form>
          <h4 className="mt-4"><strong>Form layout</strong></h4>
          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4">Password</label>
                <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
              </div>
            </div>     
            <div class="form-group">
              <label for="inputAddress">Address</label>
              <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div class="form-group">
              <label for="inputAddress2">Address 2</label>
              <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputCity">City</label>
                <input type="text" class="form-control" id="inputCity" placeholder="New York City" />
              </div>
              <div class="form-group col-md-6">
                <label for="inputZip">Zip</label>
                <input type="text" class="form-control" id="inputZip" placeholder="11206-1117" />
              </div>
            </div>
            <button type="submit" class="btn btn-primary btn-md">Sign in</button>
          </form>
          <h4 className="mt-4"><strong>Horizontal form</strong></h4>
          <form>
            <div class="form-group row">
              <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
              <div class="col-sm-10">
                <input type="email" class="form-control" id="inputEmail3" placeholder="Email" />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
              <div class="col-sm-10">
                <input type="password" class="form-control" id="inputPassword3" placeholder="Password" />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-10">
                <button type="submit" class="btn btn-primary btn-md">Sign in</button>
              </div>
            </div>
          </form>
          <h4 className="mt-4"><strong>Column sizing</strong></h4>
          <form>
            <div class="form-row">
              <div class="col-7">
                <input type="text" class="form-control" placeholder="City" />
              </div>
              <div class="col">
                <input type="text" class="form-control" placeholder="State" />
              </div>
              <div class="col">
                <input type="text" class="form-control" placeholder="Zip" />
              </div>
            </div>
          </form>
          <h4 className="mt-4"><strong>Auto-sizing</strong></h4>
          <form>
            <div class="form-row align-items-center">
              <div class="col-auto">
                <label class="sr-only" for="inlineFormInput">Name</label>
                <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Jane Doe" />
              </div>
              <div class="col-auto">
                <label class="sr-only" for="inlineFormInputGroup">Username</label>
                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">@</div>
                    </div>
                    <input type="text" class="form-control py-0" id="inlineFormInputGroup" placeholder="Username" />
                </div>
              </div>
              <div class="col-auto">
                <button type="submit" class="btn btn-primary btn-md mt-0">Submit</button>
              </div>
            </div>
          </form>
          <h4 className="mt-4"><strong>Inline forms</strong></h4>
          <form class="form-inline">
            <label class="sr-only" for="inlineFormInputName2">Name</label>
            <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Jane Doe"/>
            <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
            <div class="input-group mb-2 mr-sm-2">
              <div class="input-group-prepend">
                <div class="input-group-text">@</div>
              </div>
              <input type="text" class="form-control py-0" id="inlineFormInputGroupUsername2" placeholder="Username"/>
            </div>
            <div class="form-check mb-2 mr-sm-2">
              <input class="form-check-input" type="checkbox" id="inlineFormCheck"/>
              <label class="form-check-label" for="inlineFormCheck">
                Remember me
              </label>
            </div>
            <button type="submit" class="btn btn-primary btn-md mt-0">Submit</button>
          </form>
          <h4 className="mt-4"><strong>Textarea</strong></h4>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Example textarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
          </div>
          <h4 className="mt-4"><strong>Help text</strong></h4>
          <label for="inputPassword5">Password</label>
          <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" />
          <small id="passwordHelpBlock" class="form-text text-muted">
              Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
          </small>
          <br />
          <form class="form-inline">
            <div class="form-group">
              <label for="inputPassword6">Password</label>
              <input type="password" id="inputPassword6" class="form-control mx-sm-3" aria-describedby="passwordHelpInline" />
              <small id="passwordHelpInline" class="text-muted">
                  Must be 8-20 characters long.
              </small>
            </div>
          </form>

          <hr className="mt-5" />
          <h2 className="mt-5"><strong>Material Design Inputs</strong></h2>
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
      </Container>
    );
  }
}

export default InputPage;
