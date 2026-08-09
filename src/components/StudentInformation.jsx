import { User } from "lucide-react";
import InputField from "./common/InputField";
import { useFormContext } from "react-hook-form";
import TextAreaFiled from "./common/TextAreaFiled";

export default function StudentInformation({ existingPhoto = "" }) {
  const { register, watch } = useFormContext();

  const studentPhoto = watch("studentPhoto");

  const studentPhotoPreview =
    studentPhoto instanceof FileList && studentPhoto.length > 0
      ? URL.createObjectURL(studentPhoto[0])
      : existingPhoto || null;

  return (
    <section className="w-full rounded-xl border border-blue-500 bg-white shadow-sm overflow-hidden ">
      {/* Header */}
      <div className="bg-blue-800 px-4 py-3">
        <h2 className="text-white font-bold text-sm sm:text-base md:text-lg">
          ১. স্টুডেন্ট ইনফরমেশন{" "}
          <span className="font-semibold">(Student Information)</span>
        </h2>
      </div>
      {/* Student Photo */}
      <label
        htmlFor="uploadFile1"
        className="w-40 h-auto mx-auto  my-10 border-2 border-dashed border-blue-600 rounded-lg  cursor-pointer bg-white flex flex-col"
      >
        {studentPhotoPreview ? (
          <>
            {/* Image */}
            <div className="flex-1 flex items-center justify-center bg-gray-50">
              <img
                src={studentPhotoPreview}
                alt="Student Preview"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom */}
            <div className="py-3 text-center border-t bg-gray-100 hover:bg-gray-200">
              <p className="text-sm font-semibold text-blue-600">
                Click here to change your image
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
                Upload Student Image
              </h3>

              <p className="text-xs text-gray-500 mt-2 text-center px-2">
                Only PNG, JPG are Allowed
              </p>
            </div>
          </>
        )}

        <input
          type="file"
          id="uploadFile1"
          accept=".jpg,.jpeg,.png,image/jpeg,image/png"
          className="hidden"
          {...register("studentPhoto")}
        />
      </label>

      {/* students Name */}
      <div className="px-4 py-3 grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <InputField
          label="ছাত্র/ছাত্রীর সম্পূর্ণ নাম"
          type="text"
          name="studentName"
          placeholder="সার্টিফিকেট অনুযায়ী ইংরেজি নাম লিখতে হবে"
        />

        <InputField
          label="ছাত্র/ছাত্রীর সচল নাম্বার (ইংরেজিতে)"
          type="number"
          name="studentPhone"
          placeholder="01xxxxxxxx"
          onWheel={(e) => e.target.blur()}
        />
        <InputField
          label="ছাত্র/ছাত্রীর বিকল্প নাম্বার (ইংরেজিতে)"
          type="number"
          name="studentAltPhone"
          placeholder="01xxxxxxxx"
        />
        <InputField
          label="ছাত্র/ছাত্রীর জন্ম তারিখ"
          type="date"
          name="studentDob"
        />
        <InputField
          label="ছাত্র/ছাত্রীর বাবার নাম্বার (ইংরেজিতে)"
          type="number"
          labelClassName=""
          name="studentFatherPhone"
          placeholder="01xxxxxxxx"
          className="focus:border-blue-500 border-blue-500"
        />
        <InputField
          label="ছাত্র/ছাত্রীর মায়ের নাম্বার (ইংরেজিতে)"
          type="number"
          name="studentMotherPhone"
          placeholder="01xxxxxxxx"
          className="focus:border-green-500 border-green-500"
        />
        <TextAreaFiled
          label="ছাত্র/ছাত্রীর বর্তমান ঠিকানা"
          rows="2"
          name="studentPresentAddress"
          placeholder="পাসপোর্ট অনুযায়ী বর্তমান ঠিকানা লিখতে হবে"
        />
      </div>
    </section>
  );
}
