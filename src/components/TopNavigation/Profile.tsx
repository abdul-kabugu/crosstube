/* eslint-disable prettier/prettier */
import { useState, Fragment, useEffect, useRef } from "react";
import { CharacterAvatar, useWeb2Url } from "@crossbell/ui";
import {CiWallet} from 'react-icons/ci'
import {
  useConnectedAccount,
  ConnectButton,
  useXSettingsModal,
} from "@crossbell/connect-kit";
import { extractCharacterName } from "@crossbell/util-metadata";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TbVideoPlus } from "react-icons/tb";
import { Menu, Transition } from "@headlessui/react";
import { profileMenuLinks } from "@/constants";
import { AiOutlineSetting } from "react-icons/ai";
import { VscSignOut } from "react-icons/vsc";
import { useShowNotificationModal } from "@crossbell/notification";
import { BellOutline, MoonOutline, SunOutline, UploadOutline } from "@/Icons";
import Link from "next/link"
export default function Connected() {
  const account = useConnectedAccount();

  const characterName = extractCharacterName(account?.character);
  const address = account?.type === "email" ? account.email : account?.address;
  const { show: showSettings, isActive, hide } = useXSettingsModal();
  const show = useShowNotificationModal();

  const UserConnected = () => {
    return (
      <div className="flex items-center gap-2">
        <div className="hover:bg-gray-700 cursor-pointer h-8 w-8 flex items-center justify-center rounded-full py-0.5 px-1.5">
          <BellOutline className="w-6 h-6  rounded-full " onClick={show} />
        </div>
        <Link href={`/upload`}>
          {/*<div className="flex xs:gap-1 md:gap-2 items-center bg-blue-700 text-white xs:py-1.5 md:py-2 xs:px-2 md:px-3 font-sans rounded-lg cursor-pointer xs:hidden md:flex ">*/}
            <TbVideoPlus size={26} className="xs:hidden md:block" />
             {/*<button>New video</button>
          </div>*/}
        </Link>
        <div>
          <Menu as="div" className="relative ">
            <Menu.Button>
              <div className="border border-gray-700 flex gap-2 py-1 px-3 items-center xs:rounded-full md:rounded-xl cursor-pointer ">
                <CharacterAvatar size={27} character={account?.character} />
                <p
                  title={characterName}
                  className="font-semibold  xs:hidden md:block "
                >
                  {characterName}
                </p>
              </div>
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-300"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                as="div"
                className="absolute right-0 bg-gray-800 shadow-lg  border  border-gray-700 rounded-lg w-[215px] px-2 py-2"
              >
                {profileMenuLinks.map((link, i) => {
                  return (
                    <Menu.Item key={i}>
                      <div className="flex items-center gap-2 cursor-pointer  py-2  hover:bg-gray-700 px-2 rounded-lg my-2">
                        <link.icon className="w-4 h-4 " />
                        <p className=" text-sm  capitalize ">{link.title}</p>
                      </div>
                    </Menu.Item>
                  );
                })}

                <Menu.Item>
                  <div
                    className="flex items-center gap-2 cursor-pointer  py-2 hover:bg-gray-700 px-2 rounded-lg my-2"
                    onClick={showSettings}
                  >
                    <AiOutlineSetting className="w-5 h-5" />
                    <button className=" text-sm capitalize ">
                      Channel Settings
                    </button>
                  </div>
                </Menu.Item>
                
                <Menu.Item>
                  <ConnectButton>
                    {(status, { connect, disconnect }) => (
                      <div
                        className="flex items-center gap-2 cursor-pointer  py-2 hover:bg-gray-700 px-2 rounded-lg my-2"
                        onClick={disconnect}
                      >
                        <VscSignOut className="w-5 h-5" />
                        <button className=" capitalize ">Signout</button>
                      </div>
                    )}
                  </ConnectButton>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    );
  };

  const ConnectWallet = () => {
    return (
      <ConnectButton>
        {(status, { connect, disconnect }) => (
          <div
            onClick={status.isConnected ? disconnect : connect}
            className="bg-blue-600  font-sans text-white py-1.5 px-4 rounded-xl flex items-center gap-2 cursor-pointer"
          >
            <CiWallet size={18} />
           <div>{status.isConnected ? "Sign out" : "Sign In"}</div>
          </div>
        )}
      </ConnectButton>
    );
  };

  return (
    <div>{account?.character ? <UserConnected /> : <ConnectWallet />}</div>
  );
}

