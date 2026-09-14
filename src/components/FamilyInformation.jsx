import InputField from "./common/InputField";
import YesNoField from "./common/YesNoField";
import SelectField from "./common/SelectField";
import { useFormContext } from "react-hook-form";

const FamilyInformation = () => {
  const { watch } = useFormContext();
  const hasFather = watch("hasFather");
  const hasMother = watch("hasMother");
  const siblingName = watch("siblingName");

  const siblingRelationshipOptions = [
    { label: "Elder Brother", value: "ELDER BROTHER" },
    { label: "Younger Brother", value: "YOUNGER BROTHER" },
    { label: "Elder Sister", value: "ELDER SISTER" },
    { label: "Younger Sister", value: "YOUNGER SISTER" },
  ];

  return (
    <section className="w-full rounded-xl border border-pink-500 bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-pink-800 px-4 py-3">
        <h2 className="text-white font-bold text-sm sm:text-base md:text-lg">
          ৩. ফ্যামিলি ইনফরমেশন{" "}
          <span className="font-semibold">(Family Information)</span>
        </h2>
      </div>

      <div className="px-4 py-3 grid grid-cols-1 md:grid-cols-2 gap-4">
        <YesNoField
          label="বাবা বেঁচে আছেন কি না?"
          name="hasFather"
          required={true}
        />
        <YesNoField
          label="মা বেঁচে আছেন কি না?"
          name="hasMother"
          required={true}
        />
      </div>

      <hr className="border-pink-500 border" />

      {/* Dynamic Family Details */}
      <div className="px-4 py-3 grid grid-cols-1 md:grid-cols-2 gap-4">
        {hasFather === "Yes" && (
          <>
            <InputField
              label={
                <span>
                  বাবার সম্পূর্ণ নাম <span className="text-red-500">*</span>
                </span>
              }
              type="text"
              name="fatherName"
              placeholder="সার্টিফিকেট অনুযায়ী ইংরেজি নাম লিখতে হবে"
              rules={{ required: "বাবার নাম দেওয়া আবশ্যক" }}
            />

            <InputField
              label={
                <span>
                  বাবার জন্ম তারিখ (মাস/দিন/বছর){" "}
                  <span className="text-red-500">*</span>
                </span>
              }
              type="date"
              name="fatherDob"
              rules={{ required: "বাবার জন্ম তারিখ নির্বাচন করা আবশ্যক" }}
            />

            <InputField
              label="বাবার পেশা"
              type="text"
              name="fatherOccupation"
              placeholder="ইংরেজিতে লিখতে হবে"
            />
          </>
        )}

        {hasMother === "Yes" && (
          <>
            <InputField
              label={
                <span>
                  মাতার সম্পূর্ণ নাম <span className="text-red-500">*</span>
                </span>
              }
              type="text"
              name="motherName"
              placeholder="ইংরেজিতে লিখতে হবে"
              rules={{ required: "মায়ের নাম দেওয়া আবশ্যক" }}
            />

            <InputField
              label={
                <span>
                  মাতার জন্ম তারিখ (মাস/দিন/বছর){" "}
                  <span className="text-red-500">*</span>
                </span>
              }
              type="date"
              name="motherDob"
              rules={{ required: "মায়ের জন্ম তারিখ নির্বাচন করা আবশ্যক" }}
            />

            <InputField
              label="মাতার পেশা"
              type="text"
              name="motherOccupation"
              placeholder="সার্টিফিকেট অনুযায়ী ইংরেজি নাম লিখতে হবে"
            />
          </>
        )}

        {/* Dynamic Sibling Fields */}
        <InputField
          label="ভাই/বোনের সম্পূর্ণ নাম"
          type="text"
          name="siblingName"
          placeholder="সার্টিফিকেট অনুযায়ী ইংরেজি নাম লিখতে হবে"
        />

        {/* Dropdown Select for Sibling Relationship */}
        <SelectField
          label={
            <span>
              সম্পর্ক {siblingName && <span className="text-red-500">*</span>}
            </span>
          }
          name="siblingRelationship"
          placeholder="সম্পর্ক নির্বাচন করুন"
          options={siblingRelationshipOptions}
          rules={
            siblingName
              ? { required: "সম্পর্ক নির্বাচন করা আবশ্যক" }
              : undefined
          }
        />

        <InputField
          label={
            <span>
              ভাই/বোনের জন্ম তারিখ (মাস/দিন/বছর){" "}
              {siblingName && <span className="text-red-500">*</span>}
            </span>
          }
          type="date"
          name="siblingDob"
          rules={
            siblingName
              ? { required: "ভাই/বোনের জন্ম তারিখ নির্বাচন করা আবশ্যক" }
              : undefined
          }
        />

        <InputField
          label="ভাই/বোনের পেশা"
          type="text"
          name="siblingOccupation"
          placeholder="ইংরেজিতে লিখতে হবে"
        />
      </div>
    </section>
  );
};

export default FamilyInformation;
