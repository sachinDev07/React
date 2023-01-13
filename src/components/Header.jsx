
const Title = () => (
    <h1 className="title" id="title" key="h2">
      .foodCafe'
    </h1>
);


const Header = () => {
    return (
      <div className="header">
        <Title /> {/* or it can be written as  { Title() }    */}
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
};

export default Header;