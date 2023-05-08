import { gql } from '@apollo/client';

export const ADD_USER = gql
  `mutation AddUser($username: String!, $email: String!, $password: String!) {
      addUser(username: $username, email: $email, password: $password) {
        token
        user {
          _id
          username
          email
          password
        }
      }
}`

export const LOG_IN = gql
  `mutation Login($username: String!, $password: String!) {
      login(username: $username, password: $password) {
        token
        user {
          username
          password
        }
      }
}`

export const ADD_CHAT = gql
  `mutation AddChat($users: [ID!]) {
    addChat(users: $users) {
      _id
      messages {
        createdAt
        text
        userID
      }
      users {
        username
      }
    }
}`

export const ADD_MESSAGE = gql
  `mutation AddMessage($id: ID!, $text: String!) {
    addMessage(_id: $id, text: $text) {
      messages {
        createdAt
        text
        userID
      }
      users {
        username
      }
    }
}`

export const REMOVE_CHAT = gql
  `mutation RemoveChat($id: ID!) {
    removeChat(_id: $id) {
      _id
    }
}`

export const REMOVE_MESSAGE = gql
  `mutation RemoveMessage($id: ID!) {
    removeMessage(_id: $id) {
      _id
    }
}`

export const ADD_FRIEND = gql
`mutation Mutation($username: String!) {
  addFriend(username: $username) {
    username
  }
}`

export const REMOVE_FRIEND = gql
`mutation Mutation($username: String!) {
  removeFriend(username: $username) {
    username
  }
}`