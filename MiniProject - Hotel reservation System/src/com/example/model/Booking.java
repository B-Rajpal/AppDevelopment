package com.example.model;

public class Booking {
    private int bookingId;
    private int roomId;
    private String guestName;

    public int getBookingId() {
        return bookingId;
    }

    public void setBookingId(int bookingId) {
        this.bookingId = bookingId;
    }

    public int getRoomId() {
        return roomId;
    }

    public void setRoomId(int roomId) {
        this.roomId = roomId;
    }

    public String getGuestName() {
        return guestName;
    }

    public void setGuestName(String guestName) {
        this.guestName = guestName;
    }

  

    @Override
    public String toString() {
        return bookingId + "\t\t" + roomId ;
    }
}
