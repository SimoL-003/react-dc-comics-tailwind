import comics from "../data/comics";
import heroImg from "../assets/images/jumbotron.jpg";

export default function Hero() {
  function createComicCard(comic) {
    return (
      <li key={comic.id} className="w-[90%] max-w-[220px]">
        <img
          className="object-cover object-top aspect-square"
          src={comic.thumb}
          alt={comic.series}
        />
        <span className="block pt-5 pb-[50px]">{comic.series}</span>
      </li>
    );
  }

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
              {comics.map((curComic) => createComicCard(curComic))}
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
