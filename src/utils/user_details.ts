export function isUsernameValid(username: string): boolean {
    if (username.length < 3 || username.length > 16) return false;
    return /^[A-Za-z0-9-]+$/.test(username);
}

export function isPasswordValid(password: string): boolean {
    if (password.length < 6 || password.length > 32) return false;
    return /^[A-Za-z0-9\-!_$#@]+$/.test(password);
}

export function isEmailValid(email: string): boolean {
    return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email);
}