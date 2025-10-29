// ICONS
// BuyComics
import digitalComicsIcon from "../assets/icons/buy-comics-digital-comics.png";
import merchandiseIcon from "../assets/icons/buy-comics-merchandise.png";
import subscriptionIcon from "../assets/icons/buy-comics-subscriptions.png";
import shopLocatorIcon from "../assets/icons/buy-comics-shop-locator.png";
import powerVisaIcon from "../assets/icons/buy-dc-power-visa.svg";

// Footer
import facebookIcon from "../assets/icons/footer-facebook.png";
import twitterIcon from "../assets/icons/footer-twitter.png";
import youtubeIcon from "../assets/icons/footer-youtube.png";
import pinterestIcon from "../assets/icons/footer-pinterest.png";
import periscopeIcon from "../assets/icons/footer-periscope.png";

// HEADER
const menuItems = [
  { title: "characters", link: "/characters" },
  { title: "comics", link: "/comics" },
  { title: "movies", link: "/movies" },
  { title: "tv", link: "/tv" },
  { title: "games", link: "/games" },
  { title: "collectibles", link: "/collectibles" },
  { title: "videos", link: "/videos" },
  { title: "fans", link: "/fans" },
  { title: "news", link: "/news" },
  { title: "shop", link: "/shop" },
];

//   BUY COMICS
const features = [
  { name: "Digital comics", icon: digitalComicsIcon },
  { name: "DC Merchandise", icon: merchandiseIcon },
  { name: "Subscription", icon: subscriptionIcon },
  { name: "Comic Shop Locator", icon: shopLocatorIcon },
  { name: "DC Power Visa", icon: powerVisaIcon },
];

//   FOOTER
const linksFooter = {
  DCComics: [
    { name: "characters", link: "/characters" },
    { name: "comics", link: "/comics" },
    { name: "movies", link: "/movies" },
    { name: "TV", link: "/tv" },
    { name: "games", link: "/games" },
    { name: "videos", link: "/videos" },
    { name: "news", link: "/news" },
  ],
  Shop: [
    { name: "shop DC", link: "/shop-dc" },
    { name: "shop DC collectibles", link: "/shop-dc-collectibles" },
  ],
  DC: [
    { name: "terms of use", link: "/terms-of-use" },
    { name: "provacy policy (new)", link: "/privacy-policy" },
    { name: "ad choices", link: "/ad-choices" },
    { name: "advertising", link: "/advertising" },
    { name: "jobs", link: "/jobs" },
    { name: "subscriptions", link: "/subscriptions" },
    { name: "talent workshops", link: "/talent-workshops" },
    { name: "CPSC certificates", link: "/cpsc-certificates" },
    { name: "ratings", link: "/ratings" },
    { name: "shop help", link: "/shop-help" },
    { name: "contact us", link: "/contact-us" },
  ],
  Sites: [
    { name: "DC", link: "/dc" },
    { name: "MAD magazine", link: "/mad-magazine" },
    { name: "DC kids", link: "/dc-kids" },
    { name: "DC universe", link: "/dc-universe" },
    { name: "DC power visa", link: "/dc-power-visa" },
  ],
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
