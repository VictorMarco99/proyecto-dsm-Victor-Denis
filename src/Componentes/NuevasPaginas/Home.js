
import { Carousel, Container, Row, Col, Card, Button } from 'react-bootstrap';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';


const Home = () => {
    const images = [
        { src: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/01/03/16412038092569.jpg' },
        { src: 'https://clupik.com/wp-content/uploads/2021/07/padel-g713a29057_1920.jpg' },
        { src: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/07/13/16577411293207.jpg' },
        // Agrega aquí todas las imágenes que quieras mostrar en el carrusel
    ];




    return (
        <>
            <Carousel>
                {images.map((image, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={image.src}
                            alt={`Imagen ${index}`}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
            <h3 style={{alignContent:'center'}}>PPP</h3>
            <Container fluid>
                <Row>
                    <Col md={3}>
                        <Card>
                            <Card.Img variant="top" src="https://www.escuelapadelbarcelona.com/wp-content/uploads/2016/07/ni%C3%B1os.jpg" />
                            <Card.Body>
                                <Card.Title>Pasion</Card.Title>
                                <Card.Text>
                               Llevamos años dedicandonos a la venta exclusiva de productos de padel,buscando siempre ofrecer el mejor trato y calidad
                               posible a nuestros clientes, desde los mas pequeños a los mas grandes
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <Card.Img variant="top" src="https://localproductos.es/wp-content/uploads/2021/03/cropped-Foto-13.png" />
                            <Card.Body>
                                <Card.Title>Profesion</Card.Title>
                                <Card.Text>
                                    Este es un proyecto joven que nació hace alrededor de 3 años.
                                    Dos amigos convirtieron en realidad una idea loca de montar un local dedicado al hobbie que mas les gusta,
                                    el padel
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <Card.Img variant="top" src="https://us.123rf.com/450wm/iko/iko1704/iko170400202/76951365-retrato-de-una-joven-pareja-feliz-en-la-naturaleza-abrazados-juntos.jpg?ver=6" />
                            <Card.Body>
                                <Card.Title>Piña</Card.Title>
                                <Card.Text>
                                 No se nos ocurre otra palabra mejor para definir mejor lo que el padel representa. Nosortos desde Padel Para Todos, creemos que el mayor beneficio de la practica
                                 de este deporte es el hacer "piña", es decir, creemos que este deporte une a las personas y para nosotros es de vital importancia que tu salgas con una sonrisa de la tienda
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <h1>Padel Para Todos</h1>
                        <h3>La tienda dedicada en exclusivo al padel que más esta creciendo en españa</h3>
                        <br></br>
                        <br></br>

                        <h5>Direccion: c/ Real del Barrio, 5º </h5>
                        <h5>cp/31302 , Villafranca, Navarra,España </h5>
                        <h5>Telefono de contacto: +34 983848584</h5>

                        <h5>Horario: de Lunes a Viernes de 9:00 hasta 17:00</h5>

                    </Col>
                </Row>
            </Container>
        </>

    )
}
export default Home;