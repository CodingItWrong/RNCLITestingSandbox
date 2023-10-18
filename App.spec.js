import {render, screen} from '@testing-library/react-native';
import App from './App';

describe('App', () => {
  it('shows a greeting', () => {
    render(<App />);

    expect(screen.getByText('Hello, React Native!')).toBeVisible();
  });
});
