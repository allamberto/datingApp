import { fallDown as Menu } from "react-burger-menu";

export default props => {
  return (
    <div id="App">
      <Menu pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <main id="page-wrap">
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/burgers">
        Burgers
      </a>

      <a className="menu-item" href="/pizzas">
        Pizzas
      </a>

      <a className="menu-item" href="/desserts">
        Desserts
      </a>
    </Menu>
    </main>
    </div>
  );
};

