import React from 'react';
import '../../setupTests';
import {mount} from 'enzyme';
import Clue from './Clue';
import {clue} from '../../data/fixtures';

const props = {
  clue
};

describe('Clue', () => {
  let clueWrapper = mount(<Clue {...props}/>)

  it('renders the clue value', () => {
    expect(clueWrapper.find('h4').text()).toEqual(clue.value);
  });

  it('renders the clue question', () => {
    expect(clueWrapper.find('p').at(0).text()).toEqual(clue.question)
  });

  it('sets the question with `text-hidden` class', () => {
    expect(clueWrapper.find('div').at(3).hasClass('text-hidden')).toBe(true);
  });


  describe('when rendering a clue with no value', () => {
    beforeEach(() => {
      props.clue.value = undefined;
      clueWrapper = mount(<Clue {...props}/>);
    });

    it('displays the value as `0', () => {
      expect(clueWrapper.find('h4').text()).toEqual('0');
    });
  });
});
