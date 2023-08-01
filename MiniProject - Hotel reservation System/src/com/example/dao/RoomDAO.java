package com.example.dao;

import java.util.List;

import com.example.model.Booking;
import com.example.model.Room;

public abstract class  RoomDAO {
    public abstract List<Room> getAllRooms();
    public abstract Room getRoomById(int roomId);
    public abstract List<Booking> getbookings(String username);
    public abstract Room getAvailableRooms(String roomType);
    public abstract void updateRoomAvailability(int roomId, boolean isAvailable);
    public abstract void Addroom(Room r);
	public abstract List<Room> getAvailableRooms();
	public abstract List<Room> getAvailableRooms1(String roomtype);
}
