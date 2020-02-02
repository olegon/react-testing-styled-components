import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components'
import App from './App';

describe('Testing the App component', () => {
  it('Testing Jest Snapshots with Styled Components', () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
  });
})