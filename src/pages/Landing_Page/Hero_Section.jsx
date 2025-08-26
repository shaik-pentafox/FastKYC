import React from "react";
import {
  Container,
  Group,
  Button,
  Menu,
  Text,
  Paper,
  Avatar,
  Flex,
  Card,
  Divider,
  Progress,
  Box
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import Logo from "../../assets/Images/FastKYC_logo.png";
import Premium from '../../assets/Images/Premium_rate.png';
import Security from '../../assets/Images/Discount_icon.png';
import Circle from '../../assets/Images/circle.png';
import Banks from '../../assets/Images/Banks.png';
import { motion } from "framer-motion";

function Navbar() {
  return (
    <>
      {/* Navbar */}
      <header
        style={{
          background: "#121212",
          padding: "20px 130px",
        }}
      >
        <Container size="xl">
          <Flex justify="space-between" align="center">
            {/* Left: Logo */}
            <img src={Logo} alt="FastKYC Logo" style={{ height: "38px" }} />

            {/* Center: Links */}
            <Group spacing="lg" style={{ marginLeft: 74, gap: 23 }}>
              <Text size="sm" fw={500} c="white" style={{ cursor: "pointer" }}>
                Why FastKYC
              </Text>

              <Menu shadow="md" width={200}>
                <Menu.Target>
                  <Group spacing={4} style={{ cursor: "pointer" }}>
                    <Text size="sm" fw={400} c="white">
                      Products
                    </Text>
                    <IconChevronDown size={16} color="white" />
                  </Group>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Item>Product 1</Menu.Item>
                  <Menu.Item>Product 2</Menu.Item>
                  <Menu.Item>Product 3</Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>

            {/* Right: Buttons */}
            <Group spacing="sm">
              <Button
                variant="outline"
                color="red"
                radius="md"
                style={{ fontSize: "14px", fontWeight: 500 }}
              >
                Sign in
              </Button>

              <Button
                radius="md"
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  backgroundColor: "#E20303",
                  color: "white",
                }}
              >
                Book a demo
              </Button>
            </Group>
          </Flex>
        </Container>
      </header>

      {/* Hero Section body */}
      <section
        style={{
          background: "#121212",
          padding: "40px 0 0 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container size="lg" style={{ textAlign: "center", color: "white", padding: "40px 0" }}>
          {/* Top Badges */}
          <Group justify="center" spacing="md" mb="md">
            <Button
              variant="outline"
              color="white"
              radius="xl"
              size="sm"
              style={{ fontWeight: 400, fontSize: 14 }}
            >
              Faster Onboarding
            </Button>
            <Button
              variant="outline"
              color="white"
              radius="xl"
              size="sm"
              style={{ fontWeight: 400, fontSize: 14 }}
            >
              Stronger Compliance
            </Button>
          </Group>

          {/* Headline */}
          <Text
            fw={500}
            style={{
              fontSize: "48px",
              lineHeight: 1.2,
              marginBottom: "20px",
            }}
          >
            Simplify Compliance. <br /> Maximize Growth.
          </Text>

          {/* Subheading */}
          <Text c="dimmed" size="lg" maw={720} mx="auto" mb="lg" fw={400}>
            Pentafox FastKYC offers an end-to-end tax automation platform that
            helps businesses verify tax IDs, calculate and pay taxes, generate
            e-invoices, process tax documents, reconcile ledgers, and file tax
            returns — all through secure SDKs & APIs.
          </Text>

          {/* CTA Button */}
          <Button
            size="md"
            radius="md"
            style={{
              backgroundColor: "#E20303",
              color: "white",
              fontSize: "15px",
              fontWeight: 600,
              padding: "0px 32px",
              marginBottom: "40px"
            }}
          >
            Get started
          </Button>
        </Container>

        <Card
          style={{
            position: "relative",
            minHeight: "500px",
            backgroundColor: "transparent",
            border: "none",
            boxShadow: "none",
            padding: "0 20px",
            marginTop: "-300px"
          }}
        >
          {/* Floating Left Card 1 */}
          <Paper
            shadow="md"
            radius="lg"
            p="sm"
            style={{
              position: "absolute",
              left: "12%",
              top: "40%",
              width: "300px",
              background: "rgba(255, 255, 255, 0.12)",
              color: "white",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
              transition: "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out",
              cursor: "pointer",
            }}
          >
            {/* Icon */}
            <div style={{ flex: "0 0 20%", textAlign: "right", marginLeft: "13px" }}>
              <img src={Premium} alt="Icon" height={54} />
            </div>

            {/* Text */}
            <div style={{ flex: "0 0 68%" }}>
              <Text fw={400} size="sm">
                Instant PAN & Aadhaar Verification
              </Text>
              <Text fw={600} size="md" mt={4}>
                99.9% Accuracy
              </Text>
            </div>
          </Paper>

          {/* Floating Left Card 2 */}
          <Paper
            shadow="md"
            radius="lg"
            p="sm"
            style={{
              position: "absolute",
              left: "5%",
              top: "65%",
              width: "300px",
              background: "rgba(255, 255, 255, 0.12)",
              color: "white",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.15)",
              borderRadius: "16px",
              padding: "16px",
              transition: "all 0.3s ease-in-out",
              cursor: "pointer",
            }}
          >
            {/* Icon */}
            <div style={{ flex: "0 0 20%", textAlign: "right", marginLeft: "13px" }}>
              <img src={Security} alt="Icon" height={54} />
            </div>

            {/* Text */}
            <div style={{ flex: "0 0 68%" }}>
              <Text fw={400} size="sm">
                Successful Verifications
              </Text>
              <Text fw={600} size="md" mt={4}>
                1.2M+ Completed
              </Text>
            </div>
          </Paper>

          {/* Floating Right Card */}
          <Paper
            shadow="md"
            radius="md"
            p="md"
            style={{
              position: "absolute",
              right: "5%",
              top: "25%",
              width: "260px",
              background: "rgba(255, 255, 255, 0.12)",
              color: "white",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.15)",
              borderRadius: "16px",
              transition: "all 0.3s ease-in-out",
              cursor: "pointer",
            }}
          >
            {/* Header with icon + title */}
            <Group mb="xs" style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
              <img src={Circle} alt="status" height={25} />
              <Text fw={600}>FastKYC</Text>
            </Group>

            <Divider color="#DCDCDC" mb="sm" />

            {/* Avatars */}
            <Group mb="sm" spacing="xs">
              <Avatar.Group>
                <Avatar src="https://i.pravatar.cc/40?img=1" radius="xl" />
                <Avatar src="https://i.pravatar.cc/40?img=2" radius="xl" />
                <Avatar src="https://i.pravatar.cc/40?img=3" radius="xl" />
              </Avatar.Group>
            </Group>

            {/* Text content */}
            <Text fw={500} fz={16}>Total Verifications</Text>
            <Text fw={600} size="lg" mt={2} fz={18}>
              1.2M+
            </Text>

            {/* Progress bar */}
            <Progress value={70} color="red" />
          </Paper>
        </Card>

        {/* Banks Left-to-Right Scroll */}
        <Box
          style={{
            overflow: "hidden",
            width: "100%",
            padding: "20px 0",
            position: "relative",
          }}
        >
          <motion.div
            style={{ display: "flex", width: "200%" }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            <img
              src={Banks}
              alt="Banks"
              style={{
                width: "50%",
                objectFit: "cover",
                filter: "grayscale(100%)", // makes image gray
              }}
            />
            <img
              src={Banks}
              alt="Banks"
              style={{
                width: "50%",
                objectFit: "cover",
                filter: "grayscale(100%)", // makes image gray
              }}
            />
          </motion.div>
        </Box>
      </section>
    </>
  );
}

export default Navbar;