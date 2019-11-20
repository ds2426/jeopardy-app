import React from 'react';
import '../../setupTests';
import {mount, shallow} from 'enzyme';
import { Category } from './Category';
import {categories, clues} from '../../data/fixtures';
import {fakeServer} from 'sinon';

const props = {
  category: categories[0]
};

describe('Categrory', () => {
  let server;
  it("renders", () => {
    mount(<Category {...props} />);
  });
  beforeEach(() => {
    server = fakeServer.create();
    server.respondWith('GET', `http://jservice.io/api/clues?category=${props.category.id}`, [
      200, {
        'Content-Type': 'application/json'
      },
      JSON.stringify(clues)
    ]);
  });
});