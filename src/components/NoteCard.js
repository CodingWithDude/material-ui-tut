import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { IconButton, makeStyles, Typography } from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";

const useStyles = makeStyles({
  borderColor: {
    border: (note) => {
      if (note.category === "money") {
        return "2px solid green";
      }
      if (note.category === "todos") {
        return "2px solid blue";
      }
      if (note.category === "reminders") {
        return "2px solid purple";
      }
      if (note.category === "work") {
        return "2px solid red";
      }
    },
  },
});

const NoteCard = ({ note, handleDelete }) => {
  const classes = useStyles(note);
  return (
    <div>
      <Card className={classes.borderColor} elevation={1}>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
