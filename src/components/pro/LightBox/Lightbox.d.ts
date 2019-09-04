import * as React from "react";

declare class MDBLightBox extends React.Component<{
  images?: [],
  noMargins?: boolean,
  marginSpace?: number,
  lg?: string,
  md?: string,
  sm?: string,
  size?: string,
  xl?: string,
  xs?: string,
  transition?: number
  [rest: string]: any;
}, any> {}

export default MDBLightBox;
