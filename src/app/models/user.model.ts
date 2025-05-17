// user.model.ts

// This interface defines the structure of a User object
export interface User {
  uuid: string;
  userId: string;
  partyId: string;
  partyCode: string;
  partyName: string;
  activeCode: string;
  parentPartyCode: string;
  firstName: string;
  lastName: string;
  lastLoginTime: string;
  lastLogutTime: string;
  currentLoginTime: string;
  currentSessionId: string;
  lastSessionId: string;
  createdOn: string;
  createdBy: string;
  LastUpdatedOn: string;
  LastUpdatedBy: string;
}

// This interface defines the structure of the API response that contains a list of users
export interface ApiResponse {
  status: string;
  totalCount: string;
  usersList: User[];
}
