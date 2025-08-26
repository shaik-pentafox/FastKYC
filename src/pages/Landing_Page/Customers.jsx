import React from "react";
import {
  Text,
  Title,
  Box,
  Group,
  Grid,
  Image,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import Logo from "../../assets/Images/Growth.png";

function Customers() {
  return (
    <Box
      px={130} // horizontal padding
      py={40}  // vertical padding
      style={{ backgroundColor: "#f8f8f8" }}
    >
      <Grid align="center" gutter="xl">
        {/* Left Side - Text Content */}
        <Grid.Col span={6}>
          <Text color="red" fw={400} fz={24} mb="sm">
            Customer stories
          </Text>
          <Title order={2} mb="lg" fw={400} fz={32}>
            Bold Visions That Shape Digital Futures
          </Title>

          <Group mb="md" gap="sm" align="flex-start">
            <IconCheck color="red" size={20} />
            <Text>
              <Text component="span" fw={400} fz={20} c="red">
                98%
              </Text>{" "}
              Reduction in fraudulent applications with real-time verification
            </Text>
          </Group>

          <Group mb="md" gap="sm" align="flex-start">
            <IconCheck color="red" size={20} />
            <Text>
              <Text component="span" fw={400} fz={20} c="red">
                5000+
              </Text>{" "}
              Customer identities verified every day through our APIs
            </Text>
          </Group>

          <Text mb="sm" c="dimmed" fw={400} fz={16}>
            "With Pentafox FastKYC, we were able to onboard customers instantly
            while staying compliant. The APIs are seamless, reliable, and give
            us the confidence to scale securely."
          </Text>
          <Text c="red" fw={400} fz={14}>
            — A Leading Fintech Partner
          </Text>
        </Grid.Col>

        {/* Right Side - Image */}
        <Grid.Col span={6}>
          <Box
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop:"23px"
            }}
          >
            <Image
              src={Logo}
              alt="Growth"
              style={{
                maxWidth: "100%",
                maxHeight: "450px",
                objectFit: "contain",
                borderRadius: 12,
              }}
            />
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  );
}

export default Customers;
