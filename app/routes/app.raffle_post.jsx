import {
  Page,
  Card,
  Box,
  HorizontalGrid,
  VerticalStack,
  SkeletonDisplayText,
  SkeletonBodyText,
  Divider,
  Bleed,
} from '@shopify/polaris';

import {
  DuplicateMinor,
  ArchiveMinor,
  DeleteMinor,
} from '@shopify/polaris-icons';


export default function RafflePost() {
  return (
    <Page
      backAction={{ content: "Products", url: "/products" }}
      title="Raffle Post"
      secondaryActions={[
        {
          content: "Duplicate",
          icon: DuplicateMinor,
          accessibilityLabel: "Secondary action label",
          onAction: () => alert("Duplicate action"),
        },
        {
          content: "Archive",
          icon: ArchiveMinor,
          accessibilityLabel: "Secondary action label",
          onAction: () => alert("Archive action"),
        },
      ]}
      pagination={{
        hasPrevious: true,
        hasNext: true,
      }}
    >
      <HorizontalGrid columns={{ xs: 1, md: "2fr 1fr" }} gap="4">
        <VerticalStack gap="4">
          <Card roundedAbove="sm">
            <VerticalStack gap="4">
              <SkeletonLabel />
              <Box border="divider" borderRadius="base" minHeight="2rem" />
              <SkeletonLabel maxWidth="8rem" />
              <Box border="divider" borderRadius="base" minHeight="20rem" />
            </VerticalStack>
          </Card>
          <Card roundedAbove="sm">
            <VerticalStack gap="4">
              <SkeletonDisplayText size="small" />
              <HorizontalGrid columns={{ xs: 1, md: 2 }}>
                <Box border="divider" borderRadius="base" minHeight="10rem" />
                <Box border="divider" borderRadius="base" minHeight="10rem" />
              </HorizontalGrid>
            </VerticalStack>
          </Card>
        </VerticalStack>
        <VerticalStack gap={{ xs: "4", md: "2" }}>
          <Card roundedAbove="sm">
            <VerticalStack gap="4">
              <SkeletonDisplayText size="small" />
              <Box border="divider" borderRadius="base" minHeight="2rem" />
              <Box>
                <Bleed marginInline={{ xs: 4, sm: 5 }}>
                  <Divider />
                </Bleed>
              </Box>
              <SkeletonLabel />
              <Divider />
              <SkeletonBodyText />
            </VerticalStack>
          </Card>
          <Card roundedAbove="sm">
            <VerticalStack gap="4">
              <SkeletonLabel />
              <Box border="divider" borderRadius="base" minHeight="2rem" />
              <SkeletonLabel maxWidth="4rem" />
              <Box border="divider" borderRadius="base" minHeight="2rem" />
              <SkeletonLabel />
              <SkeletonBodyText />
            </VerticalStack>
          </Card>
        </VerticalStack>
      </HorizontalGrid>
    </Page>
  );
}

function Code({ children }) {
  return (
    <Box
      as="span"
      padding="025"
      paddingInlineStart="1"
      paddingInlineEnd="1"
      background="bg-subdued"
      borderWidth="1"
      borderColor="border"
      borderRadius="1"
    >
      <code>{children}</code>
    </Box>
  );
}

const SkeletonLabel = (props) => {
  return (
    <Box
      background="bg-strong"
      minHeight="1rem"
      maxWidth="5rem"
      borderRadius="base"
      {...props}
    />
  );
};