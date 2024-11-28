import StorefrontIcon from "@mui/icons-material/Storefront";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AddTaskIcon from "@mui/icons-material/AddTask";
import user from "../../images/user.jpg";
import BarChartCode from "./BarchartCode";
import PieChartCode from "./PieChartCode";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import DiningIcon from "@mui/icons-material/Dining";
import CoffeeIcon from "@mui/icons-material/Coffee";
import DummyTable from "./DummyTable";
import { Avatar, Rating } from "@mui/material";

export default function DashBoard() {
  return (
    <div className="dashboard">
      <h3 className="mx-4">Dashboard</h3>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-8 px-3">
            <div className="row">
              <div className="box p-2 col-12 col-md-6 col-lg-3 pt-3">
                <span className="icon-box mx-md-3">
                  <StorefrontIcon className="icon"></StorefrontIcon>
                </span>
                <br />
                <div className="mx-md-3 fs-6">Total Orders</div>
                <div className="d-flex justify-content-between mt-4">
                  <h4 className="mx-md-3">250</h4>
                  <h6 className="mt-2 text-success">+3%</h6>
                </div>
              </div>

              <div className="box p-2 col-12 col-md-6 col-lg-3 pt-3">
                <span className="icon-box-red mx-md-3">
                  <ShoppingBagIcon className="iconred"></ShoppingBagIcon>
                </span>
                <br />
                <div className="mx-md-3 fs-6">Total Delivered</div>
                <div className="d-flex justify-content-between mt-4">
                  <h4 className="mx-md-3">70</h4>
                  <h6 className="mt-2 text-success">+12%</h6>
                </div>
              </div>

              <div className="box p-2 col-12 col-md-6 col-lg-3 pt-3">
                <span className="icon-box mx-md-3">
                  <StorefrontIcon className="icon"></StorefrontIcon>
                </span>
                <br />
                <div className="mx-md-3 fs-6">Total Cancelled</div>
                <div className="d-flex justify-content-between mt-4">
                  <h4 className="mx-md-3">05</h4>
                  <h6 className="mt-2 text-danger">-8%</h6>
                </div>
              </div>

              <div className="box p-2 col-12 col-md-6 col-lg-3 pt-3">
                <span className="icon-box-red mx-md-3">
                  <AddTaskIcon className="iconred"></AddTaskIcon>
                </span>
                <br />
                <div className="mx-md-3 fs-6">Total Revenue</div>
                <div className="d-flex justify-content-between mt-4">
                  <h4 className="mx-md-3">₹120k</h4>
                  <h6 className="mt-2 text-success">+40%</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-4 side-box">
            <div className="row">
              <div className="col-6 col-md-5 pt-2">
                <h5 className="mx-1">Net Profit</h5>
                <h4>₹ 525k</h4>
                <h6 className="text-success">+9%</h6>
              </div>
              <div className="col-6 col-md-7 p-2">
                <PieChartCode></PieChartCode>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-3">
          <div className="col-md-8  px-2 mb-1">
            <div className="bg-color-dark">
              <BarChartCode></BarChartCode>
            </div>
          </div>
          <div className="col-md-4 py-2 bg-color-dark mb-1">
            <div className="d-flex justify-content-between mt-4 p-1 bg-color-dark">
              <div>
                <AdsClickIcon
                  className="iconred"
                  sx={{ fontSize: "30px" }}
                ></AdsClickIcon>{" "}
                <span className="fs-5 ">Goals</span>
              </div>
              <div>
                <DoubleArrowIcon />
              </div>
            </div>

            <div className="d-flex justify-content-between mt-4 p-1 bg-color-dark">
              <div>
                <DiningIcon
                  className="text-success"
                  sx={{ fontSize: "30px" }}
                ></DiningIcon>{" "}
                <span className="fs-5 ">Menus</span>
              </div>
              <div>
                <DoubleArrowIcon />
              </div>
            </div>

            <div className="d-flex justify-content-between mt-4 p-1 bg-color-dark">
              <div>
                <CoffeeIcon
                  className="text-orange"
                  sx={{ fontSize: "30px" }}
                ></CoffeeIcon>{" "}
                <span className="fs-5 ">Popular Dishes</span>
              </div>
              <div>
                <DoubleArrowIcon />
              </div>
            </div>

            <div className="d-flex justify-content-between mt-4 p-1 bg-color-dark">
              <div>
                <AssignmentTurnedInIcon
                  className="text-success"
                  sx={{ fontSize: "30px" }}
                ></AssignmentTurnedInIcon>{" "}
                <span className="fs-5 ">Achivements</span>
              </div>
              <div>
                <DoubleArrowIcon />
              </div>
            </div>
          </div>
        </div>

        <div className="row  mt-2 ">
          <div className="col-md-8   px-2 ">
            <div className="bg-color-dark">
              <h4 className="mx-3 ">Recent Orders</h4>
              <DummyTable></DummyTable>
            </div>
          </div>
          <div className="col-md-4 bg-color-dark mt-md-0 mt-2 px-4">
            <div className="">
              <h4 className="mt-2">Customer &apos;s Feedback</h4>
              <div className="d-flex mt-4">
                {" "}
                <Avatar alt="Remy Sharp" src={user} />{" "}
                <h6 className="mt-2 mx-3">James Smith</h6>
              </div>
              <Rating name="half-rating" defaultValue={5} precision={0.5} />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, placeat?
              </p>
            </div>

            <div className="">
              <div className="d-flex mt-4">
                {" "}
                <Avatar alt="Remy Sharp" src={user} />{" "}
                <h6 className="mt-2 mx-3"> smith samson</h6>
              </div>
              <Rating name="half-rating" defaultValue={4} precision={0.5} />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, placeat?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
