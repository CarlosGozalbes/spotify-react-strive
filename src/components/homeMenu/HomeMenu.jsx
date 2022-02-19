import './homeMenu.css'

const HomeMenu = () => {
    return (
      <>
        <ul className="home-menu list-unstyled d-flex justify-content-center mt-3 text-white">
          <li>
            <a href="trending" className="home-menu-link">
              TRENDING
            </a>
          </li>
          <li>
            <a href="trending" className="home-menu-link">
              PODCAST
            </a>
          </li>
          <li> 
            <a href="trending" className="home-menu-link">
              MOODS AND GENRES
            </a>
          </li>
          <li>
            <a href="trending" className="home-menu-link">
              NEW RELEASES
            </a>
          </li>
          <li>
            <a href="trending" className="home-menu-link">
              DISCOVER
            </a>
          </li>
        </ul>
      </>
    );
}


export default HomeMenu