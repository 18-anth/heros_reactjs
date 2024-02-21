import React, { useState } from "react";
import { TextField } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { getDatabase, ref as dbRef, set } from "firebase/database";
import {
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  LinearProgress,
  Container,
  Typography,
  Box,
  Snackbar,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import MuiAlert from "@mui/material/Alert";
// eslint-disable-next-line no-unused-vars
import { storage } from '../../database/firebase';

const Edit = () => {
  const [selectedBrand, setSelectedBrand] = useState("images_MARVEL");

  const [image, setImage] = useState([]);
  const [progress, setProgress] = useState(0);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleChange = (e) => {
    if (e.target.files.length > 0) {
      const fileList = Array.from(e.target.files);
      setImage(fileList);
    }
  };

  const handleUpload = async () => {
    if (image.length > 0) {
      const storage = getStorage();
      const database = getDatabase();
      const uploadTasks = [];

      image.forEach((image) => {
        const foldertitle = uuidv4();
        const storageRef = ref(
          storage,
          `images_base/${selectedBrand}/${image.name}`
        );
        const uploadTask = uploadBytesResumable(storageRef, image);
        uploadTasks.push(uploadTask);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progress);
          },
          (error) => {
            console.error(error.message);
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

            const productRef = dbRef(
              database,
              `Heros/${selectedBrand}/${foldertitle}`
            );
            //const newImageRef = push(productRef);

            await set(productRef, {
              name,
              title,
              description,
              videoUrl,
              imageUrl: downloadURL,
            });

            console.log("Successfully uploaded image:", downloadURL);
          }
        );
      });
      await Promise.all(uploadTasks);
      setProgress(0);
      setOpenSnackbar(true);
    } else {
      console.error("Select at least one image to upload");
    }
  };

  const [name, setname] = useState("");
  const [title, settitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoUrl, setvideoUrl] = useState("");

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h4" gutterBottom style={{ fontWeight: "700" }}>
          Subir Imágenes
        </Typography>
        <FormControl
          fullWidth
          sx={{ marginBottom: 2 }}
          style={{ background: "#fff" }}
        >
          <InputLabel id="select-brand-label">
            Seleccione la franquicia
          </InputLabel>
          <Select
            labelId="select-brand-label"
            id="select-brand"
            label="Seleccione la franquicia"
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            <MenuItem value="images_MARVEL">Marvel</MenuItem>
            <MenuItem value="images_DC">DC</MenuItem>
          </Select>
        </FormControl>

        <FormControl
          fullWidth
          sx={{ marginBottom: 2 }}
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            component="label"
            startIcon={<CloudUploadIcon />}
            fullWidth
          >
            Elejir Imagen
            <input
              type="file"
              hidden
              onChange={handleChange}
              accept="image/*"
              multiple
            />
          </Button>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <TextField
            label="name"
            fullWidth
            sx={{ marginBottom: 2 }}
            value={name}
            onChange={(e) => setname(e.target.value)}
            style={{ background: "#fff" }}
          />
          <TextField
            label="title"
            fullWidth
            sx={{ marginBottom: 2 }}
            value={title}
            onChange={(e) => settitle(e.target.value)}
            style={{ background: "#fff" }}
          />

          <TextField
            label="Descripción"
            fullWidth
            sx={{ marginBottom: 2 }}
            value={description}
            style={{ background: "#fff" }}
            onChange={(e) => setDescription(e.target.value)}
          />

          <TextField
            label="videoUrl"
            fullWidth
            sx={{ marginBottom: 2 }}
            style={{ background: "#fff" }}
            value={videoUrl}
            onChange={(e) => setvideoUrl(e.target.value)}
          />
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpload}
          sx={{ marginBottom: 2 }}
        >
          Subir Imagen
        </Button>
        {progress > 0 && (
          <LinearProgress variant="determinate" value={progress} />
        )}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        >
          <MuiAlert
            onClose={handleCloseSnackbar}
            severity="success"
            sx={{ width: "100%" }}
          >
            ¡Imagen(es) subida(s) con éxito!
          </MuiAlert>
        </Snackbar>
      </Box>
    </Container>
  );
};

export default Edit;
