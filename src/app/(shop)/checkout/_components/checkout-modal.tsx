'use client';

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

export default function CheckoutModal() {
  const { isOpen, onClose } = useDisclosure();
  return (
    <Modal isOpen={true} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
          deserunt libero nostrum dolore maxime minus quam magnam fugit omnis.
          Ducimus nemo officia dignissimos aliquam maiores totam repellat ipsam
          modi. Quam perferendis, id soluta sint deleniti vitae dolorum non
          dicta vel corporis aspernatur quas reiciendis facere laborum
          laboriosam obcaecati velit molestias!
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
