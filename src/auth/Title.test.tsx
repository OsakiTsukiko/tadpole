import { render, screen } from '@testing-library/react';
import Title from './Title'; // Path to your Title component
import { describe, expect, it } from 'vitest';

describe('Title Component', () => {
    it('renders the title and subtitle correctly', () => {
        const title = 'Welcome to the Pond';
        const subtitle = 'Your journey begins here';
        const icon = '/frog.png'; // Provide a sample icon path or null

        // Render the Title component
        render(<Title title={title} subtitle={subtitle} icon={icon} />);

        // Assert that the title and subtitle are rendered correctly
        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.getByText(subtitle)).toBeInTheDocument();
    });

    it('renders the icon if provided', () => {
        const title = 'Welcome';
        const subtitle = 'Let\'s get started';
        const icon = '/frog.png';

        // Render the Title component with an icon
        render(<Title title={title} subtitle={subtitle} icon={icon} />);

        // Assert that the icon is rendered
        const iconElement = screen.getByRole('img'); // Finds the img element
        expect(iconElement).toBeInTheDocument();
        expect(iconElement).toHaveAttribute('src', icon); // Check if the correct icon is used
    });

    it('does not render an icon if icon is null', () => {
        const title = 'No Icon Title';
        const subtitle = 'Subtitle without an icon';
        const icon = null;

        // Render the Title component without an icon
        render(<Title title={title} subtitle={subtitle} icon={icon} />);

        // Assert that the img tag is not rendered
        const iconElement = screen.queryByRole('img'); // Returns null if not found
        expect(iconElement).toBeNull();
    });
});
