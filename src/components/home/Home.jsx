
import ArtistList from "../artists/ArtistList.jsx"
import './home.css'
import HomeMenu from "../homeMenu/HomeMenu.jsx"


const Home = ({filter}) => {
    return (
      <>
        <HomeMenu />
        <ArtistList filter={filter} />
      </>
    );
}
export default Home