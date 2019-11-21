import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkTag
} from "../../../tests/utils";
import Avatar from "./Avatar";

const setup = (props = {}) => shallow(<Avatar {...props} />);

describe("<Avatar />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test(`renders`, () => {
    const renders = findByTestAttr(wrapper, "avatar");
    expect(renders.length).toBe(1);
  });

  test(`renders without errors`, () => {
    const div = document.createElement("div");
    ReactDOM.render(<Avatar />, div);
  });

  test("does not throw warnings with expected props", () => {
    const expectedProps = {
      background: "string",
      circle: true,
      className: "string",
      children: "string",
      src: "test",
      round: true,
      size: 12,
      style: { color: "red" },
      tag: "span"
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test("does not throw warnings without props", () => {
    checkProps(wrapper, {});
  });

  test("sets custom tag", () => {
    wrapper = setup({ tag: "section" });
    checkTag(wrapper, "section");
  });

  test("sets img", () => {
    wrapper = setup({ src: "test" });
    checkTag(wrapper, "img");
    expect(wrapper.find('img[src="test"]').length).toBe(1);
  });

  describe("sets classes", () => {
    test("adds avatar class by default ", () => {
      checkClass(wrapper, "avatar");
    });

    test("adds round class by default if round", () => {
      wrapper = setup({ round: true });
      checkClass(wrapper, "rounded");
    });

    test("adds round class by default if circle ", () => {
      wrapper = setup({ circle: true });
      checkClass(wrapper, "rounded-circle");
    });

    test("sets background class if background === red ", () => {
      checkClass(wrapper, "grey");
      wrapper = setup({ background: "red" });
      checkClass(wrapper, "red");
    });

    test("adds d-table-cell align-middle text-center font-weight-bool class by default", () => {
      wrapper = setup({ circle: true });
      checkClass(
        wrapper,
        "d-table-cell.align-middle.text-center.font-weight-bool"
      );
    });

    test("adds custom class ", () => {
      wrapper = setup({ className: "test-class" });
      checkClass(wrapper, "test-class");
    });
  });
});
