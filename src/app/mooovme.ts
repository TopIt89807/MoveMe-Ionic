import {AuthModule} from "../pages/auth";
import {CustomerModule} from "../pages/customer";

const ServiceProviderModules = [];

export const MooovMeModules = [
  AuthModule,
  CustomerModule,
  ...ServiceProviderModules
];
