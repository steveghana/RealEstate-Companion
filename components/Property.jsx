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
    <Flex
      flexWrap="wrap"
      w="420px"
      p="5"
      paddingTop="0px"
      justifyContent="flex-start"
      cursor="pointer"
    >
      <div className="grid">
        <figure className="effect-winston">
          <Image
            src={coverPhoto ? coverPhoto.url : DefaultImage}
            width={400}
            height={260}
          />
          <figcaption>
            <p>
              <div className="item">
                <div className="icon">
                  {rooms}
                  <FaBed />
                </div>
              </div>
              <div className="item">
                <div className="icon">
                  {baths} <FaBath />
                </div>
              </div>
              <div className="item">
                <div className="icon">
                  {millify(area)} sqft <BsGridFill />
                </div>
              </div>
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
