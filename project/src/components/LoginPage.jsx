import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    useDisclosure,
    Text,
  } from "@chakra-ui/react";

  import React, { useEffect, useState} from "react";

  
  export function LoginPage() {
    const {isOpen, onOpen, onClose} = useDisclosure();
  
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const [text,setText]=useState("")
   
   const sendTodo=(text)=>{
    alert("Login success full")
   }
   
  
  
   
  
    return (
      <>
        <Button  onClick={onOpen} borderRadius="0" bg="white">Login {`&`} SignUP </Button>
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          size="2xl" borderRadius="0" 
        >
          <ModalOverlay  />
          <ModalContent h='400px' p='20px' m='80px' pr={10} pl={10}>
            <ModalHeader ><Text  fontSize='4xl'>Sign up or Sign in</Text></ModalHeader>
            
            <ModalCloseButton  />
            <ModalBody >
              <FormControl>
                <FormLabel>Mobile Number</FormLabel>
                <Input
                borderColor="orange.400"
                border="2px solid orange"
                
                  ref={initialRef}
                  value={text}
                  onChange={(e)=>setText(e.target.value)}
                  placeholder="Enter Your Mobile Number"
                />

                <Text fontSize='sm'>By creating your account you agree to our Term and condition </Text>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button
                onClick={() => {
                  sendTodo()
                  onClose()
                }}
                colorScheme="blue"
                mr={9} pr={24} pl={24} pt={8}  pb={8}borderRadius="0" bg='orange'
              >
                Continue
              </Button>
              
            </ModalFooter>
          </ModalContent>
        </Modal>

        
      </>
    );
  }
  