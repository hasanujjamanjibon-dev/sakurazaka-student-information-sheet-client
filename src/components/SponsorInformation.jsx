
import InputField from "./common/InputField";
import { useFormContext } from "react-hook-form";

const SponsorInformation = ({ existingPhoto = "" }) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const sponsorPhoto = watch("sponsorPhoto");

  const sponsorPhotoPreview =
    sponsorPhoto instanceof FileList && sponsorPhoto.length > 0
      ? URL.createObjectURL(sponsorPhoto[0])
      : existingPhoto || null;

  return (
    <section className="w-full rounded-xl border border-green-500 bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-green-800 px-4 py-3">
        <h2 className="text-white font-bold text-sm sm:text-base md:text-lg">
          ২. স্পনসর ইনফরমেশন{" "}
          <span className="font-semibold">(Sponsor Information)</span>
        </h2>
      </div>

      {/* Sponsor Photo */}
      <div className="my-6 text-center">
        <label
          htmlFor="uploadFile2"
          className={`w-40 h-48 mx-auto border-2 border-dashed rounded-lg cursor-pointer bg-white flex flex-col overflow-hidden transition-all ${
            errors?.sponsorPhoto ? "border-red-500" : "border-green-600"
          }`}
        >
          {sponsorPhotoPreview ? (
            <>
              {/* Image */}
              <div className="flex-1 flex items-center justify-center bg-gray-50 overflow-hidden">
                <img
                  src={sponsorPhotoPreview}
                  alt="Sponsor Preview"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom */}
              <div className="py-2 text-center border-t bg-gray-100 hover:bg-gray-200">
                <p className="text-xs font-semibold text-blue-600">
                  Click here to change
                </p>
              </div>
            </>
          ) : (
            <>
              {/* Upload Area */}
              <div className="flex-1 flex flex-col items-center justify-center p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 mb-2 fill-gray-400"
                  viewBox="0 0 32 32"
                >
                  <path d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z" />
                  <path d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z" />
                </svg>

                <h3 className="font-semibold text-xs text-center">
                  Upload Sponsor Image <span className="text-red-500">*</span>
                </h3>

                <p className="text-[10px] text-gray-500 mt-1 text-center">
                  Only PNG, JPG Allowed
                </p>
              </div>
            </>
          )}

          <input
            type="file"
            id="uploadFile2"
            accept=".jpg,.jpeg,.png,image/jpeg,image/png"
            className="hidden"
            {...register("sponsorPhoto", {
              validate: (value) => {
                if (existingPhoto) return true;
                if (value instanceof FileList && value.length > 0) return true;
                return "স্পনসরের ছবি আপলোড করা আবশ্যক";
              },
            })}
          />
        </label>
        {errors?.sponsorPhoto && (
          <p className="text-red-500 text-xs mt-1">
            {errors.sponsorPhoto.message}
          </p>
        )}
      </div>

      {/* Sponsor Form Inputs */}
      <div className="px-4 py-3 grid md:grid-cols-2 gap-4">
        <InputField
          label={
            <span>
              স্পনসরের সম্পূর্ণ নাম <span className="text-red-500">*</span>
            </span>
          }
          type="text"
          name="sponsorName"
          placeholder="সার্টিফিকেট অনুযায়ী ইংরেজি নাম লিখতে হবে"
          rules={{ required: "স্পনসরের নাম দেওয়া আবশ্যক" }}
        />

        <InputField
          label={
            <span>
              স্পনসরের বাবার নাম <span className="text-red-500">*</span>
            </span>
          }
          type="text"
          name="sponsorFatherName"
          placeholder="সার্টিফিকেট অনুযায়ী ইংরেজি নাম লিখতে হবে"
          rules={{ required: "স্পনসরের বাবার নাম দেওয়া আবশ্যক" }}
        />

        <InputField
          label={
            <span>
              স্পনসরের মাতার নাম <span className="text-red-500">*</span>
            </span>
          }
          type="text"
          name="sponsorMotherName"
          placeholder="সার্টিফিকেট অনুযায়ী ইংরেজি নাম লিখতে হবে"
          rules={{ required: "স্পনসরের মায়ের নাম দেওয়া আবশ্যক" }}
        />

        <InputField
          label={
            <span>
              স্পনসরের এন.আই.ডি/জাতীয় পরিচয়পত্রের নাম্বার (ইংরেজিতে){" "}
              <span className="text-red-500">*</span>
            </span>
          }
          type="number"
          name="sponsorNidNumber"
          placeholder="6446464644"
          onWheel={(e) => e.target.blur()}
          rules={{ required: "এন.আই.ডি নম্বর দেওয়া আবশ্যক" }}
        />

        {/* اختیاری / Optional Fields */}
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
