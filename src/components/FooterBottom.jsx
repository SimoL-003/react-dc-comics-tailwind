import { social } from "../data/constants";

export default function FooterBottom() {
  return (
    <section className="bg-dark-gray text-white h-[120px]">
      <div className="container flex h-full items-center justify-between">
        <div>
          <a
            className="p-[15px] border-2 border-dc-blue uppercase font-semibold text-xs hover:bg-dc-blue transition-colors duration-150 ease-in"
            href="#"
          >
            Sign-up now!
          </a>
        </div>
        <div className="flex items-center">
          <h3 className="text-dc-blue pr-[30px]">Follow us</h3>
          <ul className="flex gap-5">
            {social.map((curItem, index) => (
              <li key={index}>
                <a href={curItem.link}>
                  <img src={curItem.icon} alt={curItem.title} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
