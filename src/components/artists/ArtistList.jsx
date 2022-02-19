import { Col,  Row } from "react-bootstrap"
import { useEffect, useState } from 'react'
import './artistList.css'
import ArtistCard from "./artistcard/ArtistCard.jsx"
const ArtistList = (filter) => {
    
    const [artistList, setArtistList] = useState(null)
    
    const getArtistList = async (filter) => {
        try {           
            
            let response = await fetch(
                `https://striveschool-api.herokuapp.com/api/deezer/search?q=${filter}` /* ${this.props.query} */
                )
                
            if (response.ok) {
                let {data} = await response.json()
                console.log(data)
                setArtistList(data)
                
                
            } else {
                console.log(`something went wrong Don't Panic`)
            }
        } catch (error) {
            console.log(error)
          }
        }
        
    useEffect (() => {
        getArtistList(filter)
        }, [filter])
    
    
    return (
      <>
        <h1 className="text-left text-white mt-4 pt-4">#ARTISTS</h1>
        <Row className=" artist-list">
        {artistList &&
          artistList /* .filter(b => b.title.toLowerCase().includes(searchQuery)) */
            .map((artist) => (
              
                <Col xs={2} >
                  <ArtistCard key={artist.artist.id} {...artist}/>
                </Col>
              
            ))}
        </Row>
      </>
    );
}

export default ArtistList