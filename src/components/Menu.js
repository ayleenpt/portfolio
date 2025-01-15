import '../styles/Menu.css';

function Menu() {
  const onClick = () => {
    console.log('clicked');
  }

  return(
    <button
      className="menu-button"
      onClick={onClick}
    >
      <div className="menu-line" />
      <div className="menu-line" />
      <div className="menu-line" />
    </button>
  );
}

export default Menu;