import { createSelector } from "@reduxjs/toolkit";
import { IStoreState } from "src/interfaces/store";

export const getUsersSelector = (state : IStoreState) => state.users.data;
export const getCurrentUserSelector = (state : IStoreState) => state.users.currentUser;