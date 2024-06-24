import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import GoogleMapReact from 'google-map-react';



function Contact() {

    const AnyReactComponent = ({ text }) => <div>{text}</div>;

    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };


  return (
    <div>
      <Heading as="h1">Contact</Heading>
      <Text mt="20px">
        We're here to help! If you have any questions, comments, or concerns,
        please don't hesitate to reach out to us. Whether you need assistance
        with your order, have questions about our products, or just want to give
        us some feedback, we're all ears.
      </Text>
      <Text fontWeight="bold" mt="20px" fontSize="20px">
        Customer Service
      </Text>
      <li>Email: support@yourecommercesite.com</li>
      <li>Phone: 1-800-123-4567</li>
      <li>Live Chat: Available 24/7</li>

      <Text fontWeight="bold" mt="20px" fontSize="20px">
        Business Hours
      </Text>
      <li>Monday - Friday: 9:00 AM - 6:00 PM EST</li>
      <li>Saturday: 10:00 AM - 4:00 PM EST</li>
      <li>Sunday: Closed</li>

      <div style={{ height: '100vh', width: '100%', marginTop:"20px" }}>
      <GoogleMapReact
         center={defaultProps.center}
        zoom={defaultProps.zoom}>
       
        
      </GoogleMapReact>
    </div>
    </div>
  );
}

export default Contact;
