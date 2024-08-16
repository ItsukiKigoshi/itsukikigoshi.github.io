"use client";
import { DialogTitle, Dialog, Box, Link } from "@mui/material";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export interface DialogAboutMeProps {
  open: boolean;
  onClose: () => void;
}

export default function DialogAboutMe(props: DialogAboutMeProps) {
  const [markdownContent, setMarkdownContent] = useState<string>("");

  useEffect(() => {
    const fetchMarkdown = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/ItsukiKigoshi/ItsukiKigoshi/main/README.md"
      );
      const text = await response.text();
      setMarkdownContent(text);
    };
    fetchMarkdown();
  }, []);

  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>
        About Me: Itsuki Kigoshi (
        <Link
          href="https://github.com/ItsukiKigoshi/ItsukiKigoshi/blob/main/README.md"
          target="_blank"
        >
          Source
        </Link>
        )
      </DialogTitle>
      <Box component="section" sx={{ px: 4, pb: 4 }}>
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </Box>
    </Dialog>
  );
}
