import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { TextInput, PasswordInput, ButtonInput, TextButton, ImportantButtonInput } from './Input';
import React from 'react';

describe('TextInput Component', () => {
    it('renders correctly with given props', () => {
        const ref = React.createRef<HTMLInputElement>();
        render(<TextInput id="username" span="Username" placeholder="Enter your name" name="username" autocomplete="off" type="text" input_ref={ref} />);
        
        const input = screen.getByPlaceholderText('Enter your name');
        const label = screen.getByText('Username');

        expect(input).toBeInTheDocument();
        expect(label).toBeInTheDocument();
        expect(input).toHaveAttribute('type', 'text');
        expect(input).toHaveAttribute('id', 'username');
    });
});

describe('PasswordInput Component', () => {
    it('renders correctly and has type password', () => {
        const ref = React.createRef<HTMLInputElement>();
        render(<PasswordInput id="password" span="Password" placeholder="Enter your password" name="password" autocomplete="off" input_ref={ref} />);
        
        const input = screen.getByPlaceholderText('Enter your password');
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute('type', 'password');
    });
});

describe('ButtonInput Component', () => {
    it('renders correctly and handles clicks', () => {
        const handleClick = vi.fn();
        render(<ButtonInput text="Click Me" onclick={handleClick} disabled={false} />);

        const button = screen.getByText('Click Me');
        expect(button).toBeInTheDocument();

        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('is disabled when disabled prop is true', () => {
        render(<ButtonInput text="Click Me" onclick={() => {}} disabled={true} />);
        const button = screen.getByText('Click Me');

        expect(button).toBeDisabled();
    });
});

describe('ImportantButtonInput Component', () => {
    it('renders with correct class and handles clicks', () => {
        const handleClick = vi.fn();
        render(<ImportantButtonInput text="Important" onclick={handleClick} disabled={false} />);

        const button = screen.getByText('Important');
        expect(button).toHaveClass('important');

        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});

describe('TextButton Component', () => {
    it('renders correctly and triggers onClick', () => {
        const handleClick = vi.fn();
        render(<TextButton prefix="Go to" text="Settings" suffix="now" onclick={handleClick} />);

        const buttonText = screen.getByText('Settings');
        expect(buttonText).toBeInTheDocument();
        expect(screen.getByText('Settings')).toBeInTheDocument();

        fireEvent.click(buttonText);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
