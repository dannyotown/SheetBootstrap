import React from "react";
import { MDBPagination, MDBPageItem, MDBPageNav, MDBContainer, MDBCol, MDBRow } from "mdbreact";
import DocsLink from "./DocsLink";

const PaginationPage = props => {
  return (
    <MDBContainer>
      <DocsLink
        title="MDBPagination"
        href="https://mdbootstrap.com/docs/react/components/pagination/"
      />

      <MDBRow>
        <MDBCol>
          <h4 className="title mb-5 text-left">Basic example</h4>
          <MDBPagination className="mb-5">
            <MDBPageItem disabled>
              <MDBPageNav aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem active>
              <MDBPageNav>
                1 <span className="sr-only">(current)</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav>2</MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav>3</MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav>4</MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav>5</MDBPageNav>
            </MDBPageItem>
            <MDBPageItem disabled>
              <MDBPageNav aria-label="Previous">
                <span aria-hidden="true">&raquo;</span>
              </MDBPageNav>
            </MDBPageItem>
          </MDBPagination>
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol>
          <h4 className="title my-5 text-left">Bootstrap MDBPagination</h4>
          <MDBPagination className="pagination-circle">
            <MDBPageItem disabled>
              <MDBPageNav className="page-link">
                <span>First</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem disabled>
              <MDBPageNav className="page-link" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem active>
              <MDBPageNav className="page-link">
                1 <span className="sr-only">(current)</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                2
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                3
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                4
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                5
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                &raquo;
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                Last
              </MDBPageNav>
            </MDBPageItem>
          </MDBPagination>
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol>
          <h4 className="title my-5 text-left">MDBPagination color</h4>
          <MDBPagination className="pg-blue">
            <MDBPageItem disabled>
              <MDBPageNav className="page-link" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem active>
              <MDBPageNav className="page-link">
                1 <span className="sr-only">(current)</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                2
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                3
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                4
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                5
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                &raquo;
              </MDBPageNav>
            </MDBPageItem>
          </MDBPagination>

          <MDBPagination className="pg-red">
            <MDBPageItem disabled>
              <MDBPageNav className="page-link" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem active>
              <MDBPageNav className="page-link">
                1 <span className="sr-only">(current)</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                2
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                3
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                4
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                5
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                &raquo;
              </MDBPageNav>
            </MDBPageItem>
          </MDBPagination>

          <MDBPagination className="pg-teal">
            <MDBPageItem disabled>
              <MDBPageNav className="page-link" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem active>
              <MDBPageNav className="page-link">
                1 <span className="sr-only">(current)</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                2
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                3
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                4
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                5
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                &raquo;
              </MDBPageNav>
            </MDBPageItem>
          </MDBPagination>

          <MDBPagination className="pg-dark">
            <MDBPageItem disabled>
              <MDBPageNav className="page-link" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem active>
              <MDBPageNav className="page-link">
                1 <span className="sr-only">(current)</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                2
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                3
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                4
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                5
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                &raquo;
              </MDBPageNav>
            </MDBPageItem>
          </MDBPagination>

          <MDBPagination className="pg-bluegrey">
            <MDBPageItem disabled>
              <MDBPageNav className="page-link" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem active>
              <MDBPageNav className="page-link">
                1 <span className="sr-only">(current)</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                2
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                3
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                4
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                5
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                &raquo;
              </MDBPageNav>
            </MDBPageItem>
          </MDBPagination>

          <MDBPagination className="pg-amber">
            <MDBPageItem disabled>
              <MDBPageNav className="page-link" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem active>
              <MDBPageNav className="page-link">
                1 <span className="sr-only">(current)</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                2
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                3
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                4
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                5
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                &raquo;
              </MDBPageNav>
            </MDBPageItem>
          </MDBPagination>

          <MDBPagination className="pg-purple">
            <MDBPageItem disabled>
              <MDBPageNav className="page-link" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem active>
              <MDBPageNav className="page-link">
                1 <span className="sr-only">(current)</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                2
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                3
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                4
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                5
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                &raquo;
              </MDBPageNav>
            </MDBPageItem>
          </MDBPagination>

          <MDBPagination className="pg-darkgrey">
            <MDBPageItem disabled>
              <MDBPageNav className="page-link" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem active>
              <MDBPageNav className="page-link">
                1 <span className="sr-only">(current)</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                2
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                3
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                4
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                5
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                &raquo;
              </MDBPageNav>
            </MDBPageItem>
          </MDBPagination>
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol>
          <h4 className="title my-5 text-left">Sizing</h4>
          <MDBPagination className="pagination-lg">
            <MDBPageItem>
              <MDBPageNav className="page-link" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                1 <span className="sr-only">(current)</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                2
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                3
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                &raquo;
              </MDBPageNav>
            </MDBPageItem>
          </MDBPagination>

          <MDBPagination className="pagination-sm">
            <MDBPageItem>
              <MDBPageNav className="page-link" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                1 <span className="sr-only">(current)</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                2
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                3
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">
                &raquo;
              </MDBPageNav>
            </MDBPageItem>
          </MDBPagination>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
};

export default PaginationPage;
