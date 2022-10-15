import { Box, Stack, Typography } from "@mui/material";
import { CertificationEntry } from "../types";

const Certifications = (props: {
  certifications: CertificationEntry[],
}): JSX.Element => props.certifications.length > 0 ? (
  <Box>
    <Typography variant="h4" color="primary.dark">
      Certifications
    </Typography>
    {props.certifications.map((e, i) =>
      <Box key={`cert${e.title}${i}`}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">{e.title}</Typography>
          <Typography variant="h6">{e.date}</Typography>
        </Box>
        <Typography variant="body1">{e.institution}</Typography>
      </Box>
    )}
  </Box>
) : <></>;

export default Certifications;
