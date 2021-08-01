import React from 'react';
import './App.css';
import AppNavBar from './AppNavBar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

export default function Home() {
  return (
    <div>
      <AppNavBar />
      <Container fluid>
        <Button color="link">
          <Link to="/groups">Manage Tech Communities</Link>
        </Button>
      </Container>
      <iframe
        src="./inline-editor.html"
        id="inlineEditorIframe"
        title="Inline Editor"
        name="inlineEditorIframe"
        scrolling="yes"
        frameborder="1"
        marginheight="5px"
        marginwidth="5px"
        height="450px"
        width="600px"
        allowfullscreen
      ></iframe>
    </div>
  );
}
