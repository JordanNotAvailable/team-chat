import { gql } from '@apollo/client';

export const CHECK_USERNAME_QUERY = gql`
  query checkUsername($username: String!) {
    user(username: $username) {
      id
    }
  }`