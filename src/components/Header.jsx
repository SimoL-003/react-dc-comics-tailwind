import logo from "../assets/icons/dc-logo.png";
import { menuItems } from "../data/constants";

export default function Header() {
  return (
    <header className="h-[120px] text-text-primary bg-bg-white text-dark-gray">
      <div className="container flex justify-between items-center h-full">
        <div>
          <a href="../index.html">
            <img className="w-20" src={logo} alt="Logo DC" />
          </a>
        </div>
        <nav>
          <ul className="flex gap-[30px] uppercase text-sm font-bold -tracking-widest">
            {menuItems.map(({ title, link }, index) => (
              <li
                key={index}
                className={`h-[120px] flex items-center border-solid border-bg-white border-y-[5px] ${
                  title === "comics" ? "active" : ""
                } hover:text-dc-blue hover:border-b-dc-blue transition-all duration-150 ease-in`}
              >
                <a className="h-full content-center" href={link}>
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
