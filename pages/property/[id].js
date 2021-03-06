import { Box, Flex, Spacer, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import { baseUrl, fetchApi } from "../../utils/fetchApi";
import ImageScrollbar from "../../components/ImageScrollbar";
import { useEffect } from "react";

const PropertyDetails = ({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  },
}) => {
  useEffect(() => {});
  return (
    <Box maxWidth="1000px" margin="auto" p="4">
      {photos && <ImageScrollbar data={photos} />}
      <Box w="full" p="6">
        <Flex paddingTop="2" alignItems="center">
          <Box paddingRight="3" color="green.400">
            {isVerified && <GoVerified />}
          </Box>
          <Text
            fontWeight="bold"
            fontSize="lg"
            fontFamily="Century Gothic,Arial, Helvetica, sans-serif"
          >
            AED {price} {rentFrequency && `/${rentFrequency}`}
          </Text>
          <Spacer />
          <Avatar size="sm" src={agency?.logo?.url}></Avatar>
        </Flex>
        <Flex
          alignItems="center"
          p="1"
          justifyContent="space-between"
          w="250px"
          color="blue.400"
        >
          {rooms}
          <FaBed fontSize="large" />|<FaBath fontSize="large" /> {baths} |{" "}
          {millify(area)} sqft <BsGridFill />
        </Flex>
      </Box>
      <Box marginTop="2">
        <Text
          fontSize="lg"
          marginBottom="2"
          fontFamily="Century Gothic,Arial, Helvetica, sans-serif"
          fontWeight="bold"
        >
          {title}
        </Text>
        <Text
          lineHeight="2"
          color="black"
          fontFamily="Century Gothic, Arial, Helvetica, sans-serif"
        >
          {description}
        </Text>
      </Box>
      <Flex
        flexWrap="wrap"
        textTransform="uppercase"
        justifyContent="space-between"
      >
        <Flex
          justifyContent="space-between"
          flexDirection="column"
          w="400px"
          borderBottom="1px"
          borderColor="gray.100"
          p="3"
        >
          <Text fontFamily="Century Gothic,Arial, Helvetica, sans-serif">
            Type
          </Text>
          <Text
            fontFamily="Century Gothic,Arial, Helvetica, sans-serif"
            fontWeight="bold"
          >
            {type}
          </Text>
        </Flex>
        <Flex
          justifyContent="space-between"
          flexDirection="column"
          w="400px"
          borderBottom="1px"
          borderColor="gray.100"
          p="3"
        >
          <Text fontFamily="Century Gothic,Arial, Helvetica, sans-serif">
            Purpose
          </Text>
          <Text
            fontFamily="Century Gothic,Arial, Helvetica, sans-serif"
            fontWeight="bold"
          >
            {purpose}
          </Text>
        </Flex>
        {furnishingStatus && (
          <Flex
            justifyContent="space-between"
            w="400px"
            flexDirection="column"
            borderBottom="1px"
            borderColor="gray.100"
            p="3"
          >
            <Text fontFamily="Century Gothic,Arial, Helvetica, sans-serif">
              Furnishing Status
            </Text>
            <Text
              fontFamily="Century Gothic,Arial, Helvetica, sans-serif"
              fontWeight="bold"
            >
              {furnishingStatus}
            </Text>
          </Flex>
        )}
      </Flex>
      <Box>
        {amenities.length && (
          <Text fontSize="2xl" fontWeight="black" marginTop="5">
            Facilites:
          </Text>
        )}
        <Flex flexWrap="wrap">
          {amenities?.map((item) =>
            item?.amenities?.map((amenity) => (
              <Text
                key={amenity.text}
                fontWeight="bold"
                color="blue.400"
                fontSize="l"
                p="2"
                bg="gray.200"
                m="1"
                borderRadius="5"
              >
                {amenity.text}
              </Text>
            ))
          )}
        </Flex>
      </Box>
    </Box>
  );
};
export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);
  return {
    props: {
      propertyDetails: data,
    },
  };
}
