const bookingSchema = require('../models/BookingModel')

const createBooking = async(req,res)=>{
    try{
        const savedbooking = await bookingSchema.create(req.body)
        res.status(201).json({
            message:"Booking created Successfully",
            data:savedbooking,
            flag:1
        })

    }catch(error){
        res.status(500).json({
            message:"Internal Server Error",
            data:error.message,
            flag:-1
        })
    }
}

const getBookingById = async(req,res)=>{
    try{
        const booking = await bookingSchema.findById(req.params.id).populate("service").populate("serviceprovider").populate("user")
        if(booking==null){
            res.status(404).json({
                message:"Booking not found",
                flag:-1
            })
        }else{
            res.status(200).json({
                message:"Booking fetched",
                data:booking,
                flag:1
            })
        }

    }catch(error){
        res.status(500).json({
            message: 'Error in Fetching Data',
            data:error,
            flag:-1
        })
    }
}

const getAllBooking = async(req,res)=>{
    try{
        const bookings =  await bookingSchema.find().populate('serviceprovider').populate('user').populate('service')
        res.status(200).json({
            message:"Booking fetched successfully",
            data:bookings,
            flag:1
        })
    }catch(error){
        res.status(500).json({
            message:"Error",
            data:error,
            flag:-1
        })
    }
}

const updateBookingById = async(req,res)=>{
    const newBooking = req.body
    try{
        const updatedBooking = await bookingSchema.findByIdAndUpdate(req.params.id,newBooking)
        if(updatedBooking===null){
            res.status(404).json({
                message:"Booking not found",
                flag:-1
            })
        }else{
            res.status(200).json({
                message: "Booking has been updated!",
                flag: 1
            })
        }
    }catch(error){
        res.status(500).json({
            message:"Error In Updating Booking",
            data: error,
            flag:-1
        })
    }
}

const updateBookingStatus = async(req,res) =>{
   
    const newStatus = req.body;
    try{
        const updatebookingstatus = await bookingSchema.findByIdAndUpdate(req.params.id,newStatus).populate('service').populate("user").populate('serviceprovider')
       if(updatebookingstatus === null){
            res.status(404).json({
                message: 'No booking with given ID',
                flag:-1
            })
       }else{
            res.status(200).json({
                message: 'The status of the booking is successfully changed',
                data : updatebookingstatus,
                flag:1
            })
       }
       

    }catch(error){
        res.status(500).json({
            message:"Error In Updating Booking Status",
            data: error,
            flag:-1
    })
}
}


module.exports = {
    createBooking,
    getBookingById,
    getAllBooking,
    updateBookingById,
    updateBookingStatus
}