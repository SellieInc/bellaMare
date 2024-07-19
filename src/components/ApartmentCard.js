import React from 'react';
import { Card, CardFooter, Button, Stack } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Gallery from './Gallery';

import image1 from '../assets/booking1/1.jpeg';
import image2 from '../assets/booking1/2.jpeg';
import image3 from '../assets/booking1/3.jpeg';
import image5 from '../assets/booking1/5.jpeg';
import image6 from '../assets/booking1/6.jpeg';
import image7 from '../assets/booking1/7.jpeg';
import image8 from '../assets/booking1/8.jpeg';
import image9 from '../assets/booking1/9.jpeg';
import image10 from '../assets/booking1/10.jpeg';
import image11 from '../assets/booking1/11.jpeg';
import image12 from '../assets/booking1/12.jpeg';
import image13 from '../assets/booking1/13.jpeg';
import image14 from '../assets/booking1/14.jpeg';
import image15 from '../assets/booking1/15.jpeg';
import image16 from '../assets/booking1/16.jpeg';
import image17 from '../assets/booking1/17.jpeg';
import image18 from '../assets/booking1/18.jpeg';
import image19 from '../assets/booking1/19.jpeg';

const images = [
    {
      original: image1,
      thumbnail: image1,
    },
    {
      original: image2,
      thumbnail: image2,
    },
    {
      original: image3,
      thumbnail: image3,
    },
    {
      original: image5,
      thumbnail: image5,
    },
    {
      original: image6,
      thumbnail: image6,
    },
    {
      original: image7,
      thumbnail: image7,
    },
    {
      original: image8,
      thumbnail: image8,
    },
    {
      original: image9,
      thumbnail: image9,
    },
    {
      original: image10,
      thumbnail: image10,
    },
    {
      original: image11,
      thumbnail: image11,
    },
    {
      original: image12,
      thumbnail: image12,
    },
    {
      original: image13,
      thumbnail: image13,
    },
    {
      original: image14,
      thumbnail: image14,
    },
    {
      original: image15,
      thumbnail: image15,
    },
    {
      original: image16,
      thumbnail: image16,
    },
    {
      original: image17,
      thumbnail: image17,
    },
    {
      original: image18,
      thumbnail: image18,
    },
    {
      original: image19,
      thumbnail: image19,
    },
  ];  

const ApartmentCard = ({ bookingUrl }) => {
    return (
        <Card className="card">
          <div className="image-gallery">
            <Gallery images={images} />
          </div>
          <div className="card-content">
            <CardFooter className="card-footer">
              <Stack direction='row' spacing={4} justifyContent="center">
                <Button
                  as="a"
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  rightIcon={<ArrowForwardIcon />}
                  colorScheme='blue'
                  variant='solid'
                  _hover={{ bg: "#2c5282", color: "white" }}
                >
                  Book now
                </Button>
              </Stack>
            </CardFooter>
          </div>
        </Card>
      );
};

export default ApartmentCard;
