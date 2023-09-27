const headerImage =
  "https://as1.ftcdn.net/v2/jpg/00/48/95/32/1000_F_48953239_NCYPlQhCP1A8ShBbbfBDOlK64HYQXIwl.jpg";

const Header = ({ heroImage }) => {
  return (
    <header style={{ height: "360px", overflow: "hidden" }}>
      <img style={{ width: "100%" }} src={heroImage || headerImage} />
    </header>
  );
};

export default Header;
