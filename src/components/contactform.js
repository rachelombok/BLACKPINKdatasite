import React from 'react';
import { Container, Col, Image, Badge, Jumbotron, Button, Row, Form } from 'react-bootstrap';
import styled from 'styled-components';
import '../extra/css/home.css'

const FormWrapper = styled.div`
margin-top: 5rem;
  margin-left: 5rem;
  margin-right: 5rem;

  flex-direction: column;
  width: 90%;
  max-width: 100%;
  p{
    text-align: left;
  }
  h2 {
    margin: 2rem 0;
    color: white;
    text-align: left;
    margin-bottom: 2rem;
  }
  h3 {
    
    margin: 2rem 0;
    color: white;
    text-align: left;
  }
  small {
    font-size: 1rem;
    line-height: 1rem;
  }
  a {
    position: relative;
    z-index: 5;
    text-decoration: none;
    color: white;
    transition: all 0.3s ease;
    padding: 0.25rem 0.5rem 0.15rem 0.5rem;
    &:hover {
      color: #ffb3df;
      &::before {
        height: 2px;
        width: 100%;
        opacity: 1;
      }
    }
    &::before {
      z-index: -5;
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      bottom: -1px;
      left: 0;
      opacity: 1;
      transition: all 0.3s ease;
      background: linear-gradient(90deg, #121212, #ffb3df);
    }
  }
  
  small {
    a {
      position: relative;
      z-index: 5;
      text-decoration: none;
      color: white;
      transition: all 0.3s ease;
      padding: 0.25rem 0.5rem 0.15rem 0.5rem;
      &:hover {
        color: #ffb3df;
        &::before {
          height: 2px;
          width: 100%;
          opacity: 1;
        }
      }
      &::before {
        z-index: -5;
        content: '';
        position: absolute;
        height: 100%;
        width: 100%;
        bottom: -1px;
        left: 0;
        opacity: 1;
        transition: all 0.3s ease;
        background: linear-gradient(180deg, #000000, #ffb3df);
      }
    }
  }
}
.form-label{
  color: red;
}
.form-group{
  height: 70px;
}
.form-control{
  background-color: orange;
  height: 50px;
}
  
`;

const formstyle = {
  width: '800px',
  margin: 'auto'
}

class ContactMe extends React.Component{

    constructor(props) {
        super(props);
    
        this.handleChange = this.handleChange.bind(this);
    
        this.state = {
          name: '', email: '', message: '', thankyou: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(e) {
        let name = e.target.name;
        if (name == 'nm'){
            this.setState({ name: e.target.value });
        }
        if (name == 'em'){
            this.setState({ email: e.target.value });
        }
        if (name == 'msg'){
            this.setState({ message: e.target.value });
        }
        
        console.log(this.state)
      }

      isValidEmail(email) {
        return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
      }

      handleSubmit(event) {
 
        event.preventDefault();
        console.log(this.state);
        this.setState({ thankyou: true})
        
       
        
      }
    render(){
        if(!this.state.thankyou){
            //form here
            return(

                <FormWrapper>
                    <Form style={formstyle}>
                          <Form.Group controlId="formGroupName">
                              <Form.Label>Name</Form.Label>
                              <Form.Control type="text" placeholder="Name" name='nm' onChange={this.handleChange}/>
                          </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control required type="email" placeholder="Email" name='em' onChange={this.handleChange}/>
                        </Form.Group>
                      <Form.Group controlId="formGroupMessage">
                              <Form.Label>Message</Form.Label>
                              <Form.Control required type="text" placeholder="Message" name='msg' onChange={this.handleChange}/>
                          </Form.Group>               
                        <Button variant="primary" type="submit" onSubmit={this.handleSubmit}>
                            Submit
                        </Button>
                      </Form>
                </FormWrapper>
          
              );
        }

        else {
        // ty page, button to put another message
        return(
            <FormWrapper>
                    <Form style={formstyle}>
                          <Form.Group controlId="formGroupName">
                              <Form.Label>Name</Form.Label>
                              <Form.Control type="text" placeholder="Name" name='nm' onChange={this.handleChange}/>
                          </Form.Group>
                        
                      </Form>
                </FormWrapper>

            );
        }
      
    }
  }

  export default ContactMe;