import React  from "react";
import PageTitle from "../components/Typography/PageTitle"
import { Tabs } from "antd"
import { AiOutlineUser } from "react-icons/ai";
import {
  Button
} from '@windmill/react-ui'

import Detail from "../components/Detail";

function UserProfile({ match }) {
  const { TabPane } = Tabs;

  function callback(key) {
    console.log(key);
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <PageTitle>User Details</PageTitle>
        <div id="user-acttion-buttons">
          <Button layout="outline" className="mr-4">
            BLACKLIST USER
          </Button>
          <Button layout="outline">ACTIVATE USER</Button>
        </div>
      </div>

      <div className="mt-8">
        <div className="user-details-header">
          <div className="flex w-9/12 justify-between items-start">
            <div className="flex items-center flex-1">
              <AiOutlineUser />
              <div className="ml-4">
                <h1>{match.params.username}</h1>
                <p>{"LSQFf587g90"}</p>
              </div>
            </div>
            <div className="flex-1">
              <h2>User's Tier</h2>
              <span>stars</span>
            </div>
            <div className="flex-1">
              <h1>{"₦200,000.00"}</h1>
              <p>{"9912345678/Providus Bank"}</p>
            </div>
          </div>
        </div>

        <div>
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="General Details" key="1">
              <div className='details-section' style={{borderBottom: '1px solid rgba(33, 63, 125, 0.1)'}}>
                <h2>Personal information</h2>
                <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-5 details-section">
                  <Detail title={"FULL NAME"} detail={match.params.username} />
                  <Detail title={"PHONE NUMBER"} detail={"07060780922"} />
                  <Detail title={"EMAIL ADDRESS"} detail={"grace@gmail.com"} />
                  <Detail title={"BVN"} detail={"907060780922"} />
                  <Detail title={"GENDER"} detail={"Female"} />
                  <Detail title={"MARITAL STATUS"} detail={"Single"} />
                  <Detail title={"CHILDREN"} detail={"None"} />
                  <Detail
                    title={"GETYPE OF RESIDENCENDER"}
                    detail={"Parent's Appartment"}
                  />
                </div>
              </div>

              <div className='details-section my-8' style={{borderBottom: '1px solid rgba(33, 63, 125, 0.1)'}}>
                <h2>Education and Employment</h2>
                <div className="grid gap-6 my-8 md:grid-cols-2 xl:grid-cols-4 details-section">
                  <Detail title={"FULL NAME"} detail={match.params.username} />
                  <Detail title={"PHONE NUMBER"} detail={"07060780922"} />
                  <Detail title={"EMAIL ADDRESS"} detail={"grace@gmail.com"} />
                  <Detail title={"BVN"} detail={"907060780922"} />
                  <Detail title={"GENDER"} detail={"Female"} />
                  <Detail title={"MARITAL STATUS"} detail={"Single"} />
                  <Detail title={"CHILDREN"} detail={"None"} />
                  <Detail
                    title={"GETYPE OF RESIDENCENDER"}
                    detail={"Parent's Appartment"}
                  />
                </div>
              </div>

              <div className='details-section my-8' style={{borderBottom: '1px solid rgba(33, 63, 125, 0.1)'}}>
                <h2>Socials</h2>
                <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4 details-section">
                  <Detail title={"GENDER"} detail={"Female"} />
                  <Detail title={"MARITAL STATUS"} detail={"Single"} />
                  <Detail title={"CHILDREN"} detail={"None"} />
                </div>
              </div>

              <div className='details-section my-8' style={{borderBottom: '1px solid rgba(33, 63, 125, 0.1)'}}>
                <h2>Guarantor</h2>
                <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4 details-section">
                  <Detail title={"FULL NAME"} detail={match.params.username} />
                  <Detail title={"PHONE NUMBER"} detail={"07060780922"} />
                  <Detail title={"EMAIL ADDRESS"} detail={"grace@gmail.com"} />
                  <Detail title={"RELATIONSHIP"} detail={"Female"} />
                </div>
              </div>

              <div className='details-section my-8' style={{borderBottom: '1px solid rgba(33, 63, 125, 0.1)'}}>
                <h2>Next of Kin</h2>
                <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                  <Detail title={"FULL NAME"} detail={match.params.username} />
                  <Detail title={"PHONE NUMBER"} detail={"07060780922"} />
                  <Detail title={"EMAIL ADDRESS"} detail={"grace@gmail.com"} />
                  <Detail title={"RELATIONSHIP"} detail={"Female"} />
                </div>
              </div>
            </TabPane>
            <TabPane tab="Documents" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Bank Details" key="3">
              Content of Tab Pane 3
            </TabPane>
            <TabPane tab="Loans" key="4">
              Content of Tab Pane 4
            </TabPane>
            <TabPane tab="Savings" key="5">
              Content of Tab Pane 5
            </TabPane>
            <TabPane tab="App and System" key="6">
              Content of Tab Pane 6
            </TabPane>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
