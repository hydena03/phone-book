import React from 'react'
import { Row, Col} from "react-bootstrap"
const ContactItem = ({item}) => {
  return (
    <Row>
<Col lg={2}>
<img width={50} src="https://img.freepik.com/premium-vector/user-profile-icon-in-flat-style-member-avatar-vector-illustration-on-isolated-background-human-permission-sign-business-concept_157943-15752.jpg"/>
</Col>
<Col lg={8}>
<div>
{item.name}
</div>
<div>
{item.phoneNumber}
</div>
</Col>
    </Row>
  )
}

export default ContactItem