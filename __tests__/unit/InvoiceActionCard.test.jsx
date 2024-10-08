// __tests__/InvoiceActionCard.test.jsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InvoiceActionCard from '@/components/Cards/InvoiceActionCard';


// Mocking the next/image component
jest.mock('next/image', () => {
  return ({ alt, ...props }) => {
    return <img alt={alt} {...props} />;
  };
});

describe('InvoiceActionCard', () => {
  const mockOnClick = jest.fn();
  const props = {
    title: 'Create New Invoice',
    description: 'Create new invoices easily',
    iconSrc: '/path/to/icon.png',
    onClick: mockOnClick,
    bgColor: 'bg-primary',
    textColor: 'text-white',
    imageStyle: { width: '78px', height: 'auto' },
    className: 'hover:bg-gray-300', // Example of hover class
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders correctly with given props', () => {
    const { getByText, getByAltText } = render(<InvoiceActionCard {...props} />);
    
    // Check if title and description are rendered
    expect(getByText(props.title)).toBeInTheDocument();
    expect(getByText(props.description)).toBeInTheDocument();
    
    // Check if the image is rendered
    const image = getByAltText('icon');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', props.iconSrc);
    
    // No need to check width and height since we've mocked the image
  });

  // Rest of the tests...
});
