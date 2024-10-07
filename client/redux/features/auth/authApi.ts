import { register } from "module";
import { apiSlice } from "../api/apiSlice"; 
import { useerRegistration } from "./authSlice";
import { data } from "autoprefixer";


type RegistrationResponse = {
    message: string;
    activationToken: string;
};


type RegistrationData = {};


export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        //endpoints here
        register: builder.mutation<RegistrationResponse, RegistrationData>({
            query: (data) => ({
                url: "registration",
                method:"POST",
                body: data,
                credentials: "include" as const,
            }),
            async onQueryStarted(arg, {queryFulfilled,dispatch}){
                try {
                    const result = await queryFulfilled;
                    dispatch(
                        useerRegistration({
                            token: result.data.activationToken,
                        })
                    );
                     
                } catch (error:any) {
                    console.log(error);
                }
            }
        }),
        activation: builder.mutation({
            query: ({activation_token,activation_code}) => ({
                url: "activation",
                method:"POST",
                body:{
                    activation_token,
                    activation_code,
                },

            })
           
        }),
    }),
});

export const {useRegisterMutation, useActivationMutation} = authApi;