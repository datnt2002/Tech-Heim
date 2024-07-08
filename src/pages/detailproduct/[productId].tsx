import { useParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { useEffect } from "react";
// import { getDetailProductThunk } from "../../redux/slice/productSlice";

const DetailProduct = () => {
  const { id } = useParams<{ id?: string }>() ?? {};
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (id) {
      // dispatch(getDetailProductThunk(id));
    }
  }, [dispatch, id]);

  // const detailProduct = useSelector((state: RootState) => state.product.);
  // console.log(detailProduct);

  return (
    <div className="flex flex-row gap-8">
      <div className="flex flex-row gap-6 basis-2/3">
        <div>
          <img src="/assets/images/blog/blog1.png" className="w-108 h-96" />
        </div>
        {/* <ProductInfoCard product={detailProduct} /> */}
      </div>
      <div className="basis-1/3">
        {/* <PayCard
          percent={detailProduct?.percent}
          price={detailProduct?.price}
        /> */}
      </div>
    </div>
  );
};
