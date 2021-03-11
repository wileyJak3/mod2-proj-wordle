import React from 'react'
import UrbanCompareCard from './UrbanCompareCard';
import DictionaryCompareCard from './DictionaryCompareCard';
import { Col,Row, Container} from "react-bootstrap";

function ComparePage() {
    return (
        <div>
            <Container>
            <Row>
                <Col>
                <UrbanCompareCard/>
                </Col>
                <Col>
                <DictionaryCompareCard/>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default ComparePage
