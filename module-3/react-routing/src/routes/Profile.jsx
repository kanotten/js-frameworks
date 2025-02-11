import { Outlet } from "react-router-dom";

export function Profile() {
  return (
    <>
      <h1 className="text-3xl font-bold">Profile</h1>
      <Outlet />
    </>
  );
}
