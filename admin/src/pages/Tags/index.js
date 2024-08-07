import Button from 'components/Button';
import { Link } from 'react-router-dom';
import PageLayout from "layouts/PageLayout";
import TableData from "./tableData";

function Products() {
  return (
    <PageLayout
      title={'Tags'}
      
    >
      <TableData/>
    </PageLayout>
  );
}

export default Products;
