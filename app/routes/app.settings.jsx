import { useBreakpoints, Page, Card, Box, HorizontalGrid, VerticalStack, Text, TextField, Divider } from '@shopify/polaris';

export default function RaffleAppSettings() {
  return (
    <Page
      divider
      primaryAction={{ content: "View on your store", disabled: true }}
      secondaryActions={[
        {
          content: "Duplicate",
          accessibilityLabel: "Secondary action label",
          onAction: () => alert("Duplicate action"),
        },
      ]}
    >
      <VerticalStack gap={{ xs: "8", sm: "4" }}>
        <HorizontalGrid columns={{ xs: "1fr", md: "2fr 5fr" }} gap="4">
          <Box
            as="section"
            paddingInlineStart={{ xs: 4, sm: 0 }}
            paddingInlineEnd={{ xs: 4, sm: 0 }}
          >
            <VerticalStack gap="4">
              <Text as="h3" variant="headingMd">
                InterJambs
              </Text>
              <Text as="p" variant="bodyMd">
                Interjambs are the rounded protruding bits of your puzzlie piece
              </Text>
            </VerticalStack>
          </Box>
          <Card roundedAbove="sm">
            <VerticalStack gap="4">
              <TextField label="Interjamb style" />
              <TextField label="Interjamb ratio" />
            </VerticalStack>
          </Card>
        </HorizontalGrid>
        {smUp ? <Divider /> : null}
        <HorizontalGrid columns={{ xs: "1fr", md: "2fr 5fr" }} gap="4">
          <Box
            as="section"
            paddingInlineStart={{ xs: 4, sm: 0 }}
            paddingInlineEnd={{ xs: 4, sm: 0 }}
          >
            <VerticalStack gap="4">
              <Text as="h3" variant="headingMd">
                Dimensions
              </Text>
              <Text as="p" variant="bodyMd">
                Interjambs are the rounded protruding bits of your puzzlie piece
              </Text>
            </VerticalStack>
          </Box>
          <Card roundedAbove="sm">
            <VerticalStack gap="4">
              <TextField label="Horizontal" />
              <TextField label="Interjamb ratio" />
            </VerticalStack>
          </Card>
        </HorizontalGrid>
      </VerticalStack>
    </Page>
  );
}

const { smUp } = useBreakpoints();
