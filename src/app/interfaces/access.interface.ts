import { Access } from "src/core/models/access.model";

export interface AccessInterface {
    isLoading?: boolean;
    error?: string;
    accesses?: Array<Access>;
}