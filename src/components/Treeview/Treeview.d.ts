import * as React from "react";

declare const MDBTreeview: React.FunctionComponent<{
  className?: string;
  theme?: string;
  header?: string;
  listClassName?: string;
  tag?: string;
  getValue?: (value: {
    item: HTMLLIElement | null;
    value: string | null;
  }) => void;
  [rest: string]: any;
}>;

export default MDBTreeview;
