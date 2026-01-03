import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

function NewsList() {
  const berita = [
    {
      judul: "AI Mengubah Dunia",
      isi: "Teknologi kecerdasan buatan berkembang sangat pesat."
    },
    {
      judul: "Ekonomi Nasional Stabil",
      isi: "Pemerintah mengumumkan pertumbuhan ekonomi positif."
    },
    {
      judul: "Timnas Raih Kemenangan",
      isi: "Gol dramatis di menit akhir membawa kemenangan."
    }
  ];

  return (
    <Container className="mt-4">
      <h3 className="mb-3">Berita Terkini</h3>
      <Row>
        {berita.map((item, index) => (
          <Col md={4} key={index}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>{item.judul}</Card.Title>
                <Card.Text>{item.isi}</Card.Text>
                <Button variant="primary">Baca Selengkapnya</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default NewsList;