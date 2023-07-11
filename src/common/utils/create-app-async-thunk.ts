import {createAsyncThunk} from "@reduxjs/toolkit";
import {AppDispatch, AppStateType} from "../../app/store";
import {ResponseType} from "../types";

/**
 Эта функция предназначена для того, чтобы избавиться от дублирования кода по созданию типов в санке
 */
export const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: AppStateType
    dispatch: AppDispatch
    rejectValue: null | ResponseType
}>()