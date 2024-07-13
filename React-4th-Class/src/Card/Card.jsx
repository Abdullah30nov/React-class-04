import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({title,desc,imgSrc}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;