import StorefrontIcon from "@mui/icons-material/Storefront";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AddTaskIcon from "@mui/icons-material/AddTask";
import PieChartCode from "./PieChartCode";

export default function Topbar() {
  return (
    <>
      <div className="d-flex flex-wrap ">
        <div className="box p-2 pt-3">
          <span className="icon-box mx-md-3 ">
            <StorefrontIcon className="icon "></StorefrontIcon>
          </span>
          <br></br>
          <div className="mx-md-3 fs-6">Total Orders</div>
          <div className="d-flex justify-content-between mt-4">
            <h4 className="mx-md-3">250</h4>
            <h6 className="mt-2 text-success">+3%</h6>
          </div>
        </div>

        <div className="box p-2  pt-3 ">
          <span className="icon-box-red mx-md-3 ">
            <ShoppingBagIcon className="iconred "></ShoppingBagIcon>
          </span>
          <br></br>
          <div className="mx-md-3 fs-6">Total Delivered</div>
          <div className="d-flex justify-content-between mt-4">
            <h4 className="mx-md-3">70</h4>
            <h6 className="mt-2 text-success">+12%</h6>
          </div>
        </div>

        <div className="box p-2  pt-3 ">
          <span className="icon-box mx-md-3 ">
            <StorefrontIcon className="icon "></StorefrontIcon>
          </span>
          <br></br>
          <div className="mx-md-3 fs-6">Total Cancelled</div>
          <div className="d-flex justify-content-between mt-4">
            <h4 className="mx-md-3 ">05</h4>
            <h6 className="mt-2 text-danger">-8%</h6>
          </div>
        </div>

        <div className="box p-2 pt-3">
          <span className="icon-box-red mx-md-3 ">
            <AddTaskIcon className="iconred "></AddTaskIcon>
          </span>
          <br></br>
          <div className="mx-md-3 fs-6">Total Reveneu</div>
          <div className="d-flex justify-content-between mt-4">
            <h4 className="mx-md-3">₹120k</h4>
            <h6 className="mt-2 text-success">+40%</h6>
          </div>
        </div>

        <div className="side-box mx-2 d-none d-md-block">
          <div className="row">
            <div className="col-5 pt-2">
              <h5 className="mx-1">Net Profit</h5>
              <h4>₹ 525k</h4>
              <h6 className="text-success">+9%</h6>
            </div>
            <div className="col-7 p-2">
              <PieChartCode></PieChartCode>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
