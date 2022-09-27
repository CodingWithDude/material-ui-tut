import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { IconButton, Typography } from "@material-ui/core";
import { DeleteOutline } from "@material-ui/icons";

const NoteCard = ({ note }) => {
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          action={
            <IconButton onClick={() => console.log("delete", note.title)}>
              <DeleteOutline />
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