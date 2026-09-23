import InputField from "./common/InputField";
import { useFormContext } from "react-hook-form";


export default function StudentInformation({ existingPhoto = "" }) {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const studentPhoto = watch("studentPhoto");

  const studentPhotoPreview =
    studentPhoto instanceof FileList && studentPhoto.length > 0
      ? URL.createObjectURL(studentPhoto[0])
      : existingPhoto || null;

  return (
    <section className="w-full rounded-xl border border-blue-500 bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-blue-800 px-4 py-3">
        <h2 className="text-white font-bold text-sm sm:text-base md:text-lg">
          ১. স্টুডেন্ট ইনফরমেশন{" "}
          <span className="font-semibold">(Student Information)</span>
        </h2>
      </div>

      {/* Student Photo */}
      <div className="my-6 text-center">
        <label
          htmlFor="uploadFile1"
          className={`w-40 h-48 mx-auto border-2 border-dashed rounded-lg cursor-pointer bg-white flex flex-col overflow-hidden transition-all ${
            errors?.studentPhoto ? "border-red-500" : "border-blue-600"
          }`}
        >
          {studentPhotoPreview ? (
            <>
              {/* Image */}
              <div className="flex-1 flex items-center justify-center bg-gray-50 overflow-hidden">
                <img
                  src={studentPhotoPreview}
                  alt="Student Preview"
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
                  Upload Student Image <span className="text-red-500">*</span>
                </h3>

                <p className="text-[10px] text-gray-500 mt-1 text-center">
                  Only PNG, JPG Allowed
                </p>
              </div>
            </>
          )}

          <input
            type="file"
            id="uploadFile1"
            accept=".jpg,.jpeg,.png,image/jpeg,image/png"
            className="hidden"
            {...register("studentPhoto", {
              validate: (value) => {
                if (existingPhoto) return true;
                if (value instanceof FileList && value.length > 0) return true;
                return "ছবি আপলোড করা আবশ্যক";
              },
            })}
          />
        </label>
        {errors?.studentPhoto && (
          <p className="text-red-500 text-xs mt-1">
            {errors.studentPhoto.message}
          </p>
        )}
      </div>

      {/* Inputs */}
      <div className="px-4 py-3 grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label={
            <span>
              ছাত্র/ছাত্রীর সম্পূর্ণ নাম <span className="text-red-500">*</span>
            </span>
          }
          type="text"
          name="studentName"
          placeholder="সার্টিফিকেট অনুযায়ী ইংরেজি নাম লিখতে হবে"
          rules={{ required: "নাম দেওয়া আবশ্যক" }}
        />

        <InputField
          label={
            <span>
              ছাত্র/ছাত্রীর সচল নাম্বার (ইংরেজিতে){" "}
              <span className="text-red-500">*</span>
            </span>
          }
          type="number"
          name="studentPhone"
          placeholder="01xxxxxxxx"
          onWheel={(e) => e.target.blur()}
          rules={{
            required: "সচল নম্বর দেওয়া আবশ্যক",
            pattern: {
              value: /^01[3-9]\d{8}$/,
              message: "সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন",
            },
          }}
        />

        <InputField
          label={
            <span>
              ছাত্র/ছাত্রীর বিকল্প নাম্বার (ইংরেজিতে){" "}
              <span className="text-red-500">*</span>
            </span>
          }
          type="number"
          name="studentAltPhone"
          placeholder="01xxxxxxxx"
          rules={{
            required: "বিকল্প নম্বর দেওয়া আবশ্যক",
            pattern: {
              value: /^01[3-9]\d{8}$/,
              message: "সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন",
            },
          }}
        />

        <InputField
          label={
            <span>
              ছাত্র/ছাত্রীর জন্ম তারিখ (মাস/দিন/বছর){" "}
              <span className="text-red-500">*</span>
            </span>
          }
          type="date"
          name="studentDob"
          rules={{ required: "জন্ম তারিখ নির্বাচন করা আবশ্যক" }}
        />

        <InputField
          label={
            <span>
              ছাত্র/ছাত্রীর বাবার নাম্বার (ইংরেজিতে){" "}
              <span className="text-red-500">*</span>
            </span>
          }
          type="number"
          name="studentFatherPhone"
          placeholder="01xxxxxxxx"
          className="focus:border-blue-500 border-blue-500"
          rules={{
            required: "বাবার নম্বর দেওয়া আবশ্যক",
            pattern: {
              value: /^01[3-9]\d{8}$/,
              message: "সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন",
            },
          }}
        />

        <InputField
          label={
            <span>
              ছাত্র/ছাত্রীর মায়ের নাম্বার (ইংরেজিতে){" "}
              <span className="text-red-500">*</span>
            </span>
          }
          type="number"
          name="studentMotherPhone"
          placeholder="01xxxxxxxx"
          className="focus:border-green-500 border-green-500"
          rules={{
            required: "মায়ের নম্বর দেওয়া আবশ্যক",
            pattern: {
              value: /^01[3-9]\d{8}$/,
              message: "সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন",
            },
          }}
        />

        <InputField
          label={
            <span>
              ছাত্র/ছাত্রীর বর্তমান ঠিকানা{" "}
              <span className="text-red-500">*</span>
            </span>
          }
          rows="2"
          name="studentPresentAddress"
          placeholder="বর্তমান ঠিকানা লিখতে হবে"
          rules={{ required: "বর্তমান ঠিকানা দেওয়া আবশ্যক" }}
        />
      </div>
    </section>
  );
}
