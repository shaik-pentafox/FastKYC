import React from "react";
import {
  Container,
  Grid,
  Text,
  Anchor,
  TextInput,
  Button,
  Divider,
  Image,
  Flex,
  Stack,
} from "@mantine/core";
import {
  IconBrandLinkedin,
  IconBrandFacebook,
  IconBrandTwitter,
  IconMail,
} from "@tabler/icons-react";
import Logo from "../../assets/Images/FastKYC_logo.png";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0d0d0d",
        color: "#fff",
        padding: "80px 0 30px",
      }}
    >
      <Container size="lg">
        {/* Top Section */}
        <Flex
          justify="space-between"
          align="flex-start"
          wrap="wrap"
          gap="xl"
          style={{ marginBottom: "40px" }}
        >
          {/* Left side*/}
          <Grid
            gutter="xl"
            style={{
              flex: "1 1 60%",
              minWidth: "300px",
              maxWidth: "700px",
            }}
          >
            {/* Products */}
            <Grid.Col span={3}>
              <Text fw={500} mb="md" c="red.6" fz={20}>
                Products
              </Text>
              <Stack spacing="sm">
                {["Fast KYC", "ID verification", "Face authentication"].map(
                  (item, i) => (
                    <Anchor
                      key={i}
                      href="#"
                      c="gray.3"
                      fw={400}
                      fz={16}
                      underline={false}
                      sx={{
                        "&:hover": {
                          color: "white",
                          transform: "translateX(4px)",
                          transition: "all 0.2s ease",
                        },
                      }}
                    >
                      {item}
                    </Anchor>
                  )
                )}
              </Stack>
            </Grid.Col>

            {/* Resources */}
            <Grid.Col span={3}>
              <Text fw={500} mb="md" c="red.6" fz={20}>
                Resources
              </Text>
              <Stack spacing="sm">
                {["Blogs", "Customer Stories", "Documentation"].map((item, i) => (
                  <Anchor
                    key={i}
                    href="#"
                    c="gray.3"
                    fw={400}
                    fz={16}
                    underline={false}
                    sx={{
                      "&:hover": {
                        color: "white",
                        transform: "translateX(4px)",
                        transition: "all 0.2s ease",
                      },
                    }}
                  >
                    {item}
                  </Anchor>
                ))}
              </Stack>
            </Grid.Col>

            {/* Privacy & Security */}
            <Grid.Col span={4}>
              <Text fw={500} mb="md" c="red.6" fz={20}>
                Privacy & Security
              </Text>
              <Stack spacing="sm">
                {["Terms and conditions", "Privacy policy", "Security"].map(
                  (item, i) => (
                    <Anchor
                      key={i}
                      href="#"
                      c="gray.3"
                      fw={400}
                      fz={16}
                      underline={false}
                      sx={{
                        "&:hover": {
                          color: "white",
                          transform: "translateX(4px)",
                          transition: "all 0.2s ease",
                        },
                      }}
                    >
                      {item}
                    </Anchor>
                  )
                )}
              </Stack>
            </Grid.Col>
          </Grid>

          {/*Subscribe */}
          <div
            style={{
              flex: "1 1 30%",
              minWidth: "200px",
              maxWidth: "300px",
            }}
          >
            <Text fw={500} mb="md" c="red.6" fz={20}>
              Stay Updated
            </Text>
            <TextInput
              placeholder="Enter your email address"
              variant="filled"
              radius="md"
              mb="sm"
              icon={<IconMail size={16} />}
              styles={{
                input: {
                  backgroundColor: "white",
                  color: "black",
                  border: "none",
                  "&:focus": {
                    borderColor: "#fa5252",
                  },
                },
              }}
            />
            <Button
              fullWidth
              radius="md"
              color="red.7"
              fw={500}
              sx={{
                "&:hover": {
                  backgroundColor: "#e03131",
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                  transition: "all 0.2s ease",
                },
              }}
            >
              Subscribe now
            </Button>
          </div>
        </Flex>

        <Divider my="xl" color="gray.7" />

        {/* Bottom Section */}
        <Flex
          justify="space-between"
          align="center"
          wrap="wrap"
          gap="md"
          style={{
            padding: "20px 0",
          }}
        >
          {/* Left: Logo */}
          <Flex align="center">
            <Image
              src={Logo}
              alt="FastKYC Logo"
              width={100}
              fit="contain"
              style={{ display: "block" }}
            />
          </Flex>

          {/* Center*/}
          <Flex align="center" gap="lg" wrap="wrap">
            <Flex align="center" gap="xl">
              {["Terms", "Privacy", "Cookies"].map((item, i) => (
                <Anchor
                  key={i}
                  href="#"
                  c="gray.5"
                  size="sm"
                  underline={false}
                  sx={{ "&:hover": { color: "white" } }}
                >
                  {item}
                </Anchor>
              ))}
            </Flex>
          </Flex>

          {/* Right: Social Icons */}
          <Flex align="center" gap="lg">
            <Anchor
              href="#"
              c="gray.5"
              sx={{
                "&:hover": {
                  color: "#0A66C2",
                  transform: "translateY(-2px)",
                  transition: "all 0.2s ease",
                },
              }}
            >
              <IconBrandLinkedin size={24} />
            </Anchor>
            <Anchor
              href="#"
              c="gray.5"
              sx={{
                "&:hover": {
                  color: "#1877F2",
                  transform: "translateY(-2px)",
                  transition: "all 0.2s ease",
                },
              }}
            >
              <IconBrandFacebook size={24} />
            </Anchor>
            <Anchor
              href="#"
              c="gray.5"
              sx={{
                "&:hover": {
                  color: "#1DA1F2",
                  transform: "translateY(-2px)",
                  transition: "all 0.2s ease",
                },
              }}
            >
              <IconBrandTwitter size={24} />
            </Anchor>
          </Flex>
        </Flex>
      </Container>
    </footer>
  );
}

export default Footer;
