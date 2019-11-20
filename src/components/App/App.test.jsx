import React from 'react';
import '../../setupTests';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { App } from './App.jsx';
import Category from '../Category/Category';
import {categories, category} from '../../data/fixtures';

const props = {
  categories,
  category
};

describe('App', () => {
  it("renders", () => {
    act(() => {
      mount(<App {...props} />);
    });
  });

});