import React from 'react'
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {FormikHelpers, useFormik} from "formik";
import {useSelector} from "react-redux";
import {Navigate} from 'react-router-dom'
import {useActions} from "../../common/hooks";
import {LoginParamsType} from "./auth-api";
import {ResponseType} from "../../common/types";
import {authThunks} from "./auth-reducer";
import {selectCaptcha, selectIsLoggedIn} from "./auth-selectors";

export const Login = () => {

    const {login} = useActions(authThunks)
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const captcha = useSelector(selectCaptcha)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: Partial<Omit<LoginParamsType, 'captcha'>> = {}
            if (!values.email) {
                errors.email = 'Email is required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }

            if (!values.password) {
                errors.password = 'Required'
            } else if (values.password.length < 4) {
                errors.password = 'Must be 4 characters or more'
            }
            return errors
        },
        onSubmit: (values: LoginParamsType, formikHelpers: FormikHelpers<LoginParamsType>) => {
            login(values)
                .unwrap()
                .catch((reason: ResponseType) => {
                    const {fieldsErrors} = reason
                    if (fieldsErrors) {
                        reason.fieldsErrors.forEach((fieldError) => {
                            formikHelpers.setFieldError(fieldError.field, fieldError.error)
                        })
                    }
                })
        }
    })

    if (isLoggedIn) {
        return <Navigate to={'/'}/>
    }

    return <Grid container justifyContent={'center'}>
        <Grid item justifyContent={'center'}>
            <form onSubmit={formik.handleSubmit}>
                <FormControl>
                    <FormLabel>
                        <p>To log in get registered
                            <a href={'https://social-network.samuraijs.com/'}
                               target={'_blank'} rel="noreferrer"> here
                            </a>
                        </p>
                        <p>or use common test account credentials:</p>
                        <p>Email: free@samuraijs.com</p>
                        <p>Password: free</p>
                    </FormLabel>
                    <FormGroup>
                        <TextField label="Email"
                                   margin="normal"
                                   {...formik.getFieldProps('email')}
                                   onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email ?
                            <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
                        <TextField type="password"
                                   label="Password"
                                   margin="normal"
                                   {...formik.getFieldProps('password')}
                                   onBlur={formik.handleBlur}
                        />
                        {formik.touched.password && formik.errors.password ?
                            <div style={{color: 'red'}}>{formik.errors.password}</div> : null}
                        <FormControlLabel label={'Remember me'}
                                          control={<Checkbox onChange={formik.handleChange}
                                                             checked={formik.values.rememberMe}
                                                             name='rememberMe'
                                          />}/>
                        {captcha !== null && <img src={captcha} alt=''/>}
                        {captcha !== null && <TextField type="captcha"
                                                        label="Captcha"
                                                        margin="normal"
                                                        {...formik.getFieldProps('captcha')}
                                                        onBlur={formik.handleBlur}
                        />}
                        <Button type={'submit'}
                                variant={'contained'}
                                disabled={!(formik.isValid && formik.dirty)}
                                color={'primary'}>
                            Login
                        </Button>
                    </FormGroup>
                </FormControl>
            </form>
        </Grid>
    </Grid>
}