import * as React from "react";
import InputProps from "../../Input/InputTypes";

interface InputPropsPro extends InputProps {
  counter?: boolean | number;
  getCounter?: (value: number | string) => void;
}


declare class MDBInput extends React.Component<
  InputPropsPro,
  any
> {}

export default MDBInput;
