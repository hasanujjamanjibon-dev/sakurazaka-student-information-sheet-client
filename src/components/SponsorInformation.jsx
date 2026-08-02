import React from "react";
import InputField from "./common/InputField";
import { useFormContext } from "react-hook-form";

const SponsorInformation = () => {
  const { register, watch } = useFormContext();

  const sponsorPhoto = watch("sponsorPhoto");

  const sponsorPhotoPreview =
    sponsorPhoto && sponsorPhoto.length > 0
      ? URL.createObjectURL(sponsorPhoto[0])
      : null;

  return (
    <section className="w-full rounded-xl border border-green-500 bg-white shadow-sm overflow-hidden ">
      {/* Header */}
      <div className="bg-green-800 px-4 py-3">
        <h2 className="text-white font-bold text-sm sm:text-base md:text-lg">
          ২. স্পনসর ইনফরমেশন{" "}
          <span className="font-semibold">(Sponsor Information)</span>
        </h2>
      </div>
      {/* Sponsor Photo */}
      <label
        htmlFor="uploadFile2"
        className="w-40 h-auto mx-auto border-2 my-10  border-dashed border-slate-300 rounded-lg  cursor-pointer bg-white flex flex-col"
      >
        {sponsorPhotoPreview ? (
          <>
            {/* Image */}
            <div className="flex-1 flex items-center justify-center bg-gray-50">
              <img
                src={sponsorPhotoPreview}
                alt="Sponsor Preview"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom */}
            <div className="py-3 text-center border-t bg-gray-100 hover:bg-gray-200">
              <p className="text-sm font-semibold text-blue-600">
                Click here to change Sponsor image
              </p>
            </div>
          </>
        ) : (
          <>
            {/* Upload Area */}
            <div className="flex-1 flex flex-col items-center justify-center p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 mb-4 fill-gray-400"
                viewBox="0 0 32 32"
              >
                <path d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z" />
                <path d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z" />
              </svg>

              <h3 className="font-semibold text-center">
                Upload Sponsor Image
              </h3>

              <p className="text-xs text-gray-500 mt-2 text-center px-2">
               Only PNG, JPG are Allowed
              </p>
            </div>
          </>
        )}

        <input
          type="file"
          id="uploadFile2"
          accept=".jpg,.jpeg,.png,image/jpeg,image/png"
          className="hidden"
          {...register("sponsorPhoto")}
        />
      </label>

      {/* Sponsor Name */}
      <div className="px-4 py-3 grid md:grid-cols-2 gap-4 mt-6">
        <InputField
          label="স্পনসরের সম্পূর্ণ নাম"
          type="text"
          name="sponsorName"
          placeholder="সার্টিফিকেট অনুযায়ী ইংরেজি নাম লিখতে হবে"
        />

        <InputField
          label="স্পনসরের বাবার নাম"
          type="text"
          name="sponsorFatherName"
          placeholder="সার্টিফিকেট অনুযায়ী ইংরেজি নাম লিখতে হবে"
        />
        <InputField
          label="স্পনসরের মাতার নাম"
          type="text"
          name="sponsorMotherName"
          placeholder="সার্টিফিকেট অনুযায়ী ইংরেজি নাম লিখতে হবে"
        />
        <InputField
          label="স্পনসরের এন.আই.ডি/জাতীয় পরিচয়পত্রের নাম্বার (ইংরেজিতে)"
          type="number"
          name="sponsorNidNumber"
          placeholder="6446464644"
        />
        <InputField
          label="স্পনসরের ব্যবসার নাম (যদি থাকে)"
          type="text"
          name="sponsorBusinessName"
          placeholder="সার্টিফিকেট অনুযায়ী ইংরেজি নাম লিখতে হবে"
        />
        <InputField
          label="স্পনসরের ব্যবসার ক্যাটাগরি (যদি জানা থাকে)"
          type="text"
          name="sponsorBusinessCategory"
          placeholder="সার্টিফিকেট অনুযায়ী ইংরেজি নাম লিখতে হবে"
        />
      </div>
    </section>
  );
};

export default SponsorInformation;
