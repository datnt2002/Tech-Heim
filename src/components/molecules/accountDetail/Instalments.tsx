// import { Checkbox, Table, Tag } from "antd";
// import { ColumnsType } from "antd/es/table";
// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "../../../redux/store";
// import { useEffect } from "react";
// import { getInstalmentsThunk } from "../../../redux/slice/productSlice";

// interface InstalmentsType {
//   id: string | number;
//   productImg: string;
//   cartId: string;
//   dueAmount: number;
//   dueDate: string;
//   actualAmount?: number;
//   paymentDate?: string;
//   total: number;
// }

// const Instalments: React.FC = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const { instalments } = useSelector((state: RootState) => state.product);
//   console.log(instalments);

//   useEffect(() => {
//     dispatch(getInstalmentsThunk());
//   }, [dispatch]);

//   const columns: ColumnsType<InstalmentsType> = [
//     {
//       title: "Description",
//       key: "description",
//       align: "center",
//       render: (record: InstalmentsType) => (
//         <div className="flex flex-row gap-4">
//           <Checkbox />
//           <img
//             src={record.productImg}
//             alt={record.cartId}
//             className="object-cover max-w-[60px] max-h-[54px]"
//           />
//           <div className="text-lg font-light content-center ">
//             {record.cartId}
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "Due amount",
//       key: "dueAmount",
//       align: "center",
//       render: (record: InstalmentsType) => (
//         <div className="text-lg font-light text-secondary text-center">
//           $ {record.dueAmount.toFixed(2)}
//         </div>
//       ),
//     },
//     {
//       title: "Due date",
//       key: "dueDate",
//       align: "center",
//       render: (record: InstalmentsType) => (
//         <div className="text-lg font-light text-center">{record.dueDate}</div>
//       ),
//     },
//     {
//       title: "Actual amount",
//       key: "actualAmount",
//       align: "center",
//       render: (record: InstalmentsType) =>
//         record.actualAmount ? (
//           <div className="text-lg font-light text-center">
//             $ {record.actualAmount}
//           </div>
//         ) : (
//           <div className="text-lg font-light text-center">-</div>
//         ),
//     },
//     {
//       title: "Payment date",
//       key: "paymentDate",
//       align: "center",
//       render: (record: InstalmentsType) =>
//         record.paymentDate ? (
//           <div className="text-lg font-light  items-center">
//             {record.paymentDate}
//           </div>
//         ) : (
//           <div className="text-lg font-light items-center">-</div>
//         ),
//     },
//     {
//       title: "Status",
//       key: "status",
//       align: "center",
//       render: (record: InstalmentsType) =>
//         record.actualAmount ? (
//           <Tag color="green">Done</Tag>
//         ) : (
//           <Tag color="blue">on Schedule</Tag>
//         ),
//     },
//     {
//       title: "Total",
//       key: "total",
//       align: "center",
//       render: (record: InstalmentsType) => (
//         <div className="font-medium text-base items-center text-gray-2D2D2D">
//           {record.total}
//         </div>
//       ),
//     },
//   ];

//   return (
//     <Table<InstalmentsType>
//       columns={columns}
//       dataSource={instalments}
//       className="columns justify-items-center mb-8 text-base font-medium col "
//       pagination={false}
//       rowKey="id"
//     />
//   );
// };

// export default Instalments;
