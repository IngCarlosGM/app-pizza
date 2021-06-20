import { shallow } from "enzyme";

import App from '../App';

describe('Testing the App component', () => {
  test('should be displayed correctly', () => {
    const wrapper = shallow(
      <App />
    )

    expect( wrapper ).toMatchSnapshot();
  });
  
});
