import React from 'react';
import { Heading, Card, CardHeader, CardBody, List, ListItem, ListIcon, Button, Stack } from '@chakra-ui/react';
import { FaSwimmer, FaWifi, FaParking, FaUtensils, FaHome, FaUmbrellaBeach } from "react-icons/fa"; // Import icons from React Icons
import { ArrowForwardIcon } from '@chakra-ui/icons'

const HomePage = () => {
  const bookingUrl = 'https://www.booking.com/hotel/za/elegant-3-bedroom-at-bellamare.en-gb.html?aid=1258470&label=Share-HxqOpx%401680507340';

  return (
    <div className="home-page-background">
      <Card className="home-page-card">
        <CardHeader className="home-page-header">
          <Heading size="xl" color="white">Coastal Elegant At Bellamare</Heading>
        </CardHeader>
        <CardBody className="home-page-body">
          <p>
            Welcome to Coastal Elegant At Bellamare! Step into a world of luxury and relaxation at our exquisite retreat in Summerstrand, Port Elizabeth. Whether you're here for a weekend escape or an extended stay, we invite you to unwind in style and make yourself at home.
          </p>
          <br />
          <h6>Property Description</h6>
          <p>
            Discover Coastal Elegant At Bellamare, a luxurious retreat nestled in the heart of Summerstrand, offering a perfect blend of comfort and sophistication. This exquisite accommodation features a private pool, complimentary high-speed WiFi, and ample free parking for your convenience.
          </p>
          <p>
            Situated just 2.1 km from the pristine Denville Beach and a short distance from Humewood Beach, Coastal Elegant At Bellamare promises a memorable stay in a tranquil seaside setting. The property boasts a contemporary design and is equipped with modern amenities to ensure a seamless experience.
          </p>
          <p>
            The spacious apartment comprises three beautifully appointed bedrooms, each designed for relaxation and equipped with plush bedding. A stylishly furnished living space includes a large TV for entertainment, while the fully equipped kitchen caters to all culinary needs with its range of appliances including a dishwasher, oven, microwave, toaster, and washing machine.
          </p>
          <p>
            Towels and bed linen are provided, ensuring comfort and convenience throughout your stay. Whether you're enjoying the sunset from nearby Hobie Beach or exploring The Boardwalk just 700 meters away, Coastal Elegant At Bellamare offers a perfect base to experience the best of Port Elizabeth.
          </p>
          <br />
          <h6>Key Features</h6>
          <List spacing={3}>
            <ListItem display="flex" alignItems="flex-start">
              <ListIcon as={FaSwimmer} color="#2c5282" boxSize={5} />
              <span style={{ marginLeft: "5px", fontSize: "15px" }}>Private pool</span>
            </ListItem>
            <ListItem display="flex" alignItems="flex-start">
              <ListIcon as={FaWifi} color="#2c5282" boxSize={5} />
              <span style={{ marginLeft: "5px", fontSize: "15px" }}>Free high-speed WiFi</span>
            </ListItem>
            <ListItem display="flex" alignItems="flex-start">
              <ListIcon as={FaParking} color="#2c5282" boxSize={5} />
              <span style={{ marginLeft: "5px", fontSize: "15px" }}>Free private parking</span>
            </ListItem>
            <ListItem display="flex" alignItems="flex-start">
              <ListIcon as={FaUtensils} color="#2c5282" boxSize={5} />
              <span style={{ marginLeft: "5px", fontSize: "15px" }}>Fully equipped kitchen</span>
            </ListItem>
            <ListItem display="flex" alignItems="flex-start">
              <ListIcon as={FaHome} color="#2c5282" boxSize={5} />
              <span style={{ marginLeft: "5px", fontSize: "15px" }}>Modern facilities</span>
            </ListItem>
            <ListItem display="flex" alignItems="flex-start">
              <ListIcon as={FaUmbrellaBeach} color="#2c5282" boxSize={5} />
              <span style={{ marginLeft: "5px", fontSize: "15px" }}>Close proximity to beaches and local attractions</span>
            </ListItem>
          </List>
          <br />
          <p>
            Experience unparalleled comfort and luxury at Coastal Elegant At Bellamare, where every detail is designed to enhance your coastal getaway.
          </p>
          <br />
          <div className='book_button'>
            <Stack direction='row' spacing={4}>
              <Button as="a" href={bookingUrl} target="_blank" rel="noopener noreferrer" rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='solid'>
                Book now
              </Button>
            </Stack>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default HomePage;
