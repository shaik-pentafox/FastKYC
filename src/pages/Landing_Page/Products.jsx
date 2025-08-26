import React, { useState, useRef, useEffect } from "react";
import {
  Container,
  Grid,
  Title,
  Text,
  List,
  ThemeIcon,
  Image,
  Stack,
  Box,
  Group,
  Paper,
  Card
} from "@mantine/core";
import { IconCheck, IconBolt, IconShieldCheck, IconWorld } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";

// Product images (you'll need to adjust these paths)
import Product1 from "../../assets/Images/Product1.png";
import Product2 from "../../assets/Images/Product2.png";
import Product3 from "../../assets/Images/Product3.png";
import Product4 from "../../assets/Images/Product4.png";

// Sections data
const productSections = [
  {
    id: 1,
    title: "Customer KYC APIs",
    description:
      "Simplify onboarding with powerful KYC checks that confirm identity, address, and authenticity in real time.",
    list: [
      "PAN Verification & PAN–Aadhaar Link",
      "Name & Address Match",
      "Driving License, Voter ID, Passport Verification",
      "Liveliness Check & Face Match",
    ],
    image: Product1,
  },
  {
    id: 2,
    title: "Banking APIs",
    description:
      "Instantly verify customer bank accounts and prevent failed transactions. Our APIs ensure accurate account validation, enabling secure, smooth, and trustworthy payments.",
    list: ["Bank Account Verification"],
    image: Product2,
  },
  {
    id: 3,
    title: "GST & Business Verification APIs",
    description:
      "Verify GST-registered businesses and their compliance status without manual effort. Ensure you only work with genuine, tax-compliant entities.",
    list: ["GST Verification (No PAN Input)"],
    image: Product3,
  },
  {
    id: 4,
    title: "OCR APIs",
    description:
      "Extract data from government IDs and documents instantly with advanced OCR technology. Save time, eliminate manual entry errors, and accelerate digital onboarding.",
    list: [
      "OCR for PAN, Passport, Driving License, Voter ID, Vehicle RC",
      "Aadhaar OCR",
    ],
    image: Product4,
  },
  {
    id: 5,
    title: "Security & Compliance APIs",
    description:
      "Safeguard sensitive data with in-built compliance tools. Enhance document integrity, protect customer identity, and meet regulatory requirements with ease.",
    list: ["Aadhaar Masking", "Watermark"],
    image: Product4, // Using the same image as OCR APIs
  },
];

