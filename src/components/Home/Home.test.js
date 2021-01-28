import React from 'react';
import Home from './Home';

import {shallow} from 'enzyme'



describe('Home (Component)', () => {
  it('should be able to render without crash',()=>{
      const wrapper = shallow(<Home />)
      expect(wrapper.length).toBe(1)
  })
});
