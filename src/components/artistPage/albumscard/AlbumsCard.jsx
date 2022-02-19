import { Card } from "react-bootstrap";

import { Link } from "react-router-dom";

const AlbumsCard = (artist) => {
  return (
    <Link to={`/artist/${artist.id}`}>
      <Card id="artist-card">
        <Card.Img variant="top" src={artist.artist.picture_big} />
        <Card.Body className="pt-1">
          <Card.Text className="text-white">
            <p>{artist.artist.name}</p>
            <p>{artist.artist.name}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};
export default AlbumsCard;