function Products() {
  const [activeSection, setActiveSection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRefs = useRef([]);
  const containerRef = useRef();
  const observerRef = useRef();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Use Intersection Observer for better performance and accuracy
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6, // Trigger when 60% of section is visible
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.findIndex(ref => ref === entry.target);
          if (index !== -1) {
            setActiveSection(index);
          }
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersect, options);

    // Observe all sections
    sectionRefs.current.forEach(section => {
      if (section) {
        observerRef.current.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <>
      <Container size="lg" py="xl" mb={80} mt={35} ref={containerRef}>
        <Grid gutter="xl">
          {/* Left side - Scrollable content */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack spacing={160}>
              {productSections.map((section, index) => (
                <SectionBlock
                  key={section.id}
                  section={section}
                  ref={(el) => (sectionRefs.current[index] = el)}
                  isActive={activeSection === index}
                  showHeader={index === 0}
                />
              ))}
            </Stack>
          </Grid.Col>

          {/* Right side - Fixed image (only on desktop) */}
          {!isMobile && (
            <Grid.Col span={6}>
              <Box
                style={{
                  position: "sticky",
                  top: 0, // stick from very top
                  height: "100vh", // full viewport height
                  display: "flex",
                  alignItems: "center", // vertical center
                  justifyContent: "center", // horizontal center
                  width: "100%",
                  zIndex: 10,
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSection}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    style={{
                      width: "100%",
                      maxWidth: 500,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      src={productSections[activeSection].image}
                      alt={productSections[activeSection].title}
                      radius="md"
                      fit="contain"
                      style={{
                        width: "100%",
                        maxWidth: 500,
                        maxHeight: "80vh",
                        objectFit: "contain",
                      }}
                    />
                  </motion.div>
                </AnimatePresence>
              </Box>
            </Grid.Col>

          )}
        </Grid>
      </Container>

      {/* Why choose FastKYC section */}
      <Container size="lg" py="xl" mb={80}>
        <Grid gutter="xl" align="center">
          {/* Left Side - Text Content */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack spacing="md">
              <Text fw={400} c="red" fz={24}>
                Why choose FastKYC?
              </Text>

              <Title order={2} fw={400} fz={32}>
                The core of identity & compliance <br /> for growing businesses
              </Title>

              <Text c="dimmed" fz={20} fw={400}>
                FastKYC makes onboarding effortless. We combine speed, trust,
                and compliance to help businesses onboard customers instantly
                while staying fully secure. No delays, no risks—just smarter
                verification.
              </Text>

              {/* Stats */}
              <Group grow mt="md">
                <Stack spacing={0} align="center">
                  <Title order={3} fz={42} fw={600}>
                    500+
                  </Title>
                  <Text c="dimmed" fz={16} fw={400}>
                    Identities verified
                  </Text>
                </Stack>

                <Stack spacing={0} align="center">
                  <Title order={3} fz={42} fw={600}>
                    96%
                  </Title>
                  <Text c="dimmed" fz={16} fw={400}>
                    Auto-approval rate
                  </Text>
                </Stack>

                <Stack spacing={0} align="center">
                  <Title order={3} fz={42} fw={600}>
                    60%
                  </Title>
                  <Text c="dimmed" fz={16} fw={400}>
                    Reduction in drop-offs
                  </Text>
                </Stack>
              </Group>
            </Stack>
          </Grid.Col>

          {/* Right Side - Feature Cards */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box mt={{ base: "md", md: "178px" }}>
              <Stack spacing="md">
                <Paper
                  shadow="xs"
                  radius="md"
                  p="md"
                  style={{ backgroundColor: "#fff5f5" }}
                >
                  <Group align="center">
                    <ThemeIcon color="red" size={40} radius="md" variant="light">
                      <IconBolt size={22} />
                    </ThemeIcon>
                    <div>
                      <Text fw={600} fz={18} color="#2E175A" style={{ lineHeight: 1.5 }}>
                        Faster Approvals
                      </Text>
                      <Text c="dimmed" fz={15} color="#48474F" style={{ lineHeight: 1.8 }}>
                        Cut verification times from days to minutes.
                      </Text>
                    </div>
                  </Group>
                </Paper>

                <Paper
                  shadow="xs"
                  radius="md"
                  p="md"
                  style={{ backgroundColor: "#fff5f5" }}
                >
                  <Group align="flex-start">
                    <ThemeIcon color="red" size={40} radius="md" variant="light">
                      <IconShieldCheck size={22} />
                    </ThemeIcon>
                    <div>
                      <Text fw={600} fz={18} color="#2E175A" style={{ lineHeight: 1.3, marginBottom: 4 }}>
                        Trusted Security
                      </Text>
                      <Text c="dimmed" fz={15} style={{ lineHeight: 1.4 }}>
                        Protect your business with AI-powered fraud detection.
                      </Text>
                    </div>
                  </Group>
                </Paper>

                <Paper
                  shadow="xs"
                  radius="md"
                  p="md"
                  style={{ backgroundColor: "#fff5f5" }}
                >
                  <Group align="flex-start">
                    <ThemeIcon color="red" size={40} radius="md" variant="light">
                      <IconWorld size={22} />
                    </ThemeIcon>
                    <div>
                      <Text fw={600} fz={18} color="#2E175A" style={{ lineHeight: 1.3, marginBottom: 4 }}>
                        Global Compliance
                      </Text>
                      <Text c="dimmed" fz={15} style={{ lineHeight: 1.4 }}>
                        Stay ahead with KYC, AML, GDPR, and more.
                      </Text>
                    </div>
                  </Group>
                </Paper>
              </Stack>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}

// Each section block
const SectionBlock = React.forwardRef(({ section, isActive, showHeader }, ref) => {
  return (
    <>
      {/* Header Card - Only show for first section */}
      {showHeader && (
        <Box mb="xl">
          <Text fw={500} c="red" fz={20} mb={5}>
            Products
          </Text>

          <Text fw={400} fz={32} mt={10}>
            Powerful APIs for fast, secure, and reliable customer onboarding
          </Text>
        </Box>
      )}

      {/* Content Block */}
      <Box
        ref={ref}
        style={{
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "20px 0",
          scrollMarginTop: "100px",
          opacity: isActive ? 1 : 0.6,
          transform: isActive ? "translateX(0)" : "translateX(-10px)",
          transition: "all 0.3s ease",
          marginTop: showHeader ? "-33px" : "0"
        }}
      >
        <Title order={2} fw={500} fz={48} mb={12}>
          {section.title}
        </Title>

        <Text c="dimmed" fw={400} fz={20} mb={20}>
          {section.description}
        </Text>

        <Text fw={400} mb={8}>
          Includes:
        </Text>
        <List
          spacing="sm"
          size="md"
          icon={
            <ThemeIcon color="red" size={22} radius="xl">
              <IconCheck size={14} />
            </ThemeIcon>
          }
        >
          {section.list.map((item, i) => (
            <List.Item key={i} c="#616161" fz={16}>
              {item}
            </List.Item>
          ))}
        </List>
      </Box>
    </>
  );
});

SectionBlock.displayName = "SectionBlock";

export default Products;