const BookingDetails = [
    {
        booking_id: 1,
        service_id - Foriegn key from Accommodation, Transport, Adventure
        booking_date
        checkin_date
        checkout_date
        booking_amount - (Rooms or Adventure Tickets or Vehicle Distance)
booking_cost
booking_status - inlude: pending, paid
booking_serviceprovider_id - foriegn key from service_provider
booking_package_id



},
    {
        package_id:2,
        package_name:"trip 2",
        traveler_id :2,
        package_start_point:"colombo",
        package_start_date:new Date("2020-05-02"),
        package_full_cost:2500,
        package_status :1,


    },
    {
        package_id:3,
        package_name:"trip 3",
        traveler_id :1,
        package_start_point:"colombo",
        package_start_date:new Date("2020-05-02"),
        package_full_cost:2500,
        package_status :3,


    },
    {
        package_id:4,
        package_name:"trip 1",
        traveler_id :1,
        package_start_point:"colombo",
        package_start_date:new Date("2020-05-02"),
        package_full_cost:2500,
        package_status :0,


    },
    {
        package_id:5,
        package_name:"trip 2",
        traveler_id :1,
        package_start_point:"colombo",
        package_start_date:new Date("2020-05-02"),
        package_full_cost:2500,
        package_status :1,


    },
    {
        package_id:6,
        package_name:"trip 3",
        traveler_id :1,
        package_start_point:"colombo",
        package_start_date:new Date("2020-05-02"),
        package_full_cost:2500,
        package_status :2,


    },{
        package_id:7,
        package_name:"trip 1",
        traveler_id :1,
        package_start_point:"colombo",
        package_start_date:new Date("2020-05-02"),
        package_full_cost:2500,
        package_status :0,


    },
];
export default BookingDetails;