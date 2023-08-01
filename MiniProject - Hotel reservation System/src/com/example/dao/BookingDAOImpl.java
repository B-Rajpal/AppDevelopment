package com.example.dao;

import java.util.ArrayList;
import java.util.List;
import com.example.model.Booking;
import com.example.util.DBHandler;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;

public class BookingDAOImpl implements BookingDAO {

    @Override
    public void createBooking(Booking booking) {
        String query = "INSERT INTO bookings (roomId, guestName) VALUES (?, ?)";
        try (Connection conn = DBHandler.getConnection();
             PreparedStatement ps = conn.prepareStatement(query)) {
            ps.setInt(1, booking.getRoomId());
            ps.setString(2, booking.getGuestName());
            ps.executeUpdate();
        } catch (SQLException e) {
            System.out.println("Error creating booking: " + e.getMessage());
        }
    }

    @Override
    public List<Booking> getAllBookings() {
        List<Booking> bookingList = new ArrayList<>();
        String query = "SELECT * FROM bookings";
        try (Connection conn = DBHandler.getConnection();
             PreparedStatement ps = conn.prepareStatement(query);
             ResultSet rs = ps.executeQuery()) {
            while (rs.next()) {
                Booking booking = new Booking();
                booking.setBookingId(rs.getInt("bookingId"));
                booking.setRoomId(rs.getInt("roomId"));
                booking.setGuestName(rs.getString("guestName"));
                bookingList.add(booking);
            }
        } catch (SQLException e) {
            System.out.println("Error retrieving all bookings: " + e.getMessage());
        }
        return bookingList;
    }

    @Override
    public Booking getBookingById(int bookingId) {
        String query = "SELECT * FROM bookings WHERE bookingId = ?";
        try (Connection conn = DBHandler.getConnection();
             PreparedStatement ps = conn.prepareStatement(query)) {
            ps.setInt(1, bookingId);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    Booking booking = new Booking();
                    booking.setBookingId(rs.getInt("bookingId"));
                    booking.setRoomId(rs.getInt("roomId"));
                    booking.setGuestName(rs.getString("guestName"));
                    return booking;
                }
            }
        } catch (SQLException e) {
            System.out.println("Error retrieving booking by ID: " + e.getMessage());
        }
        return null;
    }

    @Override
    public List<Booking> getBookingsByDate(LocalDate date) {
        List<Booking> bookingList = new ArrayList<>();
        String query = "SELECT * FROM bookings WHERE checkInDate = ? OR checkOutDate = ?";
        try (Connection conn = DBHandler.getConnection();
             PreparedStatement ps = conn.prepareStatement(query)) {
            ps.setObject(1, date);
            ps.setObject(2, date);
            try (ResultSet rs = ps.executeQuery()) {
                while (rs.next()) {
                    Booking booking = new Booking();
                    booking.setBookingId(rs.getInt("bookingId"));
                    booking.setRoomId(rs.getInt("roomId"));
                    booking.setGuestName(rs.getString("guestName"));
                    bookingList.add(booking);
                }
            }
        } catch (SQLException e) {
            System.out.println("Error retrieving bookings by date: " + e.getMessage());
        }
        return bookingList;
    }

    @Override
    public List<Booking> getBookingsByRoom(int roomId) {
        List<Booking> bookingList = new ArrayList<>();
        String query = "SELECT * FROM bookings WHERE roomId = ?";
        try (Connection conn = DBHandler.getConnection();
             PreparedStatement ps = conn.prepareStatement(query)) {
            ps.setInt(1, roomId);
            try (ResultSet rs = ps.executeQuery()) {
                while (rs.next()) {
                    Booking booking = new Booking();
                    booking.setBookingId(rs.getInt("bookingId"));
                    booking.setRoomId(rs.getInt("roomId"));
                    booking.setGuestName(rs.getString("guestName"));
                    bookingList.add(booking);
                }
            }
        } catch (SQLException e) {
            System.out.println("Error retrieving bookings by room: " + e.getMessage());
        }
        return bookingList;
    }

    @Override
    public List<Booking> getBookingsByGuestName(String guestName) {
        List<Booking> bookingList = new ArrayList<>();
        String query = "SELECT b.bookingId, r.roomType, b.guestName,b.roomId "
        		+ "FROM bookings b "
        		+ "JOIN rooms r ON b.roomId = r.roomId WHERE b.guestName = ?";
        
        try (Connection conn = DBHandler.getConnection();
             PreparedStatement ps = conn.prepareStatement(query)) {
            ps.setString(1, guestName);
            try (ResultSet rs = ps.executeQuery()) {
                while (rs.next()) {
                    Booking booking = new Booking();
                    booking.setBookingId(rs.getInt("bookingId"));
                    booking.setRoomId(rs.getInt("roomId"));
                    booking.setGuestName(rs.getString("guestName"));
                    bookingList.add(booking);
                    System.out.println(booking+"\t"+rs.getString("roomType"));
                }
            }
        } catch (SQLException e) {
            System.out.println("Error retrieving bookings by guest name: " + e.getMessage());
        }
        return bookingList;
    }

    @Override
    public void cancelBooking(int bookingId) {
        String query = "DELETE FROM bookings WHERE bookingId = ?";
        try (Connection conn = DBHandler.getConnection();
             PreparedStatement ps = conn.prepareStatement(query)) {
            ps.setInt(1, bookingId);
            ps.executeUpdate();
        } catch (SQLException e) {
            System.out.println("Error canceling booking: " + e.getMessage());
        }
    }

	@Override
	public List<Booking> getBookings() {
		 List<Booking> bookingList = new ArrayList<>();
	        String query = "SELECT * From bookings";
	        
	        try (Connection conn = DBHandler.getConnection();
	             PreparedStatement ps = conn.prepareStatement(query)) {
	            try (ResultSet rs = ps.executeQuery()) {
	                while (rs.next()) {
	                    Booking booking = new Booking();
	                    booking.setBookingId(rs.getInt("bookingId"));
	                    booking.setRoomId(rs.getInt("roomId"));
	                    booking.setGuestName(rs.getString("guestName"));
	                    bookingList.add(booking);
	                }
	            }
	        } catch (SQLException e) {
	            System.out.println("Error retrieving bookings " + e.getMessage());
	        }
	        return bookingList;
	}
}
