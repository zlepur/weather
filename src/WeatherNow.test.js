import React from "react";
import { shallow } from "enzyme";
import WeatherNow from "./WeatherNow";
import mockWeather from "./mockWeather";

it("renders WeatherNow without crashing", () => {
    shallow(<WeatherNow data={null} />);
});

it("displays state", () => {
    let wrapper = shallow(<WeatherNow data={mockWeather} />);
    expect(wrapper.find(".card-title").text()).toContain("Zagreb");
    expect(wrapper.find("h4").text()).toContain("18 °C");
});
