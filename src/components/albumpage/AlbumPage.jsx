import { Row, Col, Image, Button, ListGroup } from "react-bootstrap";
import "../albumpage/albumpage.css"
import { BsHeart, BsThreeDots, BsMusicNote } from "react-icons/bs";
const AlbumPage = () => {
    return (
      <Row className="mt-4">
        <Col xs={4}>
          <Image src="http://ecx.images-amazon.com/images/I/41QNeBl7RLL._SL500_.jpg"></Image>
          <h2>Queen II (Deluxe Edition 2011 Remaster)</h2>
          <p className="list-artist">Queen</p>
          <Button className="artistpage-button-play mt-3" variant="success">
            PLAY
          </Button>
          <p className="mt-2 list-artist mb-4 pb-2">
            1974&nbsp;&nbsp;.&nbsp;&nbsp;16 SONGS
          </p>
          <BsHeart className="mr-4 album-icon" />
          <BsThreeDots className="album-icon" />
        </Col>
        <Col xs={8}>
          <ListGroup
            variant="flush"
            className="album-song-list pr-4 mr-4"
            id="album-song-list"
          >
            <ListGroup.Item className="d-flex">
              <BsMusicNote className="mr-4" />
              <div>
                <p className="mb-0">Procession-Remmastered</p>
                <p className="mb-0 text-left list-artist">Queen</p>
              </div>{" "}
              <span className="ml-auto list-time">1:13</span>{" "}
            </ListGroup.Item>
            <ListGroup.Item className="d-flex">
              <BsMusicNote className="mr-4" />
              <div>
                <p className="mb-0">Procession-Remmastered</p>
                <p className="mb-0 text-left list-artist">Queen</p>
              </div>{" "}
              <span className="ml-auto list-time">1:13</span>{" "}
            </ListGroup.Item>
            <ListGroup.Item className="d-flex">
              <BsMusicNote className="mr-4" />
              <div>
                <p className="mb-0">Procession-Remmastered</p>
                <p className="mb-0 text-left list-artist">Queen</p>
              </div>{" "}
              <span className="ml-auto list-time">1:13</span>{" "}
            </ListGroup.Item>
            <ListGroup.Item className="d-flex">
              <BsMusicNote className="mr-4" />
              <div>
                <p className="mb-0">Procession-Remmastered</p>
                <p className="mb-0 text-left list-artist">Queen</p>
              </div>{" "}
              <span className="ml-auto list-time">1:13</span>{" "}
            </ListGroup.Item>
            <ListGroup.Item className="d-flex">
              <BsMusicNote className="mr-4" />
              <div>
                <p className="mb-0">Procession-Remmastered</p>
                <p className="mb-0 text-left list-artist">Queen</p>
              </div>{" "}
              <span className="ml-auto list-time">1:13</span>{" "}
            </ListGroup.Item>
            <ListGroup.Item className="d-flex">
              <BsMusicNote className="mr-4" />
              <div>
                <p className="mb-0">Procession-Remmastered</p>
                <p className="mb-0 text-left list-artist">Queen</p>
              </div>{" "}
              <span className="ml-auto list-time">1:13</span>{" "}
            </ListGroup.Item>
            <ListGroup.Item className="d-flex">
              <BsMusicNote className="mr-4" />
              <div>
                <p className="mb-0">Procession-Remmastered</p>
                <p className="mb-0 text-left list-artist">Queen</p>
              </div>{" "}
              <span className="ml-auto list-time">1:13</span>{" "}
            </ListGroup.Item>
            <ListGroup.Item className="d-flex">
              <BsMusicNote className="mr-4" />
              <div>
                <p className="mb-0">Procession-Remmastered</p>
                <p className="mb-0 text-left list-artist">Queen</p>
              </div>{" "}
              <span className="ml-auto list-time">1:13</span>{" "}
            </ListGroup.Item>
            <ListGroup.Item className="d-flex">
              <BsMusicNote className="mr-4" />
              <div>
                <p className="mb-0">Procession-Remmastered</p>
                <p className="mb-0 text-left list-artist">Queen</p>
              </div>{" "}
              <span className="ml-auto list-time">1:13</span>{" "}
            </ListGroup.Item>
            <ListGroup.Item className="d-flex">
              <BsMusicNote className="mr-4" />
              <div>
                <p className="mb-0">Procession-Remmastered</p>
                <p className="mb-0 text-left list-artist">Queen</p>
              </div>{" "}
              <span className="ml-auto list-time">1:13</span>{" "}
            </ListGroup.Item>
            <ListGroup.Item className="d-flex">
              <BsMusicNote className="mr-4" />
              <div>
                <p className="mb-0">Procession-Remmastered</p>
                <p className="mb-0 text-left list-artist">Queen</p>
              </div>{" "}
              <span className="ml-auto list-time">1:13</span>{" "}
            </ListGroup.Item>
            <ListGroup.Item className="d-flex">
              <BsMusicNote className="mr-4" />
              <div>
                <p className="mb-0">Procession-Remmastered</p>
                <p className="mb-0 text-left list-artist">Queen</p>
              </div>{" "}
              <span className="ml-auto list-time">1:13</span>{" "}
            </ListGroup.Item>
            <ListGroup.Item className="d-flex">
              <BsMusicNote className="mr-4" />
              <div>
                <p className="mb-0">Procession-Remmastered</p>
                <p className="mb-0 text-left list-artist">Queen</p>
              </div>{" "}
              <span className="ml-auto list-time">1:13</span>{" "}
            </ListGroup.Item>
            <ListGroup.Item className="d-flex">
              <BsMusicNote className="mr-4" />
              <div>
                <p className="mb-0">Procession-Remmastered</p>
                <p className="mb-0 text-left list-artist">Queen</p>
              </div>{" "}
              <span className="ml-auto list-time">1:13</span>{" "}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    );
}

export default AlbumPage