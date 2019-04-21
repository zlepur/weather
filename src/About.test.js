import React from "react";
import { shallow } from "enzyme";
import About from "./About";

it("renders About without crashing", () => {
    shallow(<About />);
});
