import {
  Container,
  Grid,
  Title,
  Text,
  Button,
  Group,
  Image,
  Paper,
  Box,
  rem,
} from "@mantine/core";
import { IconPhone, IconMail } from "@tabler/icons-react";
import Book from "../../assets/Images/Book.png";

export default function BookDemo() {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center", 
        alignItems: "center", 
        minHeight: "100vh", 
        backgroundColor: "#f9f9f9",
      }}
    >
      <Container
        size="lg"
        py="xl"
        style={{
          backgroundColor: "#FFEEEE",
          borderRadius: "30px",
          padding: "40px 60px",

        }}
      >
        <Grid align="center">
          {/* Left Section - Text */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title order={2} fw={550} fz={32}>
              Book your demo{" "}
              <Text span c="red" fw={550} fz={32}>
                today!
              </Text>
            </Title>
            <Text mt="sm" c="#616161" fw={400} fz={16}>
              Experience seamless identity verification with a personalized demo.
              Our experts will walk you through our AI-powered KYC solutions,
              fraud prevention tools, and compliance features tailored to your
              business needs.
            </Text>

            <Group mt="lg">
              <Button
                variant="outline"
                color="red"
                leftSection={<IconPhone size={18} />}
                style={{
                  fontWeight:300,
                  fontSize:14
                }}
              >
                Contact us
              </Button>
              <Button
                variant="outline"
                color="red"
                leftSection={<IconMail size={18} />}
                style={{
                  fontWeight:300,
                  fontSize:14
                }}
              >
                Email us
              </Button>
            </Group>
          </Grid.Col>

          {/* Right Section - Image */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box
              style={{
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              {/* Background box layer */}
              <Box
                style={{
                  backgroundColor: "#68686833",
                  borderRadius: "38px",
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "85%",
                  height: "74%",
                  zIndex: 0,
                }}
              />

              {/* Foreground image */}
              <Paper
                radius="lg"
                p="xl"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "transparent",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <Image
                  radius="md"
                  src={Book}
                  alt="Demo meeting"
                  fit="contain"
                  w="100%"
                  h="auto"
                />
              </Paper>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
