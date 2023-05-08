import { gql } from '@apollo/client';

export const CHECK_USERNAME = gql
`query Query($username: String!) {
  checkUsername(username: $username)
}`

export const GET_USER_BY_USERNAME = gql 
  `query Query($username: String!) {
    getUserByUsername(username: $username) {
      username
    }
}`

export const GET_ALL_FRIENDS = gql 
  `query GetAllFriends($username: String!) {
    getAllFriends(username: $username) {
      username
    }
}`

export const GET_ALL_MESSAGES = gql
  `query GetAllFriends($id: ID!, $text: String!) {
    getAllMessages(_id: $id, text: $text) {
      messages {
        createdAt
        text
        userID
      }
    }
}`

export const USER = gql
  `query User($username: String!) {
    user(username: $username) {
      email
      username
      friends {
        username
      }
    }
}`