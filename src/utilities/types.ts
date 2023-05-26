import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";
import React from "react";

export type APIResponse = {
  status: boolean;
  message: string;
  data: any;
};
export type tokenType = "user" | "admin" | "superadmin";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type UserType = {
  id: number;
  name: string;
  email: string;
};
export type UserTypeWithToken = {
  sub: number;
  name: string;
  email: string;
  role?: string;
}

export type SideBarRoutes = {
  id: string;
  path: string;
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  children?: [{ path: string; name: string; id: string }];
};
