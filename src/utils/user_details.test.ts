import { isUsernameValid, isPasswordValid, isEmailValid } from './user_details'; // Adjust the import according to your file structure
import { describe, it, expect } from 'vitest';

describe('Utility function tests', () => {
    
    describe('isUsernameValid', () => {
        it('should return true for a valid username', () => {
            expect(isUsernameValid('validUsername123')).toBe(true);
        });

        it('should return false for a username shorter than 3 characters', () => {
            expect(isUsernameValid('ab')).toBe(false);
        });

        it('should return false for a username longer than 16 characters', () => {
            expect(isUsernameValid('aVeryLongUsername')).toBe(false);
        });

        it('should return false for a username with invalid characters', () => {
            expect(isUsernameValid('invalid@username')).toBe(false);
        });

        it('should return true for a valid username with hyphen', () => {
            expect(isUsernameValid('valid-username')).toBe(true);
        });
    });

    describe('isPasswordValid', () => {
        it('should return true for a valid password', () => {
            expect(isPasswordValid('Valid123$')).toBe(true);
        });

        it('should return false for a password shorter than 6 characters', () => {
            expect(isPasswordValid('short')).toBe(false);
        });

        it('should return false for a password longer than 32 characters', () => {
            expect(isPasswordValid('aVeryLongPasswordThatExceedsTheLimit12345')).toBe(false);
        });

        it('should return false for a password with invalid characters', () => {
            expect(isPasswordValid('invalid^password')).toBe(false);
        });

        it('should return true for a password with special characters', () => {
            expect(isPasswordValid('Valid$123')).toBe(true);
        });
    });

    describe('isEmailValid', () => {
        it('should return true for a valid email address', () => {
            expect(isEmailValid('test@example.com')).toBe(true);
        });

        it('should return false for an email without "@" symbol', () => {
            expect(isEmailValid('testexample.com')).toBe(false);
        });

        it('should return false for an email with invalid domain', () => {
            expect(isEmailValid('test@com')).toBe(false);
        });

        it('should return false for an email without a domain', () => {
            expect(isEmailValid('test@.com')).toBe(false);
        });

        it('should return false for an email with multiple "@" symbols', () => {
            expect(isEmailValid('test@@example.com')).toBe(false);
        });
    });
});
