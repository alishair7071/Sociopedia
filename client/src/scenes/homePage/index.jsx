import { Box, useMediaQuery } from "@mui/material";
import Navbar from "../navbar/index";
import { useSelector } from "react-redux";
import UserWidget from "../widgets/UserWidget.jsx";
import MyPostWidget from "../widgets/MyPostWidget.jsx";
import PostsWidget from "../widgets/PostsWidget.jsx";
import AdvertWidget from "../widgets/AdvertWidget.jsx";
import FriendListWidget from "../widgets/FriendListWidget.jsx";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <div>
      <Navbar></Navbar>
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={_id} picturePath={picturePath}></UserWidget>
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={picturePath}></MyPostWidget>
          <PostsWidget userId={_id}></PostsWidget>           
        </Box>
        {isNonMobileScreens && <Box flexBasis="26%">
          <AdvertWidget />
          <Box m="2rem 0" />
          <FriendListWidget userId={_id}></FriendListWidget>
          </Box>
          }
      </Box>
    </div>
  );
};

export default HomePage;
