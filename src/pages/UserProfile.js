import React from "react";
import PageTitle from "../components/Typography/PageTitle";
import { Tabs } from "antd";
import { AiOutlineUser, AiFillStar, AiOutlineStar } from "react-icons/ai";
import { CgArrowLongLeft } from "react-icons/cg";

import Detail from "../components/Detail";
import { formatAmount } from "../utils/funcs/FormatAmount";

function UserProfile({ match, history }) {
  const { TabPane } = Tabs;

  function callback(key) {
    console.log(key);
  }

  return (
    <>
      <div className="mt-6">
        <button
          className="flex items-center text-base text-pale-purple focus:outline-none hover:underline"
          onClick={() => history.push("/app/users")}
        >
          <CgArrowLongLeft /> <span className="pl-3">Back to Users</span>
        </button>
      </div>
      <div className="flex justify-between items-center page-title-container">
        <PageTitle>User Details</PageTitle>
        <div id="user-acttion-buttons">
          <button className="mr-4 border py-3 px-6 rounded-md border-hot-red text-hot-red hover:bg-hot-red hover:text-white">
            BLACKLIST USER
          </button>
          <button className="border py-3 px-6 rounded-md text-secondary border-secondary hover:bg-secondary hover:text-white">
            ACTIVATE USER
          </button>
        </div>
      </div>

      <div className="mt-8">
        <div className="user-details-header w-full">
          <div className="table w-2/3 user-details-box">
            <div className="table-row-group">
              <div className="table-row">
                <div className="table-cell align-middle pr-4">
                  <div className="flex items-center">
                    <div className="h-24 w-24 bg-gray-200 rounded-full flex items-center justify-center">
                      <AiOutlineUser className="w-6 h-6" />
                    </div>
                    <div className="ml-4 flex flex-col justify-center">
                      <h1 className="text-primary text-2xl">
                        {match.params.username}
                      </h1>
                      <p className="my-0 text-pale-purple text-sm">
                        {"LSQFf587g90"}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="table-cell align-middle px-8"
                  style={{
                    borderLeft: "1px solid rgba(84, 95, 125, 0.2)",
                    borderRight: "1px solid rgba(84, 95, 125, 0.2)",
                  }}
                >
                  <h2 className="text-sm text-pale-purple">User's Tier</h2>
                  <div className="text-base text-star-yellow flex items-center">
                    <AiFillStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </div>
                </div>
                <div className="table-cell align-middle pl-4">
                  <h1 className="text-2xl text-primary">{`₦${formatAmount(
                    200000
                  )}`}</h1>
                  <p className="text-xs text-pale-purple">
                    {"9912345678/Providus Bank"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane className="text-base" tab="General Details" key="1">
              <div
                className="details-section"
                style={{ borderBottom: "1px solid rgba(33, 63, 125, 0.1)" }}
              >
                <h2 className="text-primary mb-8 text-base">
                  Personal Information
                </h2>
                <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-5 details-section">
                  <Detail title={"FULL NAME"} detail={match.params.username} />
                  <Detail title={"PHONE NUMBER"} detail={"07060780922"} />
                  <Detail title={"EMAIL ADDRESS"} detail={"grace@gmail.com"} />
                  <Detail title={"BVN"} detail={"907060780922"} />
                  <Detail title={"GENDER"} detail={"Female"} />
                  <Detail title={"MARITAL STATUS"} detail={"Single"} />
                  <Detail title={"CHILDREN"} detail={"None"} />
                  <Detail
                    title={"TYPE OF RESIDENCE"}
                    detail={"Parent's Appartment"}
                  />
                </div>
              </div>

              <div
                className="details-section my-8"
                style={{ borderBottom: "1px solid rgba(33, 63, 125, 0.1)" }}
              >
                <h2 className="text-primary mb-8 text-base">
                  Education and Employment
                </h2>
                <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4 details-section">
                  <Detail title={"LEVEL OF EDUCATION"} detail={"B.Sc"} />
                  <Detail title={"EMPLOYMENT STATUS"} detail={"Employed"} />
                  <Detail title={"SECTOR OF EMPLOYMENT"} detail={"FinTech"} />
                  <Detail title={"DURATION OF EMPLOYMENT"} detail={"2 years"} />
                  <Detail title={"OFFICE EMAIL"} detail={"grace@lendsqr.com"} />
                  <Detail
                    title={"MONTHLY INCOME"}
                    detail={`₦${formatAmount(200000)} - ₦${formatAmount(
                      400000
                    )}`}
                  />
                  <Detail
                    title={"LOAN REPAYMENT"}
                    detail={`₦${formatAmount(40000)}`}
                  />
                </div>
              </div>
              <div
                className="details-section my-8"
                style={{ borderBottom: "1px solid rgba(33, 63, 125, 0.1)" }}
              >
                <h2 className="text-primary mb-8 text-base">Socials</h2>
                <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4 details-section">
                  <Detail title={"TWITTER"} detail={"@grace_effiom"} />
                  <Detail title={"FACEBOOK"} detail={"Grace Effiom"} />
                  <Detail title={"INSTAGRAM"} detail={"@grace_effiom"} />
                </div>
              </div>

              <div
                className="details-section my-8"
                style={{ borderBottom: "1px solid rgba(33, 63, 125, 0.1)" }}
              >
                <h2 className="text-primary mb-8 text-base">Guarantor</h2>
                <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4 details-section">
                  <Detail title={"FULL NAME"} detail={match.params.username} />
                  <Detail title={"PHONE NUMBER"} detail={"07060780922"} />
                  <Detail title={"EMAIL ADDRESS"} detail={"debby@gmail.com"} />
                  <Detail title={"RELATIONSHIP"} detail={"Sister"} />
                </div>
              </div>

              <div
                className="details-section my-8"
                style={{ borderBottom: "1px solid rgba(33, 63, 125, 0.1)" }}
              >
                <h2 className="text-primary mb-8 text-base">Next of Kin</h2>
                <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                  <Detail title={"FULL NAME"} detail={match.params.username} />
                  <Detail title={"PHONE NUMBER"} detail={"07060780922"} />
                  <Detail title={"EMAIL ADDRESS"} detail={"grace@gmail.com"} />
                  <Detail title={"RELATIONSHIP"} detail={"Sister"} />
                </div>
              </div>
            </TabPane>
            <TabPane className="text-base" tab="Documents" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane className="text-base" tab="Bank Details" key="3">
              Content of Tab Pane 3
            </TabPane>
            <TabPane className="text-base" tab="Loans" key="4">
              Content of Tab Pane 4
            </TabPane>
            <TabPane className="text-base" tab="Savings" key="5">
              Content of Tab Pane 5
            </TabPane>
            <TabPane className="text-base" tab="App and System" key="6">
              Content of Tab Pane 6
            </TabPane>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
