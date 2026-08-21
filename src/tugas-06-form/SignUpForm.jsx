import {
  IconBrandFacebook,
  IconBrandGoogle,
  IconBrandTwitter,
  IconChevronCompactLeft,
  IconChevronLeft,
} from "@tabler/icons-react";
import React, { useState, useRef } from "react";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const emailRef = useRef(null);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const [toggleDaily, settoggleDaily] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [pesanCP, setPesanCP] = useState("");
  const [pesanE, setPesanE] = useState("");
  const confirmPasswordRef = useRef(null);

  const handlerSubmit = (e) => {
    //tolong buatkan logika jika di emailRef tidak terdapat valuenya @ atau tanda2 email

    if (confirmPasswordRef.current.value !== passwordRef.current.value) {
      e.preventDefault();
      console.log("password not match!");
      setPesanCP("password not match!");

      setConfirmPassword("");
    } else if (emailRef.current.value.indexOf("@") === -1) {
      e.preventDefault();
      console.log("email not valid");
      setPesanE("email not valid!");
    } else {
      e.preventDefault();
      console.log(emailRef.current.value);
      console.log(passwordRef.current.value);
      console.log(confirmPasswordRef.current.value);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setPesanCP("");
    }
  };

  return (
    <div className="flex flex-col gap-y-7 border border-black p-5 w-100 h-max">
      {/* header */}
      <div>
        <div className="border-2 w-max p-2 rounded-lg">
          <IconChevronLeft />
        </div>
      </div>

      <form className="flex flex-col  gap-y-5">
        <h1 className="text-2xl font-bold">Sign Up</h1>
        {/* input2   */}
        <div className="flex flex-col  gap-y-2">
          <label htmlFor="email">email</label>
          <input
            type="text"
            name="email"
            value={email}
            ref={emailRef}
            onChange={(event) => {
              setEmail(event.target.value);
              console.log(event.target.value);
            }}
            className="border border-black p-3 py-4 rounded-lg"
            placeholder="example@gmail.com"
            required
          />
          <div>
            {pesanE ? (
              <h2 className="text-red-500">{pesanE}</h2>
            ) : (
              <h2 className="text-gray-500 italic">{email ? email : "-"}</h2>
            )}
          </div>
          <label htmlFor="password">Create a password</label>
          <input
            type="password"
            name="password"
            value={password}
            ref={passwordRef}
            placeholder="must be 8 characters"
            onChange={(event) => {
              setPassword(event.target.value);
              console.log(event.target.value);
            }}
            className="border border-black p-3 py-4 rounded-lg"
            required
          />
          <h2>{password ? password : "-"}</h2>
          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            type="password"
            value={confirmPassword}
            ref={confirmPasswordRef}
            name="confirmPassword"
            placeholder="repeat password"
            onChange={(event) => {
              setConfirmPassword(event.target.value);
              console.log(event.target.value);
            }}
            className="border border-black p-3 py-4 rounded-lg"
            required
          />
          {pesanCP ? (
            <h2 className="text-red-500">{pesanCP}</h2>
          ) : (
            <h2 className="text-gray-500 italic">
              {confirmPassword ? confirmPassword : "repeat password"}
            </h2>
          )}
        </div>
        {/* tombol2 */}
        <div className="flex flex-col gap-y-5">
          {/* tombol daily */}
          <div className="flex gap-x-2 items-start">
            <div className="bg-gray-200 w-13 h-7 rounded-full relative flex items-center p-1">
              <div className="bg-white w-5.5 h-5.5 rounded-full"></div>
            </div>
            <div>
              <h3 className="font-semibold text-[16px]">Daily reports</h3>
              <p className="text-[14px]">
                Get a daily avtivity report via email.
              </p>
            </div>
          </div>
          {/* tombol weekly */}
          <div className="flex gap-x-2 items-start">
            <div className="bg-black w-13 h-7 rounded-full relative flex items-center justify-end p-1">
              <div className="bg-white w-5.5 h-5.5 rounded-full"></div>
            </div>
            <div>
              <h3 className="font-semibold text-[16px]">Weekly summary</h3>
              <p className="text-[14px]">
                Get a weekly avtivity report via email.
              </p>
            </div>
          </div>
        </div>
        {/* button signup */}
        <button
          type="submit"
          onClick={handlerSubmit}
          className="bg-black text-white px-5 py-2 rounded-lg"
        >
          Sign Up
        </button>
      </form>
      <div className="flex flex-col gap-y-5">
        <div className="flex items-center justify-center gap-x-2">
          <span>
            <hr className="bg-gray-500 h-0.5 w-28" />
          </span>
          <p>Or register with</p>
          <span>
            <hr className="bg-gray-500 h-0.5 w-28" />
          </span>
        </div>

        <div className="flex items-center justify-center gap-x-5">
          <div className="border-2 py-4 px-9.5 rounded-2xl">
            <IconBrandGoogle />
          </div>
          <div className="border-2 py-4 px-9.5 rounded-2xl">
            <IconBrandFacebook />
          </div>
          <div className="border-2 py-4 px-9.5 rounded-2xl">
            <IconBrandTwitter />
          </div>
        </div>
      </div>
      <p className="mt-7">
        Already have an account?{" "}
        <a href="#" className="font-semibold">
          Log in
        </a>
      </p>
    </div>
  );
}

export default SignUpForm;
