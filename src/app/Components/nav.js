
const Nav = () => {
  return (
    <div>
      <ul>
          <li>
            <button onClick={() => navigateToSection('section1')}>
              Section 1
            </button>
          </li>
          <li>
            <button onClick={() => navigateToSection('section2')}>
              Section 2
            </button>
          </li>
          <li>
            <button onClick={() => navigateToSection('section3')}>
              Section 3
            </button>
          </li>
        </ul>
    </div>
  );
}
export default Nav;