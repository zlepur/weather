import React from "react";
import { shallow, mount } from "enzyme";
import App, { Home } from "./App";
import Header from "./Header";
import WeatherWidget from "./WeatherWidget";

it("renders App without crashing", () => {
    shallow(<App />);
});

it("renders Home without crashing", () => {
    shallow(<Home />);
});

it("it renders children components", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(Home)).toHaveLength(1);
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(WeatherWidget)).toHaveLength(1);
    wrapper.unmount();
});
