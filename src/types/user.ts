interface UserType {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    premiumSubscription?: boolean;
    accessToken?: string;
    refreshToken?: string;
    subId?: string;
  }
  
  type UserResponseType = {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    premiumSubscription?: boolean;
    accessToken?: string;
    refreshToken?: string;
    subId?: string;
  };
  
  export type { UserType, UserResponseType };