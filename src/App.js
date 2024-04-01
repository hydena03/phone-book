import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {Container, Row, Col, Form, Button} from "react-bootstrap"
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';

//1. 왼쪽에는 연락처 등록폼, 오른쪽에는 연락처 리스트, 서치창
//2. 리스트에 유저 이름과 전화번호 추가 가능
//3. 리스트에 아이템이 몇개인지 보인다
//4. 사용자가 유저 이름을 검색 가능

function App() {
  return (
    <div>
<h1 className="title">연락처</h1>
<Container>
  <Row>
    <Col>
<ContactForm />
    </Col>
    <Col>
<ContactList />
    </Col>
  </Row>
</Container>
    </div>
  );
}

export default App;
