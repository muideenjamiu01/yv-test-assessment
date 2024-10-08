// __tests__/GlobalButton.test.jsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '@/components/Button/Button';


// Mocking the button component
describe('GlobalButton unit test', () => {
  const mockOnClick = jest.fn();
  const props = {
    onClick: mockOnClick,
    text: 'Click Me',
    bgColor: 'bg-blue-500',
    hoverColor: 'hover:bg-blue-700',
    textColor: 'text-white',
    size: 'md',
    className: 'extra-class',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders correctly with given props', () => {
    const { getByText } = render(<Button {...props} />);
    
    // Check if the button text is rendered
    expect(getByText(props.text)).toBeInTheDocument();
    // Check if the button has the correct classes
    expect(getByText(props.text)).toHaveClass(props.bgColor);
    expect(getByText(props.text)).toHaveClass(props.hoverColor);
    expect(getByText(props.text)).toHaveClass(props.textColor);
    expect(getByText(props.text)).toHaveClass('rounded-full');
    expect(getByText(props.text)).toHaveClass('uppercase');
    expect(getByText(props.text)).toHaveClass(props.className);
  });

  test('calls onClick when clicked', () => {
    const { getByText } = render(<Button {...props} />);
    
    // Simulate click event
    fireEvent.click(getByText(props.text));
    
    // Check if the onClick function is called
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
