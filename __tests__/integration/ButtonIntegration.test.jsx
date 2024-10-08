// __tests__/GlobalButton.integration.test.jsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '@/components/Button/Button';

const MockComponent = () => {
  const [message, setMessage] = React.useState('');

  return (
    <div>
      <Button
        onClick={() => setMessage('Button Clicked!')}
        text="Click Me"
        bgColor="bg-blue-500"
        hoverColor="hover:bg-blue-700"
        textColor="text-white"
        size="md"
        className="extra-class"
      />
      {message && <p data-testid="message">{message}</p>}
    </div>
  );
};

describe('GlobalButton Integration Test', () => {
  test('button click updates message', () => {
    const { getByText, getByTestId } = render(<MockComponent />);

    // Simulate click event
    fireEvent.click(getByText('Click Me'));

    // Check if the message is displayed
    expect(getByTestId('message')).toHaveTextContent('Button Clicked!');
  });
});
