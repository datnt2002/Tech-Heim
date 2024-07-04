const ProductInfoCard = () => {
  const displayKey = ["brand", "screenSize", "processor", "GPU", "memory"];
  return (
    <div className="flex flex-col gap-8 h-full  shadow-2xl mb-10 w-96">
      <div className="flex flex-col gap-6">
        <div className="font-medium text-xl">
          MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch
        </div>
        <div className="flex flex-row  gap-2">
          <div className="bg-primary-500 rounded-lg text-white p-1 flex flex-row justify-center w-fit ">
            <img src="/assets/icons/like/white_star.svg" className="p-[2.5] " />
            <div className="font-medium text-xs content-center">4.9</div>
          </div>
          <img src="/assets/icons/line/line.svg" />
          <div className="text-xl font-light">sold </div>
        </div>
        <div className="gap-8 flex flex-row content-center">
          <div className="flex flex-grow ">
            <img src="/assets/icons/policy/shop.svg" />
            <div className="text-gray-717171 font-medium text-xs content-center">
              In Stock
            </div>
          </div>
          <div className="flex flex-grow ">
            <img src="/assets/icons/policy/verify.svg" />
            <div className="text-gray-717171 font-medium text-xs content-center">
              Guaranteed
            </div>
          </div>
          <div className="flex flex-grow ">
            <img src="/assets/icons/policy/truck.svg" />
            <div className="text-gray-717171 font-medium text-xs content-center">
              Free Delivery
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-10">
          <div className="font-light text-base">Select Color</div>
        </div>
        <table className="table-auto mx-2">
          {displayKey.map((key) => (
            <tr>
              <td className="font-medium text-sm text-gray-717171">•</td>
              <td className="font-medium text-sm text-gray-717171 content-center">
                {key}
              </td>
              <th className="font-medium text-sm text-left">checking</th>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};
export default ProductInfoCard;
