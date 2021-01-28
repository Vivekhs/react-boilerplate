import React from 'react';
import App from './App';


describe('(Component) App', () => {
  it('should be able to render without crash', ()=>{
    const wrapper = shallow(<App />);
    expect(wrapper.length).toBe(1)
  })
});
