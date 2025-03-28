const Translation = {
    login: {
        title: 'Return to the Pond!',
        subtitle: 'Your lily pad is just a hop away! Login to continue your pond journey.',
        username_input: {
            placeholder: 'Username',
            label: 'Your Lily Pad Name'
        },
        password_input: {
            placeholder: 'Password',
            label: 'Secret Ribbit'
        },
        submit_button: 'Hop In!',
    },
    register: {
        title: 'Join the Pond!',
        subtitle: 'Every tadpole needs a lily pad. Create yours today!',
        username_input: {
            placeholder: 'Username',
            label: 'Your Lily Pad Name'
        },
        email_input: {
            placeholder: 'Email',
            label: 'Pond Mail'
        },
        password_input: {
            placeholder: 'Password',
            label: 'Secret Ribbit'
        },
        confirm_password_input: {
            placeholder: 'Confirm Password',
            label: 'Confirm Secret Ribbit'
        },
        submit_button: 'Hop In!',
    },
    log_reg: {
        error: {
            username: 'Invalid username! Username must be between 3 and 16 characters long and only contain "A-Z a-z 0-9 and -"',
            password: 'Invalid password! Password must be between 6 and 32 characters long and only contain "A-Z a-z 0-9 and -!_$#@"',
            email: 'Invalid email!',
            confirm_password: 'Passwords DO NOT match!',
            unable_to_login: 'Login error! Please check if the username and password are correct!',
            unable_to_register: 'Register error! Please check if the username and password are correct and available!',
        }
    },
    home: {
        seedling: {
            search_input: {
                label: 'Seedling Name',
                placeholder: 'My Cool Seedling',
            },
            search_button: {
                label: 'Search!',
            }
        },
        tadpoles: {
            search_input: {
                label: 'Tadpole Username',
                placeholder: 'Osaki',
            },
            search_button: {
                label: 'Search!',
            },
            sort_button: {
                label: {
                    asc: 'A-Z',
                    desc: 'Z-A',
                }
            }
        },
        settings: {
            old_password_input: {
                label: 'Old Secret Ribbit',
                placeholder: 'Old Password',
            },
            new_password_input: {
                label: 'New Secret Ribbit',
                placeholder: 'New Password',
            },
            confirm_new_password_input: {
                label: 'Confirm New Secret Ribbit',
                placeholder: 'Confirm New Password',
            },
            description: {
                label: 'Update Description',
                placeholder: 'Hello, my name is ...',
            },
            update_description: "Update Description!",
            update_password: "Change Password!",
            delete: "Delete!",
            error: {
                incorrect_password: "Incorrect password!",
                invalid_password: 'Invalid password! Password must be between 6 and 32 characters long and only contain "A-Z a-z 0-9 and -!_$#@"',
                missmatched_passwords: 'Passwords DO NOT match!',
            },
        }
    }
}

export function getTr(_: string) {
    return Translation;
}