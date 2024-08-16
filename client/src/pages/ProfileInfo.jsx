// import React, { useState, useEffect } from 'react';
// import { Form, Button, Card, Row, Col, Container, InputGroup } from 'react-bootstrap';
// import { FaUser, FaEnvelope, FaPhone, FaEdit, FaSave, FaCoins, FaLink, FaCopy, FaShare } from 'react-icons/fa';
// import { useSelector,useDispatch } from 'react-redux';
// import { setUserDetails } from '../redux/actions/userActions';
// import axiosInstance from '../axios'

// function ProfileInfo() {
//   const userDetails = useSelector(state => state?.userDetails);
//   const dispatch = useDispatch();
//   const [profile, setProfile] = useState({
//     name: userDetails?.username || '',
//     email: userDetails?.email || '',
//     phone: userDetails?.phone || '',
//     coins: userDetails?.wallet || 0,
//     referralLink: ''
//   });
//   useEffect(()=>{
//     if(!userDetails){
//       const fetchData = async () => {
//       try {
//         const response = await axiosInstance.get('/auth/user');
//         console.log('response.data.data',response.data.data);

//         setProfile({
//           name: response?.data?.data?.username || '',
//           email: response?.data?.data?.email || '',
//           phone: response?.data?.data?.phone || '',
//           coins: response?.data?.data?.wallet || 0,
//           referralLink: ''
//         });
//       } catch (error) {
//         console.log('errr', error);
//       }
//     }
//     fetchData();
//     }
//   },[])

//   const [editable, setEditable] = useState(false);

//   useEffect(() => {
//     if (userDetails) {
//       const referralLink = `${import.meta.env.VITE_API_BASE_REFAREL_URL}/#/login?referrer=${userDetails._id}`;
//       setProfile(prev => ({ ...prev, referralLink }));
//     }
//   }, [userDetails]);

//   const handleEdit = () => {
//     setEditable(true);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfile(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSave =async () => {
//     try {
//       const response = await axiosInstance.patch(`/user/userDetails`, profile);
//       if (response.status === 200) {
//         setEditable(false);
//         dispatch(setUserDetails(response.data.data));
//           alert('Profile updated successfully');
//           console.log('response.data.data1',response.data.data);
//       }
//   } catch (error) {
//       console.error('Error saving profile', error);
//   }


//   };

//   const copyReferralLink = () => {
//     navigator.clipboard.writeText(profile.referralLink);
//     alert('Referral link copied');
//   };

//   const shareReferralLink = () => {
//     if (navigator.share) {
//       navigator.share({
//         title: 'Referral Link',
//         url: profile.referralLink,
//       });
//     } else {
//       // Implement a fallback sharing method
//     }
//   };

//   const renderField = (field, icon) => (
//     <Form.Group as={Row} className="mb-4 align-items-center">
//       <Form.Label column sm={3} className="text-muted">
//         {icon} {field.charAt(0).toUpperCase() + field.slice(1)}
//       </Form.Label>
//       <Col sm={7}>
//         <Form.Control
//           type="text"
//           name={field}
//           value={profile[field]}
//           onChange={handleChange}
//           disabled={!editable}
//           className={`border-0 border-bottom rounded-0 ${editable[field] ? 'border-primary' : ''}`}
//         />
//       </Col>

//     </Form.Group>
//   );

//   return (
//     <Container className="py-5">
//       <Card className="border-0 shadow-sm">
//         <Card.Body className="p-5">
//           <Row className="mb-5">
//             <Col>
//               <h2 className="mb-4 fw-light">Profile Information</h2>
//               <div className="d-flex align-items-center mb-4">
//                 <FaCoins className="text-primary me-3" style={{ fontSize: '2rem' }} />
//                 <div>
//                   <small className="text-muted text-uppercase">Balance</small>
//                   <h3 className="mb-0 fw-bold">{profile.coins.toLocaleString()} Coins</h3>
//                 </div>
//               </div>
//             </Col>
//           </Row>

//           <Form>
//             {renderField('name', <FaUser className="text-primary" />)}
//             {renderField('email', <FaEnvelope className="text-primary" />)}
//             {renderField('phone', <FaPhone className="text-primary" />)}
//             <div style={{width:'100%',display:'flex',justifyContent:'center'}}>

//             <Button sm={3}
//                 onClick={() => editable ? handleSave() :handleEdit()}
//                 type="button" class="btn btn-primary  "
//                 // style={{display:'flex', right:0}}
//               >
//                 {editable ? 'Save' : 'Edit'}
//               </Button>
//               </div>
//           </Form>



//           <hr className="my-5" />

//           <Row className="align-items-center">
//             <Col sm={3}>
//               <h5 className="text-muted mb-0"><FaLink className="me-2" /> Referral Link</h5>
//             </Col>
//             <Col sm={9}>
//               <InputGroup>
//                 <Form.Control
//                   type="text"
//                   value={profile.referralLink}
//                   readOnly
//                   className="border-0 bg-light"
//                 />
//                 <Button variant="outline-secondary" onClick={copyReferralLink}>
//                   <FaCopy />
//                 </Button>
//                 <Button variant="outline-primary" onClick={shareReferralLink}>
//                   <FaShare />
//                 </Button>
//               </InputGroup>
//             </Col>
//           </Row>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// }

// export default ProfileInfo;



