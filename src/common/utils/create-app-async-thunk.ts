import {createAsyncThunk} from "@reduxjs/toolkit";
import {AppDispatch, AppStateType} from "../../app/store";

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: AppStateType
    dispatch: AppDispatch
    rejectValue: unknown
}>()