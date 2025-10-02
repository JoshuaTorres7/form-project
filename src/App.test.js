import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the form project header', () => {
    render(<App />);
    const headerElement = screen.getByText(/form project/i);
    expect(headerElement).toBeInTheDocument();
});

test('renders a submit button', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button', { name: /submit/i });
    expect(buttonElement).toBeInTheDocument();
});

test('renders an email input field', () => {
    render(<App />);
    const emailInput = screen.getByLabelText(/email/i);
    expect(emailInput).toBeInTheDocument();
});
