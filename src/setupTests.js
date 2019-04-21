import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import mockWeather from "./mockWeather";
import mockForecast from "./mockForecast";

configure({ adapter: new Adapter() });

global.fetch = jest.fn(url => {
    let val = url.includes("forecast") ? mockForecast : mockWeather;
    return Promise.resolve({ json: () => Promise.resolve(val), ok: true });
});
