import { features } from "../data/constants";
export default function BuyComics() {
  return (
    <section className="bg-dc-blue text-white">
      <div className="container">
        <ul className="flex justify-around py-[50px] px-0">
          {features.map((curFeature, index) => (
            <li key={index}>
              <a className="hover:underline" href="#">
                <img
                  className="inline h-[54px] max-w-[54px] align-middle mr-3.5"
                  src={curFeature.icon}
                  alt={curFeature.name}
                />
                <span className="align-middle uppercase text-xs">
                  {curFeature.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
