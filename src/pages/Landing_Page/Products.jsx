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
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";

// Product images
import Product1 from "../../assets/Images/Product1.png";
import Product2 from "../../assets/Images/Product2.png";
import Product3 from "../../assets/Images/Product3.png";
import Product4 from "../../assets/Images/Product4.png";
import Product5 from "../../assets/Images/Product5.png";

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
    image: Product5,
  },
];

function Products() {
  const [activeSection, setActiveSection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRefs = useRef([]);
  const observerRef = useRef();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Intersection Observer for detecting visible section
    const options = { root: null, threshold: 0.6 };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.findIndex(
            (ref) => ref === entry.target
          );
          if (index !== -1) setActiveSection(index);
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersect, options);

    sectionRefs.current.forEach((section) => {
      if (section) observerRef.current.observe(section);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <Container size="lg" py="xl" mb={80} mt={35}>
      <Grid gutter="xl">
        {/* Left side - Scrollable content */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack spacing={100}>
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

        {/* Right side - Sticky image */}
        {!isMobile && (
          <Grid.Col span={6}>
            <Box
              style={{
                position: "sticky",
                top: 0,
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
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
  );
}

// Section Block
const SectionBlock = React.forwardRef(({ section, isActive, showHeader }, ref) => {
  return (
    <Box
      ref={ref}
      style={{
        minHeight: "90vh", // ensures equal section height
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // vertical center
        padding: "40px 0",
        scrollMarginTop: "100px",
        opacity: isActive ? 1 : 0.5,
        transform: isActive ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.4s ease",
      }}
    >
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

      <Title order={2} fw={500} fz={42} mb={12}>
        {section.title}
      </Title>

      <Text c="dimmed" fw={400} fz={20} mb={20}>
        {section.description}
      </Text>

      <Text fw={500} mb={8}>
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
  );
});

SectionBlock.displayName = "SectionBlock";

export default Products;
