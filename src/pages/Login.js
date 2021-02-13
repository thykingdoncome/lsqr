import React from "react";
import { Link } from "react-router-dom";

import ImageLight from "../assets/img/sign_in.png";
import Logo from "../assets/img/lendsqr-logo.svg";

import { Label, Input, Button } from "@windmill/react-ui";

function Login() {
  return (
    <div
      className="flex flex-col overflow-y-auto md:flex-row onboarding-wrapper px-8
     h-screen items-center
    "
    >
      <div className="hidden h-full lg:flex w-full md:w-1/2 xl:w-1/2 md:h-full items-center justify-center ">
        <div className="flex justify-center items-center h-full">
          <div className='h-full flex flex-col justify-center'>
            <div className="mb-40">
              <img aria-hidden="true" src={Logo} alt="Office" />
            </div>

            <div>
              <img aria-hidden="true" src={ImageLight} alt="Office" />
            </div>
          </div>
        </div>
      </div>

      <main className="w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/2
      flex justify-center flex-col h-full py-4"
      >
        <div style={{ width: '447px' }} className='mx-auto'>

          <div className="mobile-logo mb-20 w-full">
              <img aria-hidden="true" src={Logo} alt="Office" />
          </div>

          <h1
            className="mb-4 font-semibold"
            style={{ fontSize: "3rem", color: '#213F7D' }}
          >
            Welcome!
          </h1>
          <p className="mb-4" style={{ fontSize: "1.4rem" }}>
            Enter details to login
          </p>

          <form class="mt-8" action="#" method="POST">
            <div>
              <Label>
                <Input
                  className="mt-1 py-3 w-full h-12"
                  type="email"
                  placeholder="Email"
                  required
                />
              </Label>
            </div>

            <div class="mt-8">
              <Label className="">
                <Input
                  className="w-full py-3 h-12"
                  type="password"
                  placeholder="Password"
                  required
                />
              </Label>
            </div>
            <p className="mt-4">
            <Link
              className="text-sm font-medium text-purple-600 hover:underline"
              to="/"
            >
              FORGOT PASSWORD?
            </Link>
          </p>
            <Button className="mt-4 py-3 w-full bg-secondary text-white hover:text-white hover:bg-secondary h-12 font-bold rounded-sm" block tag={Link} to="/app">
              Log in
            </Button>
          </form>

        </div>
      </main>
    </div>
  );
}

export default Login;
