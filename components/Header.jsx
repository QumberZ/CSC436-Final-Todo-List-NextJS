import Image from "next/image";
import Link from "next/link";
import TodoAppHeading from "./TodoAppHeading";

const Header = () => {
  return (
    <header className="bg-blue-700 py-4 px-8">
      <nav className="container mx-auto flex justify-between items-center">
      {/* <Image src="/todo.png" alt="" width={300} height={200} /> */}
      
      <TodoAppHeading/>
        <div>
          <Link href="/login">
            <span className="text-white text-4xl hover:text-brutal-gray duration-300 transition-all mx-4 cursor-pointer font-bold">
              Login
            </span>
          </Link>
          <Link href="/register">
            <span className="text-white text-4xl hover:text-brutal-gray duration-300 transition-all mx-4 cursor-pointer font-bold">
              Register
            </span>
          </Link>
        </div>
        
      </nav>
    </header>
  );
};

export default Header;




// const Navbar = () => {
//   const router = useRouter();
//   const [isLogoutLoading, setIsLogoutLoading] = useState(false);

//   const logoutHandler = async () => {
//     try {
//       setIsLogoutLoading(true);
//       await supabaseClient.auth.signOut();
//       router.push("/signin");
//     } catch (error) {
//       router.push("/signin");
//     } finally {
//       setIsLogoutLoading(false);
//     }
//   };

//   return (
//     <Box height="100%" p="5" bg="gray.100">
//       <Box maxW="6xl" mx="auto">
//         <Flex
//           as="nav"
//           aria-label="Site navigation"
//           align="center"
//           justify="space-between"
//         >
//           <Heading mr="4">TodoApp</Heading>
//           <Box>
//             <NavLink href="/profile">Profile</NavLink>
//             <ButtonGroup spacing="4" ml="6">
//               <Button colorScheme="blue">Add Todo</Button>
//               <Button
//                 colorScheme="red"
//                 onClick={logoutHandler}
//                 isLoading={isLogoutLoading}
//               >
//                 Logout
//               </Button>
//             </ButtonGroup>
//           </Box>
//         </Flex>
//       </Box>
//     </Box>
//   );
// };

// export default Navbar;