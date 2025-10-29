import comics from "../data/comics";
import heroImg from "../assets/images/jumbotron.jpg";
import ComicCard from "./ComicCard";

export default function Hero() {
  return (
    <section>
      <div className="bg-bg-dark-black text-white">
        <img
          className="h-[400px] w-full object-cover object-top"
          src={heroImg}
          alt="Jumbotron"
        />
        <div className="container">
          <h2 className="w-fit text-white text-[21px] py-4 px-8 bg-dc-blue uppercase relative top-[-34px]">
            Current series
          </h2>
          <div>
            <ul className="grid grid-cols-[repeat(6,minmax(100px,1fr))] justify-items-center">
              {comics.map(({ series, thumb }) => (
                <ComicCard title={series} img={thumb} />
              ))}
            </ul>
          </div>
          <div className="pb-5 text-center">
            <button className="button">Load more</button>
          </div>
        </div>
      </div>
    </section>
  );
}
