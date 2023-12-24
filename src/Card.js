import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const UserList = ({ users }) => {
  return (
    <Row xs={1} md={2} className="g-4">
      {users.map((user, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={`https://via.placeholder.com/100x160?text=User${idx}`} />
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>
                Email: {user.email}
                Address: {user.address.street}<br />
                Address: {user.address.suite}<br />
                Address: {user.address.city}<br />
                Address: {user.address.zipcode}<br />
                Address geo: {user.address.geo.lat}<br />
                Address geo: {user.address.geo.lng}<br />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default UserList;
