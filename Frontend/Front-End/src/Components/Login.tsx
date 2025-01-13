import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Heading, Center, Text } from "@chakra-ui/react";
import { useNavigate, Link } from "react-router-dom";

const Login: React.FC<{ setIsLoggedIn: (isLoggedIn: boolean) => void, setUserEmail: (email: string) => void }> = ({ setIsLoggedIn, setUserEmail }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Reset error state
    try {
      const response = await fetch('http://localhost:8080/api/users/login', { // Update the port here
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const data = await response.json();
      console.log("Login successful:", data);

      // After successful login, set login state and navigate to the codearea
      setIsLoggedIn(true);
      setUserEmail(email);
      navigate("/codearea");
    } catch (error: any) {
      console.error('Error during login:', error);
      setError(error.message);
    }
  };

  return (
    <Center minH="90vh">
      <Box maxW="lg" minH="md" mt={4} p={9} borderWidth={1} borderRadius="lg">
        <Heading mb={6}>Login</Heading>
        {error && <Text color="red.500" mb={4}>{error}</Text>}
        <form onSubmit={handleLogin}>
          <FormControl id="email" mb={8}>
            <FormLabel>Email address</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} width="400px" required />
          </FormControl>
          <FormControl id="password" mb={10}>
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} width="400px" required />
          </FormControl>
          <Button colorScheme="teal" type="submit">Login</Button>
        </form>
        <Text mt={4}>
          Don't have an account? <Link to="/signup" style={{ color: 'teal' }}>Sign Up</Link>
        </Text>
      </Box>
    </Center>
  );
};

export default Login;