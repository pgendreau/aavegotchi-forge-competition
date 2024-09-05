import { usePathname } from "next/navigation";
import classnames from "classnames";

export const NavBar = () => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div className="flex flex-row justify-center gap-x-1 pb-5">
      <a className={classnames("navbtn", pathName === "/" && "bg-frame")} href={pathName === "/" ? "#" : "/"}>
        Live
      </a>
      <a
        className={classnames("navbtn", pathName === "/season1" && "bg-frame")}
        href={pathName === "/season1" ? "#" : "/season1"}
      >
        Season 1
      </a>
    </div>
  );
};
