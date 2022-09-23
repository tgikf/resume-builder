import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Typography } from '@mui/material';

const MarkdownContent = (props: {
  textVariant: string;
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
