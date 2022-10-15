import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Typography } from '@mui/material';

const MarkdownContent = (props: {
  textVariant: "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "inherit" | "subtitle1" | "subtitle2" | "body1" | "body2" | "overline";
  content: string;
  sx?: { [key: string]: string };
}) => {
  return (
    <Typography variant={props.textVariant} sx={props.sx}>
      <ReactMarkdown
        components={{
          p: React.Fragment,
        }}
        linkTarget="_blank"
      >
        {props.content}
      </ReactMarkdown>
    </Typography>
  );
};

export default MarkdownContent;
