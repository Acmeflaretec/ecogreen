const Coupon = require('../models/coupon')
const User = require('../models/user')

const fs = require('fs');

const getCoupons = async (req, res) => {
 
  try {
    const today = new Date();
    const coupons = await Coupon.find({ coincoupon: false}).sort({ createdAt: -1 });
    res.status(200).json({ data: coupons })
  } catch (error) {
    res.status(400).json({ message: error?.message ?? "Something went wrong !" });
  }
};

const getCoinCoupons =async (req, res) =>{
  try {
    const today = new Date();
    const coupons = await Coupon.find({ coincoupon: true});
    res.status(200).json({ data: coupons })       
  } catch (error) {
    res.status(400).json({ message: error?.message ?? "Something went wrong !" });
  }
};

const addCoupon = async (req, res) => {
  try {
    const { name,code, validity, discount, minValue, maxValue } = req.body;   




    const isExisting = await Coupon.findOne({ code: code });
    if (isExisting) {

      res.status(400).json({ message: "coupon already Exist" });

    } else {
      const newCoupon = new Coupon({
        name,
        code,
        validity: new Date(validity),
        discount,
        minValue,
        maxValue,
      });

      const savedCoupon = await newCoupon.save();
      if (savedCoupon) {
        res.status(200).json({ message: "Coupon added successfully!" });
      } else {
        res.status(400).json({ message: "Something went wrong while saving the coupon!" });
      }

    }


  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Something went wrong!" });
  }
};


const updateCoupon = async (req, res) => {
  const { _id, name,code, validity, discount, minValue, maxValue } = req.body;

  try {
    const data = await Coupon.findById(_id);
    if (!data) {
      return res.status(404).json({ message: 'Coupon not found' });
    }

    await Coupon.updateOne({ _id }, {
      $set: { name,code, validity: new Date(validity), discount, minValue, maxValue }
    })
    res.status(200).json({ data, message: 'Coupon updated successfully' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error?.message ?? 'Something went wrong' })
  }
};

const deleteCoupon = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Coupon.findByIdAndDelete(id);
    if (!data) {
      return res.status(404).json({ message: 'Coupon not found' });
    }

    res.status(200).json({ message: 'Coupon deleted successfully' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error?.message ?? 'Something went wrong' })
  }
};

const updateCouponStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const updatedCoupon = await Coupon.findByIdAndUpdate(id, { status: !status }, { new: true });

    if (updatedCoupon) {
      res.status(200).json({ message: "Coupon status updated successfully", updatedCoupon });
    } else {
      res.status(404).json({ message: "Coupon not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getCouponById = async (req, res) => {
  const { id } = req.params;
  try {
    const coupon = await Coupon.findById(id);
    if (!coupon) {
      return res.status(404).json({ message: 'coupon not found' });
    }
    res.status(200).json({ data: coupon });
  } catch (error) {        
    console.log(error);
    return res.status(500).json({ message: err?.message ?? 'Something went wrong' })
  }
}

const getClientCoupons = async (req, res) => {
  try {
    const today = new Date();
    const coupons = await Coupon.find({ status: true, validity: { $gte: today } });
    res.json(coupons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}   
const validateCoupon = async (req, res) => {
  console.log('validateCoupon');  
  const {  couponId,userDetails,totalAmountToPay } = req.body;
  console.log('couponId, userId, subtotal',couponId,userDetails,totalAmountToPay );  
  const id=userDetails?._id 
  const coupon = await Coupon.findOne({ _id: couponId, status: true });
  try {
    if (userDetails) {   
      console.log('userid und');
      const user = await User.findById({_id:id});
      // console.log("user undonn nokkunnu-",user);
      if (user.coupons.includes(couponId)) {  
        console.log("just check coupon alredy used");
        res.json({ valid: false, message: 'This coupon alredy used' });   
      } else {
        if (totalAmountToPay < coupon.minValue) {         
          res.json({ valid: false, message: `Coupon can be applied only to orders above ${coupon.minValue}` });
        } else {

          res.json({ valid: true, discount: coupon.discount });
        }
      }
    } else {
      res.json({ valid: false, message: 'user is not login' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

}

module.exports = {
  getCoupons,
  addCoupon,
  updateCoupon,
  deleteCoupon,
  updateCouponStatus,
  getCouponById,
  getClientCoupons,
  validateCoupon,
  getCoinCoupons

}
