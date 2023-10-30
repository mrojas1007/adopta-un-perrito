import Card from 'react-bootstrap/Card';
import Tags from './Tags';

const MyCard = ({image, title, colorTags, textTags, description}) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <p>{description}</p>
        </Card.Body>
        <Card.Footer>
          <Tags colorTags={colorTags} textTags={textTags}/>
        </Card.Footer>
      </Card>
    </>
  )
}

export default MyCard;