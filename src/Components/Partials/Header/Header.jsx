/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import styles from '../../../Assets/CSS/Partials/Header.module.css';
import Select from 'react-select'
import logo from '../../../Assets/Images/logo/Amar-Skill.png';
import Search from '../../Elements/Search/Search';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const Header = () => {
    return (
        <>
            <Container fluid={true}>
                <div className=''>
                    <Container>
                        <div className={styles.HeaderContainer}>
                            <Row>
                                <Col md={2} sm={2}>
                                    <div className={styles.LogoSytle}>
                                        <img src={logo} alt="Amar Skill" />
                                    </div>
                                </Col>

                                <Col md={2} sm={2}>
                                    <div className={styles.NavCategory}>
                                        <Select options={options} />
                                    </div>
                                </Col>

                                <Col md={4} sm={3}>
                                    <Search/>
                                </Col>

                                <Col md={4} sm={5}>
                                    <div className={styles.NavButtonArea}>
                                            <div className={styles.LeftSignInButton}>
                                                <a href="#">Sign In</a>
                                            </div>
                                            <div className={styles.RightLogInButton}>
                                                <a href='#'>Log In</a>
                                            </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </Container>
        </>
    );
};

export default Header;