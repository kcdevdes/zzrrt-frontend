'use client'

import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center, Grid, GridItem,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import MatchCard from "@/app/components/match-card";

function Nav() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
              <Text
                  textTransform={'uppercase'}
                  fontWeight={400}
                  fontSize={'2em'}
                  letterSpacing={1.1}>
                  찌리릿
              </Text>
          </Box>

            <Flex
                w={{ base: 'full', md: 'auto' }}
                alignItems={'center'}
                justifyContent={'space-around'}
            >
                <Button>
                    랭킹
                </Button>
                <Button>
                    검색
                </Button>
                <Button>
                    제작
                </Button>
                <Button>
                    사용법
                </Button>
            </Flex>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default function Page() {
    return (
        <>
          <Nav />
          <Grid
              templateColumns={{
                base: 'repeat(1, 1fr)',  // 모바일: 1칸
                md: 'repeat(2, 1fr)',    // 태블릿: 2칸
                lg: 'repeat(3, 1fr)'     // PC: 3칸
              }}
              gap={6} // 그리드 아이템 사이의 간격 설정
          >
              <GridItem>
                  <MatchCard/>
              </GridItem>
              <GridItem>
                  <MatchCard/>
              </GridItem>
              <GridItem>
                  <MatchCard/>
              </GridItem>
              <GridItem>
                  <MatchCard/>
              </GridItem>
              <GridItem>
                  <MatchCard/>
              </GridItem>
              <GridItem>
                  <MatchCard/>
              </GridItem>
              <GridItem>
                  <MatchCard/>
              </GridItem>
              <GridItem>
                  <MatchCard/>
              </GridItem>
              <GridItem>
                  <MatchCard/>
              </GridItem>
          </Grid>
        </>
    )
}