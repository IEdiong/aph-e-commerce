'use client';
import { Button, useDisclosure, Text, Image } from '@/utils/chakra-components';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

export default function CartIcon() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        p="0"
        h="28px"
        minW="28px"
        bg="transparent"
        _hover={{
          backgroundColor: 'transparent',
        }}
        onClick={onOpen}
      >
        <Image src="/assets/shared/desktop/icon-cart.svg" alt="" />
      </Button>

      <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold" mb="1rem">
              You can scroll the content behind the modal
            </Text>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
              culpa libero, tempora ipsum corrupti adipisci cumque, aliquam
              nobis rem repellat numquam, aut error amet dolorum rerum id
              exercitationem. Quis, sint.
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
