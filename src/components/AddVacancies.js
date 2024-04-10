// AddVacanciesModal.js

// Import useState hook from React
import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from "@mui/material";

const AddVacanciesModal = ({ open, handleClose, addVacancy, editVacancy, vacancy }) => {
    // State to hold input values
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");

    // Populate form fields with previous data when editing
    useEffect(() => {
        if (vacancy) {
            setTitle(vacancy.title);
            setDetails(vacancy.details.join("\n"));
        }
    }, [vacancy]);

    // Handler function for submitting form
    const handleSubmit = () => {
        // Create a new vacancy object
        const newVacancy = {
            title: title,
            details: details.split("\n"), // Split details into an array by newline character
        };

        if (vacancy) {
            // If editing, call the editVacancy function passed from parent component
            editVacancy(newVacancy);
        } else {
            // If adding, call the addVacancy function passed from parent component
            addVacancy(newVacancy);
        }

        // Close the modal
        handleClose();
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{vacancy ? "Edit Vacancy" : "Add Vacancies"}</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Title"
                    type="text"
                    fullWidth
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                    margin="dense"
                    label="Details"
                    type="text"
                    fullWidth
                    multiline
                    rows={4}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit}>{vacancy ? "Save" : "Submit"}</Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddVacanciesModal;
