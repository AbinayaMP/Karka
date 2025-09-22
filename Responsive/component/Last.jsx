import { Box, Typography } from "@mui/material";

const Last = ({ item }) => {
  if (!item) return null;

  return (
    <Box display="flex" alignItems="center" mb={3}>
      <Box
        sx={{
          backgroundColor: "white",
          color: "black",
          borderRadius: "8px",
          textAlign: "center",
          width: 60,
          height: 60,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mr: 2,
          boxShadow: 2,
        }}
      >
        <Typography variant="caption" sx={{ fontWeight: "bold" }}>
          {item.month}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {item.day}
        </Typography>
      </Box>

      <Box>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          {item.title}
        </Typography>
        <Typography variant="body2" color="white">
          {item.des}
        </Typography>
      </Box>
    </Box>
  );
};

export default Last;
