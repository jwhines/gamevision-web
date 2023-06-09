/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const restartDevice = /* GraphQL */ `
  query RestartDevice($id: ID!) {
    restartDevice(id: $id) {
      id
      name
      screen
      device_id
      tricode
      location
      used_by
      createdAt
      updatedAt
    }
  }
`;
export const getDevice = /* GraphQL */ `
  query GetDevice($id: ID!) {
    getDevice(id: $id) {
      id
      name
      screen
      device_id
      tricode
      location
      used_by
      createdAt
      updatedAt
    }
  }
`;
export const listDevices = /* GraphQL */ `
  query ListDevices(
    $filter: ModelDeviceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDevices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        screen
        device_id
        tricode
        location
        used_by
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
