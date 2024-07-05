import { Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import TechDataTable from "../../atoms/tables/TechDataTable";
import { Product } from "../../../types/Product";

type Props = {
  product: Product | null;
};

const ProductDetail = ({ product }: Props) => {
  return (
    <div>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Technical Details" key="1">
          <TechDataTable product={product} />
        </TabPane>
        <TabPane tab="Description" key="2">
          <div>check it work</div>
        </TabPane>
        <TabPane tab="Comment" key="3">
          <div>check it work</div>
        </TabPane>
      </Tabs>
    </div>
  );
};
export default ProductDetail;
