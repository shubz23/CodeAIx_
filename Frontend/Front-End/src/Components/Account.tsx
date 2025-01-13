import React from "react";
import { Box, Heading, Text, Center } from "@chakra-ui/react";

const Account: React.FC<{ email: string }> = ({ email }) => {
  return (
    <Center minH="90vh">
      <Box maxW="lg" minH="2xs" mt={4} p={9} borderWidth={1} borderRadius="lg">
        <Heading mb={8}>Account Details</Heading>
        <Text fontSize="lg" mb={6}><strong>Email:</strong> {email}</Text>
        {/* Add more user details here */}
      </Box>
    </Center>
  );
};

export default Account;