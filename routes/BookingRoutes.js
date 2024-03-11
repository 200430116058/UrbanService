const router = require('express').Router();
const bookingController =  require('../controllers/BookingController');
const { route } = require('./RoleRoutes');


router.post('/booking', bookingController.createBooking)
router.get('/booking',bookingController.getAllBooking)
router.get('/booking/:id',bookingController.getBookingById)
router.put('/booking/:id',bookingController.updateBookingById)
router.put('/booking/updatestatus/:id',bookingController.updateBookingStatus)



module.exports = router