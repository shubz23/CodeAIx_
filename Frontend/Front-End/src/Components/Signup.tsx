import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Heading, Center, Text } from "@chakra-ui/react";
import { useNavigate, Link } from "react-router-dom";

const Signup: React.FC<{ setIsLoggedIn: (isLoggedIn: boolean) => void, setUserName: (name: string) => void, setUserEmail: (email: string) => void }> = ({ setIsLoggedIn, setUserName, setUserEmail }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/users/register', { // Update the port here
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
  
      if (!response.ok) {
        throw new Error('Signup failed');
      }
  
      const data = await response.json();
      console.log("Signup successful:", data);
  
      // After successful signup, set login state and navigate to the codearea
      setIsLoggedIn(true);
      setUserName(name);
      setUserEmail(email);
      navigate("/codearea");
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <Center minH="90vh">
      <Box maxW="lg" minH="md" mt={4} p={9} borderWidth={1} borderRadius="lg">
        <Heading mb={6}>Sign Up</Heading>
        <form onSubmit={handleSignup}>
          <FormControl id="name" mb={8}>
            <FormLabel>Name</FormLabel>
            <Input type="text" value={name} onChange={(e) => setName(e.target.value)} width="400px" required />
          </FormControl>
          <FormControl id="email" mb={8}>
            <FormLabel>Email address</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} width="400px" required />
          </FormControl>
          <FormControl id="password" mb={10}>
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} width="400px" required />
          </FormControl>
          <Button colorScheme="teal" type="submit">Sign Up</Button>
        </form>
        <Text mt={4}>
          Already have an account? <Link to="/login" style={{ color: 'teal' }}>Login</Link>
        </Text>
      </Box>
    </Center>
  );
};

export default Signup;