/* eslint-disable react/prop-types */
import Box from "components/Box";
import Typography from "components/Typography";
import Avatar from "components/Avatar";
import Badge from "components/Badge";
import toast from 'react-hot-toast';
import Table from "examples/Tables/Table";
import { useGetTagProducts } from "queries/ProductQuery";
import { Link } from "react-router-dom";
import { Icon } from "@mui/material";

function Author({ image, name, desc }) {
  return (
    <Box display="flex" alignItems="center" px={1} py={0.5}>
      <Box mr={2}>
        <Avatar src={image} alt={name} size="sm" variant="rounded" />
      </Box>
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

const TableData = () => {
  const { data, isLoading } = useGetTagProducts({ pageNo: 1, pageCount: 100 });
  const columns = [
    { name: "product", align: "left" },
    { name: "status", align: "center" },
    { name: "createdon", align: "center" },
    { name: "Tags", align: "center" },
    { name: "action", align: "center" },
  ]

  const rows = data?.data?.map(item => ({
    product: <Author image={`${process.env.REACT_APP_API_URL}/uploads/${item?.image?.[0]}`} name={item?.name} desc={item?.subheading} />,
    status: (
      <Badge variant="gradient" badgeContent={item?.isAvailable ? 'Active' : 'Blocked'} color={item?.isAvailable ? "success" : 'secondary'} size="xs" container />
    ),
    createdon: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        {new Date(item?.createdAt).toDateString()}
      </Typography>
    ),
    Tags: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        
          <Box display="flex" alignItems="center" px={1} py={0.5}>
          <Box display="flex" flexDirection="column">
            {/* <Typography variant="button" fontWeight="medium">
              {name}
            </Typography> */}
            {item?.tags?.map((item,index)=>(
              // <Typography key={index} variant="button" fontWeight="medium">
            <Typography key={index} variant="caption" color="secondary">
              {item}
            </Typography>
            ))}
          </Box>
        </Box>
        
      </Typography>
    ),
    action: (
      <Link to={`/tags/editProduct/${item?._id}`}>
        <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
          more_vert
        </Icon>
      </Link>
    ),
  }))
  return isLoading ? <Typography fontSize={14} sx={{paddingX:5}}>loading...</Typography> : <Table columns={columns} rows={rows} />
};

export default TableData;
