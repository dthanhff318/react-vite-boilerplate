import { useQuery } from "@apollo/client";
import { TLoginBody } from "./types";
import { gql } from "@apollo/client";

export const LOGIN = (loginData: TLoginBody) => {
	const { data, loading, error } = useQuery(
		gql`query {
            Login(LoginInput :${loginData}){
              id
              username
            }
          }`
	);
	return { products: data?.products || [], loading, error };
};
