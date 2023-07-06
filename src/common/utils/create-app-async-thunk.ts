import {createAsyncThunk} from "@reduxjs/toolkit";
import {AppDispatch, AppStateType} from "../../app/store";
import {ResponseType} from "../types";

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: AppStateType
    dispatch: AppDispatch
    rejectValue: null | ResponseType
}>()