package com.example.dao;

import java.util.List;
import com.example.model.Booking;
import java.time.LocalDate;

public interface BookingDAO {
    public void createBooking(Booking booking);
    public List<Booking> getAllBookings();
    public Booking getBookingById(int bookingId);
    public List<Booking> getBookingsByDate(LocalDate date);
    public List<Booking> getBookingsByRoom(int roomId);
    public List<Booking> getBookingsByGuestName(String guestName);
    public void cancelBooking(int bookingId);
    public List<Booking> getBookings();
}
