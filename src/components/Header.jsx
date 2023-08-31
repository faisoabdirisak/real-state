import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {getAuth, onAuthStateChanged} from "firebase/auth"
import realState from "../assets/real-removebg-preview.png";
export default function Header() {
  const [pageState, setPageState] = useState("sign-in")
  const location = useLocation();
  console.log(location.pathname);
  const navigate = useNavigate();
  const auth=getAuth()
  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if(user){
        setPageState("Profile")
      }
      else{
        setPageState("Sign in")
      }
    })
  },[auth])
  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div className="bg-white boder-b shadow-sm sticky top-0 z-40">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src={realState}
            alt="RealState logo"
            className="h-14 cursor-pointer"
            onClick={()=>navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
          <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px ] border-b-transparent
                 ${pathMatchRoute("/offers") && "text-black border-b-red-500"}`}
                 onClick={()=>navigate("/offers")}>
              Offers
            </li>

            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px ] border-b-transparent
                 ${
                   (pathMatchRoute("/sign-in") || pathMatchRoute("/profile"))  && "text-black border-b-red-500"
                 }`}
                 onClick={()=>navigate("/profile")}
            >
              {pageState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
