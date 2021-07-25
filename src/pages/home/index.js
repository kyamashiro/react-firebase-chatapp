import React from "react";
import { useAuth } from "contexts/AuthContext";
import { ChatUI } from "../../components/ChatUI";
import { Box, Grid, Typography } from "@material-ui/core";

export const Home = () => {
  const { user } = useAuth();

  // const props = {
  //   user,
  // };

  return (
    <Box mb={8}>
      <Grid container justifyContent={"center"} alignItems={"center"}>
        {!!user || (
          <Typography variant={"h6"}>
            チャットを利用するにはログインしてください
          </Typography>
        )}
        {!!user && (
          <React.Fragment>
            {/* <SignIn {...props} /> */}
            <ChatUI />
          </React.Fragment>
        )}
      </Grid>
    </Box>
  );
};

// const SignIn = (props) => {
//   return (
//     <div>
//       <Typography>ログイン中</Typography>
//       <p>{props.user.displayName}</p>
//       <p>{props.user.email}</p>
//       <p>{props.user.uid}</p>
//     </div>
//   );
// };
