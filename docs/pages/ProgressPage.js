import React from "react";
import { Progress, Container } from "mdbreact";
import DocsLink from "./DocsLink";

const ProgressPage = props => {
  return (
    <Container>
      <DocsLink
        title="Progress Bar"
        href="https://mdbootstrap.com/docs/react/components/progress-bar/"
      />
      <div className="container-fluid">
        <p>Material design</p>
        <Progress material value={100} />
        <Progress material value={75} color="success" />
        <Progress material value={50} color="danger" />
        <Progress material value={25} color="warning" />
        <Progress material animated value={100} />
        <Progress material value={75} animated color="success" />
        <Progress material value={50} animated color="danger" />
        <Progress material value={25} animated color="warning" />

        <hr />
        <p>Basic design</p>
        <Progress value={100} />
        <br />
        <Progress value={75} color="success" />
        <br />
        <Progress value={50} color="danger" />
        <br />
        <Progress value={25} color="warning" />
        <br />
        <Progress animated value={100} />
        <br />
        <Progress value={75} animated color="success" />
        <br />
        <Progress value={50} animated color="danger" />
        <br />
        <Progress value={25} animated color="warning" />
        <br />
        <hr />
        <p>Material with text</p>
        <Progress material value={100}>
          You did it!
          </Progress>
        <Progress material striped value={75} color="success">
          Almost there
          </Progress>
        <Progress material value={50} color="danger">
          Cool
          </Progress>
        <Progress material striped value={25} color="warning">
          Wow!
        </Progress>
      </div>
    </Container>

  );
};

export default ProgressPage;
