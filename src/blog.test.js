import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Blog from "./blog";

configure({ adapter: new Adapter() });

describe("<Blog /> Items", () => {
  let wrapper = shallow(<Blog />);
  it("should have only one youtube component", () => {
    expect(wrapper.find("YouTube")).toHaveLength(1);
  });
  it("should have only one title component", () => {
    expect(wrapper.find("h1")).toHaveLength(1);
  });
  it("should have only one content block component", () => {
    expect(wrapper.find("p")).toHaveLength(1);
  });
});
