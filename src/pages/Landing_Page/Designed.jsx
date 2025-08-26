import React from 'react';
import { Container, Grid, Text, Title, Image, Paper } from '@mantine/core';
import Design from '../../assets/Images/Design.png';

function Designed() {
  return (
    <Paper bg="black" py={80}>
      <Container size="lg">
        <Grid gutter="xl" align="center">
          {/* Left side: Text */}
          <Grid.Col md={6}>
            <Title order={2} size="h1" fw={700} mb="md" c="white">
              Designed for developers
            </Title>

            <Text size="xl" fw={500} c="blue.4" mb="md">
              Integrate in minutes. Scale with confidence
            </Text>

            <Text size="md" mb="xl" c="gray.4">
              We take care of the complex KYC, compliance, and verification
              frameworks so your team can focus on building amazing products.
              With our REST APIs, clear documentation, and development-first
              approach, you can go from sandbox to production in hours — and
              scale securely to millions of verifications.
            </Text>
          </Grid.Col>

          {/* Right side: Image */}
          <Grid.Col md={6}>
            <Image
              src={Design}
              alt="Developer integration illustration"
              radius="md"
              shadow="md"
              fit="contain"
            />
          </Grid.Col>
        </Grid>
      </Container>
    </Paper>
  );
}

export default Designed;
