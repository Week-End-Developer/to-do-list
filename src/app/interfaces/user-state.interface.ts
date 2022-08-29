import { User } from "src/core/models/user.model";

export interface UserStateInterface {
    isLoading?: boolean;
    error?: string;
    user?: User;
    users?: Array<User>;
}