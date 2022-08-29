import { User } from "src/core/models/user.model";

export interface StateInterface {
    isLoading?: boolean;
    error?: string;
    users?: Array<User>;
}