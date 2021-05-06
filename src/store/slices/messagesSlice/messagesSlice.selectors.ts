import { createSelector } from "@reduxjs/toolkit";
import { IStoreState } from "src/interfaces/store";

export const getMessagesSelector = (state : IStoreState) => state.messages.data;