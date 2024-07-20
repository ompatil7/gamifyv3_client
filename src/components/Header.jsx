// /* eslint-disable no-unused-vars */
// import { Flex, Image, useColorMode, Box, Link, Button } from "@chakra-ui/react";
// import { useRecoilValue, useSetRecoilState } from "recoil";
// import userAtom from "../atoms/userAtom";
// import { AiFillHome } from "react-icons/ai";
// import { RxAvatar } from "react-icons/rx";
// import { Link as RouterLink } from "react-router-dom";
// import { FiLogOut } from "react-icons/fi";
// import useLogOut from "../hooks/useLogOut";
// import authScreenAtom from "../atoms/authAtom";
// import { BsFillChatQuoteFill } from "react-icons/bs";
// import { IoGameController } from "react-icons/io5";

// // import {Flex} from "@chakra-ui/react";
// function Header() {
//   const logout = useLogOut();
//   const { colorMode, toggleColorMode } = useColorMode();
//   const user = useRecoilValue(userAtom);
//   const setAuthScreen = useSetRecoilState(authScreenAtom);
//   return (
//     <Flex justifyContent={"space-between"} mt={6} mb="12">
//       {user && (
//         <Link as={RouterLink} to="/">
//           <AiFillHome size={24} />
//         </Link>
//       )}

//       {!user && (
//         <Link
//           as={RouterLink}
//           to={"/auth"}
//           onClick={() => setAuthScreen("login")}
//         >
//           Login
//         </Link>
//       )}
//       {/* <Image
//         cursor={"pointer"}
//         w={6}
//         alt="logo"
//         src={colorMode === "dark" ? "/light-logo.svg" : "/dark-logo.svg"}
//         onClick={toggleColorMode}
//       /> */}
//       <Image
//         cursor={"pointer"}
//         alt="logo"
//         w={6}
//         src={colorMode === "dark" ? "/light-logo.svg" : "/dark-logo.svg"}
//         onClick={toggleColorMode}
//       />

//       {user && (
//         <Flex alignItems={"center"} gap={6}>
//           <Link as={RouterLink} to="/games">
//             <IoGameController size={24} />
//           </Link>
//           <Link as={RouterLink} to={`/${user.username}`}>
//             <RxAvatar size={24} />
//           </Link>
//           <Link as={RouterLink} to={`/chat`}>
//             <BsFillChatQuoteFill size={24} />
//           </Link>
//           <Button size={"sm"} onClick={logout}>
//             <FiLogOut size={20} />
//           </Button>
//         </Flex>
//       )}
//       {!user && (
//         <Link
//           as={RouterLink}
//           to={"/auth"}
//           onClick={() => setAuthScreen("signup")}
//         >
//           Signup
//         </Link>
//       )}
//     </Flex>
//   );
// }

// export default Header;
/* eslint-disable no-unused-vars */
import {
  Flex,
  Image,
  useColorMode,
  Box,
  Link,
  Button,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";
import { AiFillHome } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { Link as RouterLink } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import useLogOut from "../hooks/useLogOut";
import authScreenAtom from "../atoms/authAtom";
import {
  BsFillChatQuoteFill,
  BsFillMoonFill,
  BsFillSunFill,
} from "react-icons/bs";
import { IoGameController } from "react-icons/io5";

function Header() {
  const logout = useLogOut();
  const { colorMode, toggleColorMode } = useColorMode();
  const user = useRecoilValue(userAtom);
  const setAuthScreen = useSetRecoilState(authScreenAtom);

  return (
    <Flex justifyContent={"space-between"} mt={6} mb="12" alignItems="center">
      {user && (
        <Link as={RouterLink} to="/">
          <AiFillHome size={24} />
        </Link>
      )}

      {!user && (
        <Link
          as={RouterLink}
          to={"/auth"}
          onClick={() => setAuthScreen("login")}
        >
          Login
        </Link>
      )}
      <Link as={RouterLink} to="/">
        <Text
          fontSize="2xl"
          fontStyle="italic"
          fontWeight="bold"
          textAlign="center"
          flex={1}
          ml={{ base: 0, md: 140 }} // Adjust ml value as needed
          display={{ base: "none", md: "flex" }} // Hide on mobile, show on md and above
          // ml={100}
          cursor={"pointer"}
        >
          gamify
        </Text>
      </Link>

      <Flex alignItems="center" gap={6}>
        <IconButton
          aria-label="Toggle theme"
          icon={
            colorMode === "dark" ? (
              <BsFillSunFill size={24} />
            ) : (
              <BsFillMoonFill size={24} />
            )
          }
          onClick={toggleColorMode}
          size="md"
          variant="ghost"
        />

        {user && (
          <>
            <Link as={RouterLink} to="/games">
              <IoGameController size={24} />
            </Link>
            <Link as={RouterLink} to={`/${user.username}`}>
              <RxAvatar size={24} />
            </Link>
            <Link as={RouterLink} to={`/chat`}>
              <BsFillChatQuoteFill size={24} />
            </Link>
            <Button size={"sm"} onClick={logout}>
              <FiLogOut size={20} />
            </Button>
          </>
        )}

        {!user && (
          <Link
            as={RouterLink}
            to={"/auth"}
            onClick={() => setAuthScreen("signup")}
          >
            Signup
          </Link>
        )}
      </Flex>
    </Flex>
  );
}

export default Header;
