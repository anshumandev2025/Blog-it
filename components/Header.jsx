"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Avatar } from "@nextui-org/avatar";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { handleSignIn, handleSignOut, sessionUser } from "@/actions/auth";

const Header = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchLoginUserDetails = async () => {
      const session = await sessionUser();
      console.log("session", session);
      setUser(session);
    };
    fetchLoginUserDetails();
  }, []);
  return (
    <>
      <Navbar classNames="">
        <NavbarBrand>
          <Link href="/">
            <Image src="/image/logo.png" width={150} height={200} alt="logo" />
          </Link>
        </NavbarBrand>
        <NavbarContent justify="end">
          {user ? (
            <Dropdown>
              <DropdownTrigger>
                <Avatar
                  className="cursor-pointer"
                  isBordered
                  radius="full"
                  size="md"
                  src={user?.image}
                />
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem textValue="profile" key="profile">
                  <Link href="/profile">Profile</Link>
                </DropdownItem>
                <DropdownItem textValue="create" key="create">
                  <Link href="/create">Create</Link>
                </DropdownItem>
                <DropdownItem
                  onPress={() => {
                    handleSignOut();
                    setUser(null);
                  }}
                  textValue="logout"
                  className="text-danger"
                >
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <>
              <NavbarItem>
                <Button onPress={handleSignIn} color="primary" variant="shadow">
                  Login
                </Button>
              </NavbarItem>
            </>
          )}
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default Header;
