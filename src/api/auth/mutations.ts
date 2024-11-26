import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
	mutation Login($LoginInput: LoginInput!) {
		Login(input: $LoginInput) {
			id
			username
		}
	}
`;
