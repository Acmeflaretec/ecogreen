const User = require("../models/user");
const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");

// module.exports.signup = async (req, res) => {
//    const {
//       username,
//       password,
//       email,
//       phone,
//    } = req.body;

//    try {
//       const encryptedPassword = await bcrypt.hash(password, 10);
//       await User.create({
//          username,
//          password: encryptedPassword,
//          email,
//          phone,
//       });

//       const accessToken = jwt.sign(
//          { _id: userExists._id },
//          process.env.JWT_ACCESS_SECRET,
//          {
//             expiresIn: process.env.JWT_ACCESS_EXPIRY,
//          }
//       );

//       const refreshToken = jwt.sign(
//          { _id: userExists._id },
//          process.env.JWT_REFRESH_SECRET,
//          {
//             expiresIn: process.env.JWT_REFRESH_EXPIRY,
//          }
//       );

//       console.log({ accessToken, refreshToken });

//       return res.status(200).json({
//          message: "Registration successfull",
//          data: { token: { accessToken, refreshToken }, user }
//       });
//    } catch (error) {
//       return res.status(500).json({ message: err?.message ?? 'Something went wrong' })
//    }
// };

// module.exports.signin = async (req, res) => {
//    const { usernameORemailORPhone, password } = req.body;
//    try {
//       const pipeline = [
//          {
//             $match: {
//                $or: [
//                   { username: usernameORemailORPhone },
//                   { email: usernameORemailORPhone },
//                   { phone: usernameORemailORPhone },
//                ],
//             },
//          },
//          {
//             $project: {
//                _id: 1,
//                username: 1,
//                email: 1,
//                phone: 1,
//                password: 1,
//                is_admin: 1,
//                is_verified: 1,
//                profile: 1,
//                cart: 1,
//                wishlist: 1,
//                wallet: 1,
//             },
//          },
//       ];

//       await User
//          .aggregate(pipeline)
//          .exec()  
//          .then((users) => {
//             if (users.length === 0) {
//                console.log("User not found");
//                return res.status(404).json({ message: "user not found" })
//             } else {
//                const user = users[0];
//                bcrypt.compare(password, user.password, (err, result) => {
//                   if (err) {
//                      console.error("Password comparison error:", err);
//                      return res.status(500).json({ message: err?.message })
//                   } else if (result) {
//                      const accessToken = jwt.sign(
//                         { _id: user._id },
//                         process.env.JWT_ACCESS_SECRET,
//                         {
//                            expiresIn: process.env.JWT_ACCESS_EXPIRY,
//                         }
//                      );

//                      const refreshToken = jwt.sign(
//                         { _id: user._id },
//                         process.env.JWT_REFRESH_SECRET,
//                         {
//                            expiresIn: process.env.JWT_REFRESH_EXPIRY,
//                         }
//                      );
//                      delete user.password;
//                      return res.status(200).json({
//                         message: "login successfull",
//                         data: { token: { accessToken, refreshToken }, user }
//                      });
//                   } else {
//                      console.log(result);
//                      console.log("Incorrect password");
//                      return res.status(404).json({ message: "Incorrect password" })
//                   }
//                });
//             }
//          });
//    } catch (error) {
//       return res.status(500).json({ message: err?.message ?? 'Something went wrong' })
//    }
// };

module.exports.getCurrentUser = async (req, res) => {
   try {
      const _id = req.decoded._id;
      const currentUser = await User.findOne({ _id });
      if (!currentUser) {
         return res.status(400).json({ message: 'user does not exists' })
      }
      return res.status(200).json({ data: currentUser, message: 'user details fetched successfully' })
   } catch (error) {
      return res.status(500).json({ message: err?.message ?? 'Something went wrong' })
   }
}


let otpStore = {};

module.exports.sendOtp = async (req, res) => {    
  const { number } = req.body;
  console.log('number',number);
  // const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const otp = '123456'
  console.log('otp',otp);
  otpStore[number] = otp;

 
  const options = {   
    authorization: process.env.FAST2SMS_API_KEY,   
    message: `Your OTP is: ${otp}`,
    numbers: [number]
  };
  try {
    await fast2sms.sendMessage(options);
    res.status(200).json({ message: 'OTP sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send OTP', error: error.message });
  }
};

module.exports.verifyOtp = async (req, res) => {  
  const { number, otp,referrerId  } = req.body;
  console.log('number, otp,referrerId',number, otp,referrerId);

  if (otpStore[number] !== otp) {
    return res.status(400).json({ message: 'Invalid OTP' });
  }

  let user = await User.findOne({ phone:number });
  

  if (!user) {   
    user = new User({ phone:number });
    user.wallet += 500;
    if (referrerId) {
      const referrer = await User.findById(referrerId);
      if (referrer) {
          referrer.wallet += 100; 
          await referrer.save();
      }
  }
    await user.save();   
  }  
//    else{
//     console.log('userCoupons-',user.coupons);
//   }   

  const accessToken = jwt.sign({ _id: user._id }, process.env.JWT_ACCESS_SECRET, {
    expiresIn: process.env.JWT_ACCESS_EXPIRY,
  });

  const refreshToken = jwt.sign({ _id: user._id }, process.env.JWT_REFRESH_SECRET, {
    expiresIn: process.env.JWT_REFRESH_EXPIRY,
  });

  res.status(200).json({
    message: 'Login successful',
    data: { token: { accessToken, refreshToken }, user }
  });
};