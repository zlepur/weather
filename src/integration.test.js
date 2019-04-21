import React from "react";
import { mount } from "enzyme";
import App from "./App";
import WeatherWidget from "./WeatherWidget";

it("displays weather, integration test", async () => {
    let wrapper = mount(<App />);
    let input = wrapper.find("input");
    expect(input).toHaveLength(1);
    input.simulate("change", { target: { value: "Zagreb" } });
    input.simulate("keypress", { key: "Enter" });
    await wrapper
        .find(WeatherWidget)
        .instance()
        .updateLocation();
    wrapper.update();
    expect(wrapper.find(".card-title").text()).toContain("Zagreb");
    wrapper.unmount();
});
