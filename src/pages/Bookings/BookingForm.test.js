import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';  // Adjust path based on your file structure
import React from 'react';

describe('BookingForm Component', () => {
    // Mock function for form submission
    const mockSubmitForm = jest.fn();

    // Mock function for dispatch (if needed)
    const mockDispatch = jest.fn();

    // Mock data for available times
    const mockAvailableTimes = {
        availableTimes: ['12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM']
    };

    beforeEach(() => {
        // Render the component before each test
        render(
            <BookingForm
                submitForm={mockSubmitForm}
                dispatch={mockDispatch}
                availableTimes={mockAvailableTimes}
            />
        );
    });

    test('renders BookingForm', () => {
        // Check if the form and its fields are rendered correctly
        expect(screen.getByLabelText(/Choose Date/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Choose Time/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Number of Guests/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    });

    test('allows user to fill out the form', () => {
        // Fill out the form
        fireEvent.change(screen.getByLabelText(/Choose Date/i), {
            target: { value: '2024-12-25' },
        });
        fireEvent.change(screen.getByLabelText(/Choose Time/i), {
            target: { value: '1:00 PM' },
        });
        fireEvent.change(screen.getByLabelText(/Number of Guests/i), {
            target: { value: '4' },
        });
        fireEvent.change(screen.getByLabelText(/Occasion/i), {
            target: { value: 'Birthday' },
        });

        // Check if the input values are correctly updated
        expect(screen.getByLabelText(/Choose Date/i).value).toBe('2024-12-25');
        expect(screen.getByLabelText(/Choose Time/i).value).toBe('1:00 PM');
        expect(screen.getByLabelText(/Number of Guests/i).value).toBe('4');
        expect(screen.getByLabelText(/Occasion/i).value).toBe('Birthday');
    });

    test('calls submitForm function on form submission', () => {
        // Fill out the form
        fireEvent.change(screen.getByLabelText(/Choose Date/i), {
            target: { value: '2024-12-25' },
        });
        fireEvent.change(screen.getByLabelText(/Choose Time/i), {
            target: { value: '1:00 PM' },
        });
        fireEvent.change(screen.getByLabelText(/Number of Guests/i), {
            target: { value: '4' },
        });
        fireEvent.change(screen.getByLabelText(/Occasion/i), {
            target: { value: 'Birthday' },
        });

        // Submit the form
        fireEvent.click(screen.getByRole('button', { name: /Make Your Reservation/i }));

        // Check if the submitForm function was called
        expect(mockSubmitForm).toHaveBeenCalledTimes(1);
    });

    test('displays available times correctly', () => {
        // Check if available times are displayed in the dropdown
        const options = screen.getAllByRole('option');
        expect(options.length).toBe(mockAvailableTimes.availableTimes.length + 1); // Plus 1 for the default option
        expect(options[1].textContent).toBe('12:00 PM');
        expect(options[2].textContent).toBe('1:00 PM');
    });
});
