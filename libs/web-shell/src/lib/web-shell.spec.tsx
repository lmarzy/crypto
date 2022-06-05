import { render } from '@testing-library/react';

import WebShell from './web-shell';

describe('WebShell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebShell />);
    expect(baseElement).toBeTruthy();
  });
});
