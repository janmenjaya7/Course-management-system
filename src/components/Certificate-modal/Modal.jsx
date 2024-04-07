import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import CertificateModul from "./CertificateModul";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export default function Modals({
  open,
  handleCloseEnroll,
  setOpen,
  ModalsContent,
}) {
  return (
    <>
      <Modal
        open={open}
        setOpen={setOpen}
        onClose={handleCloseEnroll}
        // ModalsContent={<p>hi dsklaj</p>}
      >
        <Box sx={style}>{ModalsContent}</Box>
      </Modal>
    </>
  );
}
{
  /* <CertificateModul setOpen={setOpen}/> */
}
