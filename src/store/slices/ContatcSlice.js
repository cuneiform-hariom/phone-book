import { createSlice } from "@reduxjs/toolkit";

const ContactSlice = createSlice({
    name: "contacts",
    initialState: [],
    reducers: {
        addContact(state, action) {
            state.push(action.payload);
        },
        deleteContact(state, action) { },
        updateContact(state, action) { }
    }
});

console.log(ContactSlice.actions)
export const { addContact, deleteContact, updateContact } = ContactSlice.actions;
export default ContactSlice.reducer ;