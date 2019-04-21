import React from "react";
import { shallow } from "enzyme";
import Search from "./Search";

it("renders Search without crashing", () => {
    shallow(<Search />);
});

it("sets state", () => {
    let wrapper = shallow(<Search searchLocation={() => undefined} />);
    let input = wrapper.find("input");
    expect(input).toHaveLength(1);
    input.simulate("change", { target: { value: "Test" } });
    input.simulate("keypress", { key: "Enter" });
    expect(wrapper.state("text")).toBe("Test");
});
