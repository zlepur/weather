import React from "react";
import { shallow, mount } from "enzyme";
import WeatherFuture, { WeatherItem } from "./WeatherFuture";
import mockForecast from "./mockForecast";

it("renders WeatherFuture without crashing", () => {
    shallow(<WeatherFuture data={null} />);
});

it("displays state", () => {
    let wrapper = shallow(<WeatherFuture data={mockForecast} />);
    expect(wrapper.find(".card-body")).toHaveLength(1);
    expect(wrapper.find(WeatherItem)).toHaveLength(5);
});

it("displays children", () => {
    let wrapper = mount(<WeatherFuture data={mockForecast} />);
    expect(wrapper.find(".card-body")).toHaveLength(1);
    expect(wrapper.find(WeatherItem)).toHaveLength(5);
    let child = wrapper.find(WeatherItem).first();
    expect(child.text()).toContain("Min: 20 °C");
    expect(child.text()).toContain("Max: 20 °C");
});
