export default function ComicCard({ title, img }) {
  return (
    <li className="w-[90%] max-w-[220px]">
      <img
        className="object-cover object-top aspect-square"
        src={img}
        alt={title}
      />
      <span className="block pt-5 pb-[50px]">{title}</span>
    </li>
  );
}
