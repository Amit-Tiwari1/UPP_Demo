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
      <div className="border border-slate-300 rounded-3xl px-8 py-10 mb-8 bg-white">
        <h1 className="font-semibold text-3xl">
          Educational Qualification शैक्षणिक योग्यता
        </h1>
        <p className="text-slate-500 my-5">
          Clearly fill the form below. Fields marked with * are mandatory to
          fill:
        </p>
        <p className="text-slate-500">
          नीचे दिए गए फॉर्म को स्पष्ट रूप से भरें, * से चिह्नित फ़ील्ड भरना
          अनिवार्य है:
        </p>

        <form action="">
          <div className="grid grid-cols-1 md:grid-cols-2 mt-5 md:mt-8 pt-8 gap-5 md:gap-8">
            <Accordion selectionMode="multiple" className="col-span-2">
              <AccordionItem
                key="1"
                aria-label="High School/10th हाई स्कूल/10वीं"
                title={
                  <p className="text-xl font-semibold">
                    High School/10th हाई स्कूल/10वीं
                  </p>
                }
              >
                <div className="grid grid-cols-2 gap-8 my-8">
                  <Checkbox className="md:col-span-2">
                    Provide 10th equivalent. 10वीं समतुल्य प्रदान करें
                  </Checkbox>
                  <Input
                    type="text"
                    label="Board name"
                    labelPlacement="outside"
                    variant="bordered"
                    radius="sm"
                    placeholder=" "
                    isRequired
                  />
                  <Input
                    type="text"
                    label="Field of study"
                    labelPlacement="outside"
                    variant="bordered"
                    radius="sm"
                    placeholder=" "
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
                    label="Year of passing"
                    labelPlacement="outside"
                    placeholder="Select"
                    isRequired
                    variant="bordered"
                    radius="sm"
                  >
                    {(option: any) => (
                      <SelectItem key={option?.value}>
                        {option?.name}
                      </SelectItem>
                    )}
                  </Select>
                  <Input
                    type="text"
                    label="Marks in percentage"
                    labelPlacement="outside"
                    variant="bordered"
                    radius="sm"
                    placeholder=" "
                  />
                  <Input
                    type="text"
                    label="Roll number"
                    labelPlacement="outside"
                    variant="bordered"
                    radius="sm"
                    placeholder=" "
                  />
                  <Input
                    type="text"
                    label="Certificate no."
                    labelPlacement="outside"
                    variant="bordered"
                    radius="sm"
                    placeholder=" "
                  />
                </div>
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="12th Equivalent 12वीं समतुल्य"
                title={
                  <p className="text-xl font-semibold">
                    12th Equivalent 12वीं समतुल्य
                  </p>
                }
              >
                <div className="grid grid-cols-2 gap-8 my-8">
                  <Checkbox className="md:col-span-2">
                    Provide 12th equivalent. 12वीं समतुल्य प्रदान करें
                  </Checkbox>
                  <Input
                    type="text"
                    label="Board name"
                    labelPlacement="outside"
                    variant="bordered"
                    radius="sm"
                    placeholder=" "
                    isRequired
                  />
                  <Input
                    type="text"
                    label="Field of study"
                    labelPlacement="outside"
                    variant="bordered"
                    radius="sm"
                    placeholder=" "
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
                    label="Year of passing"
                    labelPlacement="outside"
                    placeholder="Select"
                    isRequired
                    variant="bordered"
                    radius="sm"
                  >
                    {(option: any) => (
                      <SelectItem key={option?.value}>
                        {option?.name}
                      </SelectItem>
                    )}
                  </Select>
                  <Input
                    type="text"
                    label="Marks in percentage"
                    labelPlacement="outside"
                    variant="bordered"
                    radius="sm"
                    placeholder=" "
                  />
                  <Input
                    type="text"
                    label="Roll number"
                    labelPlacement="outside"
                    variant="bordered"
                    radius="sm"
                    placeholder=" "
                  />
                  <Input
                    type="text"
                    label="Certificate no."
                    labelPlacement="outside"
                    variant="bordered"
                    radius="sm"
                    placeholder=" "
                  />
                </div>
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Graduation स्नातक"
                title={
                  <p className="text-xl font-semibold">Graduation स्नातक</p>
                }
              >
                <div className="grid grid-cols-2 gap-8 my-8">
                  <Checkbox className="md:col-span-2">
                    Provide graduation equivalent. स्नातक समतुल्य प्रदान करें
                  </Checkbox>
                  <Input
                    type="text"
                    label="Board/ University/ Institution name"
                    labelPlacement="outside"
                    variant="bordered"
                    radius="sm"
                    placeholder=" "
                    isRequired
                  />
                  <Input
                    type="text"
                    label="Field of study"
                    labelPlacement="outside"
                    variant="bordered"
                    radius="sm"
                    placeholder=" "
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
                    label="Year of passing"
                    labelPlacement="outside"
                    placeholder="Select"
                    isRequired
                    variant="bordered"
                    radius="sm"
                  >
                    {(option: any) => (
                      <SelectItem key={option?.value}>
                        {option?.name}
                      </SelectItem>
                    )}
                  </Select>
                  <Input
                    type="text"
                    label="Marks in percentage"
                    labelPlacement="outside"
                    variant="bordered"
                    radius="sm"
                    placeholder=" "
                  />
                  <Input
                    type="text"
                    label="Roll number"
                    labelPlacement="outside"
                    variant="bordered"
                    radius="sm"
                    placeholder=" "
                  />
                  <Input
                    type="text"
                    label="Certificate no."
                    labelPlacement="outside"
                    variant="bordered"
                    radius="sm"
                    placeholder=" "
                  />
                </div>
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="Post-Graduation स्नातकोत्तर"
                title={
                  <p className="text-xl font-semibold">
                    Post-Graduation स्नातकोत्तर
                  </p>
                }
              >
                <div className="grid grid-cols-2 gap-8 my-8">
                  <Checkbox className="md:col-span-2">
                    Provide post-graduation equivalent. स्नातकोत्तर समतुल्य
                    प्रदान करें
                  </Checkbox>
                  <Input
                    type="text"
                    label="Board/ University/ Institution name"
                    labelPlacement="outside"
                    variant="bordered"
                    radius="sm"
                    placeholder=" "
                    isRequired
                  />
                  <Input
                    type="text"
                    label="Field of study"
                    labelPlacement="outside"
                    variant="bordered"
                    radius="sm"
                    placeholder=" "
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
                    label="Year of passing"
                    labelPlacement="outside"
                    placeholder="Select"
                    isRequired
                    variant="bordered"
                    radius="sm"
                  >
                    {(option: any) => (
                      <SelectItem key={option?.value}>
                        {option?.name}
                      </SelectItem>
                    )}
                  </Select>
                  <Input
                    type="text"
                    label="Marks in percentage"
                    labelPlacement="outside"
                    variant="bordered"
                    radius="sm"
                    placeholder=" "
                  />
                  <Input
                    type="text"
                    label="Roll number"
                    labelPlacement="outside"
                    variant="bordered"
                    radius="sm"
                    placeholder=" "
                  />
                  <Input
                    type="text"
                    label="Certificate no."
                    labelPlacement="outside"
                    variant="bordered"
                    radius="sm"
                    placeholder=" "
                  />
                  <Button variant="bordered" className="col-span-2">
                    Add additional educational qualification. अथिरिक्त शैक्षिक
                    योग्यता जोंडे
                  </Button>
                </div>
              </AccordionItem>
              <AccordionItem
                key="5"
                aria-label="Graduation स्नातक"
                title={
                  <p className="text-xl font-semibold">Graduation स्नातक</p>
                }
              >
                <div className="grid grid-cols-2 gap-8 mt-8">
                  <Select
                    items={[
                      {
                        value: "1",
                        name: "Yes",
                      },
                      {
                        value: "2",
                        name: "No",
                      },
                    ]}
                    label="Have you obtained PGDCA (Post Graduate Diploma in Computer Applications)? क्या आपने PGDCA (Post Graduate Diploma in Computer Applications) प्राप्त किया है? *"
                    labelPlacement="outside"
                    placeholder="Select"
                    isRequired
                    variant="bordered"
                    radius="sm"
                    className="col-span-2"
                  >
                    {(option: any) => (
                      <SelectItem key={option?.value}>
                        {option?.name}
                      </SelectItem>
                    )}
                  </Select>
                  <Checkbox className="md:col-span-2">
                    PGDCA equivalent. PGDCA समतुल्य
                  </Checkbox>
                  <Input
                    type="text"
                    label="PGDCA equivalent. PGDCA समतुल्य"
                    labelPlacement="outside"
                    variant="bordered"
                    radius="sm"
                    placeholder="Enter certificate name"
                    isRequired
                  />
                  <Input
                    type="text"
                    label=" "
                    labelPlacement="outside"
                    variant="bordered"
                    radius="sm"
                    placeholder="Enter certificate number"
                  />
                  <div className="col-span-2">
                    <p>
                      Have you obtained "O" level certificate in computer from
                      DOEACC or NIELIT Society? क्या आपने DOEACC या NIELIT
                      सोसाइटी से कंप्यूटर में "O" लेवल प्रमाणपत्र प्राप्त किया
                      है? *
                    </p>

                    <div className="flex gap-8 mt-2">
                      <Select
                        items={[
                          {
                            value: "1",
                            name: "Yes",
                          },
                          {
                            value: "2",
                            name: "No",
                          },
                        ]}
                        labelPlacement="inside"
                        placeholder="Select"
                        isRequired
                        variant="bordered"
                        radius="sm"
                      >
                        {(option: any) => (
                          <SelectItem key={option?.value}>
                            {option?.name}
                          </SelectItem>
                        )}
                      </Select>
                      <Input
                        type="text"
                        variant="bordered"
                        radius="sm"
                        placeholder="Enter certificate number"
                      />
                    </div>
                  </div>
                  <div className="col-span-2 mt-6">
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
                      label={`Have you obtained "B" certificate of National CADET CORPS? क्या आपने राष्ट्रीय कैडेट कोर का "बी" प्रमाण पत्र प्राप्त किया है? *`}
                      labelPlacement="outside"
                      placeholder="Select"
                      isRequired
                      variant="bordered"
                      radius="sm"
                    >
                      {(option: any) => (
                        <SelectItem key={option?.value}>
                          {option?.name}
                        </SelectItem>
                      )}
                    </Select>
                  </div>
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
