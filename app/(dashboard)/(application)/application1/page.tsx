"use client";
import { Input } from "@nextui-org/input";
import { Button, DatePicker, Select, SelectItem } from "@nextui-org/react";

export default function page() {
  return (
    <div className="registration_form_wrapper lg:mx-[150px]">
      <div className="border border-slate-300 rounded-3xl px-4 md:px-8 py-6 md:py-10 mb-8 bg-white">
        <h1 className="font-semibold text-xl md:text-3xl">
          Personal Details व्यक्तिगत विवरण
        </h1>
        <p className="text-slate-500 text-sm md:text-md my-3 md:my-5">
          Clearly fill the form below. Fields marked with * are mandatory to
          fill:
        </p>
        <p className="text-slate-500 text-sm md:text-md">
          नीचे दिए गए फॉर्म को स्पष्ट रूप से भरें, * से चिह्नित फ़ील्ड भरना
          अनिवार्य है:
        </p>

        <form action="">
          <div className="grid grid-cols-1 md:grid-cols-3 mt-5 md:mt-12 pt-8 gap-5 md:gap-8">
            <Input
              type="text"
              label="Examination. परीक्षा"
              labelPlacement="outside"
              variant="bordered"
              radius="sm"
              placeholder=" "
              isRequired
              className="md:col-span-3"
            />
            <Input
              type="text"
              label="First Name (पहला नाम)"
              labelPlacement="outside"
              variant="bordered"
              radius="sm"
              placeholder=" "
              isRequired
            />
            <Input
              type="text"
              label="Middle Name (मध्य नाम)"
              labelPlacement="outside"
              variant="bordered"
              radius="sm"
              placeholder=" "
            />
            <Input
              type="text"
              label="Last Name (अंतिम नाम)"
              labelPlacement="outside"
              variant="bordered"
              radius="sm"
              placeholder=" "
            />
            <div className="md:col-span-3 mt-5 md:mt-0">
              <Input
                type="text"
                label="Full Name (As entered by you). पूरा नाम (जैसा कि आपने दर्ज किया है)"
                labelPlacement="outside"
                variant="bordered"
                radius="sm"
                placeholder=" "
                isRequired
              />
              <div className="flex gap-3 mt-3">
                <span className="material-symbols-rounded">info</span>
                <p className="text-slate-500 text-sm md:text-md">
                  Make sure your full name is as per High School/Matriculation
                  Certificate. सुनिश्चित करें कि आपका पूरा नाम हाई
                  स्कूल/मैट्रिकुलेशन प्रमाणपत्र के अनुसार है।
                </p>
              </div>
            </div>
            <Select
              items={[
                {
                  value: "1",
                  name: "Male",
                },
                {
                  value: "2",
                  name: "Female",
                },
                {
                  value: "3",
                  name: "Other",
                },
              ]}
              label="Gender"
              labelPlacement="outside"
              placeholder="Select"
              isRequired
              variant="bordered"
              radius="sm"
              className="md:col-span-3"
            >
              {(option: any) => (
                <SelectItem key={option?.value}>{option?.name}</SelectItem>
              )}
            </Select>
            <DatePicker
              className="md:col-span-3"
              label="Date of Birth (As Per High School/Matriculation Certificate). जन्मतिथि (हाई स्कूल/मैट्रिकुलेशन प्रमाणपत्र के अनुसार)"
              labelPlacement="outside"
              radius="sm"
              variant="bordered"
              isRequired
            />
            <Select
              items={[
                {
                  value: "1",
                  name: "Male",
                },
                {
                  value: "2",
                  name: "Female",
                },
                {
                  value: "3",
                  name: "Other",
                },
              ]}
              label="Gender"
              labelPlacement="outside"
              placeholder="Select"
              isRequired
              variant="bordered"
              radius="sm"
              className="md:col-span-3"
            >
              {(option: any) => (
                <SelectItem key={option?.value}>{option?.name}</SelectItem>
              )}
            </Select>
            <DatePicker
              className="md:col-span-3"
              label="Date of Birth (As Per High School/Matriculation). जन्म तिथि (हाई स्कूल/मैट्रिकुलेशन के अनुसार) "
              labelPlacement="outside"
              radius="sm"
              variant="bordered"
              isRequired
            />
            <DatePicker
              className="md:col-span-3"
              label="Age (As on 1 July 2024). आयु (1 जुलाई 2024 को)"
              labelPlacement="outside"
              radius="sm"
              variant="bordered"
              isRequired
            />
            <Input
              type="text"
              label="Father’s name. पिता का नाम"
              labelPlacement="outside"
              variant="bordered"
              endContent={
                <span className="material-symbols-rounded">person</span>
              }
              radius="sm"
              placeholder="Enter father’s name"
              isRequired
              className="md:col-span-3"
            />
            <Input
              type="text"
              label="Mother’s name. माता का नाम"
              labelPlacement="outside"
              variant="bordered"
              endContent={
                <span className="material-symbols-rounded">person</span>
              }
              radius="sm"
              placeholder="Enter mother’s name"
              isRequired
              className="md:col-span-3"
            />
            <Select
              items={[
                {
                  value: "1",
                  name: "Married",
                },
                {
                  value: "2",
                  name: "Unmarried",
                },
              ]}
              label="Marital Status. वैवाहिक स्थिति."
              labelPlacement="outside"
              placeholder="Select"
              isRequired
              variant="bordered"
              radius="sm"
              className="md:col-span-3"
            >
              {(option: any) => (
                <SelectItem key={option?.value}>{option?.name}</SelectItem>
              )}
            </Select>
            <Select
              items={[
                {
                  value: "1",
                  name: "1",
                },
                {
                  value: "2",
                  name: "2",
                },
              ]}
              label="Reservation Category. आरक्षण श्रेणी"
              labelPlacement="outside"
              placeholder="Select"
              isRequired
              variant="bordered"
              radius="sm"
              className="md:col-span-3"
            >
              {(option: any) => (
                <SelectItem key={option?.value}>{option?.name}</SelectItem>
              )}
            </Select>
            <Input
              type="text"
              label="Email. ईमेल"
              labelPlacement="outside"
              variant="bordered"
              endContent={
                <span className="material-symbols-rounded">mail</span>
              }
              radius="sm"
              placeholder="Enter email-ID"
              isRequired
              className="md:col-span-3"
            />
            <Input
              type="text"
              label="Mobile number. मोबाइल नंबर"
              labelPlacement="outside"
              variant="bordered"
              endContent={
                <span className="material-symbols-rounded">phone_iphone</span>
              }
              radius="sm"
              placeholder="Enter Mobile number"
              isRequired
              className="md:col-span-3"
            />
            <Input
              type="text"
              label="Aadhaar number. आधार संख्या"
              labelPlacement="outside"
              variant="bordered"
              radius="sm"
              placeholder="XXXX XXXX XXXX"
              isRequired
              className="md:col-span-3"
              endContent={
                <span className="material-symbols-rounded">credit_card</span>
              }
            />
          </div>

          <div className="flex justify-end">
            <Button className="bg-black text-white w-full max-w-[300px] mt-10">
              Save & Next
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
