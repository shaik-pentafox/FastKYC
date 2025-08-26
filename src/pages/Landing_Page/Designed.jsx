import React from "react";
import { Container, Text, Title, Image, Paper, SimpleGrid, Box } from "@mantine/core";
import Design from "../../assets/Images/Design.png";

function Designed() {
  return (
    <Paper
      py={80}
      style={{
        background: "linear-gradient(to right, #000000 0%, #000000 30%, #8B0000 100%)",
      }}
    >
      <Container size="lg">
        <SimpleGrid
          cols={2}
          spacing="xl"
          breakpoints={[{ maxWidth: "md", cols: 1, spacing: "md" }]}
        >
          {/* Left Column: Text */}
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
              borderRadius: 8,
            }}
          >
            <Title order={2} fw={400} fz={24} mb="md" c="red">
              Designed for developers
            </Title>

            <Text size="xl" fw={400} fz={32} c="white" mb="md">
              Integrate in minutes.<br /> Scale with confidence
            </Text>

            <Text size="md" c="#F7F7F7" fw={400} fz={16}>
              We take care of the complex KYC, compliance, and verification
              frameworks so your team can focus on building amazing products.
              With our REST APIs, clear documentation, and developer-first
              approach, you can go from sandbox to production in hours — and
              scale securely to millions of verifications.
            </Text>
          </Box>

          {/* Right Column: Image*/}
          <Box
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              height: "100%",
            }}
          >
            <Image
              src={Design}
              alt="Developer integration illustration"
              radius="md"
              shadow="md"
              width="100%"
              height="100%"
              fit="cover"
            />
          </Box>
        </SimpleGrid>
      </Container>
    </Paper>
  );
}

export default Designed;
