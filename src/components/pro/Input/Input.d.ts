import * as React from "react";
import { InputTypes } from "../../Input/";

interface InputTypesPro extends InputTypes {
  counter?: boolean | number;
  getCounter?: (value:any) => void;
}

declare class MDBInput extends React.Component<InputTypesPro, any> {}

export default MDBInput;
