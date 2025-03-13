import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Users, Target, Award, Star } from "lucide-react";
import Header from "@/components/ui/header";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Project Sample</h3>
              <p className="text-sm text-gray-400">
                Your trusted partner in finding the perfect home.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/buy"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Buy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/rent"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Rent
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sell"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Sell
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-sm text-gray-400">123 Real Estate Street</p>
              <p className="text-sm text-gray-400">Cityville, State 12345</p>
              <p className="text-sm text-gray-400">Phone: (123) 456-7890</p>
              <p className="text-sm text-gray-400">Email: info@dreamhome.com</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
            © 2024 Project Sample. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
