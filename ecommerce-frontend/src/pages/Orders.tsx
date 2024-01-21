import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Column } from "react-table";
import TableHOC from "../components/admin/TableHOC";
// Importing Skeleton is commented out
// import { Skeleton } from "../components/loader";
// Commenting out the import of useMyOrdersQuery

type DataType = {
  _id: string;
  amount: number;
  quantity: number;
  discount: number;
  status: ReactElement;
  action: ReactElement;
};

const column: Column<DataType>[] = [
  {
    Header: "ID",
    accessor: "_id",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const Orders = () => {
  // const { user } = useSelector((state: RootState) => state.userReducer);
  // const { isLoading, data, isError, error } = useMyOrdersQuery(user?._id!);

  // Commenting out the state and effect related to data fetching
  // const [rows, setRows] = useState<DataType[]>([]);
  // if (isError) {
  //   const err = error as CustomError;
  //   toast.error(err.data.message);
  // }

  // Commenting out the useEffect for updating rows based on data
  // useEffect(() => {
  //   if (data)
  //     setRows(
  //       data.orders.map((i) => ({
  //         _id: i._id,
  //         amount: i.total,
  //         discount: i.discount,
  //         quantity: i.orderItems.length,
  //         status: (
  //           <span
  //             className={
  //               i.status === "Processing"
  //                 ? "red"
  //                 : i.status === "Shipped"
  //                 ? "green"
  //                 : "purple"
  //             }
  //           >
  //             {i.status}
  //           </span>
  //         ),
  //         action: <Link to={`/admin/transaction/${i._id}`}>Manage</Link>,
  //       }))
  //     );
  // }, [data]);

  const Table = TableHOC<DataType>(
    column,
    // Commenting out the rows variable
    // rows,
    "dashboard-product-box",
    "Orders",
    // Commenting out the condition for rendering Table based on rows length
    // rows.length > 6
  )();

  return (
    <div className="container">
      <h1>My Orders</h1>
      {/* Commenting out the Skeleton component */}
      {/* {isLoading ? <Skeleton length={20} /> : Table} */}
      {Table}
    </div>
  );
};

export default Orders;
