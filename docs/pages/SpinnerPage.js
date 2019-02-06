import React from "react";
import { MDBContainer } from "mdbreact";
import DocsLink from "../components/docsLink";

const SpinnerPage = props => {
  return (
    <MDBContainer>
      <DocsLink
        title="Loader/Spinner"
        href="https://mdbootstrap.com/docs/react/components/spinners/"
      />

      <h2>Colorful</h2>
      <div className="my-5 d-flex justify-content-around">
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-border text-success" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-border text-danger" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-border text-warning" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-border text-info" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>

      <hr />

      <h2 className="mt-5">Growing loader</h2>
      <div className="my-5 d-flex justify-content-around">
        <div class="spinner-grow text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-secondary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-success" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-danger" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-warning" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-info" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>

      <hr />

      <h2 className="mt-5">Sizing</h2>
      <div className="my-5 d-flex justify-content-around">
        <div class="spinner-border spinner-border-sm" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow spinner-grow-sm" role="status">
          <span class="sr-only">Loading...</span>
        </div>

        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>

      <hr />

      <h2 className="mt-5">Crazy speed</h2>
      <div className="my-5 d-flex justify-content-around">
        <div class="spinner-border fast" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow fast" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </MDBContainer>
  );
};

export default SpinnerPage;
