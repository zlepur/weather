import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

it("renders Header without crashing", () => {
    shallow(<Header />);
});
