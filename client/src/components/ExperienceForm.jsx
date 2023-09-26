import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { BiSolidTrashAlt } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { BsClockFill } from "react-icons/bs";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Dialog } from "@headlessui/react";
import { CustomButton, Loading, TextInput } from "../components";

export const ExperienceForm = ({
  editingExperience,
  handleEditExperience,
  formatDate,
  description,
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
            Experience
          </p>
          {!editingExperience && (
            <button
              className="bg-yellow-400 text-white py-1 px-3 rounded"
              onClick={handleEditExperience}
            >
              <AiFillEdit />
            </button>
          )}
        </div>
        {editingExperience ? (
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
                            Experience
                          </Dialog.Title>
                          <TextInput
                            name="position"
                            label="Position"
                            placeholder="Customer Service"
                            type="text"
                            register={register("position", {
                              required: "Position is required",
                            })}
                            error={
                              errors.position ? errors.position?.message : ""
                            }
                          />
                          <TextInput
                            name="company"
                            label="Company"
                            placeholder="PT Sejahtera Abadi"
                            type="text"
                            register={register("company", {
                              required: "Company is required",
                            })}
                            error={
                              errors.company ? errors.company?.message : ""
                            }
                          />
                          <TextInput
                            name="expLocation"
                            label="Location"
                            placeholder="Wates, Yogyajarta"
                            type="text"
                            register={register("expLocation", {
                              required: "Location is required",
                            })}
                            error={
                              errors.expLocation
                                ? errors.expLocation?.message
                                : ""
                            }
                          />

                          <div className="w-full flex gap-2">
                            <div className="w-1/2">
                              <TextInput
                                name="expStartDate"
                                label="From"
                                placeholder="James"
                                type="date"
                                register={register("expStartDate", {
                                  required: "Start Date is required",
                                })}
                                error={
                                  errors.expStartDate
                                    ? errors.expStartDate?.message
                                    : ""
                                }
                              />
                            </div>
                            <div className="w-1/2">
                              <TextInput
                                name="expEndDate"
                                label="To"
                                placeholder="Wagonner"
                                type="date"
                                register={register("expEndDate", {
                                  required: "End Date is required",
                                })}
                                error={
                                  errors.expEndDate
                                    ? errors.expEndDate?.message
                                    : ""
                                }
                              />
                            </div>
                          </div>

                          <div className="flex flex-col">
                            <label className="text-gray-600 text-sm mb-1">
                              Description
                            </label>
                            <textarea
                              className="ounded border border-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-base px-4 py-2 resize-none"
                              rows={4}
                              cols={6}
                              {...register("description", {
                                required:
                                  "Write a little bit about yourself and your projects",
                              })}
                              aria-invalid={
                                errors.description ? "true" : "false"
                              }
                            ></textarea>
                            {errors.description && (
                              <span
                                role="alert"
                                className="text-xs text-red-500 mt-0.5"
                              >
                                {errors.description?.message}
                              </span>
                            )}
                          </div>

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
            <div className="flex flex-col items-start justify-center mb-2 mt-3">
              <h1 className="text-2xl font-semibold text-slate-600">
                {userInfo?.position || "No position"}
              </h1>

              <h5 className="text-blue-700 text-base font-bold">
                {userInfo?.company || "No company"}
              </h5>

              <div className="w-full flex flex-wrap lg:flex-row justify-start mt-2 text-sm">
                <p className="flex gap-1 items-center justify-center  px-3 py-1 text-slate-600 rounded-full">
                  <HiLocationMarker /> {userInfo?.expLocation ?? "No Location"}
                </p>{" "}
                |
                <p className="flex gap-1 items-center justify-center px-3 py-1 text-slate-600 rounded-full">
                  <BsClockFill />
                  {formatDate(userInfo?.expStartDate)}{" "}
                  <span className="text-black font-bold">To</span>{" "}
                  {formatDate(userInfo?.expEndDate) || "No Date"}
                </p>
              </div>
            </div>
            <div className="w-full pb-10 pt-2">
              <div className="w-full flex flex-col-reverse md:flex-row gap-8 py-3">
                <div className="w-full md:w-full flex flex-col gap-2 text-lg text-slate-600 mt-5 md:mt-0">
                  <p className="text-[#000000]  font-semibold text-">
                    Description:
                  </p>
                  <textarea
                    className="bg-white text-sm  text-justify leading-4 border-none"
                    value={description}
                    readOnly
                    disabled
                    rows={description ? description.split("\n").length : 1}
                    style={{ resize: "none" }}
                  >
                    {userInfo?.description ?? "No Description Found"}
                  </textarea>
                </div>
              </div>
              {/* {!editingExperience && (
                <div className="p-1 flex gap-1">
                  <button
                    className="bg-yellow-400 text-white py-1 px-3 rounded"
                    onClick={handleEditExperience}
                  >
                    <AiFillEdit />
                  </button>
                  <button
                    className="bg-red-600 text-white py-1 px-3 rounded"
                    onClick={handleEditExperience}
                  >
                    <BiSolidTrashAlt />
                  </button>
                </div>
              )} */}
            </div>
          </>
        )}
      </div>
    </>
  );
};
