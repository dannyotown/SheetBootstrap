import React from "react";
import { Container, Button, Fa } from "mdbreact";
import DocsLink from "../DocsLink";

const SocialButtonsPage = props => {
  return (
    <Container>
      <DocsLink
        title="Social Buttons"
        href="https://mdbootstrap.com/docs/react/components/buttons/"
      />
      <Container>
        <h4 className="mt-4">Full name social button</h4>
        <Button social="fb">
          <Fa brand icon="facebook" className="pr-1" /> Facebook
        </Button>
        <Button social="tw">
          <Fa brand icon="twitter" className="pr-1" /> Twitter
        </Button>
        <Button social="gplus">
          <Fa brand icon="google-plus" className="pr-1" /> Google +
        </Button>
        <Button social="li">
          <Fa brand icon="linkedin" className="pr-1" /> Linkedin
        </Button>
        <Button social="ins">
          <Fa brand icon="instagram" className="pr-1" /> Instagram
        </Button>
        <Button social="pin">
          <Fa brand icon="pinterest" className="pr-1" /> Pinterest
        </Button>
        <Button social="yt">
          <Fa brand icon="youtube" className="pr-1" /> Youtube
        </Button>
        <Button social="vk">
          <Fa brand icon="vk" className="pr-1" /> Vkontakte
        </Button>
        <Button social="so">
          <Fa brand icon="stack-overflow" className="pr-1" /> Stack Overflow
        </Button>
        <Button social="slack">
          <Fa brand icon="slack" className="pr-1" /> Slack
        </Button>
        <Button social="git">
          <Fa brand icon="github" className="pr-1" /> Github
        </Button>
        <Button social="comm">
          <Fa icon="comments" className="pr-1" /> Comments
        </Button>
        <Button social="email">
          <Fa icon="envelope" className="pr-1" /> Email
        </Button>
        <Button social="dribbble">
          <Fa brand icon="dribbble" className="pr-1" /> Dribbble
        </Button>
        <h4 className="mt-4">Large button</h4>
        <Button social="fb" size="lg">
          <Fa brand icon="facebook" className="pr-1" /> Facebook
        </Button>
        <h4 className="mt-4">Simple social button</h4>
        <Button social="fb">
          <Fa brand icon="facebook" />
        </Button>
        <Button social="tw">
          <Fa brand icon="twitter" />
        </Button>
        <Button social="gplus">
          <Fa brand icon="google-plus" />
        </Button>
        <Button social="li">
          <Fa brand icon="linkedin" />
        </Button>
        <Button social="ins">
          <Fa brand icon="instagram" />
        </Button>
        <Button social="pin">
          <Fa brand icon="pinterest" />
        </Button>
        <Button social="yt">
          <Fa brand icon="youtube" />
        </Button>
        <Button social="vk">
          <Fa brand icon="vk" />
        </Button>
        <Button social="so">
          <Fa brand icon="stack-overflow" />
        </Button>
        <Button social="slack">
          <Fa brand icon="slack" />
        </Button>
        <Button social="git">
          <Fa brand icon="github" />
        </Button>
        <Button social="comm">
          <Fa icon="comments" />
        </Button>
        <Button social="email">
          <Fa icon="envelope" />
        </Button>
        <Button social="dribbble">
          <Fa brand icon="dribbble" />
        </Button>
        <h4 className="mt-4">Large button</h4>
        <Button social="fb" size="lg">
          <Fa brand icon="facebook" />
        </Button>
        <h4 className="mt-4">Floating social buttons</h4>
        <Button size="lg" tag="a" floating social="fb">
          <Fa brand icon="facebook" />
        </Button>
        <Button size="lg" tag="a" floating social="tw">
          <Fa brand icon="twitter" />
        </Button>
        <Button size="lg" tag="a" floating social="gplus">
          <Fa brand icon="google-plus" />
        </Button>
        <Button size="lg" tag="a" floating social="li">
          <Fa brand icon="linkedin" />
        </Button>
        <Button size="lg" tag="a" floating social="ins">
          <Fa brand icon="instagram" />
        </Button>
        <Button size="lg" tag="a" floating social="pin">
          <Fa brand icon="pinterest" />
        </Button>
        <Button size="lg" tag="a" floating social="yt">
          <Fa brand icon="youtube" />
        </Button>
        <Button size="lg" tag="a" floating social="vk">
          <Fa brand icon="vk" />
        </Button>
        <Button size="lg" tag="a" floating social="so">
          <Fa brand icon="stack-overflow" />
        </Button>
        <Button size="lg" tag="a" floating social="slack">
          <Fa brand icon="slack" />
        </Button>
        <Button size="lg" tag="a" floating social="git">
          <Fa brand icon="github" />
        </Button>
        <Button size="lg" tag="a" floating social="comm">
          <Fa icon="comments" />
        </Button>
        <Button size="lg" tag="a" floating social="email">
          <Fa icon="envelope" />
        </Button>
        <Button size="lg" tag="a" floating social="dribbble">
          <Fa brand icon="dribbble" />
        </Button>
        <h4 className="mt-4">Sizes</h4>
        <Button size="lg" tag="a" floating social="fb">
          <Fa brand icon="facebook" />
        </Button>
        <Button tag="a" floating social="fb">
          <Fa brand icon="facebook" />
        </Button>
        <Button size="sm" tag="a" floating social="fb">
          <Fa brand icon="facebook" />
        </Button>
        <h4 className="mt-4">Full name social counters</h4>
        <Button social="fb">
          <Fa brand icon="facebook" className="pr-1" /> Facebook
        </Button>
        <span className="counter">22</span>
        <Button social="tw">
          <Fa brand icon="twitter" className="pr-1" /> Twitter
        </Button>
        <span className="counter">22</span>
        <Button social="gplus">
          <Fa brand icon="google-plus" className="pr-1" /> Google +
        </Button>
        <span className="counter">22</span>
        <Button social="li">
          <Fa brand icon="linkedin" className="pr-1" /> Linkedin
        </Button>
        <span className="counter">22</span>
        <Button social="ins">
          <Fa brand icon="instagram" className="pr-1" /> Instagram
        </Button>
        <span className="counter">22</span>
        <Button social="pin">
          <Fa brand icon="pinterest" className="pr-1" /> Pinterest
        </Button>
        <span className="counter">22</span>
        <Button social="yt">
          <Fa brand icon="youtube" className="pr-1" /> Youtube
        </Button>
        <span className="counter">22</span>
        <Button social="vk">
          <Fa brand icon="vk" className="pr-1" /> Vkontakte
        </Button>
        <span className="counter">22</span>
        <Button social="so">
          <Fa brand icon="stack-overflow" className="pr-1" /> Stack Overflow
        </Button>
        <span className="counter">22</span>
        <Button social="slack">
          <Fa brand icon="slack" className="pr-1" /> Slack
        </Button>
        <span className="counter">22</span>
        <Button social="git">
          <Fa brand icon="github" className="pr-1" /> Github
        </Button>
        <span className="counter">22</span>
        <Button social="comm">
          <Fa icon="comments" className="pr-1" /> Comments
        </Button>
        <span className="counter">22</span>
        <Button social="email">
          <Fa icon="envelope" className="pr-1" /> Email
        </Button>
        <span className="counter">22</span>
        <Button social="dribbble">
          <Fa brand icon="dribbble" className="pr-1" /> Dribbble
        </Button>
        <span className="counter">22</span>
        <h4 className="mt-4">Simple social counters </h4>
        <Button size="lg" social="fb">
          <Fa brand icon="facebook" />
        </Button>
        <span className="counter">22</span>
        <Button size="lg" social="tw">
          <Fa brand icon="twitter" />
        </Button>
        <span className="counter">22</span>
        <Button size="lg" social="gplus">
          <Fa brand icon="google-plus" />
        </Button>
        <span className="counter">22</span>
        <Button size="lg" social="li">
          <Fa brand icon="linkedin" />
        </Button>
        <span className="counter">22</span>
        <Button size="lg" social="ins">
          <Fa brand icon="instagram" />
        </Button>
        <span className="counter">22</span>
        <Button size="lg" social="pin">
          <Fa brand icon="pinterest" />
        </Button>
        <span className="counter">22</span>
        <Button size="lg" social="yt">
          <Fa brand icon="youtube" />
        </Button>
        <span className="counter">22</span>
        <Button size="lg" social="vk">
          <Fa brand icon="vk" />
        </Button>
        <span className="counter">22</span>
        <Button size="lg" social="so">
          <Fa brand icon="stack-overflow" />
        </Button>
        <span className="counter">22</span>
        <Button size="lg" social="slack">
          <Fa brand icon="slack" />
        </Button>
        <span className="counter">22</span>
        <Button size="lg" social="git">
          <Fa brand icon="github" />
        </Button>
        <span className="counter">22</span>
        <Button size="lg" social="comm">
          <Fa icon="comments" />
        </Button>
        <span className="counter">22</span>
        <Button size="lg" social="email">
          <Fa icon="envelope" />
        </Button>
        <span className="counter">22</span>
        <Button size="lg" social="dribbble">
          <Fa brand icon="dribbble" />
        </Button>
        <span className="counter">22</span>
        <h4 className="mt-4">Social brand icons</h4>
        <a href="#!" className="fb-ic mr-3">
          <Fa brand icon="facebook" />
        </a>
        <a href="#!" className="tw-ic mr-3">
          <Fa brand icon="twitter" />
        </a>
        <a href="#!" className="gplus-ic mr-3">
          <Fa brand icon="google-plus" />
        </a>
        <a href="#!" className="li-ic mr-3">
          <Fa brand icon="linkedin" />
        </a>
        <a href="#!" className="ins-ic mr-3">
          <Fa brand icon="instagram" />
        </a>
        <a href="#!" className="pin-ic mr-3">
          <Fa brand icon="pinterest" />
        </a>
        <a href="#!" className="yt-ic mr-3">
          <Fa brand icon="youtube" />
        </a>
        <a href="#!" className="vk-ic mr-3">
          <Fa brand icon="vk" />
        </a>
        <a href="#!" className="so-ic mr-3">
          <Fa brand icon="stack-overflow" />
        </a>
        <a href="#!" className="slack-ic mr-3">
          <Fa brand icon="slack" />
        </a>
        <a href="#!" className="git-ic mr-3">
          <Fa brand icon="github" />
        </a>
        <a href="#!" className="comm-ic mr-3">
          <Fa icon="comments" />
        </a>
        <a href="#!" className="email-ic mr-3">
          <Fa icon="envelope" />
        </a>
        <a href="#!" className="dribbble-ic mr-3">
          <Fa brand icon="dribbble" />
        </a>
      </Container>
    </Container>
  );
};

export default SocialButtonsPage;