import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Row, Col, Container, InputGroup, Alert } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaPhone, FaEdit, FaSave, FaCoins, FaLink, FaCopy, FaShare, FaGift } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { setUserDetails } from '../redux/actions/userActions';
import axiosInstance from '../axios';

function ProfileInfo() {
  const userDetails = useSelector(state => state?.userDetails);
  const dispatch = useDispatch();
  const [profile, setProfile] = useState({
    name: userDetails?.username || '',
    email: userDetails?.email || '',
    phone: userDetails?.phone || '',
    coins: userDetails?.wallet || 0,
    referralLink: '',
    giftCoupon: '',
  });

  useEffect(() => {
    if (!userDetails) {
      const fetchData = async () => {
        try {
          const response = await axiosInstance.get('/auth/user');
          setProfile({
            name: response?.data?.data?.username || '',
            email: response?.data?.data?.email || '',
            phone: response?.data?.data?.phone || '',
            coins: response?.data?.data?.wallet || 0,
            referralLink: '',
            giftCoupon: '',
          });
        } catch (error) {
          console.log('errr', error);
        }
      };
      fetchData();
    }
  }, []);

  useEffect(() => {
    const coinCheck = async () => {
      try {
        if (profile.coins >= 2000) {
          const response = await axiosInstance.get('/coupons/coincoupon');
          
          setProfile(prev => ({ ...prev, giftCoupon: response.data.data[0].name }));
        }
      } catch (error) {
        console.log('errr', error);
      }
    }
    coinCheck()

  }, [userDetails])

  const [editable, setEditable] = useState(false);

  useEffect(() => {
    if (userDetails) {
      const referralLink = `${import.meta.env.VITE_API_BASE_REFAREL_URL}/#/login?referrer=${userDetails._id}`;
      setProfile(prev => ({ ...prev, referralLink }));
    }
  }, [userDetails]);

  const handleEdit = () => {
    setEditable(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const response = await axiosInstance.patch(`/user/userDetails`, profile);
      if (response.status === 200) {
        setEditable(false);
        dispatch(setUserDetails(response.data.data));
        alert('Profile updated successfully');
      }
    } catch (error) {
      console.error('Error saving profile', error);
    }
  };

  const copyReferralLink = () => {
    navigator.clipboard.writeText(profile.referralLink);
    alert('Referral link copied');
  };

  const copyCouponCode = () => {
    navigator.clipboard.writeText(profile.giftCoupon);
    alert('Coupon code copied');
  };

  const shareReferralLink = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Referral Link',
        url: profile.referralLink,
      });
    } else {
      // Implement a fallback sharing method
    }
  };

  const renderField = (field, icon) => (
    <Form.Group as={Row} className="mb-4 align-items-center">
      <Form.Label column sm={3} className="text-muted">
        {icon} {field.charAt(0).toUpperCase() + field.slice(1)}
      </Form.Label>
      <Col sm={7}>
        <Form.Control
          type="text"
          name={field}
          value={profile[field]}
          onChange={handleChange}
          disabled={!editable}
          className={`border-0 border-bottom rounded-0 ${editable[field] ? 'border-primary' : ''}`}
        />
      </Col>
    </Form.Group>
  );

  return (
    <Container className="py-5">
      <Card className="border-0 shadow-sm">
        <Card.Body className="p-5">
          <Row className="mb-5">
            <Col>
              <h2 className="mb-4 fw-light">Profile Information</h2>
              <div className="d-flex align-items-center mb-4">
                <FaCoins className="text-primary me-3" style={{ fontSize: '2rem' }} />
                <div>
                  <small className="text-muted text-uppercase">Balance</small>
                  <h3 className="mb-0 fw-bold">{profile.coins.toLocaleString()} Coins</h3>
                </div>
              </div>
              {profile.coins >= 2000 && <Alert variant="info" className="d-flex justify-content-between align-items-center p-3">
                <div>
                  <FaGift className="text-warning me-2" style={{ fontSize: '1.5rem' }} />
                  <strong>Your Gift Coupon:</strong> {profile.giftCoupon}
                </div>
                <Button variant="outline-primary" size="sm" onClick={copyCouponCode}>
                  <FaCopy /> Copy Coupon
                </Button>
              </Alert>}
            </Col>
          </Row>

          <Form>
            {renderField('name', <FaUser className="text-primary" />)}
            {renderField('email', <FaEnvelope className="text-primary" />)}
            {renderField('phone', <FaPhone className="text-primary" />)}
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <Button
                sm={3}
                onClick={() => (editable ? handleSave() : handleEdit())}
                type="button"
                className="btn btn-primary"
              >
                {editable ? 'Save' : 'Edit'}
              </Button>
            </div>
          </Form>

          <hr className="my-5" />

          <Row className="align-items-center">
            <Col sm={3}>
              <h5 className="text-muted mb-0">
                <FaLink className="me-2" /> Referral Link
              </h5>
            </Col>
            <Col sm={9}>
              <InputGroup>
                <Form.Control
                  type="text"
                  value={profile.referralLink}
                  readOnly
                  className="border-0 bg-light"
                />
                <Button variant="outline-secondary" onClick={copyReferralLink}>
                  <FaCopy />
                </Button>
                <Button variant="outline-primary" onClick={shareReferralLink}>
                  <FaShare />
                </Button>
              </InputGroup>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProfileInfo;
