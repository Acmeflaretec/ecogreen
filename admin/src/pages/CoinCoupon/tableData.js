import Box from "components/Box";
import Typography from "components/Typography";
import Avatar from "components/Avatar";
import Badge from "components/Badge";
import { useGetCoinCoupen, useUpdateCouponStatus } from "queries/ProductQuery";
import Table from "examples/Tables/Table";
import { Icon } from "@mui/material";
import Button from '@mui/material/Button';
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';


function Coupon({ id,name, desc }) {
  return (
    <Box key={id} display="flex" alignItems="center" px={1} py={0.5}>

      <Box display="flex" flexDirection="column">
        <Typography variant="button" fontWeight="medium">
          {name}
        </Typography>
        <Typography variant="caption" color="secondary">
          {desc}
        </Typography>
      </Box>
    </Box>
  );
}
Coupon.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

const TableData = () => {
  // const navigate = useNavigate();
  const { data, isLoading } = useGetCoinCoupen({ pageNo: 1, pageCount: 100 });
  // const { mutateAsync: UpdateCouponStatus, isLoadings } = useUpdateCouponStatus();

  const [coupon, setCoupon] = useState([]);

  useEffect(() => {
    if (data?.data) {
      setCoupon(data.data);
    }
  }, [data]);

  // const handleStatus = async (coupon) => {
  //   const updatedCoupons = coupons.map(item =>
  //     item._id === coupon._id ? { ...item, status: !item.status } : item
  //   );
  //   setCoupons(updatedCoupons);

  //   try {
  //     const response = await UpdateCouponStatus(coupon);
  //     toast.success(response?.message ?? "Coupon status updated");
  //     navigate('/coincoupons');
  //   } catch (err) {
  //     toast.error(err?.message ?? "Something went wrong");
  //     // Rollback to original state if update fails
  //     const rollbackCoupons = coupons.map(item =>
  //       item._id === coupon._id ? { ...item, status: coupon.status } : item
  //     );
  //     setCoupons(rollbackCoupons);
  //   }
  // };

  const columns = [
    { name: "coupon", align: "left" },
    { name: "code", align: "center" },
    // { name: "status", align: "center" },
    { name: "createdon", align: "center" },
    { name: "validity", align: "center" },
    { name: "discount", align: "center" },
    { name: "min", align: "center" },
    { name: "max", align: "center" },
    { name: "action", align: "center" },
  ];

  const rows = coupon.map((item, index) => ({
    coupon: (
      <Coupon
      id={item?._id}
        name={item?.name}
        desc={item?.description}
      />
    ),
    // status: (
    //   <Button
    //     variant="contained"
    //     color={item?.status ? "success" : "error"}
    //     onClick={() => handleStatus(item)}
    //   >
    //     {item?.status ? 'Active' : 'In-Active'}
    //   </Button>
    // ),
    code: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        {item?.code}
      </Typography>
    ),
    createdon: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        {new Date(item?.createdAt).toDateString()}
      </Typography>
    ),
    validity: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        {new Date(item?.validity).toDateString()}
      </Typography>
    ),
    discount: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        {item?.discount}
      </Typography>
    ),
    min: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        {item?.minValue}
      </Typography>
    ),
    max: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        {item?.maxValue}
      </Typography>
    ),
    action: (
      <Link to={`/coincoupons/editCoinCoupon/${item?._id}`}>
        <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
          more_vert
        </Icon>
      </Link>
    ),
  }));

  return isLoading ? (
    <Typography fontSize={14} sx={{ paddingX: 5 }}>
      loading...
    </Typography>
  ) : (
    <Table columns={columns} rows={rows} />
  );
};

export default TableData;
