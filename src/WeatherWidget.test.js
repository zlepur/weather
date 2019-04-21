import React from "react";
import { shallow } from "enzyme";
import WeatherWidget from "./WeatherWidget";

it("renders WeatherWidget without crashing", () => {
    shallow(<WeatherWidget searchLocation={""} />);
});

it("sets state, async", async () => {
    let wrapper = shallow(<WeatherWidget searchLocation={"zagreb"} />);
    await wrapper.instance().updateLocation();
    expect(wrapper.state("searchLocation")).toBe("zagreb");
    expect(wrapper.state("error")).toBe(null);
});

it("sets state, nextTick", done => {
    let wrapper = shallow(<WeatherWidget searchLocation={"zagreb"} />);
    process.nextTick(() => {
        expect(wrapper.state("searchLocation")).toBe("zagreb");
        expect(wrapper.state("error")).toBe(null);
        done();
    });
});
