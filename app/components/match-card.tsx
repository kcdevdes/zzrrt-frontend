'use client'

import Image from 'next/image'
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
} from '@chakra-ui/react'

export default function MatchCard() {
    return (
        <Center py={6}>
            <Box
                maxW={'445px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}>
                <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                    <Image
                        src={''}
                        fill
                        alt="Example"
                    />
                </Box>
                <Stack>
                    <Text
                        color={'green.500'}
                        textTransform={'uppercase'}
                        fontWeight={800}
                        fontSize={'sm'}
                        letterSpacing={1.1}>
                        매치
                    </Text>
                    <Heading
                        color={useColorModeValue('gray.700', 'white')}
                        fontSize={'2xl'}
                        fontFamily={'body'}>
                        가장 맛있는 라면
                    </Heading>
                    <Text color={'gray.500'}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                    </Text>
                </Stack>
                <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                    <Avatar src={'https://avatars0.githubusercontent.com/u/1164541?v=4'} />
                    <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                        <Text fontWeight={600}>Admin</Text>
                        <Text color={'gray.500'}>2025.01.01 · 100명 플레이함</Text>
                    </Stack>
                </Stack>
            </Box>
        </Center>
    )
}