package com.example.main;

import java.util.List;
import java.util.Scanner;
import com.example.dao.RoomDAO;
import com.example.dao.RoomDAOImpl;
import com.example.dao.BookingDAO;
import com.example.dao.BookingDAOImpl;
import com.example.model.Room;
import com.example.model.Booking;

public class HRS extends Main{
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        RoomDAO roomDao = new RoomDAOImpl();
        BookingDAO bookingDao = new BookingDAOImpl();
        HRS hrs =  new HRS();
        System.out.println("Welcome to the "+hrs.HotelName+" Hotel Reservation System!");
       S1:while(true) {
    	   System.out.println(" How would you Like to continue with us ....");
    	   System.out.println("1. User");
    	   System.out.println("2. Admin");
    	   System.out.println("3. Exit");
    	   int source = scanner.nextInt();
    	   switch(source) {
    	   case 1:
		        S2:while (true) {
		        	System.out.println("**********************************");
		            System.out.println("\n1. Search for available rooms");
		            System.out.println("2. Make a reservation");
		            System.out.println("3. Manage bookings");
		            System.out.println("4. Exit");
		            System.out.println("************************************");
		            System.out.print("Enter your choice: ");
		            int choice = scanner.nextInt();
		
		            switch (choice) {
		                case 1:
		                	
				                    System.out.println("Available Rooms:");
				                    System.out.println("--------------------------");
				                    System.out.println("Room_Type \t Available");
				                    System.out.println("--------------------------");
				                    roomDao.getAvailableRooms();
//				                    for (Room room : availableRooms) {
//				                    	if(room.isAvailable())
//				                    		System.out.println(room.getRoomId()+"\t\t"+room.getRoomType());
//				                    }
				                    System.out.println("--------------------------");
				                    break;
		                	
		                case 2:
		                    System.out.print("Enter guest name : ");
		                    String guestName = scanner.next();
		                    System.out.print("Enter room type : ");
		                    String roomType = scanner.next();
		
		                    Room selectedRoom = roomDao.getAvailableRooms(roomType);
		                    if (selectedRoom == null) {
		                        System.out.println("No available rooms of type " + roomType);
		                    } else {
		                        Booking newBooking = new Booking();
		                        newBooking.setGuestName(guestName);
		                        newBooking.setRoomId(selectedRoom.getRoomId());
		                        bookingDao.createBooking(newBooking);
		                        roomDao.updateRoomAvailability(selectedRoom.getRoomId(), false);
		                        System.out.println("Reservation successfully made.");
		                    }
		                    break;
		                case 3:
		                	scanner.nextLine();
		                	System.out.print("Enter your name : ");
							String username= scanner.nextLine();
							System.out.println("Bookings for Guest Name " + username + ":");
		                    System.out.println("--------------------------");
		
							System.out.println("Booking_id\tRoom\tRoomType");
		                    System.out.println("--------------------------");
		
							bookingDao.getBookingsByGuestName(username);
		                    System.out.println("--------------------------");
		
//		                    for (Booking booking : bookingsByGuestName) {
//		                        System.out.println(booking);
//		                    }
		                    System.out.println("1. Cancel booking");
		                    System.out.println("2. Exit");

		                    System.out.print("Enter your choice: ");
		                    int manageChoice = scanner.nextInt();
		                    switch (manageChoice) {
		                        case 1:
		                            System.out.println("Enter booking ID to cancel:");
		                            int cancelBookingId = scanner.nextInt();
		                            Booking bookingToCancel = bookingDao.getBookingById(cancelBookingId);
		                            if (bookingToCancel != null) {
		                                bookingDao.cancelBooking(cancelBookingId);
		                                roomDao.updateRoomAvailability(bookingToCancel.getRoomId(), true);
		                                System.out.println("Booking successfully canceled.");
		                            } else {
		                                System.out.println("Booking not found.");
		                            }
		                            break;
		                        case 0:
		                        	break;
		                        default:
		                            System.out.println("Invalid choice.");
		                            break;
		                    }
		                    break;
		                case 4:
		                    
		                    break S2;
		                default:
		                    System.out.println("Invalid choice. Please try again.");
		            }
		        }
		        break;
		case 2:
			L:while(true) {
				System.out.println("************************************");
				
				System.out.println("1. View Reservations");
				System.out.println("2. Add Rooms");
				System.out.println("3. Cancel Reservations");
				System.out.println("4. Exit");
				int ad = scanner.nextInt();
			switch(ad) {
			case 1:
				List<Booking> bookings= bookingDao.getBookings();
				System.out.println("-----------------------------------------------");
				System.out.println("Booking_id\tRoom_id\t\tGuestName");
				System.out.println("-----------------------------------------------");

				for(Booking book : bookings) {
					System.out.println(book.getBookingId()+"\t\t"+book.getRoomId()+"\t"+book.getGuestName());
				}
				System.out.println("-----------------------------------------------");

				break;
			case 2:
				scanner.nextLine();
				System.out.print("Enter the room type : ");
				String roomType = scanner.nextLine();
				Room room = new Room(roomType,true);
				roomDao.Addroom(room);
				System.out.println("Room Added Successfully");
				break;
			case 3:
				System.out.println("Enter booking ID to cancel:");
                int cancelBookingId = scanner.nextInt();
                Booking bookingToCancel = bookingDao.getBookingById(cancelBookingId);
                if (bookingToCancel != null) {
                    bookingDao.cancelBooking(cancelBookingId);
                    roomDao.updateRoomAvailability(bookingToCancel.getRoomId(), true);
                    System.out.println("Booking successfully canceled.");
                } else {
                    System.out.println("Booking not found.");
                }
				break;
			case 4:
				break L;
				
				}
			}
			break;
		case 3:
			System.out.println("Exiting App.");
			System.out.println("Thank You.............");
			System.out.println("\t\t\t***********************");
			break S1;
    	   }
    	   }
       }
}
