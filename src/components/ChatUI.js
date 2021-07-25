import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import { useAuth } from "../contexts/AuthContext";
import firebase from "firebase/init";

const useStyles = makeStyles((theme) => ({
  imageInput: {
    display: "none",
  },
  paper: {
    paddingBottom: 24,
  },
  list: {
    marginBottom: 16,
  },
}));

const saveMessage = (user, messageText) => {
  return firebase
    .firestore()
    .collection("messages")
    .add({
      name: user.displayName,
      text: messageText,
      profilePicUrl: user.photoURL,
      timestamp: firebase.firestore.Timestamp.now(),
    })
    .catch(function (error) {
      console.error("Error writing new message to database", error);
    });
};

export const ChatUI = () => {
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  const styles = useStyles();

  useEffect(() => {
    const loadMessages = () => {
      const query = firebase
        .firestore()
        .collection("messages")
        .orderBy("timestamp", "desc")
        .limit(12);

      query.onSnapshot(function (snapshot) {
        const data = snapshot.docs.map((doc) => doc.data());
        setMessages(data);
      });
    };
    loadMessages();
  }, []);

  return (
    <Grid xs={8}>
      <Paper square elevation={3} className={styles.paper}>
        <List className={styles.list}>
          {!!messages &&
            messages.map((message) => {
              return (
                <React.Fragment key={message.id}>
                  <ListItem button>
                    <ListItemAvatar>
                      <Avatar
                        alt="Profile Picture"
                        src={message.profilePicUrl}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <React.Fragment key={message.id}>
                          <Typography
                            component="span"
                            variant="h5"
                            color="textPrimary"
                          >
                            {message.text}
                          </Typography>
                        </React.Fragment>
                      }
                      secondary={
                        <React.Fragment key={message.id}>
                          <Grid
                            container
                            justifyContent={"flex-end"}
                            direction={"column"}
                          >
                            <Typography>{message.name}</Typography>
                            <Typography
                              component="span"
                              variant="body2"
                              color="textSecondary"
                            >
                              {`${message.timestamp.toDate()}`}
                            </Typography>
                          </Grid>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </React.Fragment>
              );
            })}
        </List>
        <Box p={2}>
          <Grid container justifyContent={"center"} alignItems={"center"}>
            <Grid item xs={10}>
              <Box mr={2}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="message-input">Message...</InputLabel>
                  <Input
                    id="message-input"
                    onChange={(event) => {
                      console.log(event.target.value);
                      setText(event.target.value);
                    }}
                  />
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={1}>
              <Button
                size="large"
                color="primary"
                variant="outlined"
                onClick={() => {
                  saveMessage(user, text);
                  setText("");
                }}
              >
                送信
              </Button>
            </Grid>
            <Grid item xs={1}>
              <input
                accept="image/*"
                className={styles.imageInput}
                id="icon-button-file"
                type="file"
              />
              <label htmlFor="icon-button-file">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCamera />
                </IconButton>
              </label>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Grid>
  );
};
