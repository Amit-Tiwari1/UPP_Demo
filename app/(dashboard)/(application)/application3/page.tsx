"use client";
import { Input } from "@nextui-org/input";
import {
  Accordion,
  AccordionItem,
  Button,
  Checkbox,
  DatePicker,
  Select,
  SelectItem,
} from "@nextui-org/react";

export default function page() {
  return (
    <div className="registration_form_wrapper lg:mx-[150px]">
      <div className="border border-slate-300 rounded-3xl px-4 md:px-8 py-6 md:py-10 mb-8 bg-white">
        <h1 className="font-semibold text-xl md:text-3xl">
          Address Details पता विवरण
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
          <div className="grid grid-cols-1 md:grid-cols-3 mt-5 md:mt-8 pt-8 gap-5 md:gap-8">
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
                {
                  value: "3",
                  name: "3",
                },
              ]}
              label="Nationality. राष्ट्रीयता"
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
            <Accordion selectionMode="multiple" className="col-span-3 px-0">
              <AccordionItem
                key="1"
                aria-label="Present Address वर्तमान पता"
                title={
                  <p className="md:text-xl font-semibold">
                    Present Address वर्तमान पता
                  </p>
                }
              >
                <div className="w-full flex flex-col gap-8 py-8">
                  <Input
                    type="text"
                    label="Address Line 1. पता पंक्ति 1"
                    labelPlacement="outside"
                    variant="bordered"
                    radius="sm"
                    placeholder="Enter certificate serial number."
                    isRequired
                    className="md:col-span-3"
                    endContent={
                      <span className="material-symbols-rounded">
                        location_on
                      </span>
                    }
                  />
                  <Input
                    type="text"
                    label="Address Line 2. पता पंक्ति  2"
                    labelPlacement="outside"
                    variant="bordered"
                    radius="sm"
                    placeholder="Enter certificate serial number."
                    isRequired
                    className="md:col-span-3"
                    endContent={
                      <span className="material-symbols-rounded">
                        location_on
                      </span>
                    }
                  />
                  <Input
                    type="text"
                    label="Address Line 3. पता पंक्ति 3"
                    labelPlacement="outside"
                    variant="bordered"
                    radius="sm"
                    placeholder="Enter certificate serial number."
                    isRequired
                    className="md:col-span-3"
                    endContent={
                      <span className="material-symbols-rounded">
                        location_on
                      </span>
                    }
                  />
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
                      {
                        value: "3",
                        name: "3",
                      },
                    ]}
                    label="State. राज्य"
                    labelPlacement="outside"
                    placeholder="Select"
                    isRequired
                    variant="bordered"
                    radius="sm"
                    className="md:col-span-3"
                  >
                    {(option: any) => (
                      <SelectItem key={option?.value}>
                        {option?.name}
                      </SelectItem>
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
                      {
                        value: "3",
                        name: "3",
                      },
                    ]}
                    label="District. ज़िला"
                    labelPlacement="outside"
                    placeholder="Select"
                    isRequired
                    variant="bordered"
                    radius="sm"
                    className="md:col-span-3"
                  >
                    {(option: any) => (
                      <SelectItem key={option?.value}>
                        {option?.name}
                      </SelectItem>
                    )}
                  </Select>
                  <Input
                    type="text"
                    label="Pin Code. पिन कोड"
                    labelPlacement="outside"
                    variant="bordered"
                    radius="sm"
                    placeholder="Enter pin code"
                    isRequired
                    className="md:col-span-3"
                    endContent={
                      <span className="material-symbols-rounded">tag</span>
                    }
                  />
                </div>
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Section 2 खंड 2"
                title={
                  <p className="md:text-xl font-semibold">
                    Permanent Address स्थायी पता
                  </p>
                }
              >
                <div className="w-full flex flex-col gap-8 py-8">
                  <Checkbox>
                    Same as Present Address. वर्तमान पते के समान
                  </Checkbox>
                  <Input
                    type="text"
                    label="Address Line 1. पता पंक्ति 1"
                    labelPlacement="outside"
                    variant="bordered"
                    radius="sm"
                    placeholder="Enter certificate serial number."
                    isRequired
                    className="md:col-span-3"
                    endContent={
                      <span className="material-symbols-rounded">
                        location_on
                      </span>
                    }
                  />
                  <Input
                    type="text"
                    label="Address Line 2. पता पंक्ति  2"
                    labelPlacement="outside"
                    variant="bordered"
                    radius="sm"
                    placeholder="Enter certificate serial number."
                    isRequired
                    className="md:col-span-3"
                    endContent={
                      <span className="material-symbols-rounded">
                        location_on
                      </span>
                    }
                  />
                  <Input
                    type="text"
                    label="Address Line 3. पता पंक्ति 3"
                    labelPlacement="outside"
                    variant="bordered"
                    radius="sm"
                    placeholder="Enter certificate serial number."
                    isRequired
                    className="md:col-span-3"
                    endContent={
                      <span className="material-symbols-rounded">
                        location_on
                      </span>
                    }
                  />
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
                      {
                        value: "3",
                        name: "3",
                      },
                    ]}
                    label="State. राज्य"
                    labelPlacement="outside"
                    placeholder="Select"
                    isRequired
                    variant="bordered"
                    radius="sm"
                    className="md:col-span-3"
                  >
                    {(option: any) => (
                      <SelectItem key={option?.value}>
                        {option?.name}
                      </SelectItem>
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
                      {
                        value: "3",
                        name: "3",
                      },
                    ]}
                    label="District. ज़िला"
                    labelPlacement="outside"
                    placeholder="Select"
                    isRequired
                    variant="bordered"
                    radius="sm"
                    className="md:col-span-3"
                  >
                    {(option: any) => (
                      <SelectItem key={option?.value}>
                        {option?.name}
                      </SelectItem>
                    )}
                  </Select>
                  <Input
                    type="text"
                    label="Pin Code. पिन कोड"
                    labelPlacement="outside"
                    variant="bordered"
                    radius="sm"
                    placeholder="Enter pin code"
                    isRequired
                    className="md:col-span-3"
                    endContent={
                      <span className="material-symbols-rounded">tag</span>
                    }
                  />
                </div>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="flex justify-between gap-5 mt-10">
            <Button
              type="submit"
              variant="bordered"
              className="w-full max-w-[300px]"
            >
              Back
            </Button>
            <Button
              type="submit"
              className="bg-black text-white w-full max-w-[300px]"
            >
              Save & Next
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
