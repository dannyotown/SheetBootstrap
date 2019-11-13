import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import MDBTypo from "../src/components/Typography/Typography";

class App extends Component {
  render() {
    const liArray = [3, 4, 5, 6, 7, 8, 9, 3, 2, 3, 4, 3];
    return (
      <MDBContainer>
        <MDBTypo component="h1">h1</MDBTypo>
        <MDBTypo component="h2">h2</MDBTypo>
        <MDBTypo component="h3">h3</MDBTypo>
        <MDBTypo component="h4">h4</MDBTypo>
        <MDBTypo component="h5">h5</MDBTypo>
        <MDBTypo component="h6">h6</MDBTypo>

        <MDBTypo component="h1" variant="h1">
          h1
        </MDBTypo>
        <MDBTypo component="h2" variant="h2">
          h2
        </MDBTypo>
        <MDBTypo component="h3" variant="h3">
          h3
        </MDBTypo>
        <MDBTypo component="h4" variant="h4">
          h4
        </MDBTypo>
        <MDBTypo component="h5" variant="h5">
          h5
        </MDBTypo>
        <MDBTypo component="h6" variant="h6">
          h6
        </MDBTypo>

        <MDBTypo component="h1" variant="h1-responsive">
          h1
        </MDBTypo>
        <MDBTypo component="h2" variant="h2-responsive">
          h2
        </MDBTypo>
        <MDBTypo component="h3" variant="h3-responsive">
          h3
        </MDBTypo>
        <MDBTypo component="h4" variant="h4-responsive">
          h4
        </MDBTypo>
        <MDBTypo component="h5" variant="h5-responsive">
          h5
        </MDBTypo>
        <MDBTypo component="h6" variant="h6-responsive">
          h6
        </MDBTypo>

        <MDBTypo component="h2" variant="display-1">
          h2
        </MDBTypo>
        <MDBTypo component="h2" variant="display-2">
          h2
        </MDBTypo>
        <MDBTypo component="h2" variant="display-3">
          h2
        </MDBTypo>
        <MDBTypo component="h2" variant="display-4">
          h2
        </MDBTypo>

        <MDBTypo component="h3">
          <strong>Fancy display heading </strong>
          <small className="text-muted">with faded secondary text</small>
        </MDBTypo>

        <MDBTypo component="h5">
          <u>Lead </u>
        </MDBTypo>
        <p className="lead">
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          Duis mollis, est non commodo luctus.
        </p>

        <MDBTypo abbr abbrTitle="attribute" abbrText="attr"></MDBTypo>
        <MDBTypo abbr abbrTitle="attribute" abbrText="attr" abbrLeftText>
          aaa
        </MDBTypo>

        <MDBTypo
          blockquote
          bqTitle="Title"
          bgFooter="Footeeeeer"
          className="text-center"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          veritatis.
        </MDBTypo>

        <MDBTypo blockquote bqTitle="Success notification" bqColor="success">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
            quibusdam dignissimos itaque harum illo! Quidem, corporis at quae
            tempore nisi impedit cupiditate perferendis nesciunt, ex dolores
            doloremque! Sit, rem, in?
          </p>
        </MDBTypo>

        <MDBTypo listUnStyled>
          {liArray.map((e, i) => {
            return <li key={i}>{e}</li>;
          })}
          <ul>
            {liArray.map((e, i) => {
              return <li key={i}>{e}</li>;
            })}
          </ul>
        </MDBTypo>

        <MDBTypo listInLine>
          {liArray.map((e, i) => {
            return (
              <li key={i} className="list-inline-item">
                {e}
              </li>
            );
          })}
        </MDBTypo>

        <MDBTypo variant="h1" component="h2" colorText="red">
          Red
        </MDBTypo>
        <MDBTypo colorText="blue">Blue</MDBTypo>
        <MDBTypo colorText="green" component="h3">
          Blue
        </MDBTypo>

        <p class="note note-primary">
          <strong>Note primary:</strong> Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Cum doloremque officia laboriosam. Itaque ex
          obcaecati architecto! Qui necessitatibus delectus placeat illo rem id
          nisi consequatur esse, sint perspiciatis soluta porro?
        </p>

        <MDBTypo note noteColor="primary" noteTitle="Note primary: ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
          doloremque officia laboriosam. Itaque ex obcaecati architecto! Qui
          necessitatibus delectus placeat illo rem id nisi consequatur esse,
          sint perspiciatis soluta porro?
        </MDBTypo>

        <MDBTypo>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
          doloremque officia laboriosam. Itaque ex obcaecati architecto! Qui
          necessitatibus delectus placeat illo rem id nisi consequatur esse,
          sint perspiciatis soluta porro?
        </MDBTypo>
      </MDBContainer>
    );
  }
}

export default App;
