import { render, screen } from '@testing-library/react';
import Loader, { DATA_TEST } from './LoadingBar';
import type { LoadingBarProps } from './LoadingBar.types';

const renderLoader = (props?: LoadingBarProps) => render(<Loader {...props} />);

describe('Components/LoadingBar', () => {
  it('Should render', () => {
    renderLoader();
    const Component = screen.getByTestId(DATA_TEST);

    expect(Component).toBeInTheDocument();
  });
  it('Should NOT render when show is set to false', () => {
    renderLoader({ show: false });
    const Component = screen.queryByTestId(DATA_TEST);

    expect(Component).toBeNull();
  });
});
