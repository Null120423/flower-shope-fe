"use client";
import { ButtonPrimary } from "@/components/ui";
import TransitionLink from "@/components/ui/TransitionLink";
import { ROUTES } from "@/routes/routes";
import { ArrowLeft, Edit, MapPin, Plus, Trash2 } from "lucide-react";
import { useState } from "react";

interface Address {
  id: number;
  name: string;
  phone: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  isDefault: boolean;
}

const mockAddresses: Address[] = [
  {
    id: 1,
    name: "John Doe",
    phone: "+1 234 567 8900",
    streetAddress: "123 Rose Garden Street",
    city: "Bloom City",
    state: "BC",
    zipCode: "12345",
    isDefault: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    phone: "+1 234 567 8901",
    streetAddress: "456 Tulip Avenue",
    city: "Petal Town",
    state: "PT",
    zipCode: "67890",
    isDefault: false,
  },
  {
    id: 3,
    name: "Work Address",
    phone: "+1 234 567 8902",
    streetAddress: "789 Orchid Boulevard, Suite 100",
    city: "Garden Valley",
    state: "GV",
    zipCode: "11223",
    isDefault: false,
  },
];

export default function AddressPage() {
  const [addresses, setAddresses] = useState<Address[]>(mockAddresses);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleSetDefault = (id: number) => {
    setAddresses(
      addresses.map((addr) => ({
        ...addr,
        isDefault: addr.id === id,
      }))
    );
  };

  const handleDelete = (id: number) => {
    setAddresses(addresses.filter((addr) => addr.id !== id));
  };

  const handleEdit = (id: number) => {
    setEditingId(id);
    setShowAddForm(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-rose-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <TransitionLink href={ROUTES.PUBLIC_ROUTES.PROFILE}>
            <button className="flex items-center gap-2 text-gray-600 hover:text-rose-500 mb-4 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to Profile
            </button>
          </TransitionLink>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent mb-2">
                My Addresses
              </h1>
              <p className="text-gray-600">
                Manage your delivery addresses
              </p>
            </div>
            <ButtonPrimary
              className="px-6"
              onClick={() => {
                setEditingId(null);
                setShowAddForm(true);
              }}
            >
              <Plus className="w-5 h-5" />
              Add New Address
            </ButtonPrimary>
          </div>
        </div>

        {/* Add/Edit Form */}
        {showAddForm && (
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 mb-8 animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {editingId ? "Edit Address" : "Add New Address"}
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all"
                    placeholder="+1 234 567 8900"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Street Address
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all"
                  placeholder="123 Rose Garden Street"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all"
                    placeholder="Bloom City"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    State
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all"
                    placeholder="BC"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all"
                    placeholder="12345"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="setDefault"
                  className="w-5 h-5 text-rose-500 border-gray-300 rounded focus:ring-rose-400"
                />
                <label htmlFor="setDefault" className="text-gray-700">
                  Set as default address
                </label>
              </div>
              <div className="flex gap-4 pt-4">
                <ButtonPrimary className="flex-1">
                  {editingId ? "Update Address" : "Save Address"}
                </ButtonPrimary>
                <button
                  type="button"
                  onClick={() => {
                    setShowAddForm(false);
                    setEditingId(null);
                  }}
                  className="flex-1 px-6 py-4 border-2 border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Address List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {addresses.map((address, index) => (
            <div
              key={address.id}
              className={`relative bg-white rounded-3xl p-6 border-2 transition-all duration-300 hover:shadow-xl animate-fade-in ${
                address.isDefault
                  ? "border-rose-400 bg-gradient-to-br from-pink-50 to-rose-50"
                  : "border-gray-200 hover:border-pink-200"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Default Badge */}
              {address.isDefault && (
                <div className="absolute -top-3 left-6 bg-gradient-to-r from-rose-400 to-pink-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                  ✓ Default Address
                </div>
              )}

              {/* Location Icon */}
              <div className="flex justify-between items-start mb-4">
                <div className="bg-gradient-to-br from-rose-100 to-pink-100 p-3 rounded-2xl">
                  <MapPin className="w-6 h-6 text-rose-500" />
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(address.id)}
                    className="p-2 hover:bg-pink-100 rounded-xl transition-colors group"
                  >
                    <Edit className="w-5 h-5 text-gray-600 group-hover:text-rose-500" />
                  </button>
                  <button
                    onClick={() => handleDelete(address.id)}
                    className="p-2 hover:bg-red-100 rounded-xl transition-colors group"
                  >
                    <Trash2 className="w-5 h-5 text-gray-600 group-hover:text-red-500" />
                  </button>
                </div>
              </div>

              {/* Address Details */}
              <div className="space-y-2 mb-4">
                <h3 className="text-xl font-bold text-gray-800">
                  {address.name}
                </h3>
                <p className="text-gray-600 font-medium">{address.phone}</p>
                <div className="pt-2 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    {address.streetAddress}
                  </p>
                  <p className="text-gray-700">
                    {address.city}, {address.state} {address.zipCode}
                  </p>
                </div>
              </div>

              {/* Set Default Button */}
              {!address.isDefault && (
                <button
                  onClick={() => handleSetDefault(address.id)}
                  className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-rose-50 to-pink-50 text-rose-600 font-semibold rounded-xl hover:from-rose-100 hover:to-pink-100 transition-all duration-300 border border-rose-200"
                >
                  Set as Default
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Empty State */}
        {addresses.length === 0 && (
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
            <div className="mb-6">
              <MapPin className="w-24 h-24 text-gray-300 mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-600 mb-2">
              No addresses yet
            </h3>
            <p className="text-gray-500 mb-6">
              Add your first delivery address to get started
            </p>
            <ButtonPrimary
              className="px-8"
              onClick={() => setShowAddForm(true)}
            >
              <Plus className="w-5 h-5" />
              Add Your First Address
            </ButtonPrimary>
          </div>
        )}
      </div>
    </div>
  );
}
