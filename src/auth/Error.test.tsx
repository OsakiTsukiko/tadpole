import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import ErrorPopup from './Error'; // Path to your ErrorPopup component

describe('ErrorPopup Component', () => {
    it('renders the error message correctly', () => {
        const errorMessage = 'An error has occurred!';

        // Render the ErrorPopup with the error message as a prop
        render(<ErrorPopup error={errorMessage} />);

        // Assert that the error message is displayed in the document
        expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });

    it('applies correct class names', () => {
        const errorMessage = 'Another error!';
        
        // Render the ErrorPopup
        render(<ErrorPopup error={errorMessage} />);
        
        // Assert that the correct className is applied (error-popup and roboto)
        const popupElement = screen.getByText(errorMessage);
        expect(popupElement).toHaveClass('error-popup');
        expect(popupElement).toHaveClass('roboto');
    });
});
