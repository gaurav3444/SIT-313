import React from 'react';
import Header from './Header';
import { Card, Container } from 'semantic-ui-react';
import './Plans.css'; // Import your custom styles
import { Link } from "react-router-dom";

const cardStyle = {
    margin: '20px',
    textAlign: 'center', // Center align content
    borderRadius: '12px', // Add rounded corners
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
};

const Plans = () => {
    return (
        <>
            <Header />
            <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <div style={{ textAlign: 'center' }}> {/* Center text inside the div */}
                    <h1 className="word-art-heading">MEMBERSHIP OPTIONS</h1>
                    <Card.Group centered>
                        <Card style={cardStyle}>
                            <Card.Content>
                                <h3 className="custom-card-header" style={{ fontWeight: 900, fontSize: '2.75rem' }}>Free Plans</h3>
                                <Card.Description style={{ textAlign: 'inherit', fontSize: '1.25rem' }}>
                                    Free Subscription <br />$0
                                </Card.Description>
                                <ul style={{ listStyleType: 'none', padding: 0 }}>
                                    <li>&#10003; 500 Requests</li>
                                    <li>&#10003; Limited Projects</li>
                                    <li>&#10003; Extended Free Trial</li>
                                    <li>&#10003; Limited Plan</li>
                                </ul>
                                <Link to="https://buy.stripe.com/test_4gw01P1LQbSRcdacMM">
                                    <button className="custom-button">GET PLAN</button>
                                </Link>
                            </Card.Content>
                        </Card>

                        <Card style={cardStyle}>
                            <Card.Content>
                                <h3 className="custom-card-header1" style={{ fontWeight: 900, fontSize: '2.75rem' }}>Premium Plans</h3>
                                <Card.Description style={{ textAlign: 'inherit', fontSize: '1.25rem' }}>
                                    Premium Subscription Plan <br />$99
                                </Card.Description>
                                <ul style={{ listStyleType: 'none', padding: 0 }}>
                                    <li>&#10003; Unlimited Requests</li>
                                    <li>&#10003; Unlimited Projects</li>
                                    <li>&#10003; Extended Study Plan</li>
                                    <li>&#10003; Advanced Features</li>
                                </ul>
                                <Link to="https://buy.stripe.com/test_4gw01P1LQbSRcdacMM">
                                    <button className="custom-button1">GET PLAN</button>
                                </Link>
                            </Card.Content>
                        </Card>
                    </Card.Group>
                </div>
            </Container>
        </>
    );
};

export default Plans;
