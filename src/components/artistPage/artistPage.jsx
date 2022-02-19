import { useState } from "react"
import { useEffect } from "react"
import { Container, Button, Row, Col } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { BsThreeDots } from "react-icons/bs";
import "./artistPage.css"
import AlbumsCard from "./albumscard/AlbumsCard";
const ArtistPage = () => {
    const { artistId } = useParams()
    const [artist,setArtist] = useState(null)
    const [loading,setLoading] = useState(false)
    
    const fetchArtist = async () =>{
        try {
            let response = await fetch(
              `https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}`
            ); 
                if (response.ok) {
                    let data=await response.json()
                    console.log(data)
                    setArtist(data)
                    setLoading(false)
                } else {
                    console.log(`something went wrong`)
                }
        } catch (error) {
            console.log(error)
        }
    }
    
    
   /*  useEffect(() => {      
      fetchArtist()  
    },[]) */

    if (loading) {
      return <div>loading</div>;
    } else {
    return (
      <>
        <div className="artistpage-header mx-auto">
          <span className="artistpage-header-listeners">
            33.000.557 MONTHLY LISTENERS
          </span>
          <h1 className="artistpage-header-titlename">QUEEN</h1>
          <div className="artistpage-header-buttons mt-4">
            <Button
              className="artistpage-button-play mr-3 ml-4"
              variant="success"
            >
              PLAY
            </Button>{" "}
            <Button
              className="artistpage-button-follow mr-3"
              variant="outline-light"
            >
              FOLLOW
            </Button>{" "}
            <BsThreeDots className="artistpage-icon" />
          </div>
          <div className="artistpage-header-menu">
            <ul className="d-flex artistpage-list justify-content-center ">
              <li className="list-item mr-4">OVERVIEW</li>
              <li className="list-item mr-4 ml-4">RELATED ARTIST</li>
              <li className="list-item ml-4">ABOUT</li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="text-left text-white">Albums</h1>
          <Row>
            {artist &&
              artist 
                .map((artist) => (
                  <Col xs={2}>
                    <AlbumsCard key={artist.artist.id} {...artist} />
                  </Col>
                ))}
          </Row>
        </div>
      </>
    );
    }
}

export default ArtistPage