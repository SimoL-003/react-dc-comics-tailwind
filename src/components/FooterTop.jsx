import { linksFooter } from "../data/constants";

export default function FooterTop() {
  function createLinkList(array) {
    return (
      <ul>
        {array.map((curItem, index) => (
          <li key={index}>
            <a className="hover:underline" href="">
              {curItem}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="footerTop">
      <div className="container flex bg-[url(./assets/icons/dc-logo-bg.png)] bg-no-repeat bg-right">
        <div className="footerLinksList">
          <div>
            <h3>DC Comics</h3>
            {createLinkList(linksFooter.linksDCComics)}
          </div>
          <div>
            <h3>Shop</h3>
            {createLinkList(linksFooter.linksShop)}
          </div>
        </div>
        <div className="footerLinksList">
          <h3>DC</h3>
          {createLinkList(linksFooter.linksDC)}
        </div>
        <div className="footerLinksList">
          <h3>Sites</h3>
          {createLinkList(linksFooter.linksSites)}
        </div>
      </div>
    </section>
  );
}
