// ICONS
// BuyComics
import digitalComics from "../assets/icons/buy-comics-digital-comics.png";
import merchandise from "../assets/icons/buy-comics-merchandise.png";
import subscription from "../assets/icons/buy-comics-subscriptions.png";
import shopLocator from "../assets/icons/buy-comics-shop-locator.png";
import powerVisa from "../assets/icons/buy-dc-power-visa.svg";

// Footer
import facebookIcon from "../assets/icons/footer-facebook.png";
import twitterIcon from "../assets/icons/footer-twitter.png";
import youtubeIcon from "../assets/icons/footer-youtube.png";
import pinterestIcon from "../assets/icons/footer-pinterest.png";
import periscopeIcon from "../assets/icons/footer-periscope.png";

// HEADER
const menuItems = [
  "characters",
  "comics",
  "movies",
  "tv",
  "games",
  "collectibles",
  "videos",
  "fans",
  "news",
  "shop",
];

//   BUY COMICS
const features = [
  { name: "Digital comics", icon: digitalComics },
  { name: "DC Merchandise", icon: merchandise },
  { name: "Subscription", icon: subscription },
  { name: "Comic Shop Locator", icon: shopLocator },
  { name: "DC Power Visa", icon: powerVisa },
];

//   FOOTER
const linksFooter = {
  linksDCComics: [
    "Characters",
    "Comics",
    "Movies",
    "TV",
    "Games",
    "Videos",
    "News",
  ],
  linksShop: ["Shop DC", "Shop DC Collectibles"],
  linksDC: [
    "Terms Of Use",
    "Privacy policy (New)",
    "Ad Choices",
    "Advertising",
    "Jobs",
    "Subscriptions",
    "Talent Workshops",
    "CPSC Certificates",
    "Ratings",
    "Shop Help",
    "Contact Us",
  ],
  linksSites: ["DC", "MAD Magazine", "DC Kids", "DC Universe", "DC Power Visa"],
};

const social = [
  {
    name: "Facebook",
    link: "#",
    icon: facebookIcon,
  },
  {
    name: "Twitter",
    link: "#",
    icon: twitterIcon,
  },
  {
    name: "YouTube",
    link: "#",
    icon: youtubeIcon,
  },
  {
    name: "Pinterest",
    link: "#",
    icon: pinterestIcon,
  },
  {
    name: "Periscope",
    link: "#",
    icon: periscopeIcon,
  },
];

export { menuItems, features, linksFooter, social };
