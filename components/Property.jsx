import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

import DefaultImage from "../assets/images/house.jpg";

const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}) => (
  <Link href={`/property/${externalID}`} passHref>
    {/* <div class="grid">
      <figure class="effect-winston">
        <Image
          src={coverPhoto ? coverPhoto.url : DefaultImage}
          width={400}
          height={260}
        />
        <figcaption>
          <h2>
            Jolly <span>Winston</span>
          </h2>
          <p>
            <a href="#">
              <i class="fa fa-fw fa-star-o"></i>
            </a>
            <a href="#">
              <i class="fa fa-fw fa-comments-o"></i>
            </a>
            <a href="#">
              <i class="fa fa-fw fa-envelope-o"></i>
            </a>
          </p>
        </figcaption>
        
      </figure>
      
    </div> */}
    <Flex
      flexWrap="wrap"
      w="420px"
      p="5"
      paddingTop="0px"
      justifyContent="flex-start"
      cursor="pointer"
    >
      <div class="grid">
        <figure class="effect-winston">
          <Image
            src={coverPhoto ? coverPhoto.url : DefaultImage}
            width={400}
            height={260}
          />
          <figcaption>
            <h2>
              Estate
              <span>Companion</span>
            </h2>
            <p>
              <a href="#">
                <div className="icon">
                  {rooms}
                  <FaBed />
                </div>
              </a>
              <a href="#">
                <div className="icon">
                  {baths} <FaBath />
                </div>
              </a>
              <a href="#">
                <div className="icon">
                  {millify(area)} sqft <BsGridFill />
                </div>
              </a>
            </p>
          </figcaption>
        </figure>
      </div>
      <Box w="full">
        <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <Box paddingRight="3" color="green.400">
              {isVerified && <GoVerified />}
            </Box>

            <Text
              fontWeight="bold"
              fontSize="lg"
              fontFamily="Century Gothic,Arial, Helvetica, sans-serif"
              backgroundColor="blue.400"
              color="white"
              borderRadius="5px"
              padding=".5rem 1rem"
            >
              AED {price}
              {rentFrequency && ` / ${rentFrequency}`}
            </Text>
          </Flex>
          <Box>
            <Avatar size="sm" src={agency?.logo?.url}></Avatar>
          </Box>
        </Flex>
        {/* <Flex
          alignItems="center"
          p="1"
          justifyContent="space-between"
          w="250px"
          color="blue.500"
        >
          {rooms}
          <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
        </Flex> */}
        <Text
          fontSize="lg"
          fontFamily="Century Gothic,Arial, Helvetica, sans-serif"
          fontWeight="bold"
        >
          {title.length > 35 ? title.substring(0, 35) + "..." : title}
        </Text>
      </Box>
    </Flex>
  </Link>
);

export default Property;
