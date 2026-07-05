import React, { useState, useEffect } from "react";
import {
    Container,
    Box,
    Typography,
    TextField,
    Button,
    MenuItem,
    Alert,
    CircularProgress,
    Card,
    CardMedia,
} from "@mui/material";
import Colors from "../../utils/Colors";

function UploadHero() {

    const [hero, setHero] = useState({
        name: "",
        franchise: "",
        realName: "",
        firstAppearance: "",
        creators: "",
        description: "",
        youtube: "",
    });

    const [imageFile, setImageFile] = useState(null);
    const [preview, setPreview] = useState("");

    const [loading, setLoading] = useState(false);

    const [alert, setAlert] = useState({
        show: false,
        type: "success",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setHero((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {

        const file = e.target.files[0];

        if (!file) return;

        if (!file.type.startsWith("image/")) {
            setAlert({
                show: true,
                type: "error",
                message: "Seleccione una imagen válida.",
            });
            return;
        }

        setImageFile(file);

        setPreview(URL.createObjectURL(file));
    };

    useEffect(() => {

        return () => {
            if (preview) {
                URL.revokeObjectURL(preview);
            }
        };

    }, [preview]);

    const validateForm = () => {

        if (
            hero.name.trim() === "" ||
            hero.franchise.trim() === "" ||
            hero.realName.trim() === "" ||
            hero.firstAppearance.trim() === "" ||
            hero.creators.trim() === "" ||
            hero.description.trim() === "" ||
            hero.youtube.trim() === "" ||
            !imageFile
        ) {

            setAlert({
                show: true,
                type: "error",
                message: "Complete todos los campos.",
            });

            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!validateForm()) return;

        setLoading(true);

        try {

            console.log(hero);
            console.log(imageFile);

            setAlert({
                show: true,
                type: "success",
                message: "Formulario válido.",
            });

        } catch (error) {

            setAlert({
                show: true,
                type: "error",
                message: error.message,
            });

        } finally {

            setLoading(false);

        }

    };

    return (

        <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>

            <Typography
                variant="h4"
                align="center"
                fontWeight="bold"
                gutterBottom
            >
                Upload Hero
            </Typography>

            {alert.show && (
                <Alert severity={alert.type} sx={{ mb: 3 }}>
                    {alert.message}
                </Alert>
            )}

            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                }}
            >

                <TextField
                    label="Hero Name"
                    name="name"
                    value={hero.name}
                    onChange={handleChange}
                    fullWidth
                />

                <TextField
                    select
                    label="Franchise"
                    name="franchise"
                    value={hero.franchise}
                    onChange={handleChange}
                    fullWidth
                >
                    <MenuItem value="Marvel">
                        Marvel
                    </MenuItem>

                    <MenuItem value="DC">
                        DC
                    </MenuItem>

                </TextField>

                <TextField
                    label="Real Name"
                    name="realName"
                    value={hero.realName}
                    onChange={handleChange}
                    fullWidth
                />

                <TextField
                    label="First Appearance"
                    name="firstAppearance"
                    value={hero.firstAppearance}
                    onChange={handleChange}
                    fullWidth
                />

                <TextField
                    label="Creators"
                    name="creators"
                    helperText="Separate multiple creators with commas."
                    value={hero.creators}
                    onChange={handleChange}
                    fullWidth
                />

                <TextField
                    multiline
                    rows={6}
                    label="Description"
                    name="description"
                    value={hero.description}
                    onChange={handleChange}
                    fullWidth
                />

                <TextField
                    label="YouTube Embed URL"
                    name="youtube"
                    value={hero.youtube}
                    onChange={handleChange}
                    fullWidth
                />

                <Button
                    variant="contained"
                    component="label"
                    style={{ background: Colors.background }}
                >
                    Select Hero Image

                    <input
                        hidden
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />

                </Button>

                {preview && (

                    <Card
                        sx={{
                            maxWidth: 350,
                            mx: "auto",
                        }}
                    >

                        <CardMedia
                            component="img"
                            image={preview}
                            alt="Hero Preview"
                        />

                    </Card>

                )}

                <Button
                    variant="contained"
                    type="submit"
                    size="large"
                    disabled={loading}
                    style={{ background: Colors.background }}
                >

                    {loading
                        ? <CircularProgress size={25} color="inherit" />
                        : "Save Hero"}

                </Button>

            </Box>

        </Container>

    );

}

export default UploadHero;