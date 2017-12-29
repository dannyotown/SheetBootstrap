import React from 'react';
import { Button, ButtonGroup, ButtonToolbar, Fa } from 'mdbreact';

const ButtonPage = (props) => {
  return(
    <div className="container-fluid text-center">
      <section>
        <Button rounded>Rounded Default</Button>
        <Button color="primary" rounded>Rounded Primary</Button>
        <Button color="secondary" rounded>Rounded Secondary</Button>
        <Button color="success" rounded>Rounded Success</Button>
        <Button color="info" rounded>Rounded Info</Button>
        <Button color="warning" rounded>Rounded Warning</Button>
      </section>
      <section>
        <Button rounded gradient="peach">Gradient Peach</Button>
        <Button rounded gradient="purple">Gradient Purple</Button>
        <Button rounded gradient="blue">Gradient Blue</Button>
        <Button rounded gradient="aqua">Gradient Aqua</Button>
      </section>
      <section>
        <Button flat>Flat Button</Button>
      </section>
      <section>
        <Button rounded outline>Rounded Outline Default</Button>
        <Button color="primary" rounded outline>Rounded Outline Primary</Button>
        <Button color="secondary" rounded outline>Rounded Outline Secondary</Button>
        <Button color="success" rounded outline>Rounded Outline Success</Button>
      </section>
      <section>
        <Button tag="a" floating gradient="purple"><Fa icon="bolt" /></Button>
        <Button tag="a" floating gradient="peach"><Fa icon="leaf" /></Button>
        <Button tag="a" floating gradient="blue"><Fa icon="star" /></Button>
      </section>
    </div>
  );
};

export default ButtonPage;
