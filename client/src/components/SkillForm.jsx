import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Dialog } from "@headlessui/react";
import { CustomButton, Loading, TextInput } from "../components";

export const SkillForm = ({
  editingSkills,
  handleEditSkills,
  userInfo,
  closeModal,
  handleSubmit,
  onSubmit,
  register,
  errors,
  isSubmitting,
  open,
}) => {
  return (
    <>
      <div className="w-full md:w-2/3 2xl:w-2/4 bg-white shadow-lg p-10 pb-10 rounded-lg">
        <div className="flex items-center justify-between border border-blue-600 py-2 px-3">
          <p className="bg-[#1d4fd826] text-[#1d4fd8] py-0.5 px-1.5 rounded font-semibold text-xl">
            Skills
          </p>
          {!editingSkills && (
            <div className="p-1 flex gap-1">
              <button
                className="bg-yellow-400 text-white py-1 px-3 rounded"
                onClick={handleEditSkills}
              >
                <AiFillEdit />
              </button>
            </div>
          )}
        </div>
        {editingSkills ? (
          <>
            <Transition appear show={open ?? false} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <form
                          className="w-full mt-2 flex flex-col gap-5"
                          onSubmit={handleSubmit(onSubmit)}
                        >
                          {/* Experience */}
                          <Dialog.Title
                            as="h3"
                            className="text-lg font-semibold leading-6 text-gray-900"
                          >
                            Skills
                          </Dialog.Title>
                          <TextInput
                            name="advanceSkills"
                            label="Advance Skill"
                            placeholder="eg:HTML, CSS"
                            type="text"
                            register={register("advanceSkills")}
                            error={
                              errors.advanceSkills
                                ? errors.advanceSkills?.message
                                : ""
                            }
                          />
                          <TextInput
                            name="intermediateSkills"
                            label="Intermediate Skill"
                            placeholder="eg: Javascript, PHP"
                            type="text"
                            register={register("intermediateSkills")}
                            error={
                              errors.intermediateSkills
                                ? errors.intermediateSkills?.message
                                : ""
                            }
                          />
                          <TextInput
                            name="beginnerSkills"
                            label="Beginner skills"
                            placeholder="eg: Laravel, React JS, Vue, Svelte, Wordpress"
                            type="text"
                            register={register("beginnerSkills")}
                            error={
                              errors.beginnerSkills
                                ? errors.beginnerSkills?.message
                                : ""
                            }
                          />

                          <div className="mt-4">
                            {isSubmitting ? (
                              <Loading />
                            ) : (
                              <CustomButton
                                type="submit"
                                containerStyles="inline-flex justify-center rounded-md border border-transparent bg-yellow-400 px-8 py-2 text-sm font-medium text-white hover:bg-[#ffc107] hover:text-[#fff] focus:outline-none "
                                title={"Submit"}
                              />
                            )}
                          </div>
                        </form>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </>
        ) : (
          <>
            <div className="w-full pb-10 pt-2">
              <div className="w-full flex flex-col-reverse md:flex-row gap-8 py-3">
                <div className="w-full md:w-full flex flex-col gap-2 text-lg text-slate-600 mt-5 md:mt-0">
                  <h5 className="text-[#000000]  font-semibold text-md">
                    Advance:{" "}
                    <span className="text-slate-500 text-xs">
                      {userInfo?.advanceSkills || "No Skill Advance"}
                    </span>
                  </h5>
                  <h5 className="text-[#000000]  font-semibold text-md">
                    Intermediate:{" "}
                    <span className="text-slate-500 text-xs">
                      {userInfo?.intermediateSkills || "No Skill Intermediate"}
                    </span>
                  </h5>
                  <h5 className="text-[#000000]  font-semibold text-md">
                    Beginner:{" "}
                    <span className="text-slate-500 text-xs">
                      {userInfo?.beginnerSkills || "No Skill Beginner"}
                    </span>{" "}
                  </h5>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
