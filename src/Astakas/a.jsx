// import React from 'react'
// import Header from "../header/Header"
// import { Link } from 'react-router-dom'
// import { LinkContainer } from 'react-router-bootstrap'
// import {Card, Button} from "react-bootstrap"
// import data from "./data"

// export default function A() {
//   return (
//     <div style={{backgroundColor:"black"}}>
//     <Header/>
//     <LinkContainer to="kali">
//     <div >
//       <img src={require("../Images/kali.jpg")} alt='kali mata' height={150} width={150} />
//       <figcaption> Kali </figcaption>
//     </div>
//   </LinkContainer>
// <div>
// {data?.map((X , index) => (

// <Card key={index} style={{ width: '16rem' }}>
//       <Card.Img variant="top" src={X.src} />
//       <Card.Body>
//         <Card.Title>{X.title}</Card.Title>
//         <Card.Text>
//           {X.author}
//         </Card.Text>
//       </Card.Body>
// </Card>))
// }
// </div>


//     </div>
//   )
// }
import React, { useEffect, useState } from 'react';
import Header from "../header/Header";
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Card, Button } from "react-bootstrap";
import data from "./data";

export default function A() {
  const [im, setImagePaths] = useState([]);
   useEffect(() => {
    // Dynamically import images
    const paths = data.map(item => import(`../Images/${item.abc}`).then(module => module.default));
    Promise.all(paths)
      .then(images => setImagePaths(images))
      .catch(error => console.error('Error loading images:', error, im));
  }, []);

  return (
    <div style={{ backgroundColor: "black" }}>
      <Header />
      {/* <LinkContainer to="/kali">
        <div>
          <img src={require("../Images/kali.jpg")} alt='kali mata' height={150} width={150} />
          <figcaption> Kali </figcaption>
        </div>
      </LinkContainer> */}
      <div>
        {data?.map((item, index) => (
          <LinkContainer to={item.link} style={{ width: '16rem' }}>
          <Card key={index} style={{ width: '16rem' }}>
            <Card.Img variant="top" src={im[index]} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                {item.author}
              </Card.Text>
            </Card.Body>
          </Card>
          </LinkContainer>
        ))}
      </div>
    </div>
  );
}