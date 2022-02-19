import {  Card } from "react-bootstrap";
import './artistcard.css'
import { Link } from "react-router-dom";

const ArtistCard = (artist) => {
return (
<Link to={`/artist/${artist.id}`}>
<Card id="artist-card">
  <Card.Img variant="top" src={artist.artist.picture_big} />
  <Card.Body className="pt-1">
    <Card.Text className="text-white">{artist.artist.name}</Card.Text>
  </Card.Body>
</Card>
</Link>
);
}
export default ArtistCard