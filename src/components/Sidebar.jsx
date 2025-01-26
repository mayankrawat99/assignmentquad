
import { AtomIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ children }) {
  const navigate = useNavigate();

  return (
    <aside className="h-screen w-full">
      <nav className="h-full flex-col bg-white border-r shadow-sm">
        <div className="flex items-center gap-1 p-3" onClick={()=>navigate("/")}>
       
          <span className=" flex gap-2 items-center ml-4 font-bold text-green-600 text-2xl">
          <AtomIcon size={30} color="rgb(22, 163, 74)" /> {/* Same green color */}  DoIt
          </span>
        </div>                

        <ul className="flex-1 px-3">{children}</ul>
      </nav>
    </aside>
  );
}
const checkPath = (path) => {
  // console.log(location.pathname, path);
  if (path === location.pathname) return true;
  else return false;
};

export function SidebarItem({ icon, text, active, path }) {
  active = checkPath(path);
  const navigate = useNavigate();
  return (
    <li
  className={`
    relative flex items-center py-2 px-3 my-1
    font-medium rounded-md cursor-pointer
    transition-colors group
    ${
      active
        ? "bg-gradient-to-tr from-gray-200 to-gray-100 text-green-700"
        : "hover:bg-gray-100 text-black"
    }
  `}
  onClick={() => navigate(path)}
>
  {icon}
  <span className={`overflow-hidden transition-all ${"w-52 ml-3"}`}>
    {text}
  </span>
</li>

  );
}
