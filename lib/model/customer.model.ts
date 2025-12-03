import BaseModel from "./base.model";

export interface AddressModel extends BaseModel {
  fullName: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  province: string;
  district: string;
  cityCode: string;
  provinceCode: string;
  districtCode: string;
  postalCode: string;
  country: string;
  isDefault: boolean;
  displayAddress: string;
}
export interface UserModel extends BaseModel {
  username: string;
  email?: string;
  phone?: string;
  customer: CustomerModel;
  isConnectGoogle: boolean;
  isConnectFacebook: boolean;
}
export interface CustomerModel {
  firstName: string;
  lastName: string;
  city: string;
  country: string;
  addresses: AddressModel[];
}
