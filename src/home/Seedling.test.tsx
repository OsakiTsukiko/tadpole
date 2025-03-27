import { render, screen } from '@testing-library/react';
import Seedling from './Seedling'; // Path to your Seedling component
import { describe, expect, it } from 'vitest';

describe('Seedling Component', () => {
    it('renders the name and description correctly', () => {
        const name = "Seedling 1";
        const description = "This is a description of the seedling.";
        const sprinkles = 5;

        // Render the Seedling component with props
        render(<Seedling name={name} description={description} sprinkles={sprinkles} />);

        // Check if the name and description are rendered correctly
        expect(screen.getByText(name)).toBeInTheDocument();
        expect(screen.getByText(description)).toBeInTheDocument();
    });

    it('displays the correct number of sprinkles', () => {
        const name = "Seedling 1";
        const description = "This is a description of the seedling.";
        const sprinkles = 5;

        // Render the Seedling component with props
        render(<Seedling name={name} description={description} sprinkles={sprinkles} />);

        // Check if the sprinkle count is displayed correctly
        expect(screen.getByText(sprinkles.toString())).toBeInTheDocument();
    });

    it('applies the correct CSS classes to elements', () => {
        const name = "Seedling 1";
        const description = "This is a description of the seedling.";
        const sprinkles = 5;

        // Render the Seedling component with props
        render(<Seedling name={name} description={description} sprinkles={sprinkles} />);

        // Check that the root div has the 'seedling' class
        const seedlingElement = screen.getByText(name).closest('.seedling');
        expect(seedlingElement).toHaveClass('seedling');

        if (seedlingElement == null) return;

        // Check that the 'left' and 'right' divs are present
        const leftElement = seedlingElement.querySelector('.left');
        const rightElement = seedlingElement.querySelector('.right');
        expect(leftElement).toBeInTheDocument();
        expect(rightElement).toBeInTheDocument();

        // Check the 'sprinkles' section
        const sprinklesElement = screen.getByText(sprinkles.toString()).closest('.sprinkles');
        expect(sprinklesElement).toHaveClass('sprinkles');
    });
});
