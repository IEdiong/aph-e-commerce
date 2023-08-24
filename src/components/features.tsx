import { Heading, Text, VStack } from '@/utils/chakra-components';

const Features = ({ features }: { features: string }) => {
  const paragraphs = features.split('\n\n');

  return (
    <VStack as="section" spacing="32px" align="flex-start" w="635px">
      <Heading as="h2" variant="h3">
        Features
      </Heading>
      <VStack align="flex-start" spacing="4" opacity="0.5">
        {paragraphs.map((feat, idx) => (
          <Text key={idx}>{feat}</Text>
        ))}
      </VStack>
    </VStack>
  );
};

export default Features;
