import { headerText } from "../styles/HeaderStyles";
import { NavLink } from "react-router";

// TO DO

//EXTEND TO BACK END SO WE CAN ADD USER LOGINS AND EMAIL AND CONTACT STORING
// EXTEND SO WE CAN  ADD DYNAMIC EDITING CMS
// const login = true;
// const user = "Tom";

const leftSide = ["Portfolio", "Pricing", "Contact"];
// const rightSide = [user, login ? "Logout" : "Login"];

export default function Header() {
  return (
    <div className="z-10 flex justify-between bg-blue-950 p-6 w-full">
      <div className="flex justify-between flex-wrap lg:gap-1 gap-2">
        <NavLink
          to={`/`}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? headerText + " text-gray-200 hover:opacity-100"
              : headerText + " text-gray-400 transition-none"
          }
        >
          {"Home"}
        </NavLink>

        {leftSide.map((x) => (
          <NavLink
            key={x}
            to={`/${x}`}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? headerText + " text-gray-200 hover:opacity-100"
                : headerText + " text-gray-400 transition-none"
            }
          >
            {x}
          </NavLink>
        ))}
      </div>
      <div className="flex flex-wrap justify-end">
        {/* {rightSide.map((x) => (
          <NavLink
            key={x}
            to={`/${x}`}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? headerText + " text-gray-200 hover:opacity-100"
                : headerText + " text-gray-400 transition-none"
            }
          >
            {x}
          </NavLink>
        ))} */}
      </div>
    </div>
  );
}
