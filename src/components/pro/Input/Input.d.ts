import * as React from "react";
import InputProps from "../../Input/InputTypes";

type InputPropsPro = {
  counter?: boolean | number;
  getCounter?: (value: number | string) => void;
}

declare class MDBInput extends React.Component<
  [InputProps , InputPropsPro],
  any
> {}

export default MDBInput;
